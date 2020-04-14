//.storybook / config.js
import {addParameters, configure } from '@storybook/vue'
// 加载所有的组件故事
// configure(require.context('../stories', true, /\.js$/), module)
const req = require.context('../stories', true,  /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
addParameters({
  options: {
    panelPosition: 'right' //操作面板在右边
  },
})
configure(loadStories, module)

