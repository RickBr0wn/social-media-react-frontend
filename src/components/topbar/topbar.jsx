import './topbar.css'
import { Chat, Notifications, Person, Search } from '@mui/icons-material'

export default function Topbar() {
	return (
		<div className='topbar-container'>
			<div className='topbar-left'>
				<span className='topbar-logo'>IamSocial</span>
			</div>
			<div className='topbar-center'>
				<div className='topbar-searchbar'>
					<Search className='topbar-search-icon' />
					<input
						className='topbar-search-input'
						placeholder='Search for friends, posts or any video.'
					/>
				</div>
			</div>
			<div className='topbar-right'>
				<div className='topbar-links'>
					<span className='topbar-link'>Home</span>
					<span className='topbar-link'>Timeline</span>
				</div>
				<div className='topbar-icons'>
					<div className='topbar-icon-item'>
						<Person />
						<span className='topbar-icon-badge'>5</span>
					</div>
					<div className='topbar-icon-item'>
						<Chat />
						<span className='topbar-icon-badge'>3</span>
					</div>
					<div className='topbar-icon-item'>
						<Notifications />
						<span className='topbar-icon-badge'>1</span>
					</div>
				</div>
				<img
					src='/assets/person/1.jpeg'
					alt=''
					className='topbar-profile-image'
				/>
			</div>
		</div>
	)
}
