import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input';

const Auth = () => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setIsSignup] = useState(false);

	const handleShowPassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	const handleSubmit = () => {};

	const handleChange = () => {};

	const switchMode = () => {
		setIsSignup((prevState) => !prevState);
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
