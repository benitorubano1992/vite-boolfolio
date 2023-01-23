<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000"
        }
    },
    computed: {
        // a computed getter
        getContent() {
            // `this` points to the component instance

            return this.project.content.length > 150 ? `${this.project.content.substring(0, 150)} ...` : this.project.content + " ...";
        }


    }
}

</script>
<template>



    <div class="card my-3">
        <img :src="`${baseUrl}/storage/${project.cover_image}`" class="card-img-top" alt="" v-if="project.cover_image">
        <div v-else>
            <h3 class="text-center text-info py-5">No image yet</h3>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.content ? getContent : "No content here" }}</p>
            <p v-if="project.tecnologies.length > 0">
                <span v-for="tecno in project.tecnologies">#{{ tecno.name }}</span>
            </p>
            <p v-if="project.type !== null">Tipo: {{ project.type.name }}</p>
            <router-link :to="{ name: 'Single-Post', params: { slug: project.slug } }" href="#"
                class="btn btn-primary">Leggi di
                piu</router-link>
        </div>
    </div>
</template>