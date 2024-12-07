<template>
  <div>
    <img :src="homeData.images[0]" alt="" style="width: 200px" /><br />
    {{ homeData.title }}<br />
    {{ homeData.location.address }}{{ homeData.location.city
    }}{{ homeData.location.state }}<br />
    {{ homeData.guests }} guests<br />
    {{ homeData.pricePerNight }} / night <br />
  </div>
</template>

<script setup>
defineProps(["homeData"]);
</script>

<style scoped></style>
