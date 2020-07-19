import { InterfaceType } from 'type-graphql'

@InterfaceType()
abstract class IApp {
  name: string
  version: number
}

export default IApp
