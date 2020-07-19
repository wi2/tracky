import Account from '../../models/account'
import generateResolver from '../../helpers/resolvers'
import { AccountCreateInput, AccountUpdateInput } from './inputs-type'

export default generateResolver(
  Account,
  [
    { method: 'find', queryBuilder: false, select: ['id', 'name'] },
    'findOne',
    { method: 'findBy', by: 'name' },
    { method: 'create', IInput: AccountCreateInput },
    { method: 'update', IInput: AccountUpdateInput },
    { method: 'delete', auth: true },
  ], // method with option
  { auth: true }, // resolver options
  { relations: ['tracks'] }
)
