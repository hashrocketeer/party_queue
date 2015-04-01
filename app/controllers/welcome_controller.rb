class WelcomeController < ApplicationController
  before_filter :authenticate_with_google

  def index
  end
end
