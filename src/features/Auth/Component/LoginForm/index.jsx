import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputField from 'components/Form-controller/InputField';
import PasswordField from 'components/Form-controller/PasswordField';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles({
    root: {
        position: 'relative',
        padding: '26px 0px',
    },
    avatar: {
        margin: '0 auto',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    title: {
        textAlign: 'center',
    },
    buttons: {
        marginTop: '16px',
    },
    progress: {
        position: 'absolute',
        top: '10px',
        left: '0',
        right: '0'
    }
});

function LoginForm(props) {
    const schema = yup.object().shape({
        identifier: yup.string()
            .required('Please enter your email')
            .email('Please enter email@'),
        password: yup.string()
            .required('Please enter your password')
    });

    const classes = useStyles();

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
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
        <div className={classes.root} fullWidth>
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h5" className={classes.title} margin='6px 0'>
                Sign In
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)} >
                <InputField name='identifier' label='Email' form={form} />
                <PasswordField name='password' label='Password' form={form} />
                <div className={classes.buttons} >
                    <Button disabled={isSubmitting} type='submit'
                        variant='contained' color='primary' fullWidth>
                        Sign In
                    </Button>
                </div>
            </form >
        </div>
    );
}

export default LoginForm;