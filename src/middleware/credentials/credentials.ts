const bcrypt = require('bcrypt');

const uuidV4 = () => {
    const init = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return init.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
    
}

const hashPassword = (password: string): Promise<string> => {
    const saltRounds = 10;

    return bcrypt.genSalt(saltRounds)
        .then((salt: string) => {
            return bcrypt.hash(password, salt);
        })
        .then((hash: string) => {
            return hash;
        })
        .catch((err: Error) => {
            console.log(err.message);
            throw err;
        });
};

export default { hashPassword, uuidV4 }