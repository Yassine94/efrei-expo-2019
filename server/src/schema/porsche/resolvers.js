import porsches from '../../data/porsches';
import models from '../../database/model';
import uuid from 'uuid/v1';

const resolvers = {
  Porsche: {
    genericModel: async (obj, args, ctx, info) => {
      return await obj.getGenericModel();
    }
  },
  Query: {
    porsches: async (obj, args, ctx, info) => {
      return await models.Porsche.findAll();
    },
    searchPorsches: async (obj, args, ctx, info) => {
      return await models.Porsche.findAll({
        where: {
          'GenericModelId': args.GenericModelId
        },
      });
    },
    genericModels: async (obj, args, ctx, info) => {
      return await models.GenericModel.findAll();
    },
    genericModel: async (obj, args, ctx, info) => {
      return await models.GenericModel.findByPk(args.id);
    },
  },
  Mutation: {
    createPorsche: async (obj, args, ctx, info) => {
      const id = uuid();

      const { model, imageURL, GenericModelId, basePrice, maxSpeed } = args.data;
      const newPorsche = {
        id,
        GenericModelId,
        model,
        imageURL,
        basePrice,
        maxSpeed
      };

      await models.Porsche.create(newPorsche);

      return true;
    },
    editPorsche: async (obj, args, ctx, info) => {
      const { model, imageURL, basePrice, maxSpeed } = args.data;
      const index = porsches.findIndex((porsche) => porsche.id === args.id);

      const genericModel =   {
        "id": "37c24ab4-a1af-4902-a079-f468a125d1c8",
      	"model": "718",
      };

      porsches[index] = {
        ...porsches[index],
        genericModel,
        model,
        imageURL,
      }
      console.log(porsches[index]);

      return porsches[index];
    }
  },
};

export default resolvers;
