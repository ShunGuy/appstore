source 'https://rubygems.org'

ruby '2.3.1'

gem 'rails', '4.2.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'turbolinks'

gem 'react_on_rails', "~> 6"
gem 'mini_racer', platforms: :ruby

gem 'algoliasearch-rails', '~> 1.17'
gem 'sidekiq', '~> 4.2'
gem 'redis', '~> 3.3'
gem 'redis-rails', '~> 5.0'
gem 'responders', '~> 2.0'

group :production do
  gem 'rails_12factor'
  gem 'unicorn'
  gem 'pg'
end

group :development, :test do
  gem 'sqlite3'
  gem 'byebug'
end

group :development do
  gem 'web-console', '~> 2.0'
  gem 'spring'
  gem 'pry-rails'
end
