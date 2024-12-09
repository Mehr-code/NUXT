<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="float: left; margin: 10px"
    >
      <HomeCard :homeData="home" />
    </div>
  </div>
</template>

<script setup>
import homesData from "~/data/homes";
// import HomeCard from "~/components/HomeCard";
useHead({
  title: "Homepage",
  meta: [
    {
      name: "description",
      content: "This is a homepage!",
      key: "description",
    },
  ],
});

const homes = homesData.slice(0, 3);
</script>

<style scoped></style>
