class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_time, :end_time, :start_day
end
