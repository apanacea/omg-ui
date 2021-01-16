<template>
  <a-card bordered=false hoverable=true style="width: 200px">
    <img v-if="avatarUrl !== ''"
        slot="cover"
        alt="example"
        style="width: 100%; height: 200px"
        :src="avatarUrl === '' ? avatarUrl : 'https://justneo-omg.oss-cn-beijing.aliyuncs.com/performer-avatar/3df471bd3d88e1120ea2b0363981424b.jpeg'"
    />
    <a-card-meta>
      <template slot="description">
        <h1 style="margin: 0"> {{ name }} </h1>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: 'PerformerCard',
  components: {},
  props: {
    name: String,
    avatarUrl: String
  },
  data() {
    return {};
  },
};
</script>