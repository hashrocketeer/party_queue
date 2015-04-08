class MusicPlayingService
  def initialize
    @client = RdioClient.new({consumer_id: ENV['rdio_id'], consumer_secret: ENV['rdio_secret'], access_token: ENV['rdio_access_token'], access_secret: ENV['rdio_access_secret']})
  end

  def search_tracks(track)
    @client.search(query: track, types: 'track')
  end

  def create_playlist(music_queue)
    playlist_hash = @client.createPlaylist(name: music_queue.name, description: music_queue.description, tracks: tracks_list(music_queue))
    music_queue.key = playlist_hash['key']
    music_queue.save
  end

  def add_to_playlist(music_queue)
    @client.addToPlaylist(playlist: music_queue.key, tracks: "#{music_queue.tracks.last.key}")
  end

  def set_playlist_order(music_queue)
    @client.setPlaylistOrder(playlist: music_queue.key, tracks: tracks_list(music_queue))
  end

  private

  def tracks_list(music_queue)
    music_queue.tracks.reduce("") do |tracks, track|
      tracks + track.key + ', '
    end[0..-3]
  end
end
