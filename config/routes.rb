Rails.application.routes.draw do
  root 'app#index'


  resources :items, only: [:new, :edit]

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update], defaults: { format: 'json' }
    end
  end
end
