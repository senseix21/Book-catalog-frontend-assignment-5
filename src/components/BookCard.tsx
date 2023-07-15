import { IBook } from '../types/book';

type IProps = {
    booksData: IBook
}

export default function BookCard({ booksData }: IProps) {
    console.log(booksData)
    return (
        <div className='mx-auto bg-slate-50 text-black mb-10 rounded-md'>
            <img className='rounded-md h-60' src={booksData.cover_img} width={250} alt="" />
            <div className='items-baseline'>

                <div className='items-center justify-between font-medium px-2 py-2'>
                    <p>Author: {booksData.author}</p>
                    <p>Genre: {booksData.genre}</p>
                    <p>Publication Year: {booksData.publicationYear}</p>
                </div>
                <button className="btn btn-neutral btn-wide">Add to wishlist</button>
            </div>

        </div>
    )
}
