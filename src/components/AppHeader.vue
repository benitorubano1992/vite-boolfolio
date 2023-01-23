<script>
export default {
    name: "AppHeader",


    data() {
        return {
            rotte: [
                {
                    label: "Home",
                    rotta: "home"
                },
                {
                    label: "About",
                    rotta: "about"
                },
                {
                    label: "Blog",
                    rotta: "blog"
                }

            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand text-primary" href="#">BOOLFOLIO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="{ label, rotta } in rotte">
                            <router-link :to="{ name: rotta }" class="nav-link"
                                :class="{ 'active': $route.name === rotta }" aria-current="page" href="#">{{
    label
                                }}</router-link>
                        </li>

                        <!-- <li class="nav-item"> 
                            <router-link to="/" class="nav-link" :class="{ 'active': $route.name === 'home' }"
                                aria-current="page" href="#">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'about'" class="nav-link" :class="{ 'active': $route.name === 'about' }"
                                aria-current="page">About</router-link>

                        </li>
                        <li class="nav-item">
                            <router-link :to="'blog'" class="nav-link" :class="{ 'active': $route.name === 'blog' }"
                                aria-current="page">Blog</router-link>

                        </li>-->


                    </ul>

                </div>
            </div>

        </nav>
    </header>
</template>
