<template>
  <div>
    <button
      type="button"
      class="btn custom-btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      TAMBAH ITEM
    </button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
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
                placeholder="Input Nama Barang..."
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
                placeholder="Input Harga Barang..."
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>
            <button
              :disabled="!isFormValidated"
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
export default {
  name: 'ModalItem',
  data() {
    return {
      name: '',
      price: '',
    };
  },
  computed: {
    isFormValidated() {
      return this.name !== '' && this.price !== '';
    },
  },
};
</script>

<style lang="css" scoped>
.custom-btn {
  background-color: blueviolet !important;
  border-color: blueviolet !important;
  color: white !important;
}
.custom-btn:hover {
  background-color: rgb(91, 26, 153) !important;
  border-color: rgb(91, 26, 153) !important;
}
</style>
