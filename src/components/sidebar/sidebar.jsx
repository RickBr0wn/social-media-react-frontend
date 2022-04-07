import {
	Bookmark,
	Chat,
	Event,
	HelpOutline,
	PlayCircleFilledOutlined,
	RssFeed,
	School,
	WorkOutline
} from '@mui/icons-material'
import './sidebar.css'

export default function Sidebar() {
	return (
		<div className='sidebar-container'>
			<div className='sidebar-wrapper'>
				<ul className='sidebar-list'>
					<li className='sidebar-list-item'>
						<RssFeed className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Feed</span>
					</li>
					<li className='sidebar-list-item'>
						<Chat className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Chats</span>
					</li>
					<li className='sidebar-list-item'>
						<PlayCircleFilledOutlined className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Videos</span>
					</li>
					<li className='sidebar-list-item'>
						<Bookmark className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Bookmarks</span>
					</li>
					<li className='sidebar-list-item'>
						<HelpOutline className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Questions</span>
					</li>
					<li className='sidebar-list-item'>
						<WorkOutline className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Jobs</span>
					</li>
					<li className='sidebar-list-item'>
						<Event className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Events</span>
					</li>
					<li className='sidebar-list-item'>
						<School className='sidebar-item-icon' />
						<span className='sidebar-list-item-text'>Courses</span>
					</li>
				</ul>
				<button className='sidebar-button'>Show More</button>
				<hr className='sidebar-hr' />
				<ul className='sidebar-friends-list'>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
					<li className='sidebar-friend'>
						<img
							className='sidebar-friend-image'
							src='/assets/person/2.jpeg'
							alt=''
						/>
						<span className='sidebar-friend-name'>Jane Doe</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
