import heroImg from '../../assets/hero-img1.png';

export default function Hero() {
    return (
        <div className=" bg-base-200 px-16">
            <div className="lg:flex ">
                <img src={heroImg} className=" rounded-lg " />
                <div className='ml-10'>
                    <div className='mt-32'>
                        <h1 className="text-5xl font-bold"><span className='text-primary'>Immerse Yourself in the Wonder</span> of Literature with OwlBooks</h1>
                        <p className="py-6">
                            Welcome to OwlBooks, where pages turn into adventures. Immerse yourself in captivating stories, discover hidden gems, and let the magic of literature transport you to extraordinary worlds of imagination.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
