Rails.application.routes.draw do
  get 'sessions/new'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  resources :users
  resources :speakers
  resources :nominations
  
  get    'team'     => 'users#index', as: :static_team
  get    'home'     => 'static_pages#home', as: :static_home
  get    'about'    =>'static_pages#about', as: :static_about
  get    'nominate' => 'nominations#new'
  get    'signup'   => 'users#new'
  get    'login'    => 'sessions#new'
  post   'login'    => 'sessions#create'
  delete 'logout'   => 'sessions#destroy'
end


