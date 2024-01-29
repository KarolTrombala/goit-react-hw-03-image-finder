import { Component } from 'react'
import css from './SearchBar.module.css'
import PropTypes from 'prop-types'


export const SearchForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const query = e.target.elements.search.value
        onSubmit(query)
    }

    return (
        <form className={css.searchform} onSubmit={handleSubmit}>
            <button type="submit" className={css.searchform__button}>
                <span className={css.searchform__button-label}>Search</span>
            </button>

            <input
                name="search"
                className={css.searchform__input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (query) => {
        onSubmit(query)
    }

    return (
        <header className={css.searchbar}>
            <SearchForm onSubmit={handleSubmit} />
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};