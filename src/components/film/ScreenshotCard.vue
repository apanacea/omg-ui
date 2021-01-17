<template>
  <a-card bordered=false hoverable=true body-style="padding: 12px">
    <img
        slot="cover"
        alt="example"
        :src="screenshot.url"
    />
  </a-card>
</template>

<script>
export default {
  name: 'FilmCard',
  components: {},
  props: {
    screenshot: {}
  },
  data() {
    return {};
  },
};
</script>