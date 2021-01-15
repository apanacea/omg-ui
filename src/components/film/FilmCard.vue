<template>
  <a-card bordered=false hoverable=true body-style="padding: 12px">
    <img
        slot="cover"
        alt="example"
        src="https://justneo-omg.oss-cn-beijing.aliyuncs.com/film-cover/236d19d765856988753fec9e11274951.jpeg"
    />
    <a-card-meta>
      <template slot="description">
        <h2 style="margin: 0">{{serialNumber}}</h2>
        <p style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0">{{ title }}</p>
        <a-tag v-for="tag in tags" :key="tag.id"> {{tag.name()}} </a-tag>
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
    coverSrc: String,
    performers: Object,
    tags: Object,
  },
  data() {
    return {};
  },
};
</script>