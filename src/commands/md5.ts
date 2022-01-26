const crypto = require('crypto');

export const md5 = (x: string) => {
    if (x === '') {return '';}
    
    return crypto.createHash('md5').update(x).digest('hex');
};