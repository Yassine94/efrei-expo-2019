import porsches from '../../data/porsches';
import genericModels from '../../data/genericModels';

const resolvers = {
  Query: {
    porsches: async (obj, args, ctx, info) => {
      return porsches;
    },
    genericModels: async (obj, args, ctx, info) => {
      return genericModels;
    },
  },
};

export default resolvers;
