declare class DatabaseClient {
	constructor(url: string)
	save(collection: string, query: any, values: any): Promise<any>
    delete(collection: string): Promise<number>
    deleteOne(collection: string, query: any): Promise<number>
    deleteMany(collection: string, query: any): Promise<number>
    loadOne(collection: string, query: any): Promise<any>
    loadOneAndUpdate(collection: string, query: any, values: any, options?: any): Promise<any>
    loadOneAndDelete(collection: string, query: any, options?: any): Promise<any>
    loadMany(collection: string, query: any): Promise<any[]>
    count(collection: string, query: any): Promise<number>
    createIndex(collection: string, field: string, options?: { unique?: boolean, sparse?: boolean }): void
    static connect(url: string, options?: any): DatabaseClient
	close(): Promise<void>
    clearCollection(collection: string): Promise<void>
    dropDatabase(): Promise<void>
    toCanonicalId(id: any): string
    isNativeId(value: any): boolean
    toNativeId(id: any): any
    nativeIdType(): any
    driver(): any
}

export = DatabaseClient