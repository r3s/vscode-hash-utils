const crypto = require('crypto');

export const sha512 = (x: string) => {
    if (x === '') {return '';}
    
    return crypto.createHash('sha512').update(x).digest('hex');
};
