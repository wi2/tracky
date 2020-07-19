import {
  IGenerateResolverOptionsType,
  IMethodOptionsType,
} from '../../interfaces/resolvers/options'
import { generatorType, DEFAULT_METHOD, methods } from './contants'
import generators from './generators'

function naming(modelName: string, methodName: string): string {
  return `${modelName}${methodName.charAt(0).toUpperCase()}${methodName.slice(1)}`
}

function generateMultipleResolver(
  ModelCls: any, // model
  listMethods: Array<string | IMethodOptionsType>,
  globalOptions: IGenerateResolverOptionsType,
  params: {},
  namingFn: (a: string, b: string) => string = naming
) {
  const resolvers = (listMethods || DEFAULT_METHOD).map((m) => {
    const methodOptions = typeof m === 'string' ? { method: m } : m
    const { method, ...options } = methodOptions
    const selectedGenerator: generatorType = generators[method] || generators[methods.find]
    return selectedGenerator(
      ModelCls,
      namingFn(ModelCls.name, method),
      { ...globalOptions, ...options },
      params
    )
  })
  return resolvers
}

export default generateMultipleResolver
