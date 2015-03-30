class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :require_host_user

  def new
  end

  def create
  end

  def fail
    render :new
  end
end
