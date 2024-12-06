<template>
  <div>
    <div
      v-for="hme in home"
      :key="hme.objectID"
      style="float: left; margin: 10px"
    >
      <HomeCard :home="home" />
    </div>
  </div>
</template>

<script setup>
import homes from "~/data/homes";
import HomeCard from "~/components/HomeCard";

const home = homes.slice(0, 3);
</script>

<style scoped></style>
