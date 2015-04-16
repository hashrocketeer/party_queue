class TrackRequest < ActiveRecord::Base
  belongs_to :track
  belongs_to :music_queue
  has_many :up_votes
  has_many :down_votes
  before_create :set_score
  before_create :set_playing_position

  def set_score
    self.score = 0
  end

  def set_playing_position
    self.playing_position = "0"
  end
end
