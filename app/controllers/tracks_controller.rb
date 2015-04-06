class TracksController < ApplicationController
  def create
    if current_music_queue
      current_music_queue.tracks.create(name: params['name'], album: params['album'], artist: params['artist'],key: params['key'], icon: params['icon'])
      redirect_to music_queue_path(current_music_queue), notice: "#{params['name']} has been added to the Queue"
    else
      redirect_to root_path, notice: 'Please select a music queue.'
    end
  end
end


