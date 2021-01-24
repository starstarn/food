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
        身高: {{ getNullLabel(limitModel) }}cm
      </q-badge>

      <q-slider
        v-model="limitModel"
        color="secondary"
        :min="110"
        :max="220"
        label
      />
      <button>下一步</button>

      <q-btn
        unelevated
        rounded
        color="teal"
        label="确定"
        to="/birthday"
        style="width: 200px; height: 45px; margin: 10px 0; display: flex;"
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
      limitModel: 160
    };
  },

  methods: {
    getNullLabel(val) {
      return val === null ? "null" : val;
    }
  }
};
</script>
<style lang="css">
span {
  margin: 70px;
}
</style>
