Rails.application.routes.draw do

  root to: 'queues#index'
  #match '/auth/spotify/callback', to: 'sessions#create', via: :all
  match '/auth/google_oauth2/callback', to: 'sessions#create', via: :all
  match '/auth/rdio/callback', to: 'sessions#create', via: :all
  match '/auth/failure', to: 'sessions#fail', via: :all
end
