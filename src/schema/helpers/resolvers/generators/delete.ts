import { Resolver, Mutation, Arg } from 'type-graphql'

import { IGenerateResolverOptionsType } from '../../../interfaces/resolvers/options'
import { DEFAULT_OPTIONS } from '../contants'

function generateDeleteResolver(
  ModelCls: any,
  name: string,
  options: IGenerateResolverOptionsType,
  params: {}
) {
  const allOptions = { DEFAULT_OPTIONS, ...options }

  @Resolver({ isAbstract: allOptions.isAbstract })
  class DeleteResolver {
    @Mutation(() => ModelCls, { name })
    async delete(@Arg('id') id: string) {
      const item = await ModelCls.delete(id)
      return item
    }
  }
  return DeleteResolver
}

export default generateDeleteResolver
