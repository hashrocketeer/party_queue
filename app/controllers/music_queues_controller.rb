class MusicQueuesController < ApplicationController
  before_filter :authenticate_with_google

  def index
    @music_queues = MusicQueue.all
    @music_queue = MusicQueue.new
  end

  def show
    @music_queue = MusicQueue.find(params[:id])
    session[:current_music_queue] = @music_queue.id
  end

  def create
    @music_queue = MusicQueue.create(name: params['music_queue']['name'], description: params['music_queue']['description'])
    clear_sessions
    session[:current_music_queue] = @music_queue.id
    redirect_to music_queue_path(@music_queue)
  end

  def list
    render(partial: 'list', locals: {list: current_music_queue.playlist, requests: current_music_queue.playlist_requests}, layout: false)
  end

  def playing
    render(partial: 'playing', locals: {track: current_music_queue.playing_track, track_request: current_music_queue.playing_track_request}, layout: false)
  end

  def update_playing_track
    current_music_queue.remove_first_track_request
  end

  private

  def clear_sessions
    session[:music_queue_name] = nil
    session[:music_queue_description] = nil
  end
end
