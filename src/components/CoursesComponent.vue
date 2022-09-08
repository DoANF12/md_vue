<template>
  <div class="container-fluid">
  <div class="row row-cols-1">
    <div class="col">
      <CarouselComponent :id="connections" :dataCourses="dataCoursesT"></CarouselComponent>
    </div>
    <div class="col">
      <CarouselComponent  :id="organization" :dataCourses="dataCoursesF"></CarouselComponent>
    </div>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import useCoursesRequestsAPI from "../api/index.js";
import CarouselComponent from "./Elements/CarouselComponent.vue";

const dataCourses = ref([]);
const connections = "con";
const organization = "org"

const dataCoursesT = computed(() => {
    return dataCourses.value.filter(x => x.is_favorite === true)
})
const dataCoursesF = computed(() => {
    return dataCourses.value.filter(x => x.is_favorite === false)
})
onMounted(async () => {
  getCourses();
  console.log(dataCourses.value);
});

const getCourses = async () => {
  const resCourses = await useCoursesRequestsAPI.getCourses();
  dataCourses.value = resCourses;
};
</script>
