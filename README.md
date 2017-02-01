# AppStore bootstrapped app

This application is a small bootstraped app to remove the burden of creating a Rails + React application.

This repo uses Rails 4 with [`react_on_rails`](https://github.com/shakacode/react_on_rails/).
The generated code was bit modified to simplify things and activate live-reloading.

## Heroku

In order to have a live server to check out the end result, we've set-up this repository to be installable through this one-click button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This comes in handy for multiple reasons:
- You directly have a git repo
- You can deploy for free your code
- It will automatically set up a small database
- Once initialized, deploying is as easy as `git push heroku master`, it automatically handles initialization, dependencies downloads, etc.

However, you can definitely decide to host it somewhere else if you'd like!

*Note*: Locally, we're using `sqlite`. Heroku has no file persistence, so we're using `postgresql` in production.

## Development

Dependencies:
- `ruby` 2.3.1
- `nodejs` (Tested with node v6 and v7)
- `foreman`: `gem install foreman`

Initialize:
- `bundle`
- `npm install` or `yarn`
- `bundle exec rake db:create`

Run with hot reloading: `foreman start -f Procfile.hot`

Run without hot reloading: `foreman start -f Procfile.static`

## Repo architecture

This is a usual Rails app with a new `client/` folder which holds `webpack` and React components.  
Most of your code should simply fit in:
- `app/controllers`
- `app/views`
- `client/app/components`
