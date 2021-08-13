<template>
  <div class="add-link">
    <div class="link-header">Add New Link</div>
    <div class="mb-3">
      <label for="nameFormControlInput" class="form-label">Link Name:</label>
      <input
        v-model="linkName"
        type="text"
        class="form-control"
        id="nameFormControlInput"
        placeholder="Stack Overflow"
        required
      />
    </div>
    <div class="mb-3">
      <label for="urlFormControlInput" class="form-label">Link URL:</label>
      <input
        v-model="linkUrl"
        type="url"
        class="form-control"
        id="urlFormControlInput"
        placeholder="htts://stackoverflow.com"
        required
      />
    </div>
    <button type="button" class="btn btn-dark" @click="subBtn">ADD</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AddLinkForm extends Vue {
  linkName: string;
  linkUrl: string;
  like: number;
  myObj: any;
  localData: any;

  constructor() {
    super();
    this.linkName = "";
    this.linkUrl = "";
    this.myObj = {};
    this.localData = [];
    this.like = 1;
  }

  created(): void {
    this.takeData();
  }

  takeData() {
    this.localData = this.getData();
  }

  subBtn() {
    this.takeData();
    this.createData();
    this.setData();
  }

  createData() {
    this.myObj = {
      linkName: this.linkName,
      linkUrl: this.linkUrl,
      like: this.like,
      time: new Date().getTime(),
    };
    this.localData.push(this.myObj);
    this.notiFunck();
    this.linkName = "";
    this.linkUrl = "";
  }

  setData() {
    console.log("set");
    localStorage.setItem("ItemData", JSON.stringify(this.localData));
  }

  getData(): any {
    console.log("get");
    if (localStorage.getItem("ItemData") !== null) {
      let storedNames = JSON.parse(localStorage.getItem("ItemData") || "{}");
      return storedNames;
    }
    return [];
  }

  notiFunck(): void {
    console.log("this.linkName", this.linkName);
    this.$notify({
      title: this.linkName,
      text: "added",
      type: "success",
    });
  }
}
</script>

<style scoped>
.add-link {
  margin-top: 25px;
}

.link-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

button {
  width: 28%;
  border-radius: 30px;
  padding: 10px;
  font-weight: bold;
  float: right;
  font-size: 17px;
}
</style>
