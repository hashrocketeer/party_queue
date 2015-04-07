Rails.application.routes.draw do

  root to: 'music_queues#index'
  #match '/auth/spotify/callback', to: 'sessions#create', via: :all
  match '/auth/google_oauth2/callback', to: 'google_sessions#create', via: :all
  match '/auth/rdio/callback', to: 'music_queues#create', via: :all
  match '/auth/failure', to: 'google_sessions#fail', via: :all
  resources :google_sessions, only: [:new, :create]
  resources :music_queues, only: [:show, :index, :create, :new]
  get '/search_track', to: 'search#track'
  resources :tracks, only: :create
end
