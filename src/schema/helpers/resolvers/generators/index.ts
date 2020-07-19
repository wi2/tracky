import { generatorType } from '../contants'
import generateCreateResolver from './create'
import generateFindResolver from './find'
import generateFindByResolver from './find-by'
import generateFindOneResolver from './fine-one'
import generateUpdateResolver from './update'
import generateDeleteResolver from './delete'

const generators: { [k: string]: generatorType } = {
  find: generateFindResolver,
  findOne: generateFindOneResolver,
  findBy: generateFindByResolver,
  create: generateCreateResolver,
  update: generateUpdateResolver,
  delete: generateDeleteResolver,
}

export default generators
