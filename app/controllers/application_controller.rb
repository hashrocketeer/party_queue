class ApplicationController < ActionController::Base
  include ApplicationHelper
  protect_from_forgery with: :exception

  private

  def authenticate_with_google
    redirect_to new_google_session_path unless session[:google_user]
  end
end
