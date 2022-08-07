import FullpageScrollingLayout from '@/components/layouts/FullpageScrollingLayout'

const list = [
  FullpageScrollingLayout
]

function register(app) {
  list.forEach(layout => {
    app.component(layout, layout.name)
  })
}

const layouts = {
  list: list,
  register: register
}

export default layouts