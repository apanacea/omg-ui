<template>
  <div>
    <a-pagination show-quick-jumper :default-current="2" :total="500" @change="onChange" />
  </div>
</template>
<script>
export default {
    name: 'Pagination',
  methods: {
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
};
</script>
