<template>
    <div id="app">
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
    @import url(./plugin/iview/iview.css);
    @import url(./css/default.css);
</style>
