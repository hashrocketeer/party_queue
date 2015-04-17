class MusicQueue < ActiveRecord::Base
  has_many :track_requests
  has_many :tracks, through: :track_requests

  def remove_first_track_request
    playing_track_request.delete
    set_playing_track_request
  end

  def sort_track_requests
    track_requests.sort_by { |track_request| track_request.score }.reverse
  end

  def playing_track_request
    TrackRequest.find(playing_track_request_id) if playing_track_request_id
  end

  def playing_track
    playing_track_request.track if playing_track_request_id
  end

  def set_playing_track_request
    self.playing_track_request_id = sort_track_requests.first.id
    self.save
  end

  def playlist
    playlist_requests.map(&:track)
  end

  def playlist_requests
    sort_track_requests.reject{ |t| t == playing_track_request }
  end
end
