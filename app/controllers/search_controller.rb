class SearchController < ApplicationController
  def track
    tracks = RdioApiService.new.search_tracks(params['track_name'])
    @search_results = tracks['results'] if tracks
    render :results
  end
end
