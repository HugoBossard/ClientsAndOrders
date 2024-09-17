const swaggerAutogen = require("swagger-autogen")();

const documentation = {
    info: {
        version: '1.0.0',                  // by default: '1.0.0'
        title: "Orders & Clients API",      // by default: 'REST API'
        description: "Clients can ask for different orders that represents training courses created by multiples compagnies.",
    },
    host: 'localhost:3000',                 // by default: 'localhost:3000'
    basePath: '/',                          // by default: '/'
    schemes: ['http'],                      // by default: ['http']
    consumes: ['application/json'],         // by default: ['application/json']
    produces: ['application/json'],         // by default: ['application/json']
    tags: [                                 // by default: []
        { name: 'orders', description: 'Order endpoints' },
        { name: 'clients', description: 'Client endpoints' }
    ]
};

const outputFile = "./swagger-output.json";

const routes = ["../api/db.json"];

swaggerAutogen(outputFile, routes, documentation).then(() => require("../server.js"));