import Property from '../../models/property'

import generateResolver from '../../helpers/resolvers'
import { PropertyCreateInput } from './input-types'

const PropertyResolver = generateResolver(
  Property,
  ['find', 'findOne', { method: 'create', IInput: PropertyCreateInput }],
  { auth: true },
  { relations: ['tracks'] }
)

export default PropertyResolver
