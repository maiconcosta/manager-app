<template>
    <div class="main">    
        <div class="side">
            <Sidebar />            
        </div>
        <div class="content">
           <h2>Router</h2>
        </div>
    </div>    
</template>

<script>
import Sidebar from '@/layout/Sidebar';
export default {
    name: 'Main',
    components: {
        Sidebar
    }
}
</script>

<style scoped>
    .main {
        display: flex;
    }
    .content {
        padding: 20px;
    }  
</style>
