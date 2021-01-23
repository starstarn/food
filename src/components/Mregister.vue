<template lang="">
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 500px">
      <q-input color="teal" v-model="text" label="昵称">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-input color="teal" v-model="text" label="账号">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input color="teal" v-model="text" :dense="dense" label="密码">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      
      <q-btn
        unelevated
        rounded
        color="teal"
        label="确定"
        to="/login"
        style="width: 200px; height: 45px; margin: 10px 0; display: flex;"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "MRegister",
  data() {
    return {
      text: ""
    };
  }
};
</script>
<style lang=""></style>
