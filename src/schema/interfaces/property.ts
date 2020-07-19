import { InterfaceType } from 'type-graphql'

import IBase from './base'

@InterfaceType()
export abstract class IBaseProperty {
  name: string
  value: string
}

@InterfaceType()
abstract class IProperty extends IBaseProperty implements IBase {
  id: string
}

export default IProperty
