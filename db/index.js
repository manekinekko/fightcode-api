const mapModel = (path) => (model) => {
    model.localUrl = `http://localhost:3000/${path}/${model.localUrl}`
    return model;
};

export const cats = require('./cats.json').cats.map(mapModel('cats'));
export const zombies = require('./zombies.json').zombies.map(mapModel('zombies'));