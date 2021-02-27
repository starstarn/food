<template lang="">
  <div>
    <h6>设置</h6>
    <h5>我的健康资料</h5>

    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>

          <q-item-section>基本信息</q-item-section>
        </q-item>

        
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              R
            </q-avatar>
          </q-item-section>

          <q-item-section>健康报告</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Image avatar</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            </q-avatar>
          </q-item-section>
          <q-item-section>List item</q-item-section>
        </q-item>

        
      </q-list>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
