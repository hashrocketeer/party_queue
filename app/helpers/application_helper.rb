module ApplicationHelper
  def current_google_user
    User.find(session[:google_user]) if session[:google_user]
  end

  def current_rdio_user?
    session[:rdio_user]
  end

  # TODO refactor to remove unnecessary test code
  def rocketeer?
    email = request.env['omniauth.auth'] ? request.env['omniauth.auth']['info']['email'] : params['info']['email']
    email =~ /@hashrocket.com/
  end

  def current_music_queue
    MusicQueue.find(session[:current_music_queue]) if session[:current_music_queue]
  end

  def number_of_votes_for(track_request)
    track_request.score
  end

  def current_track_position
    (100 * current_music_queue.playing_track_request.playing_position.to_i / current_music_queue.playing_track.duration.to_i).to_i.to_s + '%'
  end
end
