require_relative 'rdio_client'

class RdioApiService
  def initialize
    @client = RdioClient.new
  end

  def search_tracks(track)
    @client.search(query: track, type: 'track')
  end
end
