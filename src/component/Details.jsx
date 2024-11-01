import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addPet } from "../features/AdoptedPetSlice";
import { useGetPetQuery } from "../services/petApiService";

const Details = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { id } = useParams();
    const { isLoading, data: pet } = useGetPetQuery(id);

    if (isLoading)
        return (
            <div className="loading-pane">
                <h2 className="loading">Loading...</h2>
            </div>
        );
    return (
        <div className="flex flex-col lg:flex-row gap-4 max-h-max  mt-10">
            <div className="order-2 lg:order-1 container_border lg:w-[450px] lg:h-[80vh]  shadow-lg pt-4">
                <h2 className="text-2xl font-extrabold uppercase">
                    {pet.name}
                </h2>
                <p>
                    {pet.animal.toUpperCase()} - {pet.breed} - {pet.city},{" "}
                    {pet.state}{" "}
                </p>
                <hr className="my-4" />
                <div className="">
                    <h3 className="text-xl font-extrabold text-left p-6 ">
                        Pet Story
                    </h3>
                    <p className="px-6 text-left">{pet.description}</p>
                </div>

                <div>
                    <h3 className="text-xl font-extrabold text-left p-6 ">
                        Pet History
                    </h3>
                    <p className="px-6 text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iure, perspiciatis facere! Sapiente repellat at
                        deserunt aliquid maiores reiciendis pariatur asperiores
                        vel iste dolores, nobis enim.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-extrabold text-left p-6 ">
                        Pet Character Trait and Behavior
                    </h3>
                    <p className="px-6 text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iure, perspiciatis facere! Sapiente repellat at
                        deserunt aliquid maiores reiciendis pariatur asperiores
                        vel iste dolores, nobis enim.
                    </p>
                </div>
                <button className="mt-4" onClick={() => setShowModal(true)}>
                    I WANT TO ADOPT{" "}
                    <span className="font-extrabold text-[#646cff]">
                        {pet.name.toUpperCase()}
                    </span>
                </button>

                {showModal ? (
                    <Modal>
                        <div className="container_border m-2 p-8 flex flex-col text-center shadow-lg">
                            <h1>Are you sure you want to adopt {pet.name}?</h1>
                            <div className="buttons mt-4 flex gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        dispatch(addPet(pet));
                                        navigate(`/`);
                                    }}
                                >
                                    Yes
                                </button>
                                <button onClick={() => setShowModal(false)}>
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                ) : null}
            </div>
            <div className="order-1 lg:order-2 container_border shadow-lg flex-1 flex flex-col justify-between">
                <Carousel images={pet.images} />
            </div>
        </div>
    );
};

export default Details;
