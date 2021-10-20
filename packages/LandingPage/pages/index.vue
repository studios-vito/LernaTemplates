<template>
    <div>
        <div>
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
            querry: "",
        };
    },

    async asyncData({ $strapi, route }) {
        console.log('id', route.query.id)
        const id = route.query.id;
        const template = await $strapi.$notes.findOne(id);
        return { template };
    },
};
</script>
