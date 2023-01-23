
<script>
import axios from 'axios';
export default {
    name: "NotFound",
    created() {
        const promiseArray = [axios.get("http://127.0.0.1:8000/api/projects?page=1"), axios.get("http://127.0.0.1:8000/api/projects?page=2")];

        Promise.all(promiseArray)
            .then(response => console.log(response[0].data.results.data));
    }

} 
</script>
<template>
    <div class="container">
        <p class="py-5 text-center text-danger">
            Not Found
        </p>
    </div>
</template>
<style scoped lang="scss">
p {
    font-size: 3rem;
    text-transform: uppercase;
}
</style>