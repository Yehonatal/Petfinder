/* eslint-disable react/prop-types */
import { useState } from 'react'

interface IProps {
    images: string[]
}

const Carousel = ({
    images = ['http://pets-images.dev-apis.com/pets/none.jpg'],
}: IProps ) => {
    const [active, setActive] = useState<number>(0)

    const handleClick = (i:number) => { 
        setActive(i)
    }

    return (
        <div className="flex lg:h-[80vh] lg:flex-col lg:gap-4">
            <div className="flex justify-center object-cover lg:h-[85%] lg:w-full">
                <img
                    src={images[active]}
                    alt="animal hero"
                    className="object-fit h-full w-full"
                />
            </div>{' '}
            <div className="scrollbar-thin scrollbar-thumb-gray-300 mt-2 w-[30%] gap-2 overflow-y-auto p-2 lg:flex lg:h-[15%] lg:w-full">
                {images.map((photo, index) => (
                    <img
                        onClick={() => handleClick(index)}
                        key={photo}
                        src={photo}
                        alt="animal thumbnail"
                        className={`h-[50px] cursor-pointer object-cover transition-transform duration-200 hover:scale-105 lg:h-auto lg:w-[100px] ${
                            index === active
                                ? 'border-4 border-[#646cff] shadow-md'
                                : 'border border-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
