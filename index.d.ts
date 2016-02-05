import { connect } from './db'
import { getClient } from './clients'

import Document = require('./document')
import EmbeddedDocument = require('./embedded-document')

export {
    connect,
    getClient,
    Document,
    EmbeddedDocument,
}