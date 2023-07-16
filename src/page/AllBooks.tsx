import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import { IBook } from '../types/book';
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from 'react'
import fetchBooks from '../utils/fetchBooks';

export enum GenreEnum {
    Genre = "Genre",
    mystery = "mystery",
    horror = "horror",
    thriller = "thriller",
    romance = "romance",
    sci_fi = "sci-fi",
    fantasy = "fantasy",
    action = "action",
    adventure = "adventure",
    comedy = "comedy",
    drama = "drama"

}

const years = ['1960', '1970', '1980', '1990', '2000', '2010'];

interface IFormInput {
    searchText: string,
    genre: GenreEnum,
    year: string
}

export default function AllBooks() {
    const [searchText, setSearchText] = useState('');
    const [genre, setGenre] = useState<GenreEnum>();
    const [year, setYear] = useState('');
    const [books, setBooks] = useState([]);

    const { data, isLoading, isError } = useGetBooksQuery(undefined)
    const booksData = data?.data;


    const { register, handleSubmit } = useForm<IFormInput>()


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const { searchText, genre, year } = (data);
        console.log(searchText, genre, year[0]);
        setSearchText(searchText);
        setGenre(genre);
        setYear(year[0]);

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchBooks(searchText, genre, year);
                setBooks(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [searchText, genre, year]);

    console.log(books, 'items')







    return (
        <div className='grid lg:grid-cols-12 lg:px-16'>
            <div className='col-span-3 lg'>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="join">
                            <div>
                                <div>
                                    <input className="input input-bordered join-item"  {...register("searchText")} placeholder="Search..." />
                                </div>
                            </div>
                            <div className="indicator">
                                <button className="btn btn-accent join-item">Search</button>
                            </div>
                        </div>

                        <select {...register("genre")} className="select select-bordered">
                            <option disabled selected>Genre</option>
                            <option value="mystery">Mystery</option>
                            <option value="horror">Horror</option>
                            <option value="thriller">Thriller</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Science Fiction</option>
                            <option value="fantasy">Fantasy</option>
                        </select>

                        <div>
                            {years.map((year) => (
                                <div key={year} className='items-center mx-auto'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className='checkbox'
                                            value={year}
                                            {...register('year')}
                                        />
                                        {year}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button type="submit" className='btn btn-accent'>Filter</button>
                    </form>
                </div>

            </div>
            <div className="mx-auto col-span-9 grid lg:grid-cols-3">
                {booksData?.map((book: IBook) => (
                    <BookCard key={book._id} booksData={book} />
                ))}
            </div>
        </div>
    )
}
