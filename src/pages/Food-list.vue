<template lang="">
  <div>
    <m-Head> </m-Head>
    <button>-</button> 食物排行榜

    <div>
      <q-splitter v-model="splitterModel" style="height: 250px">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab name="reduce" icon="mail" label="减肥" />
            <q-tab name="skin" label="美白" />
            <q-tab name="health " label="养生" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="reduce">
              
            
                  <q-list bordered separator>
                    <q-item clickable v-ripple>
                      <q-item-section>Single line item</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label>Item with caption</q-item-label>
                        <q-item-label caption>Caption</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label overline>OVERLINE</q-item-label>
                        <q-item-label>Item with caption</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
              
              
            </q-tab-panel>

            <q-tab-panel name="skin">
              <div class="text-h4 q-mb-md">美白</div>
            </q-tab-panel>

            <q-tab-panel name="health ">
              <div class="text-h4 q-mb-md">养生</div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>
</template>
<script>
import mHead from "components/Mhead";
export default {
  components: {
    mHead
  },
  data() {
    return {
      tab: "reduce",
      splitterModel: 20
    };
  }
};
</script>
<style lang=""></style>
