<template>
  <a-carousel :after-change="onChange" dot-position="top">
    <img v-for="screenshot in screenshots" v-bind:key="screenshot" :src="screenshot.url" alt="Test" @click="next()">
<!--    <img src="https://justneo-omg.oss-cn-beijing.aliyuncs.com/film-cover/236d19d765856988753fec9e11274951.jpeg"/>-->
    <div v-for="screenshot in screenshots" v-bind:key="screenshot"><h3>1</h3></div>
<!--    <div><h3>2</h3></div>-->
<!--    <div><h3>3</h3></div>-->
<!--    <div><h3>4</h3></div>-->
  </a-carousel>
</template>
<script>
export default {
  name: 'FilmPictureCarousel',
  props: {
    screenshots: []
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /*height: 500px;*/
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
