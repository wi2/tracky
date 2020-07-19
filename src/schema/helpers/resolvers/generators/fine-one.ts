import { Resolver, Query, Arg } from 'type-graphql'

import { IGenerateResolverOptionsType } from '../../../interfaces/resolvers/options'
import { DEFAULT_OPTIONS } from '../contants'

function generateFindOneResolver(
  ModelCls: any,
  name: string,
  options: IGenerateResolverOptionsType,
  params: {}
) {
  const allOptions = { DEFAULT_OPTIONS, ...options }

  @Resolver({ isAbstract: allOptions.isAbstract })
  abstract class FindOneResolver {
    // @Authorized(allOptions.auth)
    @Query(() => ModelCls, { name })
    async findOne(@Arg('id') id: string, @Arg('skip') skip: string) {
      console.log('>>skip', skip)
      return ModelCls.findOne(id, params)
    }
  }

  return FindOneResolver
}

export default generateFindOneResolver
