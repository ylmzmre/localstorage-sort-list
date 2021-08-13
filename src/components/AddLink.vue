<template>
  <div class="add-link">
    <router-link to="/Add">
      <div class="add-btn">+</div>
    </router-link>
    <div class="add-text">SUBMIT A LINK</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AddLink extends Vue {}
</script>

<style scoped>
a {
  color: initial;
  text-decoration: none;
}

a:hover {
  color: initial;
}

.add-link {
  height: 100px;
  border: 2px solid #dddddd;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 5px;
  display: flex;
}

.add-btn {
  width: 90px;
  border: 3px solid #cdcdcdcd;
  background-color: #f4f4f4;
  border-radius: 5px;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  cursor: pointer;
}

.add-text {
  font-size: 40px;
  font-weight: 600;
  padding: 13px 13px 13px 35px;
}
</style>
