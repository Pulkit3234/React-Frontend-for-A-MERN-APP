import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setIsSignup] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	console.log('component');
	const handleShowPassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	const handleSubmit = () => {};

	const handleChange = () => {};

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
		console.log('Google Singn in was unsuccessful');
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
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									xs={6}
								/>

								<Input
									name="firstName"
									label="Last Name"
									handleChange={handleChange}
									autoFocus
									xs={6}
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
					<div style={{ marginTop: '20px' }}>
						<GoogleLogin
							clientId="88365864682-8d4k85io0pvlpd0etrv3qm3r6tbkrr11.apps.googleusercontent.com"
							render={(renderProps) => (
								<Button
									className={classes.googleButton}
									color="primary"
									fullWidth
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
									startIcon={<Icon />}
									variant="contained"
								>
									Google Sign In
								</Button>
							)}
							onSuccess={googleSuccess}
							onFailure={googleFailure}
							cookiePolicy="single_host_origin"
						/>
					</div>
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
