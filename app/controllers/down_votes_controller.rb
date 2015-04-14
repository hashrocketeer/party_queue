class DownVotesController < ApplicationController
  include DownVotesHelper

  def create
    if valid_down_vote(track)
      VoteProcessingService.new(track, current_music_queue, current_google_user).process_down_vote
      unless request.xhr?
        redirect_to music_queue_path(current_music_queue)
      end
    else
      redirect_to music_queue_path(current_music_queue), notice: 'You can only place one -1 vote.'
    end
  end

  private

  def track
    Track.find(params[:track_id])
  end
end
