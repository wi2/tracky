import { buildSchema } from 'type-graphql'

import AccountResolver from './resolvers/account'
import TrackResolver from './resolvers/track'

function getSchema() {
  try {
    return buildSchema({
      resolvers: [AccountResolver, TrackResolver],
    })
  } catch (e) {
    throw new Error(`buildSchema Error, ${e}`)
  }
}

export default getSchema
