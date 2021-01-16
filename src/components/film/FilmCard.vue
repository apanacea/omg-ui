<template>
  <a-card bordered=false hoverable=true body-style="padding: 12px">
    <img
        slot="cover"
        alt="example"
        :src="coverUrl"
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
    coverUrl: String,
    performers: Object,
    tags: Object,
  },
  data() {
    return {};
  },
};
</script>