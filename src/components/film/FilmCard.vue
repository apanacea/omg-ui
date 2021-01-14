<template>
  <a-card bordered=false hoverable=true style="width: 300px">
    <img
        slot="cover"
        alt="example"

        src="https://justneo-omg.oss-cn-beijing.aliyuncs.com/film-cover/e1fe9925bc315c60096602538fb1cb134854779e.jpeg"
    />
    <a-card-meta :title="serialNumber">

      <template slot="description">
        {{ title }}
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: 'FilmCard',
  components: {},
  props: {
    serialNumber: String,
    title: String,
    titleZh: String,
    releaseDate: String,
    level: String,
    coverSrc: String
  },
  data() {
    return {};
  },
};
</script>