import React from 'react'
import { Form, Formik } from 'formik'

import { withUsageFormik } from '../../../../hoc'
import { FilmModel } from '../../../../store'
import { Card, TextInput, ThemeButton } from '../../../atoms'
import { Select } from '../../../atoms'
import { GENRES } from '../../../const'
import { editFilmFormStyles } from './edit-film-form.style'
import { filmValidationSchema } from '../consts'

type props = {
    edittedFilm: FilmModel
    onCloseForm: () => void
    onEditFilm: (newFilmModel: FilmModel) => void
}

const TextInputWithFormik = withUsageFormik(TextInput)
const SelectWithFormik = withUsageFormik(Select)

export const EditFilmForm: React.FC<props> = ({
    onCloseForm,
    onEditFilm,
    edittedFilm,
}) => {
    const classes = editFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.content}>
                    <span className={classes.cross} onClick={onCloseForm}>
                        &#215;
                        <p className={classes.title}>Edit movie</p>
                    </span>
                    <span className="label">Movie id</span>
                    <span>{edittedFilm.id}</span>

                    <Formik
                        initialValues={{ ...edittedFilm }}
                        validationSchema={filmValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            onEditFilm({ ...edittedFilm, ...values })
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
                                    Save
                                </ThemeButton>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Card>
    )
}
