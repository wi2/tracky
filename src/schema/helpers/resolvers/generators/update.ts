import { Resolver, Mutation, Arg, InputType, Field } from 'type-graphql'

import { IGenerateResolverOptionsType } from '../../../interfaces/resolvers/options'
import { DEFAULT_OPTIONS } from '../contants'

function generateUpdateResolver(
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
  abstract class Update extends IInput {}

  @Resolver({ isAbstract: allOptions.isAbstract })
  class UpdateResolver {
    @Mutation(() => ModelCls, { name })
    async update(@Arg('id') id: string, @Arg('data') data: Update) {
      const item = await ModelCls.update(id, data)
      return item
    }
  }
  return UpdateResolver
}

export default generateUpdateResolver
