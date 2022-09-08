<template>
  <div class="row mt-3" id="carouselRow" v-if="dataCoursesArray.length > 0">
    <nav class="navbar bg-light">
      <div
        class="container-fluid col-lg-10"
        :class="
          id === 'con'
            ? 'border-start border-3 border-success'
            : 'border-start border-3 border-warning'
        "
      >
        <a class="row navbar-brand col-8" href="#">
          <i
            width="20"
            height="20"
            :class="
              id === 'con'
                ? 'bg-success bi bi-infinity'
                : 'bg-warning bi bi-house'
            "
            class="col-auto mt-2 p-2 rounded-circle mx-3 input-group-text"
          ></i>
          <h6 v-if="id === con" class="col-auto mt-1 row">
            <P class="text-muted px-0 my-0" style="font-size: 0.7rem"
              >Trainning Powered By</P
            >
            MY CONNECTIONS
          </h6>
          <h6 v-else class="col-auto mt-1 row">
            <P class="text-muted px-0 my-0" style="font-size: 0.7rem"
              >Trainning Powered By</P
            >
            MY ORGANIZATIONS
          </h6>
        </a>
        <button v-if="id === 'org'" class="btn btn-warning">Your resources</button>
        <button v-if="id === 'con' || 'org'" class="btn btn-primary">View more</button>
      </div>
    </nav>
    <div v-bind:id="id" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="j === 0 ? 'active' : ''"
          id="doctorCard"
          v-for="(courses, j) in dataCoursesArray"
          :key="j"
        >
          <!-- <div
          class="carousel-item"
          :class="i === 0 ? 'active' : ''"
          id="doctorCard"
          v-for="(courses, i) in Math.floor(dataCourses.length/5)"
          :key="i"
        > -->
          <div class="row justify-content-center">
            <div class="col-2" v-for="(coursescard, i) in courses" :key="i">
              <div class="card col">
                <img
                  :src="coursescard.image + 1"
                  class="img-fluid"
                  width="200"
                  alt=""
                />
                <div
                  class="card-body"
                  :class="
                    id === 'con'
                      ? 'border-start border-3 border-success'
                      : 'border-start border-3 border-warning'
                  "
                >
                  
                  <div class="d-flex justify-content-between">
                    <span
                      :class="
                        coursescard.is_favorite === true
                          ? 'bg-success'
                          : 'bg-warning'
                      "
                      class="badge mb-lg-auto mt-1 rounded-1"
                    >
                      {{ coursescard.is_favorite }}</span
                    >
                    <i class="btn btn-sm bi bi-heart"></i>
                  </div>
                  <a class="h6 text-decoration-none ">{{
                    coursescard.company_name
                  }}</a>
                  <p style="font-size: 0.7rem">
                    {{ coursescard.company_name }} - {{ coursescard.title }}
                    <span class="badge py-md-0">{{
                      coursescard.is_favorite
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev px-5"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next px-5"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { toRef, defineProps, computed } from "vue";

const props = defineProps({
  dataCourses: Object,
  id: String,
});

const id = toRef(props, "id");

const dataCourses = toRef(props, "dataCourses");

const dataCoursesArray = computed(() => {
  let array = [];
  for (let x = 0; x <= dataCourses.value.length; x += 5) {
    if (x + 5 > dataCourses.value.lenght) {
      array.push(dataCourses.value.slice(x, dataCourses.value.length));
    } else {
      array.push(dataCourses.value.slice(x, x + 5));
    }
  }
  return array;
});
</script>

<style>
/*  */
/* i{
    width: 1em;
    height: 1em;
  }
  .bi-infinity{
    font-size: 1em;
    width: 1em; height: 1em;
    position:  0 0 1;
    top: 60px
  }
  .bi{
    font-size: 1em;
    width: 1em; height: 1em;
  } */
</style>
