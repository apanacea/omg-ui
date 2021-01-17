<template>
  <div>
    <a-page-header
        style="padding: 0 0 10px 0; border-bottom: 1px solid rgb(235, 237, 240)"
        title="演员列表"
        sub-title=""
    />
    <TagSelect style="padding: 24px 0 24px 0"/>
    <a-list :grid="{ gutter: 24, xs: 2, sm: 4, md: 6, lg: 6, xl: 8, xxl: 8 }" :data-source="performers">
      <a-list-item slot="renderItem" slot-scope="item" @click="jumpToPerformerDetail(item.id)">
        <PerformerCard :name="item.nameZh !== null ? item.nameZh : item.name" :avatarUrl="item.avatarUrl"/>
      </a-list-item>
    </a-list>
    <a-pagination show-quick-jumper :pageSize="32" :default-current="pageNum" :total="totalElements" @change="onChange"/>
  </div>

</template>
<script>
import PerformerCard from './PerformerCard.vue';
import TagSelect from '../TagSelect.vue';

export default {
  name: 'PerformerList',
  components: {
    TagSelect,
    PerformerCard
  },
  created() {
    this.$axios.get(this.$urls.selectPerformers + '?pageNum=1&pageSize=32')
        .then((resp) => {
          console.log(resp.data);
          this.performers = resp.data.list
          this.totalElements = resp.data.totalElements
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      performers: [],
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
    jumpToPerformerDetail(performerId) {
      this.$router.push({path:'/performer', query: {performerId: performerId}})
    }
  }
};
</script>
<style></style>
