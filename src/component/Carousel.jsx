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
        <div className="flex lg:flex-col lg:h-[80vh] lg:gap-4">
            <div className="lg:w-full lg:h-[85%] object-cover flex justify-center">
                <img
                    src={images[active]}
                    alt="animal hero"
                    className="object-fit h-full w-full "
                />
            </div>

            <div className="lg:flex gap-2 w-[30%] lg:h-[15%] overflow-y-auto lg:w-full mt-2 p-2 scrollbar-thin scrollbar-thumb-gray-300  ">
                {images.map((photo, index) => (
                    <img
                        onClick={() => handleClick(index)}
                        key={photo}
                        src={photo}
                        alt="animal thumbnail"
                        className={`lg:w-[100px] lg:h-auto h-[50px] object-cover cursor-pointer  transition-transform duration-200 hover:scale-105 ${
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
