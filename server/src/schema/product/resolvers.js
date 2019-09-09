import products from '../../data/products';

const resolvers = {
  Query: {
    products: async (obj, args, ctx, info) => {
      return products
    }
  }
}

export default resolvers;
