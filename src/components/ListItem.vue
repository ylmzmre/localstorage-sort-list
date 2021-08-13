<template>
  <div>
    <div class="input-group mb-3 select-item">
      <select class="form-select" v-model="selected" @change="onChange()">
        <option disabled value="">Order by</option>
        <option value="1">Most Voted (Z > A)</option>
        <option value="2">Less Voted (A > Z)</option>
      </select>
    </div>
    <div
      id="itemList"
      class="list-item"
      v-for="(item, index) in itemsForList"
      :key="index"
    >
      <div class="list-item-btn">
        <strong>{{ item.like }}</strong>
        <span>POINTS</span>
      </div>
      <div class="list-item-text">
        <div class="list-item-header">{{ item.linkName }}</div>
        <div class="list-item-link">{{ item.linkUrl }}</div>
        <div class="list-item-point">
          <span @click="counterUp(item)"
            ><i class="fas fa-arrow-up"></i> Up Vote</span
          >
          <span @click="counterDown(item)"
            ><i class="fas fa-arrow-down"></i> Down Vote</span
          >
        </div>
      </div>
      <div
        class="list-item-delete"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
        @click="modalObj(item)"
      >
        <i class="fas fa-minus-circle"></i>
      </div>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
    ></b-pagination>
    <Modal :removeObj="removeObj" v-on:onClickModal="takeData"></Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import DataList from "../model/DataList";
import Modal from "@/components/Modal.vue";

@Component({
  components: {
    Modal,
  },
})
export default class ListItem extends Vue {
  data: DataList[] = [];
  perPage: number;
  currentPage: number;
  localData: any;
  selected: string;
  removeObj: any;

  constructor() {
    super();
    this.perPage = 5;
    this.currentPage = 1;
    this.localData = [];
    this.selected = "";
    this.data = [];
    this.removeObj = {};
  }

  get rows(): number {
    return this.data.length;
  }

  get itemsForList(): any {
    return this.data.slice(
      (this.currentPage - 1) * this.perPage,
      this.currentPage * this.perPage
    );
  }

  created(): void {
    this.takeData();
    this.reverseData();
  }

  takeData() {
    this.localData = this.getData();
    this.data = this.localData;
  }

  reverseData() {
    this.data.sort().reverse();
  }

  onChange() {
    if (this.selected === "1") {
      this.data.sort((a, b) => {
        return b.like - a.like;
      });
    } else {
      this.data.sort((a, b) => {
        return a.like - b.like;
      });
    }
  }

  counterUp(item: any) {
    item.time = new Date().getTime();
    item.like++;
    this.setData();
    this.dataSort();
  }

  counterDown(item: any) {
    item.time = new Date().getTime();
    item.like--;
    this.setData();
    this.dataSort();
  }

  dataSort() {
    this.data.sort((a, b) =>
      b.like > a.like ? 1 : a.like === b.like ? (b.time > a.time ? 1 : -1) : -1
    );
  }

  modalObj(val: any) {
    this.removeObj = val;
  }

  setData(): any {
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
}
</script>

<style scoped>
.select-item {
  width: 250px;
}

.form-select {
  background-color: #f1f1f1;
}

.list-item {
  display: flex;
  margin-bottom: 15px;
  padding: 6px;
}

.list-item:hover {
  border: 2px solid #dddddd;
  background-color: #fafafa;
  border-radius: 5px;
  padding: 5px;
}

.list-item:hover .list-item-delete {
  display: block;
}

.list-item-btn {
  width: 90px;
  border: 3px solid #cdcdcdcd;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 3px 3px 20px 3px;
  cursor: pointer;
  display: grid;
}

.list-item-btn strong {
  font-size: 30px;
  font-weight: bold;
}

.list-item-text {
  width: 80%;
  text-align: left;
  padding: 3px 3px 3px 15px;
  cursor: pointer;
}

.list-item-header {
  font-size: 20px;
  font-weight: 600;
}

.list-item-link {
  font-size: 15px;
  color: #bcbcbc;
}

.list-item-point {
  margin-top: 13px;
  color: #ababab;
  font-size: 13px;
  font-weight: 600;
}

.list-item-point span:nth-child(1) {
  margin-right: 75px;
}

.list-item-delete {
  display: none;
  cursor: pointer;
}

.list-item-delete i {
  position: relative;
  top: -15px;
  right: -12px;
  color: red;
  font-size: 23px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
}
</style>
