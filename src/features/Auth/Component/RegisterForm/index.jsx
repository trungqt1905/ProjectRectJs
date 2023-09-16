import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';
import PasswordField from 'components/Form-controller/PasswordField';
import InputField from 'components/Form-controller/InputField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    avatar: {
        margin: '0 auto',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    title: {
        textAlign: 'center',
    },
    buttons: {
        margin: '4 auto',
    },
    progress: {
        position: 'absolute',
        top: '10',
        left: '0',
        right: '0'
    }
});

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Please enter your full name')
            .test('Should has at least two words', 'Please enter at least two words', (values) => {
                console.log('values', values);
                return values.split(' ').length > 1;
            }),
        email: yup.string()
            .required('Please enter your email')
            .email('Please enter email@'),
        password: yup.string()
            .required('Please enter your password')
            .min(6, 'Please enter at least 6 characters'),
        retypePassword: yup.string()
            .required('Please retype password')
            .oneOf([yup.ref('password')], 'Password does not match')
    });

    const classes = useStyles();

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
        form.reset();
    };

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>

            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h5" className={classes.title} margin='4px 0'>
                Create an account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='fullName' label='FullName' form={form} />
                <InputField name='email' label='Email' form={form} />
                <PasswordField name='password' label='Password' form={form} />
                <PasswordField name='retypePassword' label='Retype password' form={form} />
                <Button disabled={isSubmitting} type='submit' className={classes.buttons} variant='contained' color='primary' fullWidth>
                    Create an account
                </Button>
            </form >
        </div>
    );
}

export default RegisterForm;