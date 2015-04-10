class SearchController < ApplicationController
  def track
    @search_results = MusicPlayingService.new(current_music_queue).search_tracks(params['track_name'])
    render :results
  end
end
