Rails.application.routes.draw do
  devise_for :users

  root "static_pages#home"

  resources :users, only: [:show, :create]
  resources :speakers, only: [:show, :index, :create]
  resources :team_members, only: [:show, :index]
  resources :nominations

  get 'team' , to: 'users#index', as: :static_team
  get 'home', to:'static_pages#home', as: :static_home
  get 'about', to:'static_pages#about', as: :static_about
  get 'tickets', to: redirect('http://www.tedxberkeley2016.eventbrite.com')

end
