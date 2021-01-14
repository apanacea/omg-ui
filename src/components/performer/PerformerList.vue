<template>
  <div>
    <a-page-header
        style="padding: 0 0 10px 0; border-bottom: 1px solid rgb(235, 237, 240)"
        title="演员列表"
        sub-title=""
    />
    <TagSelect style="padding: 24px 0 24px 0"/>
    <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 8 }" :data-source="dataSource">
      <a-list-item slot="renderItem" slot-scope="item">
        <PerformerCard :name="item.nameZh" :avatarSrc="item.avatarSrc"/>
      </a-list-item>
    </a-list>
    <Pagination style="padding-top: 10px"/>
  </div>

</template>
<script>
import Pagination from '../Pagination.vue';
import PerformerCard from './PerformerCard.vue';
import TagSelect from '../TagSelect.vue';

export default {
  name: 'PerformerList',
  components: {
    TagSelect,
    PerformerCard,
    Pagination
  },
  created() {
    this.$axios.get(this.$urls.selectPerformers)
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
