import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginUserMutation } from "../redux/features/user/userApi";

interface IFormInput {
    userName: string;
    email: string;
    password: string;
}

export default function Signin() {
    const [loginUser] = useLoginUserMutation()
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        loginUser({ data: data })
    }
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input {...register("userName")} type="text" placeholder="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
