class OauthProcessingService
  def initialize(response)
    @response = response
  end

  def process_response
    if access_token
      ENV['rdio_access_token'] = access_token
      ENV['rdio_access_secret'] = access_secret
    end
  end

  private

  def access_token
    @response['extra']['access_token'].token if @response
  end

  def access_secret
    @response['extra']['access_token'].secret if @response
  end
end
