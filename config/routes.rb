Rails.application.routes.draw do

  root "static_pages#home"

  resources :users, only: [:show, :create]
  resources :speakers, only: [:show, :index, :create]
  resources :nominations

  devise_for :users, only: []
  devise_scope :user do
    post '/api/users/signup', to: 'api/users/registrations#create'

    post   '/api/users/login', to: 'api/users/sessions#create'
    delete '/api/users/logout', to: 'api/users/sessions#destroy'

    post '/api/users/confirmations', to: 'api/users/confirmations#create'

    post  '/api/users/password', to: 'api/users/passwords#create'
    patch '/api/users/password', to: 'api/users/passwords#update'
  end

  get 'team' , to: 'users#index', as: :static_team
  get    'home', to:'static_pages#home', as: :static_home
  get    'about', to:'static_pages#about', as: :static_about
  get    'nominate', to: 'nominations#new'
  get    'signup', to: 'users#new'
  get    'login', to:'sessions#new'
  post   'login', to:'sessions#create'
  delete 'logout', to:'sessions#destroy'

  get 'tickets', to: redirect('http://www.tedxberkeley2016.eventbrite.com')
end


