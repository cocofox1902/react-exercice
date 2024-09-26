'use strict';

import * as Hapi from '@hapi/hapi';

async function getData(type: string, search: string, format: "json" | "wookiee") {
    const response = await fetch(`https://swapi.dev/api/${type}/?search=${search}&format=${format}`);
    console.log(response);

    if (format === "wookiee") {
        const textData = await response.text();
        const fixedResponse = textData.replace(/whhuanan/g, '"whhuanan"');
        const data = JSON.parse(fixedResponse);
        return data;
    } else {
        const data = await response.json();
        return data;
    }
}


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['X-Requested-With']
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload as { username: string; password: string };

            const validUser = {
                username: 'Luke',
                password: 'DadSucks'
            };

            if (username === validUser.username && password === validUser.password) {
                return h.response({
                    status: 'success',
                    message: 'Login successful!',
                    username
                }).code(200);
            } else {
                return h.response({
                    status: 'fail',
                    message: 'Invalid username or password'
                }).code(401);
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/search',
        handler: async (request: any, h: any) => {
            const { type, search, format } = request.query;

            if (type && search && format) {
                const data = await getData(type, search, format);
                console.log(data);
                return h.response(data).code(200);
            }

            return h.response({ message: 'Missing required parameters' }).code(400);
        },
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();