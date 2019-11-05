<template>
    <h1 class="orange--text pa-4">Logging Out!.....</h1>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        Bus.$emit('logout');
        localStorage.removeItem('token');

        
    }
}
</script>