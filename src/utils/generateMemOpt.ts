import { randomUUID } from 'node:crypto';

export const generateMemOpt = () => ({
  id: randomUUID(),
  likes: Math.floor(Math.random() * 99),
});
