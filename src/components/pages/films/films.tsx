import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FilmsService } from '../../../shared/services/films.service'
import { FilmModel } from '../../../shared/services/types'
import { FilmsList } from './films-list/films-list'
import { FilmsActionPanel } from './films-action-panel/films-action-panel'
import { filmsStyles } from './films.style'
import { FilmsSearching } from './films-searching/films-searching'
import { ErrorBoundary } from '../../../shared/components'

export const Films: React.FunctionComponent<{
    filmsService: FilmsService
}> = ({ filmsService }) => {
    const [films, setLoadedFilms] = useState<FilmModel[]>()
    const isLoading = !films
    const classes = filmsStyles()

    useEffect(() => {
        filmsService.getFilmsData().then(setLoadedFilms)
    }, [])

    return (
        <ErrorBoundary>
            <FilmsSearching />
            {films ? (
                <div className={classes.filmsSection}>
                    <FilmsActionPanel films={films} />
                    <FilmsList films={films} />
                </div>
            ) : null}
        </ErrorBoundary>
    )
}

Films.propTypes = {
    filmsService: PropTypes.instanceOf(FilmsService),
}
