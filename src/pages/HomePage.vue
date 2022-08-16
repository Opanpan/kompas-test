<template>
  <div class="container">
    
    <div class="row">
      <div>
        <h1>Diari Jajan Bulanan</h1>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-12">
        <modal-item />
      </div>
    </div>

    <div class="row">
      <div class="mt-2 mb-3" v-for="(item, i) in groupItems.reverse()" :key="i">
        <container-items :item="item" :index="i" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ModalItem from '../components/ModalItem.vue';
import ContainerItems from '../components/ContainerItems.vue';

export default {
  name: 'HomePage',
  components: {
    ModalItem,
    ContainerItems,
  },
  data() {
    return {
      status: 'faild',
    };
  },
  computed: {
    ...mapState('storeItems', ['items', 'groupItems']),
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
