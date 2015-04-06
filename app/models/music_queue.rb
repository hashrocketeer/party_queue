class MusicQueue < ActiveRecord::Base
  has_many :track_requests
  has_many :tracks, through: :track_requests
end
