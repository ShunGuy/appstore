Rails.application.routes.draw do
  root 'app#index'


  resources :apps, only: [:new, :edit]

  namespace :api do
    namespace :v1 do
      resources :apps, only: [:index, :create, :destroy, :update], defaults: { format: 'json' }
    end
  end
end
