import { buildSchema } from 'type-graphql'

import DefaultResolver from './resolvers'
import AccountResolver from './resolvers/account'
import TrackResolver from './resolvers/track'
import PropertyResolver from './resolvers/property'

function getSchema() {
  try {
    console.log('TrackResolver', TrackResolver)
    console.log('PropertyResolver', PropertyResolver)
    console.log('AccountResolver', AccountResolver)

    const generateResolvers = [...TrackResolver, ...PropertyResolver, ...AccountResolver]
    return buildSchema({
      resolvers: [DefaultResolver, ...generateResolvers],
      nullableByDefault: true,
    })
  } catch (e) {
    throw new Error(`buildSchema Error, ${e}`)
  }
}

export default getSchema
