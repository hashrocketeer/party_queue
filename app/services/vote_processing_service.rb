class VoteProcessingService
  def initialize(track_request, music_queue, user)
    @track_request = track_request
    @music_queue = music_queue
    @user = user
  end

  def process_up_vote
    add_to_track_request_score
    up_vote = UpVote.create(user_id: @user.id, track_request_id: @track_request.id)
    if down_vote_for(up_vote)
      remove_down_vote_for(up_vote)
      add_to_track_request_score
    end
  end

  def process_down_vote
    subtract_from_track_request_score
    down_vote = DownVote.create(user_id: @user.id, track_request_id: @track_request.id)
    if up_vote_for(down_vote)
      remove_up_vote_for(down_vote)
      subtract_from_track_request_score
    end
  end

  private

  def remove_down_vote_for(up_vote)
    down_vote_for(up_vote).delete
  end

  def remove_up_vote_for(down_vote)
    up_vote_for(down_vote).delete
  end

  def down_vote_for(up_vote)
    DownVote.find_by(track_request_id: up_vote.track_request_id, user_id: up_vote.user_id)
  end

  def up_vote_for(down_vote)
    UpVote.find_by(track_request_id: down_vote.track_request_id, user_id: down_vote.user_id)
  end

  def add_to_track_request_score
    @track_request.score += 1
    @track_request.save
  end

  def subtract_from_track_request_score
    @track_request.score -= 1
    @track_request.save
  end
end
