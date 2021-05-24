const models = new Map<string, any>();

function get(name: string): any {
    if (!models.has(name)) {
        delete require.cache[require.resolve('express-cassandra')];
        const newModel = require('express-cassandra');
        models.set(name, newModel);
    }
    return models.get(name);
}

function discard(name: string): boolean {
    return models.delete(name);
}

function clear(): void {
    models.clear();
}

const keyspaces = require('./keyspaces');

module.exports = {
    get, discard, clear, keyspaces
}