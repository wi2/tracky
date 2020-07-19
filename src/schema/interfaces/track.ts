import { InterfaceType } from 'type-graphql'

import IBase from './base'
import IAccount from './account'
import IProperty from './property'

@InterfaceType()
export abstract class IBaseTrack {
  name: string
  type: string
  accountId: string
}

@InterfaceType()
abstract class ITrack extends IBaseTrack implements IBase {
  id: string

  // joints
  account: IAccount
  properties: IProperty[]
}

export default ITrack
