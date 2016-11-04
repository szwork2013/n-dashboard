import xFetch from '../utils/xFetch';
import { apiUrl , authUrl } from '../utils/constant'
const global = {
  getRegion : async (parentId) =>{
    return xFetch(`${apiUrl}/globalRegions/${parentId}/region`)
  },
}
export default global;
