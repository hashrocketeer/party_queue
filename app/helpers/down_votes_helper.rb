module DownVotesHelper
  def valid_down_vote(track)
    track_requests = track.track_requests.find_by(music_queue_id: current_music_queue.id)
    !track_requests.down_votes.map(&:user).map(&:email).include?(current_google_user.email)
  end
end
