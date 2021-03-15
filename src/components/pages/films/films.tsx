import React from 'react'
import { FilmsService } from '../../../shared/services/films.service'
import { FilmModel } from '../../../shared/services/types'
import { FilmsSearching } from '../../templates/films-searching/films-searching'
import { ErrorBoundary } from '../../../shared/components'
import { withCondition, withPopup } from '../../../hoc'
import { DeleteFilmForm, AddFilmForm, EditFilmForm } from '../../organisms'
import { FilmsContent } from '../../templates/films-content/films-content'

const DeleteFilmPopup = withCondition(withPopup(DeleteFilmForm))
const AddFilmPopup = withCondition(withPopup(AddFilmForm))
const EditFilmPopup = withCondition(withPopup(EditFilmForm))

const FilmsContentCondition = withCondition(FilmsContent)

type state = {
    films: FilmModel[]
    deletedFilmId: number
    edittedFilmId: number
    isAddPopupShown: boolean
    sortedCategory: keyof FilmModel
}
type props = {
    filmsService: FilmsService
}
export class Films extends React.Component<props, state> {
    state: state = {
        films: [],
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

    render() {
        const {
            films,
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

                <FilmsSearching
                    onAddFilm={() => this.setState({ isAddPopupShown: true })}
                />

                <FilmsContentCondition
                    isShown={!!films.length}
                    films={films}
                    onDeleteFilm={(filmId: number) =>
                        this.setState({ deletedFilmId: filmId })
                    }
                    onUpdateFilm={(filmId) =>
                        this.setState({ edittedFilmId: filmId })
                    }
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
