<template lang="">
  <div>
    <div class="head">
      <div class="select">搜索食物营养和热量</div>
      <form action=" " method="get">
        搜索：<input type="text" name="select" />
        <input type="submit" value="Submit" />
      </form>
    </div>

    <q-tabs
      class="text-grey"
      active-color="secondary"
      indicator-color="secondary"
      align="justify"
    >
      <q-route-tab label="首页" to="/main" exact />
      <q-route-tab label="动态" to="/login" exact />
      <q-route-tab label="+" to="/jump" exact />
      <q-route-tab label="" to="/login" exact />
      <q-route-tab label="我的" to="/my" exact />
    </q-tabs>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.head {
  height: 200px;
  background-color: #374a52;
}
.select {
  width: 300px;
  height: 35px;
  line-height: 35px;
  background-color: #b5c0c4;
  margin: 10px auto;
  border-radius: 20px;
  text-align: center;
}
</style>
