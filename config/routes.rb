Rails.application.routes.draw do
  devise_for :users

  root "static_pages#home"

  resources :users
  resources :events
  resources :nominations
  resources :speakers, except: [:index]
  resources :sponsors
  resources :team_members

  get 'home', to:'static_pages#home', as: :static_home
  get 'about', to:'static_pages#about', as: :static_about
  get 'involve', to:'static_pages#involve', as: :static_involve
  get 'tickets', to: redirect('http://www.tedxberkeley2016.eventbrite.com')

end
