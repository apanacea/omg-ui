<template>
  <div>
    <a-page-header
        style="padding: 0 0 10px 0; border-bottom: 1px solid rgb(235, 237, 240)"
        title="全部系列"
        sub-title=""
    />
    <a-list :grid="{ gutter: 24, xs: 2, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 }" :data-source="series" style="padding-top: 24px">
      <a-list-item slot="renderItem" slot-scope="item" @click="jumpToSeriesDetail(item.id)">
        <SeriesCard :series="item"/>
      </a-list-item>
    </a-list>
    <a-pagination show-quick-jumper :pageSize="32" :default-current="pageNum" :total="totalElements" @change="onChange"/>
  </div>

</template>
<script>
import SeriesCard from "@/components/series/SeriesCard";

export default {
  name: 'PerformerList',
  components: {
    SeriesCard
  },
  created() {
    this.$axios.get(this.$urls.selectAllSeries)
        .then((resp) => {
          console.log(resp.data);
          this.series = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      series: [],
      pageNum: 1,
      totalElements: 0
    };
  },
  methods: {
    onChange(pageNum) {
      this.$axios.get(this.$urls.selectPerformers + '?pageNum=' + pageNum + '&pageSize=32')
          .then((resp) => {
            console.log(resp.data);
            this.performers = resp.data.list
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    },
    jumpToSeriesDetail(seriesId) {
      this.$router.push({path:'/seriesDetail', query: {seriesId: seriesId}})
    }
  }
};
</script>
<style></style>
