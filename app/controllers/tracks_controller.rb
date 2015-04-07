class TracksController < ApplicationController
  def create
    if current_music_queue
      track = Track.find_or_create_by(name: params['name'], album: params['album'], artist: params['artist'], key: params['key'], icon: params['icon'])
      TrackRequest.create(track_id: track.id, music_queue_id: current_music_queue.id)
      if current_music_queue.tracks.count == 1
        MusicPlayingService.new.create_playlist(current_music_queue)
      else
        MusicPlayingService.new.add_to_playlist(current_music_queue)
      end
      redirect_to music_queue_path(current_music_queue), notice: "#{params['name']} has been added to the Queue"
    else
      redirect_to root_path, notice: 'Please select a music queue.'
    end
  end
end


