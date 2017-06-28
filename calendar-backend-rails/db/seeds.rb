# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create(title: "clean-up", description: "clean-up day", start_time: "2017-06-27 10:30:00", end_time: "2017-06-27 20:00:00", start_day: "2017-06-27")
Event.create(title: "interview", description: "ursa", start_time: "2017-06-27 16:00:00", end_time: "2017-06-27 17:00:00", start_day: "2017-06-27")
Event.create(title: "birthday", description: "Albert", start_time: "2017-06-28 00:00:00", end_time: "2017-06-28 23:59:00", start_day: "2017-06-28")
Event.create(title: "meet_up", description: "machine learning", start_time: "2017-06-12 12:00:00", end_time: "2017-06-12 15:00:00", start_day: "2017-06-12")
Event.create(title: "lunch", description: "with Hanna", start_time: "2017-06-08 12:00:00", end_time: "2017-06-08 13:00:00", start_day: "2017-06-08")