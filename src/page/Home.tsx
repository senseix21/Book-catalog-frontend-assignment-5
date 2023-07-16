import Hero from '../components/Hero'
import Category from '../components/Category'
import Stats from '../components/Stats'
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import { IBook } from '../types/book';
import BookCard from '../components/BookCard';
import bgImg from '../assets/pexels-cottonbro-studio-5095897.jpg';
import Featured from '../components/Featured';


export default function Home() {
    const { data, isLoading, isError } = useGetBooksQuery(undefined)
    const booksData = data?.data;
    return (
        <>
            <Hero />
            <Category />
            {/* <Stats /> */}
            <div className="mx-auto col-span-9 grid lg:grid-cols-4 lg:px-16">
                <div className='lg:col-span-2  bg-neutral-focus mb-10'>
                    <div className='lg:flex justify-between'>
                        <h2 className='p-5 text-3xl font-bold text-base-100'>
                            "A reader lives a thousand lives before he dies.<br /> The man who never reads lives only one."
                            <br />- George R.R. Martin.
                        </h2>
                        <img src={bgImg} alt="" width={250} className='lg:m-6 mx-auto' />
                    </div>
                </div>
                {booksData?.map((book: IBook) => (
                    <BookCard key={book._id} booksData={book} />
                ))}
            </div>
            <Featured />
        </>
    )
}
