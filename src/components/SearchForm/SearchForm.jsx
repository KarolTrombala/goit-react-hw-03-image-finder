import css from './SearchForm.module.css'
import PropTypes from 'prop-types'

export const SearchForm = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const query = event.target.elements.search.value
        onSubmit(query)
    }

    return (
        <form className={css.searchform} onSubmit={handleSubmit}>
            <button type="submit" className={css.searchform__button}>
                <span className={css.searchform__label}>Search</span>
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
}
