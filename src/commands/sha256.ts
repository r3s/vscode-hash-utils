const crypto = require('crypto');

export const sha256 = (x: string) => {
    if (x === '') {return '';}
    
    return crypto.createHash('sha256').update(x).digest('hex');
};
