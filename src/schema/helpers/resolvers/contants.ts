import { IGenerateResolverOptionsType } from '../../interfaces/resolvers/options'

export const DEFAULT_OPTIONS: IGenerateResolverOptionsType = {
  auth: false,
  isAbstract: false,
}

export type generatorType = (
  ModelCls: any, // model
  name: string,
  newOptions: IGenerateResolverOptionsType,
  params: {}
) => any

export enum methods {
  find = 'find',
  findOne = 'find',
  findBy = 'findBy',
  create = 'create',
  update = 'update',
  delete = 'delete',
}

export const DEFAULT_METHOD = [methods.find, methods.findOne]
