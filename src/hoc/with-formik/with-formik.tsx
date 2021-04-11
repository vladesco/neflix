import { Field, FieldHookConfig, useField } from 'formik'
import React from 'react'
import { withCondition } from '../with-condition/with-condition'

type anyObject = { [key: string]: any }
type props = FieldHookConfig<any> & { label?: string } & anyObject

const ErrorMessageWithCondition = withCondition<{ error: string }>(
    ({ error }) => <div className="error">{error}</div>
)

const LableWithCondition = withCondition<{ selector: string; text: string }>(
    ({ selector, text }) => <label htmlFor={selector}>{text}</label>
)

export const withUsageFormik = (
    Component: React.ComponentType<any>
): React.FC<props> => ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const isErrorShowed = Boolean(meta.touched && meta.error)
    return (
        <>
            <LableWithCondition
                isShown={Boolean(props.name)}
                selector={props.name}
                text={label}
            />
            <Field {...field}>
                {({ field: { value }, form: { setFieldValue } }) => (
                    <Component
                        {...field}
                        {...props}
                        value={value}
                        onChange={(value) => setFieldValue(field.name, value)}
                    />
                )}
            </Field>

            <ErrorMessageWithCondition
                isShown={isErrorShowed}
                error={meta.error}
            />
        </>
    )
}
