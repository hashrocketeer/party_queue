class UpVotesController < ApplicationController
  include UpVotesHelper

  def create
    if valid_up_vote(track_request)
      VoteProcessingService.new(track_request, current_music_queue, current_google_user).process_up_vote
      unless request.xhr?
        redirect_to music_queue_path(current_music_queue)
      end
    else
      redirect_to music_queue_path(current_music_queue), notice: 'You can only place one +1 vote.'
    end
  end

  private

  def track_request
    TrackRequest.find(params[:track_request_id])
  end
end
