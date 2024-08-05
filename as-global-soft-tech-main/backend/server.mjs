import http from "http"
import database from "./db.mjs"

let db = new database();

let server = http.createServer()

server.on("request", async (req, res) => {
    console.log(req.url);
    res.setHeader("access-control-allow-origin", '*')

    if (req.url == "/sales") {
        let data = ""

        // req.on("end", async ev => {
        res.end(JSON.stringify(await db.sales()))
        // })
    }


    if (req.url == "/buyProduct") {
        let data = ""
        req.setEncoding("utf-8")
        req.on("data", ev => {
            data += ev
        })
        req.on("end", async ev => {
            let obj = JSON.parse(data)
            console.log(obj);
            await db.buyProduct(obj)
            res.end("item purchased")
        })
    }
    if (req.url == "/deleteProduct") {
        let data = ""
        req.setEncoding("utf-8")
        req.on("data", ev => {
            data += ev
        })
        req.on("end", async ev => {
            let obj = JSON.parse(data)
            console.log(obj);
            await db.deleteProduct(obj.name)
            res.end("product deleted")
        })
    }

    if (req.url == "/addProduct") {
        let data = ""
        req.setEncoding("utf-8")
        req.on("data", ev => {
            data += ev
        })
        req.on("end", async ev => {
            let obj = JSON.parse(data)
            console.log(obj);
            await db.addProduct(obj)
            res.end("product added")
        })
    }

    if (req.url == "/getAllProducts") {
        let data = await db.getAllProducts();
        res.end(JSON.stringify(data))
    }

    if (req.url == "/updateCost") {
        let data = ""
        req.setEncoding("utf-8")
        req.on("data", ev => {
            data += ev
        })
        req.on("end", async ev => {
            let obj = JSON.parse(data)
            console.log(obj);
            await db.updateCost(obj)
            res.end("cost updated")
        })
    }

})


server.listen(8080, "0.0.0.0", ev => {
    console.log("on 8080");
})