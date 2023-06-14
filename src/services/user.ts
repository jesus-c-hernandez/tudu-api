import { User } from '../interfaces';
import { UserModel } from '../models';
import { encrypt } from '../utils';

export const insertUserServ = async ({ email, name, password }: User) => {
  const checkIs = await UserModel.findOne({ email: email });

  if (checkIs) return { msg: 'USER_ALREADY_EXISTS' };
  const passwordHash = await encrypt(password);
  const respInsert = await UserModel.create({
    email,
    name,
    password: passwordHash,
  });
  return respInsert;
};

export const getUserServ = async () => {
  const respGet = await UserModel.find({});
  return respGet;
};

export const updateUserServ = async (id: string, data: User) => {
  const user = await UserModel.findById({ _id: id });

  if (!user) {
    throw new Error('User not found!');
  }

  const respUpdate = await UserModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return respUpdate;
};

export const deleteUserServ = async (id: string) => {
  const user = await UserModel.findById({ _id: id });

  if (!user) {
    throw new Error('User not found!');
  }

  const respDelete = await UserModel.deleteOne({ _id: id });
  return respDelete;
};
