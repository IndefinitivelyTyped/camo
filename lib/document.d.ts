import BaseDocument = require('./base-document')

declare class Document extends BaseDocument {
    meta: any
    save(): Promise<any>
    delete(): Promise<any>
    static deleteOne(query: any): Promise<number>
    static deleteMany(query: any): Promise<number>
    static loadOne<T extends this>(query: any, options?: any): Promise<T>
    static loadOneAndUpdate<T extends this>(query: any, values: any, options?: any): Promise<T>
    static loadOneAndDelete<T extends this>(query: any, options?: any): Promise<T>
    static loadMany<T extends this>(query: any, options?: any): Promise<T>
    static count(query: any): Promise<number>
    static clearCollection(): Promise<void>
}

export = Document