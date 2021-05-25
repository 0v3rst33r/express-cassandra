import { types } from 'cassandra-driver';

export function saveAsync(model: any): Promise<any> {
    return model.saveAsync({ consistency: types.consistencies.localQuorum });
}

export function batchSaveAsync(models: Array<any>): Promise<Array<any>> {
    return Promise.all(models.map((model) => saveAsync(model)));
}
