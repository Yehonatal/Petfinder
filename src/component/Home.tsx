import Search from './Search'
import Results from './Results'
import { useState, useDeferredValue, useMemo } from 'react'
import { PetAPIResponse, PetObj } from '../Types/APIResponsesTypes'

const Home = () => {
    const [pets, setPets] = useState<PetObj[]>([])
    const deferedPets = useDeferredValue(pets)

    const renderedPets = useMemo(
        () => <Results pets={deferedPets} />,
        [deferedPets],
    )

    return (
        <div className="mt-10 flex max-h-max flex-col gap-4 md:flex-row lg:flex-row">
            <Search setPets={setPets} />
            {renderedPets}
        </div>
    )
}

export default Home
