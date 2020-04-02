
const binaryAgent = (binaries) =>
    binaries
    .split(' ')
    .map(binary => String.fromCodePoint(parseInt(binary, 2)))
    .join('');