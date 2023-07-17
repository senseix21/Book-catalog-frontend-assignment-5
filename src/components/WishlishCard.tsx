import { Link } from 'react-router-dom';

interface IBook {
    admin: string;
    author: string;
    cover_img: string;
    createdAt: string;
    genre: string;
    id: string;
    publicationYear: string;
    reviews: string[];
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

interface IProps {
    book: IBook
}

export default function WishlishCard({ book }: IProps) {

    const handdleAddToMyBooks = () => { 0 };
    return (
        <div className='mx-auto text-black mb-10 rounded-md'>
            <Link to={`/books/${book?._id}`}>
                <img className='rounded-md h-60 mx-auto' src={book?.cover_img} width={180} alt="" />
            </Link>
            <div className='items-baseline mx-auto'>

                <div className='text-center  text-gray-500 px-2 py-2'>
                    <p>Author: {book?.author}</p>
                    <p className=' text-primary font-bold font-serif'>{book?.title}</p>
                    <p>Genre: {book?.genre}</p>
                    <p>Publication Year: {book?.publicationYear}</p>
                </div>
                <div className='items-end'>
                    <button onClick={() => handdleAddToMyBooks()} className="btn btn-secondary btn-wide lg:mx-3 mx-10 ">Add to MyBooks</button>

                </div>
            </div>

        </div>)
}
