class Track < ActiveRecord::Base
  has_many :track_requests
  has_many :music_queues, through: :track_requests
end
