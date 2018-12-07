<template>
    <div id="app" asdf>
        <div class="layout">
            <Layout>
                <router-view name="layoutView"/>
            
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    @import url(./css/default.css);
    @import url(./css/dome-style.css);
</style>
