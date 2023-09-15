import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    return (
        <Controller
            name={name} // The name of the input field
            control={form.control} // The form control object from React Hook Form

            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    disabled={disabled}
                    label={label}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error ? fieldState.error.message : null}
                    variant='outlined'
                    margin='normal'
                    fullWidth
                />
            )
            }
        />
    );
}

export default InputField;