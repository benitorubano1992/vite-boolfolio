<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
export default {
    name: "AppMain",
    components: { ProjectCard },
    data() {
        return {
            projects: [],
            baseUrl: "http://127.0.0.1:8000",
            loading: true
        }
    },
    methods: {


    },
    created() {
        axios.get("http://127.0.0.1:8000/api/projects")
            .then(resp => {
                setTimeout(() => {
                    this.projects = resp.data.results;
                    this.loading = false;
                }, 2000)

            })
    }
}

</script>
<template>
    <div class="container">
        <h3 class="text-center my-2 text-danger">Tutti i miei progetti</h3>
        <div class="ms-loader d-flex justify-content-center align-items-center flex-column">
            <div class="ms-circle">

            </div>
            <p class="py-3 text-align-right">Loading Projects...</p>
        </div>

        <div class="row justify-content-center" v-if="!loading">
            <div class="col-6">
                <ProjectCard v-for="project in projects" :project="project" key="project.id" />

            </div>

        </div>

    </div>







</template>
<style scoped lang="scss">
.ms-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .ms-circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid rgba($color: #F00, $alpha: 0.4);
        border-top-color: #F00;
        animation: rotation 2s infinite linear;
    }

}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}
</style>