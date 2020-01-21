/* eslint-disable array-callback-return */

import Util from '../utils/utils';
import cacheService from '../services/cacheService';
import cacheContent from '../utils/generateRandomCache';

const util = new Util();

export default class cacheController {
  /**
     * @param  {object} req
     * * @param  {object} res
     * @returns {Promise}
     * @description Creates a new cache
     */
  static async createCache(req, res) {
    const { key } = req.body;
    if (!key) {
      util.setError(401, 'Please provide a key for the cache.');
      util.send(res);
    }
    const cacheData = {
      content: cacheContent(),
      key,
    };
    try {
      const cache = await cacheService.createCache(cacheData);
      util.setSuccess(201, 'Cache successfully created', cache);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  /**
     * @param  {object} req
     * * @param  {object} res
     * @returns {Promise}
     * @description Get cached data given the key
     */
  static async getKeyCache(req, res) {
    const { key } = req.params;
    if (!key) {
      util.setError(401, 'A key is required.');
      return util.send(res);
    }
    try {
      const cacheToFind = await cacheService.findCacheByKey(key);
      if (!cacheToFind) {
        const cache = {
          content: cacheContent(),
          key,
        };
        const createdCache = await cacheService.createCache(cache);
        util.setSuccess(200, 'Cache miss', { content: createdCache.content });
        return util.send(res);
      }
      util.setSuccess(200, 'Cache hit', cacheToFind);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async findAllKeysInCache(req, res) {
    try {
      const cache = await cacheService.findAllKeysInCache();
      const cacheKeys = [];
      if (cache.length > 0) {
        cache.map((item) => {
          cacheKeys.push(item.key);
        });
        util.setSuccess(200, 'Cache keys', cacheKeys);
        return util.send(res);
      }
      util.setSuccess(200, 'No cache keys found.', []);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async removeKeyFromCache(req, res) {
    const { key } = req.params;
    if (!key) {
      util.setError(400, 'Provide the key');
      return util.send(res);
    }
    try {
      await cacheService.removeKeyFromCache(key);
      util.setSuccess(200, 'Key successfully removed');
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async removeAllKeys(req, res) {
    try {
      await cacheService.removeAllKeysFromCache();
      util.setSuccess(200, 'All Keys successfully removed');
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}
