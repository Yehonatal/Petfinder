import { Link } from 'react-router-dom'

interface IProps {
    id: number
    name: string
    breed: string
    images: string[]
    location: string
}

const pet = (props : IProps) => {
    const { id, name, breed, images, location } = props
    const hero: string =
        images.length === 0
            ? 'http://pets-images.dev-apis.com/pets/none.jpg'
            : images[0]

    return (
        <div className="container_border shadow-lg">
            <Link to={`/details/${id}`} className=" ">
                <div className="">
                    <img src={hero} alt={name} className="object-cover" />
                </div>
                <div className="p-2">
                    <h2 className="text-xl font-extrabold">{name}</h2>
                    <h4 className="text-sm text-[var(--text)]">
                        {breed} - {location}
                    </h4>
                </div>
            </Link>
        </div>
    )
}

export default pet
