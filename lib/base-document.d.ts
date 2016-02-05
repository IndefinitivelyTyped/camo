declare class BaseDocument {
	constructor()
    static documentClass(): any
    documentClass(): any
    /// Deprecated
    collectionName(): string
    /// Deprecated
    static collectionName(): string
    /// Deprecated
    id: any 

    schema(extension: any): void

    /*
     * Pre/post Hooks
     *
     * To add a hook, the extending class just needs
     * to override the appropriate hook method below.
     */
    preValidate(): any
    postValidate(): any
    preSave(): any
    postSave(): any
    preDelete(): any
    postDelete(): any

    generateSchema(): void

    validate(): void

    /*
     * Right now this only canonicalizes dates (integer timestamps
     * get converted to Date objects), but maybe we should do the
     * same for strings (UTF, Unicode, ASCII, etc)?
     */
    canonicalize(): void
    static create<T extends this>(data: any): T

    static createIndexes(): void

    populate(): this

    // TODO : EMBEDDED
    // 
    static populate<T extends this>(docs: T | T[], fields: string | string[]): Promise<T[]>

    getDefault(schemaProp: string): any

    toJSON(): any
}

export = BaseDocument