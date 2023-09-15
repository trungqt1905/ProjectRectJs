import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <div>
            <Controller
                name={name}
                control={form.control}
                render={({ field, fieldState }) => (
                    <FormControl fullWidth variant="outlined" margin='normal'>
                        <InputLabel htmlFor={name}>{label}</InputLabel>
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
                            label="Password"
                            error={Boolean(fieldState.error)}
                            helperText={fieldState.error ? fieldState.error.message : null}
                        />
                    </FormControl>
                )}
            />
        </div>
    );
}
export default PasswordField;