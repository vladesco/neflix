import React from 'react'
import { Form, Formik } from 'formik'

import { withUsageFormik } from '../../../../hoc'
import { CreateFilmBody } from '../../../../store'
import { Card, TextInput, ThemeButton } from '../../../atoms'
import { Select } from '../../../atoms'
import { GENRES } from '../../../const'
import { addFilmFormStyles } from './add-film-form.style'
import { filmValidationSchema } from '../consts'

type props = {
    onCloseForm: () => void
    onAddFilm: (filmBody: CreateFilmBody) => void
}

const TextInputWithFormik = withUsageFormik(TextInput)
const SelectWithFormik = withUsageFormik(Select)

const defaultFilmModel = {
    title: '',
    poster_path: '',
    overview: '',
    runtime: 0,
    genres: [],
    release_date: '',
}

export const AddFilmForm: React.FC<props> = ({ onCloseForm, onAddFilm }) => {
    const classes = addFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <span onClick={onCloseForm} className={classes.cross}>
                    &#215;
                </span>
                <div className={classes.content}>
                    <p className={classes.title}>Add movie</p>

                    <Formik
                        initialValues={defaultFilmModel}
                        validationSchema={filmValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            onAddFilm(values)
                            setSubmitting(false)
                        }}
                    >
                        <Form className={classes.form}>
                            <TextInputWithFormik
                                label="Title"
                                name="title"
                                placeholder="Tile here"
                            />

                            <TextInputWithFormik
                                type="date"
                                label="Release Date"
                                name="release_date"
                                placeholder="Select Date"
                            />

                            <TextInputWithFormik
                                label="Movie Url"
                                name="poster_path"
                                placeholder="Movie URL here"
                            />

                            <SelectWithFormik
                                label="Genre"
                                name="genres"
                                className={classes.select}
                                placeholder="Select Genre"
                                items={GENRES}
                                multiple={true}
                            />

                            <TextInputWithFormik
                                label="Overview"
                                name="overview"
                                placeholder="Overview here"
                            />

                            <TextInputWithFormik
                                label="Runtime"
                                name="runtime"
                                type="number"
                                placeholder="Runtime here"
                            />

                            <div className={classes.buttonArea}>
                                <ThemeButton type="reset" theme="DARK">
                                    Reset
                                </ThemeButton>

                                <ThemeButton type="submit" theme="LIGHT">
                                    Submit
                                </ThemeButton>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Card>
    )
}
