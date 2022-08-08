/* eslint-disable */
const OUTER_DIV_CLASSNAME = 'scrollpage-outer'
const INNER_DIV_CLASSNAME = 'scrollpage-inner'

const timefunc = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  linear: 'linear',
  inert: 'cubic-bezier(.17,.67,.83,.67)',
  bounce: 'cubic-bezier(.55,-.55,.55,1.55)',
  bounceIn: 'cubic-bezier(.55,-.55,.55,1)',
  bounceOut: 'cubic-bezier(.5,0,.5,1.55)',
}

const edgeScrollBehavior = {
  jumpOut: 'jumpOut',
  backward: 'backward'
}

const defaults = {
  horizontal: true,
  timefunc: timefunc.ease,
  duration: 1500,
  delay: 0,
  keyScrolling: true,
  edgeScrollBehavior: edgeScrollBehavior.jumpOut
}

const scrollpage = {
  views: [],
  currentViewIndex: 0,
  forward: scrollForward,
  backward: scrollBackward,
  next: scrollNext,
  back: scrollBack,
  scroll: scroll,
  get current() { return this.views[this.currentViewIndex] },
}

class ScrollpageError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ScrollpageError'
  }
}

function scrollForward() {
  scroll(scrollpage.views.length - 1)
}

function scrollBackward() {
  scroll(0)
}

function scrollNext() {
  if (scrollpage.currentViewIndex < scrollpage.views.length - 1) {
    scroll(scrollpage.currentViewIndex+1)
    return
  }

  if (scrollpage.options.edgeScrollBehavior == 'jumpOut' && !scrollpage.prevent) {
    let dx = 0
    let dy = 0

    if (scrollpage.options.horizontal)
      dx = scrollpage.root.getBoundingClientRect().width
    
    dy = scrollpage.root.getBoundingClientRect().height
    
    console.log(dx, dy)
    window.scrollBy(dx, dy)

    console.log('jumping out')
  }
}

function scrollBack() {
  if (scrollpage.currentViewIndex > 0)
    scroll(scrollpage.currentViewIndex-1) 
}

function scroll(to) {
  let dx = 0.0
  let dy = 0.0

  let index = 0

  if (typeof to == 'string') {  
    index = anchors.indexOf(to.replace('#', ''))
    if (index === -1)
      throw new ScrollpageError(`No such view: ${to}!`)
  } else {
    index = to
    if (!(index >= 0 && index <= scrollpage.views.length - 1))
      throw new ScrollpageError('Out of bounds! ' + `No such view: ${to}!`)
  }

  to = scrollpage.views[to]
  
  if (scrollpage.current === to || scrollpage.prevent) return

  if (scrollpage.options.horizontal) {
    dx = scrollpage.views[0].x - to.x
  } else {
    dy = scrollpage.views[0].y - to.y
  }

  dx = parseInt(dx)
  dy = parseInt(dy)

  console.log('before')
  scrollpage.prevent = true
  scrollpage.root.style.setProperty('--dx', `${dx}px`)
  scrollpage.root.style.setProperty('--dy', `${dy}px`)
  scrollpage.currentViewIndex = index
  
  setTimeout(() => {
    window.location.hash = scrollpage.current.anchor
    scrollpage.prevent = false
    console.log('after')
  }, scrollpage.options.duration)
}

function keyScrollHandle(e) {
  let key = e.key
    switch (key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case 'PageDown':
        scrollpage.next()
        break
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'PageUp':
        scrollpage.back()
        break
      case 'Home':
        scrollpage.backward()
        break
      case 'End':
        scrollpage.forward()
        break
      case '1':case '2':case '3':
      case '4':case '5':case '6':
      case '7':case '8':case '9':
        try {
          scrollpage.scroll(parseInt(key) - 1)        
        } catch (e) {
          console.log('Key scroll navigation: slide', key, 'is not exist!')
        }
    }
}

function wheelScrollHandle(e) {
  e.preventDefault()
  let dx = e.deltaX
  let dy = e.deltaY
  
  if (dx > 10 || dy > 10) {
    console.log(dx, dy)
    scrollNext()
  } else if (dx < -10 || dy < -10) {
    scrollBack()
  }
}

function init(root, selector, anchors, options) {

  scrollpage.root = root
  scrollpage.selector = selector
  scrollpage.anchors = anchors
  scrollpage.options = options ? {
    horizontal: options.horizontal || defaults.horizontal,
    timefunc: options.timefunc || defaults.timefunc,
    duration: options.duration || defaults.duration,
    delay: options.delay || defaults.delay,
    keyScrolling: options.keyScrolling || defaults.keyScrolling,
    edgeScrollBehavior: options.edgeScrollBehavior || defaults.edgeScrollBehavior
  } : defaults

  // todo: make root subnode mandatory with checks
  const inner = root.children[0]
  const childrens = scrollpage.selector?
    inner.querySelectorAll('.'.concat(scrollpage.selector)) :
    inner.children

  console.log(childrens)

  // Check if anchors and views are valid

  if (!(scrollpage.anchors && scrollpage.anchors.length))
    throw new ScrollpageError("List of anchors (element's ids) might not be empty!")

  if (!(childrens.length === scrollpage.anchors.length))
    throw new ScrollpageError(`Count of anchors might be equal to \`${INNER_DIV_CLASSNAME}\` component childrens!`)

  // Complating the formation of view objects

  for (let i = 0; i < childrens.length; i++) {
    let view = {
      element: childrens[i],
      anchor: scrollpage.anchors[i],
      index: i,
      get x() { return this.element.getBoundingClientRect().x },
      get y() { return this.element.getBoundingClientRect().y },
      get width() { return this.element.getBoundingClientRect().width },
      get height() { return this.element.getBoundingClientRect().height }
    }
    view.element.classList.add('view')
    view.element.id = view.anchor
    scrollpage.views.push(view)
  }

  scrollpage.root.style.setProperty('--duration', `${scrollpage.options.duration}ms`)
  scrollpage.root.style.setProperty('--timefunc', scrollpage.options.timefunc)
  scrollpage.root.style.setProperty('--delay', scrollpage.options.delay)

  // scrollpage.root.focus()
  if (scrollpage.options.keyScrolling)
    window.addEventListener('keyup', keyScrollHandle)
  scrollpage.root.addEventListener('wheel', wheelScrollHandle)

  return scrollpage
}

function destroy() {
  window.removeEventListener('keyup', keyScrollHandle)
  scrollpage.root.removeEventListener('wheel', wheelScrollHandle)
}

export default init

export {
  OUTER_DIV_CLASSNAME,
  INNER_DIV_CLASSNAME
}