<template>
    <div>
        <h1>Landing Page</h1>
        <base-button />
        <div>
            <h1>{{ this.$route.query.id }}</h1>
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
    async asyncData({ $strapi, route }) {
        const template = await $strapi.$notes.findOne(route.query.id);
        return { template };
    },
};
</script>
