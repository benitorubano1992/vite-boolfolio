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
            loading: true,
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getProject(page) {
            axios.get("http://127.0.0.1:8000/api/projects", {
                params: { page }
            })
                .then(resp => {
                    setTimeout(() => {
                        console.log(resp)
                        this.projects = resp.data.results.data;
                        this.loading = false;
                    }, 1000)

                })
        },
        getUpdateProject(num) {
            this.currentPage += num;
            console.log(this.currentPage);
            this.getProject(this.currentPage);
        }

    },
    created() {
        this.getProject(1);
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
                <nav class="d-flex justify-content-center my-4">
                    <ul class="d-flex">
                        <li class="mx-2"><a class="btn btn-primary " :class="{ 'disabled': currentPage === 1 }"
                                role="button" aria-disabled="true" @click.prevent="getUpdateProject(-1)">Previous</a>
                        </li>
                        <li><a class="btn btn-primary" :class="{ 'disabled': currentPage === lastPage }"
                                @click.prevent="getUpdateProject(+1)">Next</a></li>
                    </ul>
                </nav>

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

ul {
    list-style-type: none;
}
</style>