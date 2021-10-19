<template>
    <div>
        <h1>Landing Page</h1>
        <base-button />
        <div v-if="this.$route.query.id">
            <h1>test</h1>
            <h1>{{ template.title }}</h1>
            <p>{{ template.description }}</p>
            <p>{{ template.price }} $</p>
            <nuxt-img provider="strapi" max-width="50%" :src="template.image.url" />
        </div>
    </div>
</template>
<script >
export default {
    layout: 'base_default',
    data() {
        return {
            template: "",
        };
    },
    async asyncData({ $strapi, route }) {
        if (route.query.id) {
            this.template = await $strapi.$notes.findOne(route.query.id);

        }

    },
};
</script>
