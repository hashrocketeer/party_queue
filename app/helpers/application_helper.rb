module ApplicationHelper
  def current_google_user
    User.find(session[:google_user]) if session[:google_user]
  end

  # TODO refactor to remove unnecessary test code
  def rocketeer?
    email = request.env['omniauth.auth'] ? request.env['omniauth.auth']['info']['email'] : params['info']['email']
    email =~ /@hashrocket.com/
  end

  def current_music_queue
    MusicQueue.find(session[:current_music_queue]) if session[:current_music_queue]
  end

  def sorted_tracks(music_queue)
    music_queue.track_requests.sort_by { |track_request| track_request.score}.reverse.map(&:track)
  end
end
