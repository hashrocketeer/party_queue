class RdioSessionsController < ApplicationController
  def create
    @music_queue = MusicQueue.create
    session[:rdio_user] = true
    redirect_to music_queue_path(@music_queue)
  end
end
