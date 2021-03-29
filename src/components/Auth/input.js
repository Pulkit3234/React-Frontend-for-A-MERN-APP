import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
	return (
		<Grid item xs={12} sm={6} half={half ? 6 : 12}>
			<TextField
				name={name}
				onChange={handleChange}
				variant="outlined"
				required
				fullWidth={true}
				label={label}
				autoFocus={autoFocus}
				type={type}
				InputProps={
					name === 'Password' && {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={handleShowPassword}>
									{type === 'Password' ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}
				}
			/>
		</Grid>
	);
};

export default Input;
