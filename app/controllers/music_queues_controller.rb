class MusicQueuesController < ApplicationController

  def show
    @music_queue = MusicQueue.find(params[:id])
  end

  def new
  end
end
