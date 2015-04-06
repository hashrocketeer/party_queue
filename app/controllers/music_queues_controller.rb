class MusicQueuesController < ApplicationController
  before_filter :authenticate_with_google

  def index
    @music_queues = MusicQueue.all
  end

  def show
    @music_queue = MusicQueue.find(params[:id])
    session[:current_music_queue] = @music_queue.id
  end

  def new
  end
end
