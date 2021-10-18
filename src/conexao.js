const { Pool } = require('pg');

const pool = new Pool({
    user: 'nxpfcxnsuppwue',
    host: 'ec2-52-70-120-204.compute-1.amazonaws.com',
    database: 'dd3fi3b20gpk5c',
    password: 'bb48b77345a329e2d89a3c37ddc1b9cf610a65a25f68d02fd77114319eca2420',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}