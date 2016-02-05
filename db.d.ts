import Client = require('./clients/client')

export declare function connect(url: string, options?: any): Promise<Client>