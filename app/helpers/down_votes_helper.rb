module DownVotesHelper
  def can_vote_down(potential_track)
    valid_down_vote(potential_track)
  end

  def valid_down_vote(track=voted_track)
    !find_track_request(track).down_votes.map(&:user).map(&:email).include?(current_google_user.email)
  end

  def up_vote_for(down_vote)
    UpVote.find_by(track_request_id: down_vote.track_request_id, user_id: down_vote.user_id)
  end

  def remove_up_vote_for(down_vote)
    up_vote_for(down_vote).delete
  end

  private

  def track_request
    @track_request ||= find_track_request
  end

  def find_track_request(track=voted_track)
    track.track_requests.find_by(music_queue_id: current_music_queue.id)
  end

  def voted_track
    Track.find(params[:track_id])
  end
end
