import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { useEffect } from 'react'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge.js'
import { FilterFormFinalChallenge } from '../../challenges/step-12-third-party-libs/FilterFormFinalChallenge'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQuerySolution(filterState)

  useEffect(() => {
    throw new Error("I'm an error")
  }, [])

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const Step04ErrorBoundaries = () => {
  return (
    <ErrorBoundarySolution>
      <FilterStateProviderSolution>
        <FilterModalChallenge>
          <FilterFormFinalChallenge />
        </FilterModalChallenge>
        <MovieListContainer />
      </FilterStateProviderSolution>
    </ErrorBoundarySolution>
  )
}

export default Step04ErrorBoundaries
