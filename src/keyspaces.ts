import { types } from 'cassandra-driver';

function saveAsync(model: any): Promise<any> {
    return model.saveAsync({ consistency: types.consistencies.localQuorum });
}

function batchSaveAsync(models: Array<any>): Promise<Array<any>> {
    return Promise.all(models.map((model) => saveAsync(model)));
}

module.exports = {
    saveAsync, batchSaveAsync
}