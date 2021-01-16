<template>
  <div>
    <a-row :gutter="24" style="padding-bottom: 50px">
      <a-col :span="10">
        <a-card>
          <img
              slot="cover"
              alt="example"
              :src="film.coverUrl"
          />
        </a-card>
      </a-col>
      <a-col :span="14">
        <h1 style="margin: 0"> {{ film.title }} </h1>
        <h3> {{ film.titleZh }} </h3>
        <p style="margin: 0; padding-bottom: 32px">120 分钟 ｜ {{ film.releaseDate }} | 梦工厂 | 惊喜策划 </p>
        <a-space size="middle" style="margin: 0; padding-bottom: 32px">
          <PerformerAvatar/>
          <PerformerAvatar/>
          <PerformerAvatar/>
        </a-space>
        <p style="margin: 0; padding-bottom: 32px"> {{ film.description }} </p>
        <a-tag v-for="tag in film.tags" v-bind:key="tag"> {{ tag.name }} </a-tag>
      </a-col>
    </a-row>
    <a-divider orientation="left">
      影片图集
    </a-divider>
    <FilmPictureCarousel :screenshots="film.screenshots"/>
    <a-divider orientation="left">
      磁力链接列表
    </a-divider>
  </div>
</template>

<script>
import FilmPictureCarousel from "@/components/film/FilmPictureCarousel";
import PerformerAvatar from "@/components/performer/PerformerAvatar";

export default {
  name: 'FilmDetailPage',
  props: {
    filmId: Number
  },
  components: {
    FilmPictureCarousel,
    PerformerAvatar
  },
  created() {
    this.$axios.get(this.$urls.selectFilmDetail + this.$route.params.filmId)
        .then((resp) => {
          console.log(resp.data);
          this.film = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      film: Object
    };
  },
  methods: {
  }
};
</script>