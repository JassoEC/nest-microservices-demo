import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  RMQ_HOST: get('RMQ_HOST').required().asString(),
};
