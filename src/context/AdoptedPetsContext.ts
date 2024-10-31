import { createContext } from 'react'
import { PetObj } from '../Types/APIResponsesTypes'

export interface AdoptedPetsContextType {
    adoptedPets: PetObj[],
    setAdoptedPets: (pets: PetObj[]) => void,
}

const adoptedPetsContext = createContext<AdoptedPetsContextType | null >(null)

export default adoptedPetsContext
