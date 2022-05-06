import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { FilterFormSolution } from '../../solutions/step-03-uncontrolled-components/FilterFormSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { useEffect } from 'react'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge.js'

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

const Step10UseMemoUseCallbackMemo = () => {
  return (
    <ErrorBoundarySolution>
      <FilterStateProviderSolution>
        <FilterModalChallenge>
          <FilterFormSolution />
        </FilterModalChallenge>
        <MovieListContainer />
      </FilterStateProviderSolution>
    </ErrorBoundarySolution>
  )
}

export default Step10UseMemoUseCallbackMemo
