<template>
  <div>
    <a-page-header
        style="padding: 0 0 10px 0; border-bottom: 1px solid rgb(235, 237, 240)"
        title="演员列表"
        sub-title=""
    />
    <TagSelect style="padding: 24px 0 24px 0"/>
    <a-list :grid="{ gutter: 24, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 8 }" :data-source="performers">
      <a-list-item slot="renderItem" slot-scope="item">
        <PerformerCard :name="item.nameZh" :avatarSrc="item.avatarSrc"/>
      </a-list-item>
    </a-list>
    <a-pagination show-quick-jumper pageSize="20" :default-current="pageNum" :total="totalElements" @change="onChange"/>
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
    this.$axios.get(this.$urls.selectPerformers)
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
      this.$axios.get(this.$urls.selectPerformers + '?pageNum=' + pageNum)
          .then((resp) => {
            console.log(resp.data);
            this.performers = resp.data.list
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
};
</script>
<style></style>
