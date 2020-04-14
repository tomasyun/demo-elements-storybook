import { storiesOf } from '@storybook/vue'
import MyButton from '@/components/Button.vue'

storiesOf('buttonCategory', module)
  .add('default', () => ({
    components: { MyButton },
    template: '<my-button type="primary">default</my-button>',
  }))
  .add('primary', () => ({
    components: { MyButton },
    template: '<my-button type="primary">primary</my-button>',
  }))
  .add('danger', () => ({
    components: { MyButton },
    template: '<my-button type="danger">danger</my-button>',
  }))




















