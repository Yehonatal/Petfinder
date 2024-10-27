/* eslint-disable react/prop-types */
import Pet from "./Pet";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
const Results = ({ pets }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(pets.length / itemsPerPage);
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

    const indexOfLastPet = validCurrentPage * itemsPerPage;
    const indexOfFirstPet = indexOfLastPet - itemsPerPage;
    const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

    const handlePageChange = (e, pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="border-2  shadow-lg flex-1 flex flex-col justify-between">
            <div className="flex-1 grid grid-cols-3 gap-4 p-4 grid-rows-2  ">
                {pets && pets.length ? (
                    currentPets.map((p) => (
                        <Pet
                            name={p.name}
                            animal={p.animal}
                            breed={p.breed}
                            images={p.images}
                            location={`${p.city}, ${p.state}`}
                            id={p.id}
                            key={p.id}
                        />
                    ))
                ) : (
                    <div className="flex items-center justify-center col-span-full row-span-full">
                        <h1 className="font-extrabold text-center">
                            No Pets Found!
                        </h1>
                    </div>
                )}
            </div>
            <div className="border-t-2 p-2 flex justify-center">
                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                        className="color-white"
                    />
                </Stack>
            </div>
        </div>
    );
};

export default Results;
