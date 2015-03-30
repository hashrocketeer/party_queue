class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  #before_filter :require_host_user

  private

  def require_host_user
    if active_queue?
      redirect_to login_path
    end
  end

  def active_queue?
    Queue.any? { |q| q.active? }
  end
end
