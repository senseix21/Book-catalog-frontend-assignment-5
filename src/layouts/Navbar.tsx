import { Link } from "react-router-dom";
import { PiBookFill, PiUser } from 'react-icons/pi'
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function Navbar() {
    const { books } = useAppSelector(state => state.wishlist)
    console.log(books);


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/allBooks'}>AllBooks</Link></li>
                        <li><Link to={'/wishList'}>WishList</Link></li>
                        <li><Link to={'/addNew'}>AddNew</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/allBooks'}>AllBooks</Link></li>
                    <li><Link to={'/wishList'}>WishList</Link></li>
                    <li><Link to={'/addNew'}>AddNew</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <span className="text-xl"><PiBookFill /></span>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow">
                            <div className="card-body">
                                {
                                    books?.map((book) =>
                                        <div className="flex items-center">
                                            <img src={book?.cover_img} width={60} alt="" />
                                            <h3 className="text-md font-bold">{book?.title}</h3>
                                        </div>
                                    )
                                }
                                <div className="card-actions">
                                    <Link to={'/wishlist'}>
                                        <button className="btn btn-primary btn-block">View Wishlist</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-5 rounded-full justify-center">
                                <span className="text-xl"><PiUser /></span>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    <Link to={'/mybooks'}>MyBooks</Link>
                                </a>
                            </li>
                            <li><Link to={'/signin'}>Signin</Link></li>
                            <li><Link to={'/logout'}>LogOut</Link></li>



                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}
