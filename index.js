import jsonServer from 'json-server';
import { cats, zombies } from './db';
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const route = jsonServer.router({ cats, zombies });
server.use(middlewares);
server.use(route);
server.listen(3000, () => console.log('Server is running'));