<template>
    <div>
        <h1>DEMO 2</h1>
        <base-button />
        <div>
            <h1>{{ template.title }}</h1>
            <p>{{ template.description }}</p>
            <p>{{ template.price }} $</p>
            <nuxt-img provider="strapi" max-width="50%" :src="template.image.url" />
        </div>
    </div>
</template>
<script >
export default ({
    // can chose layout of the baseTemplate or own layout
    layout: 'base_default',
    async asyncData({ $strapi, route }) {
        const template = await $strapi.$notes.findOne(route.params.id);
        return { template };
    },
})
</script>
