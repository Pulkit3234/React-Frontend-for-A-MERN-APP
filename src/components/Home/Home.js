import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';


const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null);

	useEffect(() => {
		dispatch(getPosts());
		console.log('app');
	}, [currentId, dispatch]);

	
	return (
		<Grow in>
			<Container>
				<Grid
					className={classes.mainContainer}
					container
					justify="space-between"
					alignItems="stretch"
					spacing={3}
				>
					<Grid item xs={12} sm={7}>
						<Posts setCurrentId={setCurrentId} currentId={currentId} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Form setCurrentId={setCurrentId} currentId={currentId} />
					</Grid>
				</Grid>
			</Container>
			
		</Grow>
	);
};

export default Home;
