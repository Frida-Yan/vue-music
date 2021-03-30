<template>
  <div class="img-container">
    <img :src="song.pic" />
    <span class="img-title">{{ splitStr({ str: song.title, num: 8 }) }}</span>
    <br />
    <span class="img-desc">{{
      splitStr({ str: song.desc || "", num: 6 })
    }}</span>
  </div>
</template>
<script>
import { splitStr } from "../../utils/utils"
export default {
  props: {
    song: Object,
  },
  methods: {
    splitStr,
  },
}
</script>
