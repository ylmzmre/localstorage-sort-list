<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="container" style="width: 500px; height: 500px">
      <AddLink></AddLink>
      <div style="border-top: 3px solid #efefef; margin: 25px 0 15px 0"></div>
      <ListItem></ListItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddLink from "@/components/AddLink.vue";
import ListItem from "@/components/ListItem.vue";

@Component({
  components: {
    AddLink,
    ListItem,
  },
})
export default class Home extends Vue {}
</script>
