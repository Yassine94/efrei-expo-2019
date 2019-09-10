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
    genericModels: async (obj, args, ctx, info) => {
      return await models.GenericModel.findAll();
    },
  },
  Mutation: {
    createPorsche: async (obj, args, ctx, info) => {
      const id = uuid();

      const { model, imageURL, GenericModelId } = args.data;
      const newPorsche = {
        id,
        GenericModelId,
        model,
        imageURL,
      };

      await models.Porsche.create(newPorsche);

      return true;
    },
    editPorsche: async (obj, args, ctx, info) => {
      const { model, imageURL } = args.data;
      const index = porsches.findIndex((porsche) => porsche.id === args.id);

      console.log(model);

      const genericModel =   {
        "id": "37c24ab4-a1af-4902-a079-f468a125d1c8",
      	"model": "718",
      	"imageURL": "https://files1.porsche.com/filestore/image/multimedia/none/911-carrange-jdp-2017/normal/3cf76e8c-6694-11e9-80c4-005056bbdc38;sN;twebp;c1696;gc/porsche-normal.webp",
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
