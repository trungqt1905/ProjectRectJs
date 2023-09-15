import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import { FormHelperText } from '@mui/material';

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <div>
            <Controller
                name={name} // The name of the input field
                control={form.control} // The form control object from React Hook Form
                render={({ field, fieldState }) => (
                    <FormControl fullWidth variant="outlined" margin='normal'>
                        <InputLabel>{label}</InputLabel>
                        <OutlinedInput
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            disabled={disabled}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            error={Boolean(fieldState.error)}
                            label={label}
                        />
                        <FormHelperText style={{ color: 'red' }}>{fieldState.error ? fieldState.error.message : null}</FormHelperText>
                    </FormControl>
                )}
            />
        </div>
    );
}
export default PasswordField;