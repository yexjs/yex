import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'

const theme: Theme = {
  Layout,
  NotFound
}

export default theme