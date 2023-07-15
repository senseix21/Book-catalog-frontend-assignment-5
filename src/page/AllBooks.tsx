import { useGetBooksQuery } from '../redux/features/books/bookApi'

export default function AllBooks() {
    const data = useGetBooksQuery(undefined)
    console.log(data)
    return (
        <div>AllBooks</div>
    )
}
