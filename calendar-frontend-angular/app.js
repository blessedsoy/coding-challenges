var app = angular.module("myapp", ['angularMoment', 'moment-picker']);

app.controller("calendar", function($scope, $http, $q, $timeout) {
    $scope.day = moment();
    $scope.chosen = null;
    var address = 'http://localhost:3000/';
    $scope.data = {
        title: null,
        description: null,
        start_day: null,    
        start_time: null,
        end_time: null,
        start_time_formatted: null,
        end_time_formatted: null
    }

    
    $scope.editable = false;
    $scope.editFormShow = false;
     
    function initialize () {
        getEvents(address + 'events').then(function (res) {
            $scope.events = res;
            $scope.addFormShow = false;
            var temp_arr = [];
            $scope.events_obj = {};

            angular.forEach($scope.events, function (item){
                if (item.start_day !== null) {
                    if (!$scope.events_obj[item.start_day]) {
                        $scope.events_obj[item.start_day] = [];
                        $scope.events_obj[item.start_day].push(item);
                    }else {
                        $scope.events_obj[item.start_day].push(item);
                    }
                }
            })
            makeCalendar();
        })
    }

    initialize();

    function resetData () {
        $scope.data = {
            title: null,
            description: null,
            start_day: null,    
            start_time: null,
            end_time: null,
            start_time_formatted: null,
            end_time_formatted: null
        }
    }

    function getEvents (address) {
        var qEvents = $q.defer();

        $http.get(address).then(function (response) {
            qEvents.resolve(response.data) 
        }, function (error) {
            qEvents.reject(error)
        });

        return qEvents.promise;
    }    


    function makeCalendar () {
    
        $scope.selected = _removeTime($scope.selected || moment());
        
        $scope.month = $scope.selected.clone();
        
        var start = $scope.selected.clone();
        console.log(start);
        
        start.date(1);
        
        _removeTime(start.day(0));    
        _buildMonth(start, $scope.month);

        $scope.next = function() {
            var next = $scope.month.clone();
            next.month(next.month()+1);
            next.date(1);
            _removeTime(next.day(0));    
            $scope.month.month($scope.month.month()+1);
            _buildMonth(next, $scope.month);
        };

        $scope.previous = function() {
            var previous = $scope.month.clone();
            previous.month(previous.month()-1);
            previous.date(1);
            _removeTime(previous.day(0));
            // _removeTime(previous.month(previous.month()-1).date(1));
            $scope.month.month($scope.month.month()-1);
            _buildMonth(previous, $scope.month);
        };
              
    }



    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(start, month) {
        $scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;

        
        while (!done) {
            $scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            var temp = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            }

            if ($scope.events_obj[date.format('YYYY-MM-DD')]) {
                temp.events = $scope.events_obj[date.format('YYYY-MM-DD')]
            }

            days.push(temp);
            
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    } 


    $scope.select = function(day) {
        $scope.chosen = day;
        $scope.selected = day.date;   
    };    
  
             
    $scope.addFormSubmit = function () {
        makeCorrectDate();
        newEvent();
    }  

    $scope.editFormSubmit = function (title, description, event) {
        $scope.data.title = title;
        $scope.data.description = description;
        makeCorrectDate();
        updateEvent(event.id);

    } 

    $scope.delete = function (event) {
        $http.delete(address + 'events/' + event.id).then(function(success){
            console.log(success);
            refresh();
        })
    }

    function newEvent () {
        $http.post(address + 'events', $scope.data).then(function (success) {
            console.log(success);
            refresh();
        })
    }

    function updateEvent (id) {
        $http.patch(address + 'events/' + id, $scope.data).then(function (success){
            if(success.status === 200) {
                console.log(success.data);
                refresh();
            } 
            else {
                console.log(success.data.status);
            }
        }, function (err){
            console.log(err);
        })
    }

    function makeCorrectDate () {
        $scope.data.start_time = $scope.chosen.date.format('YYYY-MM-DD') + ' ' + $scope.data.start_time_formatted + ':00';
        $scope.data.start_day = $scope.chosen.date.format('YYYY-MM-DD');
        $scope.data.end_time = $scope.chosen.date.format('YYYY-MM-DD') + ' ' + $scope.data.end_time_formatted + ':00';        
    }     

    function refresh () {
        initialize();
        resetData();
        $scope.addFormShow = false;
        $scope.chosen = null;
    }

});


