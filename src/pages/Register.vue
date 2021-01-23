<template>
  <div class="q-pa-md">
    <m-Head></m-Head>
    <q-tabs
      class="text-grey"
      active-color="dark"
      indicator-color="secondary"
      align="justify"
    >
      <q-route-tab label="注册" to="/register" exact />
      <q-route-tab label="登录" to="/login" exact />
    </q-tabs>
    <m-Register></m-Register>
  </div>
</template>

<script>
// import vTab from "components/Tab";
import mHead from "components/Mainhead";
import mRegister from "components/Mregister";
export default {
  name: "PageLogin",
  components: {
    mHead,
    mRegister
  }
};
</script>

<style lang="css"></style>
