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
}

export default CacheService;
