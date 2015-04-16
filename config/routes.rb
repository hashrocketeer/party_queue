Rails.application.routes.draw do

  root to: 'music_queues#index'

  match '/auth/google_oauth2/callback', to: 'google_sessions#create', via: :all
  match '/auth/rdio/callback', to: 'music_queues#create', via: :all
  match '/auth/failure', to: 'google_sessions#fail', via: :all

  get '/search_track', to: 'search#track'
  post '/down_votes/:track_id', to: 'down_votes#create', as: 'down_votes'
  post '/up_votes/:track_id', to: 'up_votes#create', as: 'up_votes'
  get '/music_queues/playing', to: 'music_queues#playing'
  get '/music_queues/list', to: 'music_queues#list'
  post '/track_requests/update_playing_position/:id/:position', to: 'track_requests#update'

  resources :google_sessions, only: [:new, :create]
  resources :music_queues, only: [:show, :index, :create, :new]
  resources :tracks, only: :create
end
