import { registerEnumType } from 'type-graphql'

enum TrackPropertyName {
  VERSION = 'VERSION',
  URL = 'URL',
  // list to define
}

registerEnumType(TrackPropertyName, { name: 'TrackPropertyName' })

export default TrackPropertyName
