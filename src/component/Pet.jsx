import { Link } from "react-router-dom";
const pet = ({ name, breed, images, location, id }) => {
    let hero =
        images.length === 0
            ? "http://pets-images.dev-apis.com/pets/none.jpg"
            : images[0];

    return (
        <div className="border shadow-lg">
            <Link to={`/details/${id}`} className="  ">
                <div className="">
                    <img src={hero} alt={name} className="object-cover" />
                </div>
                <div className=" p-2">
                    <h2 className="font-extrabold">{name}</h2>
                    <h4 className=" text-sm ">
                        {breed} - {location}
                    </h4>
                </div>
            </Link>
        </div>
    );
};

export default pet;
