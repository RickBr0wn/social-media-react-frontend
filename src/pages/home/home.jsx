import './home.css'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/topbar'

export default function Home() {
	return (
		<>
			<Topbar />
			<div className='home-container'>
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</>
	)
}
