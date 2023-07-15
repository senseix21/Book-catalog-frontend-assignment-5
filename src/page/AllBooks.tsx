import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import { IBook } from '../types/book';

export default function AllBooks() {
    const { data, isLoading, isError } = useGetBooksQuery(undefined)
    console.log(data)
    const booksData = data?.data;

    return (
        <div className='lg:px-16'>
            <div>AllBooks</div>
            <div className="col-span-9 grid grid-cols-4 gap-10 pb-20">
                {booksData?.map((book: IBook) => (
                    <BookCard key={book._id} booksData={book} />
                ))}
            </div>
        </div>
    )
}
