import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';
import { Expense } from '../types/index'

interface FormValues {
    type: string;
    value: number;
    description: string;
}

interface OtherProps {
    expenses: any;
    addExpense: ( expense: Expense ) => any;
}

interface MyFormProps {
    expenses: any;
    addExpense: (expense: Expense) => any;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}>
                    <option value="" label="Select">Select</option>
                    <option value="+" label="+">+</option>
                    <option value="-" label="-">-</option>
                </select>
                <input type="number"
                    width={100}
                    placeholder="Value"
                    name="value"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value} />
                <input type="text"
                    width={100}
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description} />
                <button type="submit" disabled={isSubmitting || !!(errors.type && touched.type) || !!(errors.value && touched.value) || !!(errors.description && touched.description)}>Add</button>
            </form>
        </div>
    )
};

const Add = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: () => ({
        type: "",
        value: 0,
        description: ""
    }),
    validationSchema: Yup.object().shape({
        type: Yup.string().required("Required Name"),
        value: Yup.number().required("Required Value"),
        description: Yup.string().required("Required Description")
    }),
    handleSubmit(
        { type, value, description }: FormValues,
        { props, setSubmitting }
    ) {
        setTimeout(() => {
            props.addExpense({ type, value, description });
            setSubmitting(false);
        }, 1000);
    }
})(InnerForm);

export default Add;