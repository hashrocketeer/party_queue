Rails.application.config.middleware.use OmniAuth::Builder do
  #provider :spotify, ENV['spotify_id'], ENV['spotify_secret']
  provider :google_oauth2, ENV['google_id'], ENV['google_secret']
  provider :rdio, ENV['rdio_id'], ENV['rdio_secret']
end
