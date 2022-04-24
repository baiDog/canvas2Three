const coffeeController = require("../controllers/coffeeController");
const { coffeesSchema } = require("../docs/coffees");

const APIPATH = "/api/";
const VERSION = "v1";
const ENDPOINT = "/coffees";

const getFullPath = (method = "") => `${APIPATH}${VERSION}${ENDPOINT}${method}`;

const routes = [
    {
        method: "GET",
        url: getFullPath(),
        schema: coffeesSchema.list,
        handler: coffeeController.getList,
    },
    {
        method: "GET",
        url: getFullPath("/:id"),
        schema: coffeesSchema.detail,
        handler: coffeeController.get,
    },
    {
        method: "POST",
        url: getFullPath(),
        schema: coffeesSchema.add,
        handler: coffeeController.add,
    },
    {
        method: "PUT",
        url: getFullPath("/:id"),
        schema: coffeesSchema.update,
        handler: coffeeController.update,
    },
    {
        method: "DELETE",
        url: getFullPath("/:id"),
        schema: coffeesSchema.delete,
        handler: coffeeController.delete,
    },
];

module.exports = routes;
