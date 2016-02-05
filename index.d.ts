import { connect } from './lib/db'
import { getClient } from './lib/clients/index'

import Document = require('./lib/document')
import EmbeddedDocument = require('./lib/embedded-document')

export {
    connect,
    getClient,
    Document,
    EmbeddedDocument,
}
