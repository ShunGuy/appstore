# Algolia App Store

## Heroku
[Algolia App Store](https://vast-hamlet-23911.herokuapp.com)

## App store

The app is a small **AppStore admin page**.

The app is comprised of 2 parts:

- The Ruby backend, responsible for:
  - handling the HTTP routing;
  - storing items in a database;
  - indexing items in an Algolia index when they change.

- The JS frontend, responsible for displaying two pages:
  - one displaying a form to add records to the index;
  - one displaying a search page.

### Backend

The backend is a minimal Rails application using the [algoliasearch-rails](https://github.com/algolia/algoliasearch-rails) integration.

The app implements the following endpoints:

  - `GET /` => Render an HTML page displaying the JS frontend app
  - `POST /api/1/apps` => Add an app (as a JSON object) to the DB and return its `id`
  - `PUT /api/1/apps/:id` => Update an app (as a JSON object) to the DB
  - `DELETE /api/1/apps/:id` => Delete an app from the DB

The items are indexed in Algolia.

### Frontend

The frontend is developed with React.

#### Form page

The form page is built using React to handle the data flow.

It:
  - display a form to create a new item
  - validate that the data has the correct format
  - use the Backend API to add the item to the DB and Algolia

#### Search page

The search page use [instantsearch](https://github.com/algolia/instantsearch.js).

It:
  - display a searchbox to search in the items using Algolia
  - show the results as a list
  - it is possible to delete any item in the results using the Backend API

## Development

Dependencies:
- `ruby` 2.3.1
- `nodejs` (Tested with node v6 and v7)
- `foreman`: `gem install foreman`
- `React`

Initialize:
- `bundle`
- `npm install` or `yarn`
- `bundle exec rake db:create`
- `bundle exec rake db:seed`

Run with hot reloading: `foreman start -f Procfile.hot`

Run without hot reloading: `foreman start -f Procfile.static`

Start redis: `redis-server`

## Repo architecture

This is a usual Rails app with a new `client/` folder which holds `webpack` and React components.
Most of the code simply fit in:
- `app/controllers`
- `app/views`
- `client/app/components`

## TODO

-
