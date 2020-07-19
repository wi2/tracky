import { Resolver, Query } from 'type-graphql'
import App from '../models/app'

@Resolver()
abstract class DefaultResolver {
  @Query(() => App)
  async AppInfo() {
    return App.find()
  }
}

export default DefaultResolver
