<template lang="">
  <div>
    <div style="width: 100%; height: 70px; color: black;"></div>
    <div>
      您的性别是？
      <br />
      男女对食物热量需求不一样，请正确填写
      <br />
    </div>
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
    您的身高是？

    <q-btn
      unelevated
      rounded
      color="teal"
      label="下一步"
      to="/birthday"
      style="width: 200px; height: 45px; margin: 10px 0; display: flex;"
    />
  </div>
</template>
<script>
export default {
  name: "PageSex"
};
</script>
<style lang="css"></style>
