class Event < ApplicationRecord
  validates_presence_of :title, :start_time, :end_time, :start_day
end
