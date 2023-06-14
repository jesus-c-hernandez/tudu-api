import { Auth, User } from '../interfaces';
import { UserModel } from '../models';
import { verify } from '../utils';
import { generateToken } from '../utils';

export const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email: email });
  if (!user) return { msg: 'USER_NOT_FOUND' };

  const passwordHash = user.password;
  const isCorrect = await verify(password, passwordHash);

  if (!isCorrect) return 'PASSWORD_INCORRECT';

  const token = generateToken(user.email);

  return { user: { email: user.email, name: user.name, id: user.id }, token };
};

export const registerUser = async (user: User) => {
  const userExists = await UserModel.findOne({ email: user.email });

  if (userExists) {
    return 'USER_ALREADY_EXISTS';
  }

  const { name, email, _id } = await UserModel.create(user);

  const token = generateToken(user.email);
  return { user: { email, name, id: _id }, token };
};
