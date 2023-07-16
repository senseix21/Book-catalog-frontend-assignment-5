/* eslint-disable no-unsafe-optional-chaining */
import { useParams } from 'react-router-dom'
import { useGetSingleBookQuery } from '../redux/features/books/bookApi'
import BookDetailsCard from '../components/BookDetailsCard'

export default function BookDetails() {
    const { id } = useParams()
    console.log(id)
    const { data, isError, isLoading } = useGetSingleBookQuery(id)
    console.log(data)


    return (
        <>
            <BookDetailsCard book={data?.data}></BookDetailsCard>
        </>
    )
}
