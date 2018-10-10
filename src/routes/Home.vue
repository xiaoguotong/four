<template>
    <div>

    <div>home</div>
    <div>{{homeInfo}}</div>
    </div>
</template>

<script>
export default {
    asyncData(store){
        
    return store.dispatch('getHomeInfo')
    },

     computed: {
            homeInfo() {
              return this.$store.state.homeInfo
          }
     }
}
</script>
