<template lang="">
  <div>
    <s-Head></s-Head>
    <h6>你的出生日期是？</h6>
    <label>年龄不同，热量消耗不同，请准确选择</label>
    <q-btn
        unelevated
        rounded
        color="teal"
        label="下一步"
        to="/weight"
        style="width: 300px; height: 45px;"
      />
  </div>
</template>
<script>
import sHead from "components/Stephead";
export default {
  name: "PageBirthday",
  components: {
    sHead
  }
};
</script>
<style lang=""></style>
