<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';


const houses = computed(() => AppState.houses)
onMounted(() => {
    getHouses()
})

async function getHouses() {
    try {
        await housesService.getHouses()
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex align-items-center gap-3">
                    <h1>Houses</h1>
                    <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#houseFormModal">Create Houses
                        Listing</button>
                </div>
            </div>
            <div v-for="house in houses" :key="house.id" class="col-12">
                <HouseCard :houseProp="house" />
            </div>
        </div>
    </div>
    <HouseFormModal />
</template>


<style scoped></style>