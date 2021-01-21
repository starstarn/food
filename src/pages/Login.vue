<template>
  <div class="q-pa-md">
    <div>
      登录
    </div>
    <q-avatar
      square
      size="100px"
      font-size="82px"
      color="teal"
      text-color="white"
      icon="directions"
    />

    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-3 text-grey-7"
        active-color="primary"
        indicator-color="purple"
        align="justify"
      >
        <q-tab name="mails" label="Mails" />
        <q-tab name="alarms" label="Alarms" />
        <q-tab name="movies" label="Movies" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated class="bg-primary text-white">
        <q-tab-panel name="mails">
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

    <q-tabs>
      <q-route-tab label="注册" to="/" exact />
      <q-route-tab class="text-teal" label="登录" to="/" exact />
    </q-tabs>

    <div class="q-gutter-y-md column" style="max-width: 300px">
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
    </div>

    <q-btn
      unelevated
      rounded
      color="teal"
      label="确定"
      to="/sex"
      style="width: 200px; height: 45px; margin: 10px 0; display: flex;"
    />
  </div>
</template>

<script>
export default {
  name: "PageLogin"
};
</script>

<style lang="css"></style>
