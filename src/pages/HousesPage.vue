<script setup>
import { onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

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
    <h1>houses</h1>

</template>


<style scoped></style>