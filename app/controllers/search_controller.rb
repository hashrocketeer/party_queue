class SearchController < ApplicationController
  def track
    tracks = MusicPlayingService.new.search_tracks(params['track_name'])
    @search_results = tracks['results'] if tracks
    render :results
  end
end
