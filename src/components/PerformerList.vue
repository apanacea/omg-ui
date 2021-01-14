<template>
  <div>
    <TagSelect style="padding-bottom: 24px"/>
    <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 8 }" :data-source="dataSource">
      <a-list-item slot="renderItem" slot-scope="item">
        <FilmCard :name="item.nameZh" :avatarSrc="item.avatarSrc"/>
      </a-list-item>
    </a-list>
    <Pagination style="padding-top: 10px"/>
  </div>

</template>
<script>
import Pagination from './Pagination.vue';
import FilmCard from './FilmCard.vue';
import TagSelect from './TagSelect.vue';

export default {
  name: 'PerformerList',
  components: {
    TagSelect,
    FilmCard,
    Pagination
  },
  created() {
    this.$axios.get('http://localhost:8081/api/performers')
        .then((resp) => {
          console.log(resp.data);
          this.dataSource = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      dataSource: []
    };
  },
};
</script>
<style></style>
