import React from 'react'
import {
  Hits,
  RefinementList,
  Pagination,
  CurrentRefinements,
} from 'react-instantsearch/dom'
import Item from './Item'

function SearchItem() {
  return (
    <div>
      <CurrentRefinements />
      <RefinementList attributeName="category" />
      <Hits hitComponent={Item} />
      <Pagination />
    </div>
  )
}

export default SearchItem
