class UpVotesController < ApplicationController
  include UpVotesHelper

  def create
    if valid_up_vote
      track_request.score += 1
      track_request.save
      up_vote = UpVote.create(user_id: current_google_user.id, track_request_id: track_request.id)
      if down_vote_for(up_vote)
        remove_down_vote_for(up_vote)
        track_request.score += 1
        track_request.save
      end
      MusicPlayingService.new.set_playlist_order(current_music_queue)
      redirect_to music_queue_path(current_music_queue)
    else
      redirect_to music_queue_path(current_music_queue), notice: 'You can only place one +1 vote.'
    end
  end
end
