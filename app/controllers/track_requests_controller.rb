class TrackRequestsController < ApplicationController
  def update
    track_request.playing_position = params[:position]
    track_request.save
    head :ok
  end

  private

  def track_request
    @track_request ||= TrackRequest.find(params[:id])
  end
end
