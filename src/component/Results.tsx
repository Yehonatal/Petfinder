/* eslint-disable react/prop-types */
import { ChangeEvent, ReactElement, useState } from 'react'
import Pet from './Pet'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {  PetObj } from '../Types/APIResponsesTypes';

const Results = ({ pets }: {pets: PetObj[]}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const totalPages = Math.ceil(pets.length / itemsPerPage)
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages))

    const indexOfLastPet = validCurrentPage * itemsPerPage
    const indexOfFirstPet = indexOfLastPet - itemsPerPage
    const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet)

    const handlePageChange = (e: ChangeEvent<unknown>, pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className="container_border flex flex-1 flex-col justify-between shadow-lg">
            <div className="grid flex-1 grid-rows-2 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                {pets && pets.length ? (
                    currentPets.map((p) => (
                        <Pet
                            name={p.name}
                            breed={p.breed}
                            images={p.images}
                            location={`${p.city}, ${p.state}`}
                            id={p.id}
                            key={p.id}
                        />
                    ))
                ) : (
                    <div className="col-span-full row-span-full flex items-center justify-center">
                        <h1 className="text-center font-extrabold">
                            No Pets Found!
                        </h1>
                    </div>
                )}
            </div>
            <div className="flex justify-center border-t-[3px] border-[var(--border)] p-2">
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
    )
}

export default Results
