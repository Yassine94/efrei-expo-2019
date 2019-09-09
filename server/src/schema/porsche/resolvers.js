import porsches from '../../data/porsches';

const resolvers = {
  Query: {
    porsches: async (obj, args, ctx, info) => {
      return porsches
    }
  }
}

export default resolvers;
