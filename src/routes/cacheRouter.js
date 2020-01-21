import { Router } from 'express';
import cacheController from '../controllers/cacheController';

const {
  createCache, getKeyCache, findAllKeysInCache, removeKeyFromCache, removeAllKeys
} = cacheController;

const cacheRouter = Router();

cacheRouter.post('/cache', createCache);
cacheRouter.get('/cache/:key', getKeyCache);
cacheRouter.get('/cache-keys', findAllKeysInCache);
cacheRouter.delete('/cache/:key', removeKeyFromCache);
cacheRouter.delete('/cache-keys', removeAllKeys);


export default cacheRouter;
