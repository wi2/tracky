import { Resolver, Query } from 'type-graphql'

import { IGenerateResolverOptionsType } from '../../../interfaces/resolvers/options'
import { DEFAULT_OPTIONS } from '../contants'

function generateFindResolver(
  ModelCls: any,
  name: string,
  options: IGenerateResolverOptionsType,
  params: {}
) {
  const allOptions = { DEFAULT_OPTIONS, ...options }

  @Resolver({ isAbstract: allOptions.isAbstract })
  abstract class FindResolver {
    @Query(() => [ModelCls], { name })
    async find() {
      if (allOptions.queryBuilder) {
        return ModelCls.createQueryBuilder().getMany()
      }
      return ModelCls.find(params)
    }
  }
  return FindResolver
}

export default generateFindResolver
