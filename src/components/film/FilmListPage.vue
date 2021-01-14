<template>
  <div>
    <a-page-header
        style="padding: 0 0 10px 0; border-bottom: 1px solid rgb(235, 237, 240)"
        title="影片列表"
        sub-title=""
    />
    <TagSelect style="padding: 24px 0 24px 0"/>
    <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }" :data-source="dataSource">
      <a-list-item slot="renderItem" slot-scope="item">
        <FilmCard :id="item.id" :title="item.title" :serialNumber="item.serialNumber"/>
      </a-list-item>
    </a-list>
    <a-pagination show-quick-jumper :default-current="2" :total="500" @change="onChange"/>
  </div>

</template>
<script>
import FilmCard from './FilmCard.vue';
import TagSelect from "@/components/TagSelect";

export default {
  name: 'FilmListPage',
  components: {
    FilmCard,
    TagSelect
  },
  created() {
    this.$axios.get(this.$urls.selectFilms)
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
