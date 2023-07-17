import { Link } from 'react-router-dom';
import { IBook } from '../types/book';
import { useAppDispatch } from '../redux/hook';
import { addToWishlist } from '../redux/features/wishlist/wishlistSlice';
import toast, { Toaster } from 'react-hot-toast';

type IProps = {
    booksData: IBook
}

export default function BookCard({ booksData }: IProps) {
    const success = () => toast('Added to wishlist successfully.')

    const dispatch = useAppDispatch();
    const handleAddToWishlist = (book: IBook) => {
        dispatch(addToWishlist(book));
        console.log(book)
        success();

    }
    return (
        <div className='mx-auto text-black mb-10 rounded-md'>
            <Toaster />
            <Link to={`/books/${booksData._id}`}>
                <img className='rounded-md h-60 mx-auto' src={booksData.cover_img} width={180} alt="" />
            </Link>
            <div className='items-baseline mx-auto'>

                <div className='text-center  text-gray-500 px-2 py-2'>
                    <p>Author: {booksData.author}</p>
                    <p className=' text-primary font-bold font-serif'>{booksData.title}</p>
                    <p>Genre: {booksData.genre}</p>
                    <p>Publication Year: {booksData.publicationYear}</p>
                </div>
                <div className='items-end'>
                    <button onClick={() => handleAddToWishlist(booksData)} className="btn btn-accent btn-wide lg:mx-3 mx-10 ">Add to wishlist</button>

                </div>
            </div>

        </div>
    )
}
