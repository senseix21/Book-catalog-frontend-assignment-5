import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <div className='pt-16'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
