class SearchController < ApplicationController
  require_relative '../services/rdio/rdio_api_service'

  def track
    results = RdioApiService.new.search_tracks(params['track_name'])
    redirect_to request.referrer
  end
end
