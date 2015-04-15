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

  def number_of_votes_for(track)
    track.track_requests.find_by(music_queue_id: current_music_queue.id).score
  end
end
