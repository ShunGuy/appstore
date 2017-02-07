import React from 'react'
import {
  Hits,
  RefinementList,
  Pagination,
  CurrentRefinements,
} from 'react-instantsearch/dom'
import App from './App'

function SearchApp() {
  return (
    <div>
      <CurrentRefinements />
      <RefinementList attributeName="category" />
      <Hits hitComponent={App} />
      <Pagination />
    </div>
  )
}

export default SearchApp
