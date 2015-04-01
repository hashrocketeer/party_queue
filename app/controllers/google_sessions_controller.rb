class GoogleSessionsController < ApplicationController

  def new
  end

  def create
    session[:google_user] = true
    redirect_to root_path
  end
end
