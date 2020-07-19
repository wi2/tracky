import { InputType, Field } from 'type-graphql'

import TrackEventType from '../../enums/track-event-type'
import { IBaseTrack } from '../../interfaces/track'
import { PropertyCreateInput } from '../property/input-types'

@InputType()
export class TrackCreateInput implements IBaseTrack {
  @Field() readonly type: TrackEventType
  @Field() readonly name: string
  @Field() readonly accountId: string
  @Field(() => [PropertyCreateInput]) readonly properties?: PropertyCreateInput[]
}
