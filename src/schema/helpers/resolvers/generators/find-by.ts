import { Like } from 'typeorm'
import { Resolver, Query, Arg } from 'type-graphql'

import { IGenerateResolverOptionsType } from '../../../interfaces/resolvers/options'
import { DEFAULT_OPTIONS } from '../contants'

function generateFindByResolver(
  ModelCls: any,
  name: string,
  options: IGenerateResolverOptionsType,
  params: {}
) {
  const attr = options.by || 'id'
  const allOptions = { DEFAULT_OPTIONS, ...options }

  @Resolver({ isAbstract: allOptions.isAbstract })
  abstract class FindByResolver {
    @Query(() => [ModelCls], { name })
    async findBy(@Arg(attr) value: string) {
      return ModelCls.find({
        where: { [attr]: Like(`%${value}%`) },
        ...params,
      })
    }
  }
  return FindByResolver
}

export default generateFindByResolver
