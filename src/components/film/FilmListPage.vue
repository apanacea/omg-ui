<template>
  <div>
    <a-page-header
        style="padding: 0 0 10px 0; border-bottom: 1px solid rgb(235, 237, 240)"
        title="影片列表"
        sub-title=""
    />
    <a-space>
      <a-select
          show-search
          placeholder="Select a person"
          option-filter-prop="children"
          style="width: 150px; padding: 24px 0 24px 0"
          @change="onTagSelectChange"
      >
        <a-select-option v-for="item in this.optionalTags" :key="item" :value="item.name">
          {{ item.name }}
        </a-select-option>
      </a-select>
    </a-space>
    <a-list :grid="{ gutter: 24, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4}" :data-source="films">
      <a-list-item slot="renderItem" slot-scope="item" style="padding-bottom: 24px">
        <FilmCard :id="item.id" :title="item.title" :serialNumber="item.serialNumber"/>
      </a-list-item>
    </a-list>
    <a-pagination show-quick-jumper :default-current="pageNum" :total="totalElements" @change="onChange"/>
  </div>

</template>
<script>
import FilmCard from './FilmCard.vue';

export default {
  name: 'FilmListPage',
  components: {
    FilmCard
  },
  created() {
    this.$axios.get(this.$urls.selectFilms + '?pageNum=' + this.pageNum)
        .then((resp) => {
          console.log(resp.data);
          this.totalElements=resp.data.totalElements
          this.films = resp.data.list
        })
        .catch((error) => {
          console.log(error)
        })
    this.$axios.get(this.$urls.selectTags + '?tagType=film')
        .then((resp) => {
          console.log(resp.data);
          this.optionalTags = resp.data
        })
        .catch((error) => {
          console.log(error)
        })

  },
  data() {
    return {
      films: [],
      pageNum: 1,
      totalElements: 0,
      optionalTags: [],
      selectedTag: null
    };
  },
  methods: {
    onChange(pageNum) {
      console.log(pageNum)
    },
    onTagSelectChange(tagName) {
      console.log(tagName)
      this.selectedTags.push(tagName)
    }
  }
};
</script>
<style></style>
