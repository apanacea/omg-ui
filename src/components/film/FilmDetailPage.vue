<template>
  <div>
    <h1>{{ film.title }}</h1>
    <a-row :gutter="24" style="padding: 24px 0 50px 0">
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
        <h1 style="margin: 0"> {{ film.serialNumber }} </h1>
<!--        <h3> {{ film.serialNumber }} </h3>-->
        <p style="margin: 0; padding-bottom: 32px"> 120 分钟 ｜ {{ film.releaseDate }} | {{ film.manufacturer.name }} </p>
        <!--        <a-list :grid="{ gutter: 16, xs: 2, sm: 4, md: 6, lg: 6, xl: 8, xxl: 8 }" :data-source="film.performers">-->
        <!--          <a-list-item slot="renderItem" slot-scope="item">-->
        <!--            <PerformerAvatar :performer="item"/>-->
        <!--          </a-list-item>-->
        <!--        </a-list>-->
        <!--        <a-space size="middle" style="margin: 0; padding-bottom: 32px">-->
        <!--          <PerformerAvatar v-for="performer in film.performers" v-bind:key="performer" :performer="performer"/>-->
        <!--        </a-space>-->
        <p style="margin: 0; padding-bottom: 32px"> {{ film.description }} </p>
        <a-tag v-for="tag in film.tags" v-bind:key="tag"> {{ tag.name }}</a-tag>
      </a-col>
    </a-row>
    <div style="height: 24px; background: #F0F2F5; margin: 0 -24px 0 -24px;"/>
    <h1 style="padding: 24px 0 24px 0">演员列表</h1>
    <a-list :grid="{ gutter: 16, xs: 6, sm: 8, md: 10, lg: 10, xl: 12, xxl: 12 }" :data-source="film.performers">
      <a-list-item slot="renderItem" slot-scope="item">
        <PerformerCard :name="item.name" :avatarUrl="item.avatarUrl"/>
        <!--        <PerformerAvatar :performer="item"/>-->
      </a-list-item>
    </a-list>
    <div style="height: 24px; background: #F0F2F5; margin: 0 -24px 0 -24px"/>
    <h1 style="padding: 24px 0 24px 0">影片图集</h1>
    <ScreenshotCard
        v-for="screenshot in film.screenshots"
        v-bind:key="screenshot"
        :screenshot="screenshot"
        style="margin: 0 300px 0 300px;"/>
<!--    <a-list :grid="{ gutter: 4, xs: 4, sm: 4, md: 4, lg: 4, xl: 1, xxl: 6 }" :data-source="film.screenshots">-->
<!--      <a-list-item slot="renderItem" slot-scope="item">-->
<!--        <ScreenshotCard v-for="screenshot in film.screenshots" v-bind:key="screenshot" :screenshot="screenshot" style="margin: 0 300px 0 300px"/>-->
<!--        &lt;!&ndash;        <PerformerAvatar :performer="item"/>&ndash;&gt;-->
<!--      </a-list-item>-->
<!--    </a-list>-->

<!--    <div style="height: 24px; background: #F0F2F5; margin: 0 -24px 0 -24px"/>-->
<!--    <h1 style="padding: 24px 0 24px 0">磁力链接列表</h1>-->
    </div>
</template>

<script>
import PerformerCard from "@/components/performer/PerformerCard";
import ScreenshotCard from "@/components/film/ScreenshotCard";

export default {
  name: 'FilmDetailPage',
  props: {
    filmId: Number
  },
  components: {
    PerformerCard,
    ScreenshotCard
  },
  created() {
    console.log(this.$route)
    this.$axios.get(this.$urls.selectFilmDetail + this.$route.query.filmId)
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
  methods: {}
};
</script>