class EventsController < ApplicationController

  def index
    @events = Event.all 
    render json: @events
  end
  
  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
      if @event.save
        render json: @event, status: 201
      else
        render json: {status: "There is an error"}
      end
  end

  def update 
    @event = Event.find(params[:id])
      if @event.update(event_params)
        render json: @event, status: 200
      else
        render json: {status: "Failed to update event"}
      end
  end

  def show     
    @event = Event.find(params[:id])
    render json: @event
  end

  def destroy     
    @event = Event.find(params[:id])
    @event.destroy
    render json: {result: "info is destroyed"}, status: 200
  end

  private
    def event_params
      params.require(:event).permit(:title, :description, :start_time, :end_time, :start_day)
    end
    
end
