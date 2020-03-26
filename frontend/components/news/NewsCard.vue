<template>
  <div>
    <v-card flat @click="openNew(news.slug)">
      <v-img :src="news.image.medium" aspect-ratio="1.8" />
    </v-card>
    <v-card-title :style="{ 'font-size': titleSize }" class="px-0 pb-1 pt-2">
      <slot name="title">
        <a @click="openNew(news.slug)">
          <span style="color: #619CCD;" class="txt">
            {{ news.title }}
          </span>
        </a>
      </slot>
    </v-card-title>
  </div>
</template>

<script>
import utilsMixin from '../../utils/utilsMixin'

export default {
  name: 'NewsCard',
  mixins: [utilsMixin],
  props: {
    news: {
      type: Object,
      default: () => ({})
    },
    titleSize: {
      type: String,
      default: '22px'
    },
    widgetsSize: {
      // small, regular
      type: String,
      default: 'small'
    }
  },
  methods: {
    openNew(slug) {
      let url =
        'https://добровольцыроссии.рф/news/' + slug
      console.log(url)
      window.open(url, '_blank')
    }
  },
  computed: {
    widgetSize() {
      const size = { chips: {}, icons: {} }
      switch (this.widgetsSize) {
        case 'small': {
          size.chips['x-small'] = true
          size.icons.small = true
          break
        }
        case 'regular': {
          size.chips.small = true
          break
        }
      }
      return size
    }
  }
}
</script>

<style scoped>
.txt:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #3676ab;
  word-wrap: break-word;
}
.txt {
  color: #619ccd;
  font-weight: normal;
  word-break: keep-all;
}
a {
  text-decoration: none !important;
}
</style>
