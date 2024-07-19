<script setup>
import { House } from '../models/House.js'

defineProps({ houseProp: { type: House } })
</script>


<template>
  <div class="row house-card">
    <div class="col-md-6 px-0">
      <img :src="houseProp.imgUrl" :alt="`${houseProp.year}`" class="house-img img-fluid">
    </div>
    <div class="col-md-6">
      <div class="p-2 d-flex flex-column justify-content-between h-100">
        <div>
          <h2>`{{ houseProp.year }} House. {{ houseProp.bedrooms }} Bedroom, {{ houseProp.bathrooms }} Bathroom``</h2>
          <h3>{{ '$' + houseProp.price }}</h3>
        </div>
        <div>
          <h3>Listed on {{ houseProp.createdAt.toLocaleDateString() }}</h3>
          <p>{{ houseProp.description }}</p>
          <div class="text-end">
            <img :src="houseProp.creator.picture" :alt="houseProp.creator.name"
              :title="`Contact ${houseProp.creator.name} for more information`" class="creator-picture">
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<style scoped>
.house-img {
  min-height: 100%;
  width: 100%;
  object-fit: cover;
}

.house-card {
  background-color: rgb(215, 215, 215);
  box-shadow: 0 7px 15px black;
  border-style: solid;
  border-width: 6px;
}

.creator-picture {
  height: 15vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
</style>