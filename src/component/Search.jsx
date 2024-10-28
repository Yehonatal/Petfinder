/* eslint-disable react/prop-types */
import adoptedPetsContext from "../context/AdoptedPetsContext";
import Form from "./Form";
import { useContext } from "react";

const Search = ({ setPets }) => {
    const [adoptedPets, _] = useContext(adoptedPetsContext);

    return (
        <div className="container_border w-[450px] h-[80vh] shadow-lg">
            <Form setPets={setPets} />
            <hr className="my-10 border-t-[3px]  border-[var(--border)]" />
            {adoptedPets.length > 0 ? (
                adoptedPets.map((pet, id) => (
                    <div key={id} className=" flex m-6">
                        <img
                            src={pet.images[0]}
                            alt={pet.name}
                            className="w-[70px] h-auto object-contain"
                        />
                        <div className="flex flex-col text-left ml-4">
                            <h3 className="font-extrabold">{pet.name}</h3>
                            <p>Adopted Date</p>
                            <p>
                                From {pet.breed} - {pet.city}, {pet.state}{" "}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <h2 className="text-2xl font-extrabold">No Pets Adopted ..</h2>
            )}
        </div>
    );
};

export default Search;
