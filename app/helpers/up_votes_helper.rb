module UpVotesHelper
  def can_vote_up(potential_track)
    valid_up_vote(potential_track)
  end

  def valid_up_vote(track=voted_track)
    !find_track_request(track).up_votes.map(&:user).map(&:email).include?(current_google_user.email)
  end

  def down_vote_for(up_vote)
    DownVote.find_by(track_request_id: up_vote.track_request_id, user_id: up_vote.user_id)
  end

  def remove_down_vote_for(up_vote)
    down_vote_for(up_vote).delete
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
