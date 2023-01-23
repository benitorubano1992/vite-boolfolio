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
            types: [],
            totalResults: null,
            selectType: ""
        }
    },
    methods: {
        getProject(page) {
            axios.get("http://127.0.0.1:8000/api/projects", {
                params: {
                    page,
                    ...this.selectType && { type_id: this.selectType }
                }
            })
                .then(resp => {
                    console.log("risposta arrivata");
                    console.log({ resp });
                    this.projects = resp.data.results.data;
                    this.totalResults = resp.data.results.total;
                    this.lastPage = resp.data.results.last_page;
                    this.loading = false;


                })
        },
        getUpdateProject(num) {
            this.currentPage += num;
            console.log(this.currentPage);
            this.getProject(this.currentPage);
        }

    },
    created() {
        this.projects = this.getProject(1);
        Promise.all([axios.get("http://127.0.0.1:8000/api/projects"), axios.get("http://127.0.0.1:8000/api/types")])
            .then(response => {

                this.projects = response[0].data.results.data;
                console.log(response[0].data.results.total)
                this.totalResults = response[0].data.results.total;
                this.lastPage = response[0].data.results.last_page;
                this.types = response[1].data.results;
            })
            .catch(error => console.error(error))
            .finally(() => this.loading = false)
    }
}

</script>
<template>
    <div class="container">
        <h3 class="text-center my-2 text-danger">Tutti i miei progetti</h3>
        <div class="ms-loader d-flex justify-content-center align-items-center flex-column" v-if="loading">
            <div class="ms-circle">

            </div>
            <p class="py-3 text-align-right">Loading Projects...</p>
        </div>

        <div class="col-6 mx-auto" v-else>
            <div class="d-flex justify-content-between my-4 align-items-center">
                <form class="d-flex" @submit.prevent="getProject(1)">
                    <select class="form-select" v-model="selectType">
                        <option value="">Tutti</option>
                        <option v-for="tipologia in types" :value="tipologia.id">{{ tipologia.name }}</option>
                    </select>
                    <button type="submit" class="btn btn-success ms-3">Filtra</button>
                </form>
                <div>
                    <p> sono stati trovati {{ totalResults }} progetti</p>
                </div>

            </div>
            <div class="col-12 text-center text-danger py-5" v-if="projects.length === 0">
                <h3>Non ci sono progetti associati a questo tipo</h3>
            </div>
            <div class="col-12" v-else>
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