import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import Pagination from '@material-ui/lab/Pagination';

const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	console.log(post);
	const user = JSON.parse(localStorage.getItem('profile'));

	const Likes = () => {
		if (post.likeCount.length > 0) {
			return post.likeCount.find((id) => String(id) === String(user?.result._id)) ? (
				<>
					<ThumbUpAltIcon fontSize="small" /> &nbsp;
					{post.likeCount.length === 1
						? `${post.likeCount.length} Like`
						: `You and ${post.likeCount.length - 1} ${post.likeCount.length - 1 > 1 ? "Likes" : "Like"}`}
				</>
			) : (
				<>
					<ThumbUpAltIcon fontSize="small" /> &nbsp; {post.likeCount.length}
					{post.likeCount.length === 1 ? 'Like' : 'Likes'}
				</>
			);
		}

		return (
			<>
				<ThumbUpAltIcon fontSize="small" /> &nbsp; Like
			</>
		);
	};

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
			<div className={classes.overlay}>
				<Typography variant="h6">{post.name}</Typography>
				<Typography variant="body-2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			{user?.result._id === post.creator && (
				<div className={classes.overlay2}>
					<Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
						<MoreHorizIcon fontSize="default" />
					</Button>
				</div>
			)}

			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary" component="h2">
					{post?.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<CardContent>
				<Typography className={classes.title} variant="h5" gutterBottom>
					{post.title}
				</Typography>
			</CardContent>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					size="small"
					color="primary"
					onClick={() => {
						dispatch(likePost(post._id));
					}}
					disabled={!localStorage.getItem('profile')}
				>
					<Likes />
				</Button>
				{user?.result._id === post.creator && (
					<Button
						size="small"
						color="primary"
						onClick={() => {
							dispatch(deletePost(post._id));
						}}
					>
						<DeleteIcon fontSize="small" />
						Delete
					</Button>
				)}
			</CardActions>
		</Card>
		
	);
};

export default Post;
