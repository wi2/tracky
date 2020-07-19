import { InputType, Field } from 'type-graphql'

import TrackPropertyName from '../../enums/track-property-name'
import { IBaseProperty } from '../../interfaces/property'

@InputType()
export class PropertyCreateInput implements IBaseProperty {
  @Field() readonly name: TrackPropertyName
  @Field() readonly value: string
}
