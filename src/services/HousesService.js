import App from "../App.vue";
import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class HousesService {
    async createHouse(value) {
        const response = await api.post('api/houses', value)
        logger.log('house created', response.data)
        const newHouse = new House(response.data)
        AppState.houses.push(newHouse)
    }
    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('got houses baby', response.data)
        const house = response.data.map(housePojo => new House(housePojo))
        AppState.houses = house
    }
}
export const housesService = new HousesService()