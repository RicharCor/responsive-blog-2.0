Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users
  resources :users

  resources :twitches, only: [:index, :update, :connect, :disconnect], path: '/twitch'

  put '/twitches/:id/connect', to: 'twitches#connect', as: 'connect_twitch'
  put '/twitches/:id/disconnect', to: 'twitches#disconnect', as: 'disconnect_twitch'

  resources :tags

  resources :posts do
    resources :comments
  end
end
