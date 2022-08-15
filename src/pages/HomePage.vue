<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Diari Jajan Februari</h2>
      </div>
      <div class="col-12">
        <h5>Pengeluaran Bulan Ini Rp {{ totalPengeluaran }}</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary">Tambah Item</button>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
      <div class="col" v-for="(item, i) in items" :key="i">
        <card-item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardItem from '../components/CardItem.vue';

export default {
  name: 'HomePage',
  components: {
    CardItem,
  },
  data() {
    return {
      status: 'faild',
    };
  },
  computed: {
    ...mapState('storeItems', ['items', 'totalPengeluaran']),
  },
  created() {
    this.getListItem();
  },
  methods: {
    ...mapActions('storeItems', ['getListItem']),
  },
};
</script>

<style lang="scss" scoped></style>
