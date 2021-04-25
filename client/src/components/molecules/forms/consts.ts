import * as Yup from 'yup'

export const filmValidationSchema = Yup.object({
    title: Yup.string().required(),
    poster_path: Yup.string().url().required(),
    overview: Yup.string().required(),
    runtime: Yup.number().integer().min(0).required(),
    genres: Yup.array().of(Yup.string()).required(),
    release_date: Yup.date().required(),
})
