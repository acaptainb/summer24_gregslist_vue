import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class HousesService {
    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('got houses baby', response.data)
    }
}
export const housesService = new HousesService()