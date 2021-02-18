"use strict";

const Hapi = require( "@hapi/hapi" );
const plugins = require( "./plugins" );
const routes = require( "./routes" );

module.exports.createServer = async config => {
    console.log("Createing server")
    console.log("")
    const server = Hapi.server( config );
    // register plugins
    await plugins.register( server );

    // register routes
    await routes.register( server );
    console.log("Server Created")
    console.log("")
    return server;
    
};