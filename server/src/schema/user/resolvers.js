import * as crypto from 'crypto';
import uuid from 'uuid/v1';
import models from '../../database/model';

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return await models.User.findAll();
    }
  },
  Mutation: {
    loginUser: async(obj, args, ctx, info) => {
      const { email, password } = args;
      const passwordHash = crypto.createHash('md5').update(password).digest("hex");

      return await models.User.findOne({ where: { email, passwordHash } });
    },
    createUser: async (obj, args, ctx, info) => {
      const id = uuid();
      const { email, password, company, city } = args.data;
      const passwordHash = crypto.createHash('md5').update(password).digest("hex");

      const newUser = {
        id,
        email,
        passwordHash,
        company,
        city,
      };
      await models.User.create(newUser);

      return true;
    },
    editUser: async (obj, args, ctx, info) => {
      const { data: { email, password, company, city }, id } = args;
      const passwordHash = crypto.createHash('md5').update(data.password).digest("hex");

      const updatedUser = {
        email,
        passwordHash,
        company,
        city,
      };
      await models.User.update(updatedUser, { where: { id } });

      return models.User.findByPk(id);
    }
  }
}

export default resolvers;
