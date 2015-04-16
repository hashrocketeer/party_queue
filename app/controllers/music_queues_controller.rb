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
    OauthProcessingService.new(request.env['omniauth.auth']).process_response
    @music_queue = MusicQueue.create(name: session[:music_queue_name], description: session[:music_queue_description])
    clear_sessions
    session[:current_music_queue] = @music_queue.id
    redirect_to music_queue_path(@music_queue)
  end

  def list
    render(partial: 'list', locals: {list: current_music_queue.playlist}, layout: false)
  end

  def playing
    current_music_queue.remove_first_track_request
    render(partial: 'playing', locals: {track: current_music_queue.playing_track}, layout: false)
  end

  private

  def clear_sessions
    session[:music_queue_name] = nil
    session[:music_queue_description] = nil
  end
end
