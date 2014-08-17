Rails.application.routes.draw do

  root 'home#index'
  get 'reverse', to: "home#reverse", as: "reverse"

  resources :words

  devise_for :users, :controllers => {
    :sessions => "users/sessions",
    :registrations => "users/registrations",
    :passwords => "users/passwords",
    :omniauth_callbacks => "users/omniauth_callbacks"
  }

end
