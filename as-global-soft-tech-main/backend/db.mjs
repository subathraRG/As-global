import mysql from "mysql"

export default class data {

    sales() {

        return new Promise((res, rej) => {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(async function (err) {
                if (err) throw err;
                let id = await new data().getTotalSales()
                let query = `SELECT name,cost,ifNull(sum(count_s),0) count
                            from product
                            left join sales
                            on id = product_id
                            group by name`
                connection.query(query, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                    connection.end();
                    res(result)
                });
            })
        })
    }

    buyProduct(obj) {

        return new Promise((res, rej) => {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(async function (err) {
                if (err) throw err;
                let id = await new data().getTotalSales()
                connection.query(`insert into sales values(${id + 1},${obj.id},${obj.count});`, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                    connection.end();
                    res(result)
                });
            })
        })
    }

    deleteProduct(name) {

        return new Promise((res, rej) => {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(function (err) {
                if (err) throw err;

                connection.query(`delete from product where name='${name}';`, function (err, result, fields) {
                    if (err) throw err;
                    connection.end();
                    console.log(result);
                    res(result)
                });
            })
        })
    }

    updateCost(obj) {

        return new Promise((res, rej) => {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(function (err) {
                if (err) throw err;

                connection.query(`update product set cost = ${obj.cost} where name='${obj.name}';`, function (err, result, fields) {
                    if (err) throw err;
                    connection.end();
                    console.log(result);
                    res(result)
                });
            })
        })

    }


    getAllProducts() {
        return new Promise((res, rej) => {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(function (err) {
                if (err) throw err;

                connection.query(`select * from product;`, function (err, result, fields) {
                    if (err) throw err;
                    connection.end();
                    console.log(result);
                    res(result)
                });
            })
        })

    }

    getTotalProducts() {
        let id = 0;
        return new Promise((res, rej) => {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(function (err) {
                if (err) throw err;

                connection.query(`select max(id) from product;`, function (err, result, fields) {
                    if (err) throw err;
                    connection.end()
                    id = result[0]['max(id)']
                    console.log(id);
                    res(id)
                });
            })
        })
    }

    getTotalSales() {
        let id = 0;
        return new Promise((res, rej) => {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(function (err) {
                if (err) throw err;

                connection.query(`select max(sales_id) from sales;`, function (err, result, fields) {
                    if (err) throw err;
                    connection.end()
                    id = result[0]['max(sales_id)']
                    console.log(id);
                    res(id)
                });
            })
        })
    }

    addProduct(obj) {
        return new Promise((res, rej) => {

            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'asg'
            });
            connection.connect(async function (err) {
                if (err) throw err;
                let id = await new data().getTotalProducts()
                connection.query(`insert into product values (${id + 1},'${obj.name}',${obj.cost});`, function (err, result, fields) {
                    if (err) throw err;
                    res(true)
                });
            })
        })
    }

}