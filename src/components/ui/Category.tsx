import c1 from '../../assets/moby-dick.png';
import c2 from '../..//assets/holmes.png';
import c3 from '../../assets/hobbit.png';
export default function Category() {
    const categories = [
        {
            id: 1,
            img: c1,
            title: 'New Realese',
            bg: 'bg-primary',
        },
        {
            id: 2,
            img: c2,
            title: "Most Popular",
            bg: 'bg-secondary',
        },
        {
            id: 3,
            img: c3,
            title: "Top Rated",
            bg: 'bg-accent',
        }
    ]
    return (
        <div className="bg-base-100 grid lg:grid-cols-3 gap-4 py-10 px-16">
            {categories.map(category => (
                <>
                    <div key={category.id} className={`lg:flex flex-row-reverse lg:items-center justify-between p-6 ${category.bg}`}>
                        <img className='w-40' src={category.img} alt="" />
                        <div>
                            <h2 className="text-4xl font-bold">{category.title}</h2>
                            <button className="btn btn-neutral mt-2">Visit Now</button>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}
