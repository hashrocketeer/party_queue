class GoogleSessionsController < ApplicationController
  include ApplicationHelper

  def new
  end

  def create
    if rocketeer?
      user = User.find_or_create_by(email: google_email)
      session[:google_user] = user.id
      redirect_to root_path
    else
      redirect_to new_google_session_path, notice: 'Access Denied'
    end
  end

  private

  def google_email
    request.env['omniauth.auth'] ? request.env['omniauth.auth']['info']['email'] : params['info']['email']
  end
end
