import { Response } from 'express';

const handleHttp = (res: Response, err: string, errorRaw?: any) => {
  console.log(errorRaw);
  console.log(typeof errorRaw);
  res.status(500).send({ err });
};

export { handleHttp };
