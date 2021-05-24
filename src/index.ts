// tslint:disable
export const keyspaces = require('express-cassandra');
delete require.cache[require.resolve('express-cassandra')];
export const cassandra = require('express-cassandra');

export function saveAsync(model: any): Promise<any> {
    const f = model.saveAsync({ consistency: keyspaces.consistencies.localQuorum }); // TODO
    console.log('saveAsync', f);
    return f;
}

export function batchSaveAsync(models: Array<any>): Promise<Array<any>> {
    const b = Promise.all(models.map((model) => saveAsync(model)));
    console.log('batchSaveAsync', b);
    return b;
}