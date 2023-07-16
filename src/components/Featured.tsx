import bg from '../assets/pexels-min-an-694740.jpg'
export default function Featured() {
    return (
        <div className="hero lg:px-16" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">"Books are the quietest and most constant of friends." <br />- Charles William Eliot</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>)
}
