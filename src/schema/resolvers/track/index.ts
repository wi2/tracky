import {
  Resolver, Query, Mutation, Arg,
} from 'type-graphql'

import Track from '../../models/track'
import Account from '../../models/account'
import CreateTrack from './inputs/create'

const QUERY_OPTIONS = { relations: ['account'] }

@Resolver()
class TrackResolver {
  @Query(() => [Track])
  tracks() {
    return Track.find(QUERY_OPTIONS)
  }

  @Query(() => [Track])
  tracksByAccount(@Arg('id') id: string) {
    return Track.find({
      where: { account: { id } },
      ...QUERY_OPTIONS,
    })
  }

  @Query(() => Track)
  track(@Arg('id') id: string) {
    return Track.findOne({
      where: { id },
      ...QUERY_OPTIONS,
    })
  }

  @Mutation(() => Track)
  async trackCreate(@Arg('data') data: CreateTrack) {
    const account = await Account.findOne(data.accountId)
    if (!account) {
      throw new Error('Account not found!')
    }

    const track = Track.create(data)
    await track.save()

    return {
      ...track,
      account,
    }
  }
}

export default TrackResolver
