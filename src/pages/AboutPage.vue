<script>
export default {
    name: "AboutPage",
    mounted() {
        console.log(this.$route.name);
    },
}
</script>
<template>
    <div class="container">
        <h3 class="text-center text-info my-3">Autore del progetto</h3>
        <p class="text-center py-3">qui vanno messe le descrizione dell'autore dei post</p>

    </div>
</template>