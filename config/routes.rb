Rails.application.routes.draw do

  root to: 'welcome#index'
  #match '/auth/spotify/callback', to: 'sessions#create', via: :all
  match '/auth/google_oauth2/callback', to: 'google_sessions#create', via: :all
  match '/auth/rdio/callback', to: 'rdio_sessions#create', via: :all
  match '/auth/failure', to: 'google_sessions#fail', via: :all
  resources :google_sessions, only: [:new, :create]
  resources :rdio_sessions, only: :create
  resources :music_queues, only: :show
end
