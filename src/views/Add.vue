<template>
  <div class="add-page">
    <div class="container" style="width: 500px; height: 500px">
      <router-link to="/">
        <span><i class="fas fa-arrow-left"></i> Return to List</span>
      </router-link>
      <AddLinkForm></AddLinkForm>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddLinkForm from "@/components/AddLinkForm.vue";

@Component({
  components: {
    AddLinkForm,
  },
})
export default class Add extends Vue {}
</script>

<style scoped>
a {
  color: initial;
  text-decoration: none;
}

a:hover {
  color: initial;
}

.add-page {
  text-align: left;
}
</style>
