import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup, signin } from '../../actions/auth';

const initialState = { firstname: '', lastname: '', email: '', password: '', confirmpassword: '' };

const Auth = () => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setIsSignup] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const [formData, setFormData] = useState(initialState);

	console.log('component');
	const handleShowPassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(isSignup);

		if (isSignup) {
			console.log('working');
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
		}
		console.log(formData);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const switchMode = () => {
		setIsSignup((prevState) => !prevState);
	};

	const googleSuccess = async (res) => {
		const result = res.profileObj;
		const token = res.tokenId;

		try {
			dispatch({ type: 'AUTH', data: { result, token } });

			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const googleFailure = () => {
		console.log('Google Singin in was unsuccessful');
	};
	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3} justify="center">
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Input
									name="firstname"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									type="text"
									xs={6}
								/>

								<Input
									name="lastname"
									label="Last Name"
									handleChange={handleChange}
									autoFocus
									xs={6}
									type="text"
								/>
							</>
						)}

						<Input name="email" label="Email Address" handleChange={handleChange} type="email" />
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name="confirmpassword"
								label="Repeat Password"
								handleChange={handleChange}
								type="password"
							/>
						)}
					</Grid>

					<Button type="submit" fullwidth variant="contained" color="primary" className={classes.submit}>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>

					<Grid container justify="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup ? 'Already Have an Account ? Sign In' : "Don't Have an account ? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
