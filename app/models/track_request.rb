class TrackRequest < ActiveRecord::Base
  belongs_to :track
  belongs_to :music_queue
end
