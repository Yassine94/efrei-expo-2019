import models from '../../database/model';
import uuid from 'uuid/v1';

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return await models.User.findAll();
    }
  },
  Mutation: {
    loginUser: async(obj, args, ctx, info) => {
      const { email, password } = args;
      return await models.User.findOne({where: { email, passwordHash: password }});
    },
    createUser: async (obj, args, ctx, info) => {
      const id = uuid();
      const { email, company, city } = args.data;

      const newUser = {
        id,
        email,
        passwordHash: "0cc175b9c0f1b6a831c399e269772661", // TODO Generate MD5 password here
        company,
        city,
      };
      await models.User.create(newUser);

      return true;
    },
    editUser: async (obj, args, ctx, info) => {
      const { data, id } = args;

      const updatedUser = {
        email: data.email,
        company: data.company,
        city: data.city,
      }
      await models.User.update(updatedUser, { where: { id } })

      return models.User.findByPk(id);
    }
  }
}

export default resolvers;
