import { storiesOf } from '@storybook/vue'
import HelloWorld from '@/components/HelloWorld.vue'

storiesOf('helloworld', module).add(
  'helloworld', () => ({
  components: { HelloWorld },
  template: '<hello-world msg="Welcome to Your Vue.js App"></hello-world>'
}))
