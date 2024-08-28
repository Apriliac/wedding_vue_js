<script setup>
defineProps({
   item: Object,
   idx: String,
});

</script>

<template>
   <span class="title">{{ item.count }}</span>
   <v-container>
      <v-row>
         <v-col cols="12">
            <p class="title">{{ item.title }}</p>
         </v-col>
      </v-row>
      <v-row v-if="item.description">
         <v-col cols="12">
            <p v-html="item.description"></p>
         </v-col>
      </v-row>
   </v-container>
</template>

<style scoped>
.big-font{
   font-size: 20%;
}
.v-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: justify;
    word-break: break-word;
    margin-left: 20px;
}

.title {
   font-weight: bold;
}

</style>
