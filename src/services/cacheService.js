/* eslint-disable no-useless-catch */
import Cache from '../models/Cache';

class CacheService {
  /**
     * @param  {object} cacheInfo
     * @returns {Promise}
     * @description Creates a new cache
     */
  static async createCache(cacheInfo) {
    try {
      const cache = new Cache(cacheInfo);
      await cache.save();
      return cache;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @param  {object} key
     * @returns {Promise}
     * @description Return cached data of a given key
     */
  static async findCacheByKey(key) {
    try {
      const cache = await Cache.findOne({ key }).exec();
      return cache;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @returns {Promise}
     * @description Returns all keys in a cache
     */
  static async findAllKeysInCache() {
    try {
      const cache = await Cache.find({}).exec();
      return cache;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @param  {string} cacheInfo
     * @returns {Promise}
     * @description Removes a given key from the cache
     */
  static async removeKeyFromCache(key) {
    try {
      const cache = await Cache.find({ key });
      if (cache) {
        await Cache.deleteMany({ key }).exec();
      }
    } catch (error) {
      throw error;
    }
  }

  /**
     * @returns {Promise}
     * @description Removes all keys from cache
     */
  static async removeAllKeysFromCache() {
    try {
      await Cache.deleteMany({}).exec();
    } catch (error) {
      throw error;
    }
  }
}

export default CacheService;
