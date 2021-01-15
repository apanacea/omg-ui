<template>
  <a-card bordered=false hoverable=true style="width: 200px">
    <img
        slot="cover"
        alt="example"
        style="width: 100%; height: 200px"
        :src="avatarSrc"
    />
    <a-card-meta :title="name">
      <template slot="description">
        www.instagram.com
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
    avatarSrc: String
  },
  data() {
    return {};
  },
};
</script>