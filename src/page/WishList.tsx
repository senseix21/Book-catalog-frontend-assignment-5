import React from 'react'
import { useAppSelector } from '../redux/hook'
import WishlishCard from '../components/WishlishCard'

export default function WishList() {
    const { books } = useAppSelector(state => state.wishlist)
    return (
        <div className='px-16'>
            <div className='grid grid-cols-4 gap-2 '>
                {
                    books?.map(book =>
                        <WishlishCard key={book?._id} book={book} ></WishlishCard>
                    )
                }
            </div>
        </div>
    )
}
