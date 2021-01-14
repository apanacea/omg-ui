<template>
<div> 
    <TagSelect style="padding-bottom: 24px"/>
<a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 8 }" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <!-- <a-card :title="item.title">
        Card content {{index}}
      </a-card> -->
      <FilmCard :title="item.title"/>
    </a-list-item>
  </a-list>
  <Pagination style="padding-top: 10px"/>
</div>
  
</template>
<script>
import Pagination from './Pagination.vue';
import FilmCard from './FilmCard.vue';
import TagSelect from './TagSelect.vue';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

export default {
    name: 'FilmList',
    components: {
        TagSelect,
        FilmCard,
        Pagination
    },
    data() {
        return {
            data,
    };
    }
};
</script>
<style></style>
