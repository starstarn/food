<template lang="">
  <div>
    <q-circular-progress
      show-value
      :min="0"
      :max="1600"
      :value="value"
      size="150px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      <span>还可以吃</span>
      <br />
      {{ value }}
      <br />
      <span>推荐预算{{ max}}</span>
    </q-circular-progress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1300
    };
  }
};
</script>
<style lang="css">
span {
    font-size: 10px;
    color: darkgray;
}
</style>
