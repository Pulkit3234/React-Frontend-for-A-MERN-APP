import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';



const Posts = ({ setCurrentId, currentId }) => {
	const posts = useSelector((state) => state.posts);
	const [totalCount, setTotalCount] = useState(null);
	
	

	const classes = useStyles();

	return !posts.length ? (
		<CircularProgress />
	) : (
		<Grid className={classes.container} container align-items="stretch" spacing={3}>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
			
		</Grid>
	);
};

export default Posts;
