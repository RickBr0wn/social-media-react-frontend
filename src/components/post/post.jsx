import { MoreVert } from '@mui/icons-material'
import './post.css'

export default function Post() {
	return (
		<div className='post-container'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top-left'>
						<img
							src='/assets/person/1.jpeg'
							alt='a girl'
							className='post-profile-image'
						/>
						<span className='post-username'>Aurélie Bélanger</span>
						<span className='post-date'>5 mins ago</span>
					</div>
					<div className='post-top-right'>
						<MoreVert className='post-icon' />
					</div>
				</div>
				<div className='post-center'>
					<span className='post-text'>Hey! It's my first post!! ❤️</span>
					<img src='/assets/post/1.jpeg' alt='' className='post-image' />
				</div>
				<div className='post-bottom'>
					<div className='post-bottom-left'>
						<img src='/assets/like.png' alt='like' className='post-like-icon' />
						<img
							src='/assets/heart.png'
							alt='heart'
							className='post-like-icon'
						/>
						<span className='post-like-counter'>32 people like it</span>
					</div>
					<div className='post-bottom-right'>
						<div className='post-comment-text'>9 comments</div>
					</div>
				</div>
			</div>
		</div>
	)
}
