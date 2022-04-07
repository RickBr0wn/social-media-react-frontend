import Post from '../post/post'
import Share from '../share/share'
import './feed.css'

export default function Feed() {
	return (
		<div className='feed-container'>
			<div className='feed-wrapper'>
				<Share />
				<Post />
			</div>
		</div>
	)
}
