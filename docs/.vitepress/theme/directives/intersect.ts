import type { Directive } from 'vue'

export const intersect: Directive = {
  mounted(el) {
    el.setAttribute('data-visible', 'false')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', 'true')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  }
}
