<script>
import axios from "axios";
import { store } from "../store";
export default {
    name: "ProjectSingle",

    data() {
        return {
            store,
            project: {}
        }
    },
    created() {

        const { params: { slug } } = this.$route;

        console.log(`${this.store.url}/${slug}`);
        axios.get(`${this.store.url}/${slug}`)
            .then(resp => {
                if (resp.data.success) {
                    console.log(resp.data.results)
                    this.project = resp.data.results;
                }
                else {
                    throw new Error(resp.data.error)
                }
            })
            .catch(error => {
                console.error(error)
                this.$router.push({ name: 'NotFound' });
            })
    },
    computed: {
        getProjectType() {
            return this.project.type ? this.project.type.name : "Nessuno tipologia associata";
        }
    }
}
</script>
<template>
    <main>
        <div class="container">
            <h3 class="text-center text-danger py-4">Pagina dedicata al singolo project</h3>
            <main>
                <div class="container">
                    <h1 class="mt-3 text-center">{{ project.title }}</h1>
                    <h5 class="text-center mt-2 text-uppercase text-primary">{{ getProjectType }}</h5>
                    <img v-if="project.cover_image" :src="`${'http://127.0.0.1:8000'}/storage/${project.cover_image}`"
                        alt="" class="d-block mx-auto my-3">
                    <div v-else class="text-center mt-4">Nessuna immagine</div>

                    <p>{{ project.content }}</p>
                </div>
            </main>



        </div>
    </main>

</template>