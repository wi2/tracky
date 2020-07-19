import { InterfaceType } from 'type-graphql'

import IBase from './base'
import ITrack from './track'

@InterfaceType()
export abstract class IBaseAccount {
  name: string
  description?: string
}

// model
@InterfaceType()
abstract class IAccount extends IBaseAccount implements IBase {
  id: string

  // joints
  tracks: ITrack[]
}

export default IAccount
