class TracksController < ApplicationController
  def create
    if current_music_queue
      track = Track.find_or_create_by(track_params)
      TrackRequest.create(track_request_params(track))
      MusicPlayingService.new.update_playlist(current_music_queue)
      redirect_to music_queue_path(current_music_queue), notice: "#{params['name']} has been added to the Queue"
    else
      redirect_to root_path, notice: 'Please select a music queue.'
    end
  end

  private

  def track_params
    { name: params['name'], album: params['album'], artist: params['artist'], key: params['key'], icon: params['icon'] }
  end

  def track_request_params(track)
    { track_id: track.id, music_queue_id: current_music_queue.id }
  end
end
