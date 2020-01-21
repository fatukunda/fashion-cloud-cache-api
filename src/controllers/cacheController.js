
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
}
