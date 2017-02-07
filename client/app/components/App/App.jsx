import React, { Component } from 'react'
import classNames from 'classnames'
import { InstantSearch } from 'react-instantsearch/dom'
import algoliasearch from 'algoliasearch'
import Header from './Header'
import SearchItem from '../Search/SearchItem'
import styles from './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.onSearchStateChange = this.onSearchStateChange.bind(this)
    this.algoliaClient = algoliasearch('W610SNNCGS', '65b1a16898314427bf5b18c6e5a32478')
  }

  onSearchStateChange() {
    this.algoliaClient.clearCache()
  }

  render() {
    return (
      <InstantSearch
        algoliaClient={this.algoliaClient}
        indexName="Appstore"
        onSearchStateChange={this.onSearchStateChange}
      >
        <Header withSearchBox />
        <div className={classNames('container', styles.container)}>
          <SearchItem />
        </div>
      </InstantSearch>
    )
  }
}

export default App
