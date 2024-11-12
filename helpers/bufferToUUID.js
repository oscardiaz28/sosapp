export const bufferToUUID = (buffer) => {
    const hex = buffer.toString('hex')
    return [
        hex.substring(0, 8),
        hex.substring(8, 12),
        hex.substring(12, 16),
        hex.substring(16, 20),
        hex.substring(20, 32),
    ].join('-');
}
