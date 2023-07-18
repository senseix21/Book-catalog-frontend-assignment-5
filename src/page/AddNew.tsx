import { SubmitHandler, useForm } from "react-hook-form"

export default function AddNew() {

    interface IFormInput {
        title: string,
        author: string,
        publicationYear: string,
        genre: string
        cover_img: string
        admin: string

    }

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Add New Book!</h1>
                </div>
                <div className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input  {...register("title")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author</span>
                        </label>
                        <input  {...register("author")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Published on</span>
                        </label>
                        <input  {...register("publicationYear")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <select  {...register("genre")} className="input input-bordered" >
                            <option disabled selected>Genre</option>
                            <option value="mystery">Mystery</option>
                            <option value="horror">Horror</option>
                            <option value="thriller">Thriller</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Science Fiction</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">cover_img</span>
                        </label>
                        <input  {...register("cover_img")} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Admin</span>
                        </label>
                        <input  {...register("admin")} type="text" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
