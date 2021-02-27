<template lang="">
  <div>
    <div>账号设置</div>
    <h5>app账号</h5>
    <div style="background-color: pink">
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>修改用户名</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            修改密码
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            注销账号<label style="color:red; padding:0"
              >（账号将会被永久注销）</label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <q-btn
      unelevated
      rounded
      color="teal"
      label="退出登录"
      to="/login"
      style="width: 200px; height: 45px; left:25%; display: flex;position:fixed; bottom: 30px;"
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
