import {
    insertFilm,
    removeFilm,
    replaceFilm,
    selectFilm,
    setFilms,
    setGenre,
    setSortingCategory,
} from './action-creators'
import { initialState } from './const'
import { filmsReducer } from './reducer'
import { Categories, FilmModel, FilmsAction, Genres } from './types'

describe('films reducer', () => {
    const testFilm = { id: 1 } as FilmModel

    it('should initialize store by default value on first call ', () => {
        const unexpectedAction: FilmsAction = {
            type: 'unexpected action' as any,
        }
        const state = filmsReducer(undefined, unexpectedAction)

        expect(state).toBe(initialState)
    })

    it('should set store`s field selectedFilmId on action', () => {
        const { selectedFilmId } = filmsReducer(
            undefined,
            selectFilm(testFilm.id)
        )

        expect(selectedFilmId).toBe(testFilm.id)
    })

    it('should set store`s field films on action', () => {
        const testFilms: FilmModel[] = [testFilm]
        const { films } = filmsReducer(undefined, setFilms(testFilms))

        expect(films).toBe(testFilms)
        expect(films[0].id).toBe(testFilms[0].id)
    })

    it('should remove film from store on action', () => {
        const testFilms: FilmModel[] = [testFilm]

        const { films } = filmsReducer(
            { ...initialState, films: testFilms },
            removeFilm(testFilm.id)
        )

        expect(films.includes(testFilm)).toBeFalsy()
    })

    it('should replace film in store on action', () => {
        const testFilms: FilmModel[] = [testFilm]

        const replacedTestFilmt = {
            id: testFilm.id,
            title: 'new film',
        } as FilmModel

        const { films } = filmsReducer(
            { ...initialState, films: testFilms },
            replaceFilm(replacedTestFilmt)
        )

        expect(films.find((film) => film.id === testFilm.id).title).toBe(
            'new film'
        )
    })

    it('should inset film in store on action', () => {
        const testFilms: FilmModel[] = [testFilm]
        const newFilm = { id: 2 } as FilmModel

        const { films } = filmsReducer(
            { ...initialState, films: testFilms },
            insertFilm(newFilm)
        )

        expect(films.length).toBe(2)
        expect(films.find((film) => film.id === newFilm.id)).toBeTruthy()
    })

    it('should set store`s field genre on action', () => {
        const testGenre: Genres = Genres.HORROR
        const { selectedGenre } = filmsReducer(undefined, setGenre(testGenre))

        expect(selectedGenre).toBe(testGenre)
    })

    it('shoud set store`s sorting category on action', () => {
        const testCategory: Categories = Categories.RAITING
        const { sortingCategory } = filmsReducer(
            undefined,
            setSortingCategory(testCategory)
        )

        expect(sortingCategory).toBe(testCategory)
    })
})
