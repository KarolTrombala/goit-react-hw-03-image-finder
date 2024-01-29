import { Component } from 'react'
import { SearchBar } from './SearchBar/SearchBar'
import {ImageGallery} from './ImageGallery/ImageGallery'

export class App extends Component {
    state = {
        searchQuery: '',
    }

    handleSearch = (query) => {
        this.setState({ searchQuery: query })
    }

    render() {
        const { searchQuery } = this.state

        return (
            <div>
                <SearchBar onSubmit={this.handleSearch} />
                <ImageGallery searchQuery={searchQuery} />
            </div>
        )
    }
}
