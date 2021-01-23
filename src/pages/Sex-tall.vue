<template lang="">
  <div>
    <s-Head></s-Head>
    <div class="q-pa-md">
      <div>
        您的性别是？
        <br />
        男女对食物热量需求不一样，请正确填写
        <br />
      </div>
      <div>
        <q-avatar
          size="100px"
          font-size="52px"
          color="teal"
          text-color="white"
          icon="directions"
        />
        <q-avatar
          size="100px"
          font-size="52px"
          color="teal"
          text-color="white"
          icon="directions"
        />
        <br />
        <span>男生</span>
        <span>女生</span>
      </div>

      <br />
      您的身高是？

      <q-badge color="secondary" class="q-mb-lg">
        身高: {{ range.max }} cm
      </q-badge>

      <q-range v-model="range" :min="120" :max="210" label drag-range />

      <q-btn
        unelevated
        rounded
        color="teal"
        label="下一步"
        to="/birthday"
        style="width: 300px; height: 45px;"
      />
    </div>
  </div>
</template>
<script>
import sHead from "components/Stephead";
export default {
  name: "PageSex",
  components: {
    sHead
  },
  data() {
    return {
      range: {
        min: 120,
        max: 210
      }
    };
  }
};
</script>
<style lang="css">
span {
  margin: 70px;
}
</style>
