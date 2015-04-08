class UpVotesController < ApplicationController
  include UpVotesHelper

  def create
    if valid_up_vote(track)
      VoteProcessingService.new(track, current_music_queue, current_google_user).process_up_vote
      redirect_to music_queue_path(current_music_queue)
    else
      redirect_to music_queue_path(current_music_queue), notice: 'You can only place one +1 vote.'
    end
  end

  private

  def track
    Track.find(params[:track_id])
  end
end
