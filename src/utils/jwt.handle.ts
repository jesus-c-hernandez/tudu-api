import 'dotenv/config';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'token.0810823';

export const generateToken = (email: string) => {
  const jwt = sign({ email }, JWT_SECRET, { expiresIn: '7d' });
  return jwt;
};

export const verifyToken = async () => {};
