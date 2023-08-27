const Pool: any = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "buku",
    password: "postgres",
    port: 5432
})

export = pool