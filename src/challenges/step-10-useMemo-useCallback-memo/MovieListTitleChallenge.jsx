import PropTypes from 'prop-types'

export const MovieListTitleChallenge = ({ filterState }) => {
  console.log('render title')
  return <h1>Action movies {filterState.year && `from ${filterState.year}`}</h1>
}

MovieListTitleChallenge.propTypes = {
  filterState: PropTypes.shape({
    year: PropTypes.number,
    setYear: PropTypes.func
  })
}
