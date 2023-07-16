/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { useEditBookMutation, useGetSingleBookQuery } from '../redux/features/books/bookApi'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
    title: string,
    author: string,
    publicationYear: string,
    genre: string

}
export default function EditBook() {
    const { id } = useParams();
    const { data } = useGetSingleBookQuery(id)
    const bookData = data?.data;
    console.log(bookData);
    const [editbook] = useEditBookMutation()


    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        const options = {
            id,
            data
        }
        editbook(options)
    }



    return (
        <div className='px-16 lg:flex items-center mx-auto'>
            <img src={bookData?.cover_img} width={300} alt="" />

            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Edit Book now!</h1>
                </div>
                <div className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input  {...register("title")} value={bookData?.title} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author</span>
                        </label>
                        <input  {...register("author")} value={bookData?.author} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Published on</span>
                        </label>
                        <input  {...register("publicationYear")} value={bookData?.publicationYear} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select  {...register("genre")} value={bookData?.genre} type="text" className="input input-bordered" >
                            <option disabled selected>Genre</option>
                            <option value="mystery">Mystery</option>
                            <option value="horror">Horror</option>
                            <option value="thriller">Thriller</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Science Fiction</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit </button>
                    </div>
                </div>
            </form>
        </div>

    )
}
