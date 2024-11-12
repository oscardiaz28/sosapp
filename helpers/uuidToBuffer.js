export const uuidToBuffer = (uuid) => {
    return Buffer.from(uuid.replace(/-/g, ''), 'hex');
}