require_relative 'rdio_api'

class RdioClient
  include RdioApi
  # pass in key, secret
  def initialize
    @consumer_key    = ENV['rdio_id']
    @consumer_secret = ENV['rdio_secret']
  end

  def unauthenticated_connection
    params = {}
    params[:consumer_key] = @consumer_key
    params[:consumer_secret] = @consumer_secret

    initialize_connection(params)
  end

  def initialize_connection(params)
    @connection ||= Faraday.new(url: api_url) do |builder|
      builder.use Faraday::Request::OAuth, params
      builder.use Faraday::Request::UrlEncoded
      builder.use Faraday::Response::Mashify
      builder.use Faraday::Response::ParseJson
      builder.adapter Faraday.default_adapter
    end
  end

  def api_url
    ("http://api.rdio.com/1/").freeze
  end
end
