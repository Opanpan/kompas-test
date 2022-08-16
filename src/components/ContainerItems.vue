<template>
  <div>
    <div class="col-12">
      <h2>{{ item }}</h2>
    </div>
    <div class="col-12">
      <h5>Pengeluaran Bulan Ini Rp {{ calculateTotal(filterItems) }}</h5>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
      <div class="col" v-for="(item, i) in filterItems" :key="i">
        <card-item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardItem from '../components/CardItem.vue';

export default {
  name: 'ContainerItems',
  components: {
    CardItem,
  },
  props: {
    item: {
      type: String,
      default: () => '',
    },
    index: {
      type: Number,
      default: () => 0,
    },
  },
  computed: {
    ...mapState('storeItems', ['items', 'groupItems']),

    filterItems() {
      let result = [];
      this.items.forEach((i) => {
        if (this.groupItems[this.index] === i[0].tanggal.slice(3, i[0].tanggal.length)) {
          result.push(i);
        }
      });
      return result;
    },
  },
  methods: {
    calculateTotal(val) {
        let result = 0
        val.forEach(el => {
            el.forEach(i => {
                result += i.pengeluaran
            })
        })
        return result;
    }
  }
};
</script>

<style lang="scss" scoped></style>
