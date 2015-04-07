class MusicQueuesController < ApplicationController
  before_filter :authenticate_with_google

  def index
    @music_queues = MusicQueue.all
  end

  def show
    @music_queue = MusicQueue.find(params[:id])
    session[:current_music_queue] = @music_queue.id
  end

  def new
    session[:music_queue_name] = params[:music_queue_name]
    session[:music_queue_description] = params[:music_queue_description]
    redirect_to '/auth/rdio'
  end

  def create
    if access_token
      ENV['rdio_access_token'] = access_token
      ENV['rdio_access_secret'] = access_secret
    end
    @music_queue = MusicQueue.create(name: session[:music_queue_name], description: session[:music_queue_description])
    session[:music_queue_name] = nil
    session[:music_queue_description] = nil
    session[:rdio_user] = true
    session[:current_music_queue] = @music_queue.id
    redirect_to music_queue_path(@music_queue)
  end

  private

  def oauth_response
    request.env['omniauth.auth']
  end

  def access_token
      oauth_response['extra']['access_token'].token if oauth_response
  end

  def access_secret
    oauth_response['extra']['access_token'].secret if oauth_response
  end
end
