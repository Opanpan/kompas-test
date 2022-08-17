 const mixReusableFunction = {
  methods: {
    formatToRupiah(number) {
      const parseNumber = JSON.parse(JSON.stringify(number));
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(parseNumber);
    },
  },
};

export default mixReusableFunction;
