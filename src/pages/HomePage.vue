<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Diari Jajan Februari</h2>
      </div>
      <div class="col-12">
        <h5>Pengeluaran Bulan Ini</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary">Tambah Item</button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem">
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      status: 'faild',
    };
  },
  computed: {
        ...mapState('storeItems', ['items']),

  }
};
</script>

<style lang="scss" scoped></style>
