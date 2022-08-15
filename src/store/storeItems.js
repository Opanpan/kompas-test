const state = {
  items: [],
  totalPengeluaran: 0
};

const mutations = {
  setItems(state, data) {
    let groupingItem = [];
    for (let i = 0; i < data.length; i += 1) {
      if (groupingItem.length === 0) {
        groupingItem.push([]);
        groupingItem[groupingItem.length - 1].push(data[i]);
      } else {
        if (groupingItem[groupingItem.length - 1][0].tanggal === data[i].tanggal) {
          groupingItem[groupingItem.length - 1].push(data[i]);
        } else {
          groupingItem.push([]);
          groupingItem[groupingItem.length - 1].push(data[i]);
        }
      }
      state.totalPengeluaran += data[i].pengeluaran;
    }
    state.items = groupingItem;
  },
};

const actions = {
  getListItem({ commit }) {
    try {
      fetch('http://localhost:3000/items')
        .then((res) => res.json())
        .then((data) => {
          commit('setItems', data);
        });
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
