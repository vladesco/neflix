import React from 'react'
import { FilmsService } from '../../../shared/services/films.service'
import { FilmModel } from '../../../shared/services/types'
import { ErrorBoundary } from '../../../shared/components'
import { withCondition, withPopup } from '../../../hoc'
import { DeleteFilmForm, AddFilmForm, EditFilmForm } from '../../organisms'
import { Films } from '../../templates'

const DeleteFilmPopup = withCondition(withPopup(DeleteFilmForm))
const AddFilmPopup = withCondition(withPopup(AddFilmForm))
const EditFilmPopup = withCondition(withPopup(EditFilmForm))

type state = {
    films: FilmModel[]
    selectedFilm: FilmModel
    deletedFilmId: number
    edittedFilmId: number
    isAddPopupShown: boolean
    sortedCategory: keyof FilmModel
}
type props = {
    filmsService: FilmsService
}
export class FilmsPage extends React.Component<props, state> {
    state: state = {
        films: [],
        selectedFilm: null,
        deletedFilmId: null,
        edittedFilmId: null,
        isAddPopupShown: false,
        sortedCategory: 'release_date',
    }

    componentDidMount() {
        this.props.filmsService.getFilmsData().then((films) =>
            this.setState({
                films: this.sortFilms(films, this.state.sortedCategory),
            })
        )
    }

    private sortFilms(films: FilmModel[], key: keyof FilmModel): FilmModel[] {
        const sortedFilms = [...films]
        sortedFilms.sort((firstFilm, secondFilm) =>
            firstFilm[key] >= secondFilm[key] ? 1 : -1
        )

        return sortedFilms
    }

    private findFilmById(filmId: number): FilmModel {
        return this.state.films.find((film) => film.id === filmId)
    }

    render() {
        const {
            films,
            selectedFilm,
            deletedFilmId,
            edittedFilmId,
            isAddPopupShown,
        } = this.state

        return (
            <ErrorBoundary>
                <DeleteFilmPopup
                    isShown={deletedFilmId !== null}
                    filmId={deletedFilmId}
                    onCloseForm={() => this.setState({ deletedFilmId: null })}
                    onDeleteFilm={() => this.setState({ deletedFilmId: null })}
                />

                <EditFilmPopup
                    isShown={edittedFilmId !== null}
                    edittedFilm={films.find(
                        (film) => film.id === edittedFilmId
                    )}
                    onCloseForm={() => this.setState({ edittedFilmId: null })}
                    onEditFilm={() => this.setState({ edittedFilmId: null })}
                />

                <AddFilmPopup
                    isShown={isAddPopupShown}
                    onAddFilm={() => this.setState({ isAddPopupShown: false })}
                    onCloseForm={() =>
                        this.setState({ isAddPopupShown: false })
                    }
                />

                <Films
                    films={films}
                    selectedFilm={selectedFilm}
                    onDeleteFilm={(filmId: number) =>
                        this.setState({ deletedFilmId: filmId })
                    }
                    onUpdateFilm={(filmId) =>
                        this.setState({ edittedFilmId: filmId })
                    }
                    onSelectFilm={(filmId) =>
                        this.setState({
                            selectedFilm: this.findFilmById(filmId),
                        })
                    }
                    onShowSearching={() =>
                        this.setState({ selectedFilm: null })
                    }
                    onAddFilm={console.log}
                    sortedCategory={this.state.sortedCategory}
                    onSetSortedCategory={(category) =>
                        this.setState({
                            sortedCategory: category,
                            films: this.sortFilms(this.state.films, category),
                        })
                    }
                />
            </ErrorBoundary>
        )
    }
}
