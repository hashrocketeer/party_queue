class RdioSessionsController < ApplicationController
  def create
    OauthProcessingService.new(request.env['omniauth.auth']).process_response
    session[:rdio_user] = true
    if current_music_queue
      redirect_to music_queue_path(current_music_queue)
    else
      redirect_to music_queues_path
    end
  end

  def destroy
    session[:rdio_user] = false
    if current_music_queue
      redirect_to music_queue_path(current_music_queue)
    else
      redirect_to music_queues_path
    end
  end
end
