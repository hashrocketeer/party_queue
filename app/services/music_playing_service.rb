class MusicPlayingService
  def initialize
    @client = RdioClient.new({consumer_id: ENV['rdio_id'], consumer_secret: ENV['rdio_secret'], access_token: ENV['rdio_access_token'], access_secret: ENV['rdio_access_secret']})
  end

  def search_tracks(track)
    @client.search(query: track, types: 'track')
  end

  def create_playlist(music_queue)
    all_tracks = music_queue.tracks.reduce("") do |tracks, track|
      tracks + track.key + ', '
    end[0..-3]
    playlist_hash = @client.createPlaylist(name: music_queue.name, description: music_queue.description, tracks: all_tracks)
    music_queue.key = playlist_hash['key']
    music_queue.save
  end

  def add_to_playlist(music_queue)
    @client.addToPlaylist(playlist: music_queue.key, tracks: "#{music_queue.tracks.last.key}")
  end
end
