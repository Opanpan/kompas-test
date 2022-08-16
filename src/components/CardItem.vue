<template>
  <div class="card h-100">
    <div class="card-body">
      <div class="row">
        <div class="col-12 d-flex justify-content-start">
          <p class="item-title">{{ item[0].tanggal }}</p>
        </div>
      </div>

      <hr class="mt-0" />

      <div class="row">
        <div v-for="(item, i) in item" :key="i">
          <div class="row">
            <div class="col">
              <p>{{ item.jam }}</p>
            </div>
            <div class="col">
              <p>{{ item.nama }}</p>
            </div>
            <div class="col">
              <p>Rp {{ item.pengeluaran }}</p>
            </div>
          </div>
          <hr class="mt-0" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="fw-bold">Total</p>
        </div>
        <div class="col">
          <p class="fw-bold">Rp {{ calculateTotal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    calculateTotal() {
      const parseData = JSON.parse(JSON.stringify(this.item));
      if (parseData.length > 1) {
        return parseData.reduce((x, y) => x.pengeluaran + y.pengeluaran);
      } else {
        return parseData[0].pengeluaran;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.custom-card {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.25);
}

.item-title {
  font-weight: bold;
}
</style>
