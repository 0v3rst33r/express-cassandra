const models = new Map<string, any>();

export function get(name: string): any {
    if (!models.has(name)) {
        delete require.cache[require.resolve('express-cassandra')];
        const newModel = require('express-cassandra');
        models.set(name, newModel);
    }
    return models.get(name);
}

export function discard(name: string): boolean {
    return models.delete(name);
}

export function clear(): void {
    models.clear();
}

export const keyspaces = require('./keyspaces');