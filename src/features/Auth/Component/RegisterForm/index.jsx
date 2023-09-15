import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../../../../components/Form-controller/InputField';
import { Avatar, Button, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';
import PasswordField from 'components/Form-controller/PasswordField';



RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles({
    root: {

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
    }
});

function RegisterForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        fullName: 
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
        <div className={classes.root}>
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
                <Button type='submit' className={classes.buttons} variant='contained' color='primary' fullWidth>Create an account</Button>
            </form >
        </div>
    );
}

export default RegisterForm;