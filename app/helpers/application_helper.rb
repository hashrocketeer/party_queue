module ApplicationHelper
  # TODO refactor to remove unnecessary test code
  def rocketeer?
    email = request.env['omniauth.auth'] ? request.env['omniauth.auth']['info']['email'] : params['info']['email']
    email =~ /@hashrocket.com/
  end

  def current_music_queue
    MusicQueue.find(session[:current_music_queue]) if session[:current_music_queue]
  end
end
