class GoogleSessionsController < ApplicationController

  def new
  end

  def create
    if rocketeer?
      session[:google_user] = true
      redirect_to root_path
    else
      redirect_to new_google_session_path, notice: 'Access Denied'
    end
  end
end
