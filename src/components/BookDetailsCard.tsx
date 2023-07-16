import React from 'react'
import { IBook } from '../types/book'

type IProps = {
    book: IBook
}

export default function BookDetailsCard({ book }: IProps) {

    return (
        <div className='lg:flex md:flex justify-between lg:mx-24 mt-5 mb-5 rounded-md'>
            <img className='h-80 mx-auto ' src={book?.cover_img} alt="" />
            <div className='mx-5'>
                <h2 className='text-2xl font-bold text-left'>{book?.title}</h2>

                <div className='flex items-center justify-start mx-1 mt-3  font-medium' >
                    <p>Written by:{book?.author}</p>
                </div>
                <div className='text-left mt-4'>
                    <p><span className='font-bold'>Genre:</span> {book?.genre}</p>
                    <p><span className='font-bold'>Published on:</span> {book?.publicationYear}</p>
                    <p className='text-left'><span className='font-bold'>Description:</span>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis ante ut pharetra finibus.
                        Pellentesque sollicitudin elit in risus varius, sed euismod felis dignissim. Vivamus ultrices diam eget augue tristique,
                        id ullamcorper metus lacinia. Sed at bibendum nunc, vitae dapibus purus."
                    </p>
                </div>
                <div className='my-5 mx-2 '>
                    <button className="btn btn-accent">Add to wishlist</button>
                    <button className="btn btn-primary">Edit Book</button>
                    <button className="btn btn-error">Delete Book</button>

                </div>
            </div>

        </div>
    )
}
