<template>
  <a-locale-provider :locale="pt_BR">
    <div id="app">   
      <Main />
    </div>
  </a-locale-provider>
</template>

<script>
import pt_BR from 'ant-design-vue/lib/locale-provider/pt_BR'
import Main from '@/layout/Main';

export default {
  name: 'app',
  data() {
    return {
      pt_BR,
    }
  },
  components: {
    Main
  }
}
</script>
