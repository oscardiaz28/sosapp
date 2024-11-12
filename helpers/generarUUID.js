import { randomUUID } from 'crypto'

export const generarUUID = () => {
    const uuid = randomUUID(); // Genera un UUID estándar de 36 caracteres
    return Buffer.from(uuid.replace(/-/g, ''), 'hex'); // Convierte el UUID a un buffer de 16 bytes
};
