import { registerEnumType } from 'type-graphql'

enum TrackEventType {
  ACTION = 'ACTION',
  DISPLAY = 'DISPLAY',
  AUTO = 'AUTO',
}

registerEnumType(TrackEventType, { name: 'TrackEventType' })

export default TrackEventType
