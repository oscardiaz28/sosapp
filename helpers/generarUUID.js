import { randomUUID } from 'crypto'
export const generarUUID = () => {
    return randomUUID().substring(0, 16)
}
