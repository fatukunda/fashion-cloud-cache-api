import { Router } from 'express';
import cacheController from '../controllers/cacheController';

const { createCache } = cacheController;

const cacheRouter = Router();

// Create cache
cacheRouter.post('/cache', createCache);


export default cacheRouter;
