<template lang="">
  <div class="nav">
    <q-btn-group> </q-btn-group>
    <div class="footer">
      <button>记饮食</button> <span>记饮食</span> <button>记饮食</button>
      <span>记饮食</span> <button>记饮食</button> <span>记饮食</span>
      <button>记饮食</button> <span>记饮食</span> <button>记饮食</button>
       <button>记饮食</button>
    </div>
    <label>X</label>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.nav {
  height: 600px;
  background-color: rgb(219, 218, 214);
}
.footer {
  position: fixed;
  bottom: 130px;
}
label {
  font-size: 32px;
  position: fixed;
  bottom: 30px;
}
.q-btn {
  background-color: coral;
}
button {
  border: none;
  outline: none;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: cornflowerblue;
}
</style>
