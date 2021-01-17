<template>
  <a-card bordered=false hoverable=true body-style="padding: 12px">

<!--    <img v-if="avatarUrl !== ''"-->
<!--         slot="cover"-->
<!--         alt="example"-->
<!--         :src="avatarUrl === '' ? avatarUrl : 'https://justneo-omg.oss-cn-beijing.aliyuncs.com/performer-avatar/3df471bd3d88e1120ea2b0363981424b.jpeg'"-->
<!--    />-->
    <a-card-meta>
      <template slot="description">
        <!--        <h1 style="margin: 0"> {{ name }} </h1>-->
        <h3 style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0">
          {{ series.name }}
        </h3>
        <p style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0">
          收录作品数量：{{ series.filmCount }}
        </p>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: 'PerformerCard',
  components: {},
  props: {
    series: {}
  },
  data() {
    return {};
  },
};
</script>