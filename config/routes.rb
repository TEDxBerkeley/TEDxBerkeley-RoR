Rails.application.routes.draw do
  devise_for :users

  root "static_pages#home"

  resources :users
  resources :speakers
  resources :team_members
  resources :nominations

  get 'home', to:'static_pages#home', as: :static_home
  get 'about', to:'static_pages#about', as: :static_about
  get 'tickets', to: redirect('http://www.tedxberkeley2016.eventbrite.com')

end
