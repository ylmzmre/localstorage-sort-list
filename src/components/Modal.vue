<template>
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteModalLabel">Remove Link</h5>
          <span data-bs-dismiss="modal"><i class="fas fa-times"></i></span>
        </div>
        <div class="modal-body">
          <div>Do you want to remove:</div>
          <div>{{ this.removeObj.linkName }}</div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn btn-dark"
            data-bs-dismiss="modal"
            @click="notiFunck"
            v-on:click="$emit('onClickModal')"
          >
            OK
          </button>
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop([Object]) removeObj: any;

  notiFunck(): void {
    this.$notify({
      title: this.removeObj.linkName,
      text: "removed",
      type: "success",
    });
    this.removeStored();
    this.emitToList();
  }

  removeStored() {
    let localData = this.getData();
    localData.forEach((item: any, index: number) => {
      if (item.linkUrl === this.removeObj.linkUrl) {
        localData.splice(index, 1);
      }
    });
    this.setData(localData);
  }

  setData(obj: any) {
    console.log("set");
    localStorage.setItem("ItemData", JSON.stringify(obj));
  }

  getData(): any {
    console.log("get");
    if (localStorage.getItem("ItemData") !== null) {
      let storedNames = JSON.parse(localStorage.getItem("ItemData") || "{}");
      return storedNames;
    }
    return [];
  }

  emitToList() {
    this.$emit("emitToListHome");
  }
}
</script>

<style scoped>
.modal-header {
  background-color: #000000;
  color: #ffffff;
}

.modal-content {
  background-color: #f1f1f1;
}

.modal-body div:nth-child(1) {
  color: #ababab;
}

.modal-body div:nth-child(2) {
  color: #000000;
}

.modal-footer button {
  width: 28%;
  border-radius: 30px;
  margin: 0 50px;
  font-weight: bold;
}
</style>
