/// <reference types="vite/client" />

// Vue
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// JSON
declare module '*.json' {
  const value: any
  export default value
}

// SVG (inline + component)
declare module '*.svg?component' {
  import type { DefineComponent } from 'vue'
  const src: DefineComponent
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

// Imagens
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

// Markdown
declare module '*.md' {
  const content: string
  export default content
}

// CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { [key: string]: string }
  export default classes
}
