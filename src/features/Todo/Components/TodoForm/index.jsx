import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/Form-controller/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../../../../components/Form-controller/InputField';



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string()
            .required('Please enter a title')
            .min(5, 'Title is too short')
    }).required();

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name='title' label='Todo' form={form} />
        </form >
    );
}

export default TodoForm;