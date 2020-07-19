import { Resolver, Mutation, Arg, InputType } from 'type-graphql'

import { IGenerateResolverOptionsType } from '../../../interfaces/resolvers/options'
import { DEFAULT_OPTIONS } from '../contants'

function generateCreateResolver(
  ModelCls: any,
  name: string,
  options: IGenerateResolverOptionsType,
  params: {}
) {
  const { IInput, ...otherOptions } = options
  const allOptions = { DEFAULT_OPTIONS, ...otherOptions }

  // need to redeclare inputType here because you can not use args for type
  // probably exist a better way...
  @InputType(name)
  abstract class Create extends IInput {}

  @Resolver({ isAbstract: allOptions.isAbstract })
  class CreateResolver {
    @Mutation(() => ModelCls, { name })
    async create(@Arg('data') data: Create) {
      const item = ModelCls.create(data)
      await item.save()
      return item
    }
  }
  return CreateResolver
}

export default generateCreateResolver
