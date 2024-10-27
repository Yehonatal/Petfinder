/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({
    images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
    const [active, setActive] = useState(0);

    const handleClick = (i) => {
        setActive(i);
    };

    return (
        <div className="flex flex-col h-[80vh] gap-4">
            <div className="w-full h-[85%] object-cover flex justify-center">
                <img
                    src={images[active]}
                    alt="animal hero"
                    className="object-fit h-full w-full "
                />
            </div>

            <div className="flex gap-2 h-[15%] overflow-x-auto w-full mt-2 p-2 scrollbar-thin scrollbar-thumb-gray-300  ">
                {images.map((photo, index) => (
                    <img
                        onClick={() => handleClick(index)}
                        key={photo}
                        src={photo}
                        alt="animal thumbnail"
                        className={`w-[100px] h-auto object-cover cursor-pointer  transition-transform duration-200 hover:scale-105 ${
                            index === active
                                ? "border-4 border-[#646cff] shadow-md"
                                : "border border-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
