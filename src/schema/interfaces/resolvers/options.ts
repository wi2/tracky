import { InterfaceType } from 'type-graphql'

@InterfaceType()
export class IGenerateResolverOptionsType {
  auth?: boolean
  isAbstract?: boolean
  by?: string
  IInput?: any
  queryBuilder?: boolean
  select?: string[]
}

@InterfaceType()
export class IMethodOptionsType extends IGenerateResolverOptionsType {
  method: string
}
