<template>
  <div>
    <button
      type="button"
      class="btn custom-btn"
      data-bs-toggle="modal"
      data-bs-target="#modalItem"
    >
      TAMBAH ITEM
    </button>

    <div
      class="modal fade"
      id="modalItem"
      data-bs-backdrop="static"
      tabindex="-1"
      aria-labelledby="modalItemLabel"
      ref="modalItem"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tambah Entri</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="resetData"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <div class="row">
                <div class="col d-flex justify-content-start">
                  <label for="name" class="form-label text-start">Name</label>
                </div>
              </div>
              <input
                type="text"
                v-model="name"
                class="form-control"
                id="name"
                placeholder="Nama Barang..."
              />
            </div>

            <div class="mb-3">
              <div class="row">
                <div class="col d-flex justify-content-start">
                  <label for="harga" class="form-label">Harga</label>
                </div>
              </div>
              <input
                v-model="price"
                type="number"
                class="form-control"
                id="harga"
                placeholder="Harga Barang..."
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="resetData"
            >
              Batal
            </button>
            <button
              :disabled="!isFormValidated"
              @click="submitData"
              type="button"
              class="btn btn-primary custom-btn"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Modal } from 'bootstrap';

export default {
  name: 'ModalItem',
  data() {
    return {
      name: '',
      price: '',
      monthNames: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ],
      modal: null,
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.modalItem);
  },
  computed: {
    isFormValidated() {
      return this.name !== '' && this.price !== '';
    },
  },
  methods: {
    ...mapActions('storeItems', ['actionAddItem']),

    resetData() {
      this.name = '';
      this.price = '';
    },

    submitData() {
      const currentDate = new Date();

      const req = {
        jam: '',
        tanggal: `${currentDate.getDate()} ${
          this.monthNames[currentDate.getMonth()]
        } ${currentDate.getFullYear()}`,
        nama: this.name,
        pengeluaran: this.price,
      };
      this.actionAddItem(req);
      this.resetData();
      this.modal.hide();
    },
  },
};
</script>

<style lang="css" scoped>
.custom-btn {
  background-color: blueviolet !important;
  border-color: blueviolet !important;
  color: white !important;
  border-radius: 0 !important;
}
.custom-btn:hover {
  background-color: rgb(91, 26, 153) !important;
  border-color: rgb(91, 26, 153) !important;
}
</style>
