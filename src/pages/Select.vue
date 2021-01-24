<template lang="">
  <div>
    <m-Head></m-Head>

    <form action=" " method="get">
      <input type="text" name="select" placeholder="请输入食物名称" />
      <input type="submit" value="查找" />
      <input type="submit" value="取消" />
    </form>

    <div class="q-pa-md">
      <div>
        食物推荐榜
        <button>更多 ></button>
      </div>

      <div>
        <q-chip size="md" icon="bookmark">
          减肥
        </q-chip>

        <q-chip size="sm">
          增肌
        </q-chip>

        <q-chip size="md">
          美白
        </q-chip>
        <q-chip size="md">
          儿童
        </q-chip>
      </div>
      大家都在搜
      <div>
        <q-chip size="md" icon="bookmark">
          米饭
        </q-chip>

        <q-chip size="sm">
          苹果
        </q-chip>

        <q-chip size="md">
          白饭
        </q-chip>
        <q-chip size="md">
          鸡蛋
        </q-chip>
        <q-chip size="sm">
          苹果
        </q-chip>

        <q-chip size="md">
          白饭
        </q-chip>
        <q-chip size="md">
          鸡蛋
        </q-chip>
      </div>
    </div>
  </div>
</template>
<script>
import mHead from "components/Mhead";
export default {
  components: {
    mHead
  }
};
</script>
<style lang="css">
input {
  border: none;
  outline: none;
}
input[type="text"] {
  width: 300px;
  height: 35px;
  margin: 10px auto;
  border-radius: 20px;
  background-color: rgb(128, 204, 179);
}
input[type="submit"] {
  width: 40px;
  height: 30px;
  background-color: cadetblue;
}
button {
  border: none;
  background-color: white;
  float: right;
  color: grey;
}
.q-chip {
  background-color: rgb(246, 246, 248);
  color: rgb(88, 88, 88);
}
</style>
