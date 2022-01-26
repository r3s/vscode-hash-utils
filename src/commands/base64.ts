export const base64Encode = (x: string) => {
    if (x === '') {return '';}

    return Buffer.from(x).toString('base64');
};

export const base64Decode = (x: string) => {
    if (x === '') {return '';}

    return Buffer.from(x, 'base64').toString();
};