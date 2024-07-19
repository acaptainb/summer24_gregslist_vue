<script setup>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { Modal } from 'bootstrap';

const editableHouseData = ref({
    levels: 0,
    bedrooms: 0,
    bathrooms: 0,
    year: 0,
    description: '',
    imgUrl: '',
    price: 0,
})
async function createHouse() {
    try {
        await housesService.createHouse(editableHouseData.value)
        editableHouseData.value = {
            levels: 0,
            bedrooms: 0,
            bathrooms: 0,
            year: 0,
            description: '',
            imgUrl: '',
            price: 0,
        }
        Modal.getOrCreateInstance('#houseFormModal').hide()
    } catch (error) {
        Pop.error(error)
    }

}

</script>


<template>
    <div class="modal fade" id="houseFormModal" tabindex="-1" aria-labelledby="houseFormModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="houseFormModalLabel">Create House</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createHouse()">
                        <div class="form-floating mb-3">
                            <input v-model="editableHouseData.levels" type="number" class="form-control" id="levels"
                                placeholder="House levels..." required>
                            <label for="make">House levels</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="editableHouseData.bathrooms" type="number" class="form-control"
                                id="bathrooms" placeholder="House bathrooms..." required>
                            <label for="model">House Bedrooms</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="bedrooms"
                                placeholder="House bedrooms..." required>
                            <label for="model">House Bedrooms</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="url" class="form-control" v-model="editableHouseData.imgUrl" id="imgUrl"
                                placeholder="House ImgUrl..." maxlength="500">
                            <label for="imgUrl">House ImgUrl</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea v-model="editableHouseData.description" class="form-control"
                                placeholder="House Description..." id="description" maxlength="500"></textarea>
                            <label for="description">House Description</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="editableHouseData.year" type="number" class="form-control" id="year"
                                placeholder="House Year..." required>
                            <label for="year">House Year</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="editableHouseData.price" type="range" class="form-control" id="price"
                                placeholder="House Price..." required>
                            <label for="price">House Price</label>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-dark" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>


                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>