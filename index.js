"use strict";

const app = require( "./app" );

const port = 8080;
const config = { port };

const start = async () => {
    try {
        // create the server
        console.log("Starting the process")
        console.log("")
        const server = await app.createServer( config );

        // start the server
        await server.start();

        console.log( `Server running at  http://localhost:${ port }` );
    } catch ( err ) {
        console.log( err );
        process.exit( 1 );
    }
}

start();