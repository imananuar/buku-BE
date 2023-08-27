const uuidV4 = () => {
    const init = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return init.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
    
}

export default { uuidV4 }