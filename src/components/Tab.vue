<template>
  <div class="tab">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="dark"
        indicator-color="secondary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="register" label="注册" />
        <q-tab name="login" label="登录" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="register">
          <div class="text-h6">注册</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="login">
          <div class="text-h5">登录</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: "register"
    };
  }
};
</script>
<style lang="css"></style>
