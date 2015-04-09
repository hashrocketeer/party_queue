class MusicPlayingService
  def initialize
    @client = RdioClient.new({consumer_id: ENV['rdio_id'], consumer_secret: ENV['rdio_secret'], access_token: ENV['rdio_access_token'], access_secret: ENV['rdio_access_secret']})
  end

  def search_tracks(track)
    tracks = @client.search(query: track, types: 'track')
    tracks['results'] if tracks
  end

  def create_playlist(music_queue)
    playlist_hash = @client.createPlaylist(name: music_queue.name, description: music_queue.description, tracks: tracks_list(music_queue.tracks))
    music_queue.key = playlist_hash['key']
    music_queue.save
  end

  def add_to_playlist(music_queue)
    @client.addToPlaylist(playlist: music_queue.key, tracks: "#{music_queue.tracks.last.key}")
  end

  def set_playlist_order(music_queue)
    @client.setPlaylistOrder(playlist: music_queue.key, tracks: sorted_tracks_list(music_queue))
  end

  def update_playlist(music_queue)
    if music_queue.tracks.count == 1
      create_playlist(music_queue)
    else
      add_to_playlist(music_queue)
    end
  end

  def sorted_tracks_list(music_queue)
    sorted_tracks = music_queue.track_requests.sort_by { |track_request| track_request.score}.reverse.map(&:track)
    tracks_list(sorted_tracks)
  end

  def tracks_list(tracks)
    tracks.reduce("") do |list, track|
      list + track.key + ', '
    end[0..-3]
  end
end
