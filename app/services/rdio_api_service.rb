class RdioApiService
  def initialize
    @client = RdioClient.new
  end

  def search_tracks(track)
    @client.search(query: track, types: 'track')
  end
end
