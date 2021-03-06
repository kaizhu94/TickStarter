Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_page#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :locations, only: [:index]
    resources :categories, only: [:index, :show]
    resources :items, only: [:index, :create, :update, :destroy]
    resources :rewards, only: [:index, :create, :update, :destroy]
    resources :backings, only: [ :create]

    get '/search', to: 'search#search'
  end
end

