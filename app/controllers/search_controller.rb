class SearchController < ApplicationController
  def track
    @search_results = MusicPlayingService.new.search_tracks(params['track_name'])
    render :results
  end
end
