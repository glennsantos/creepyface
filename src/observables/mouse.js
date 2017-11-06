// @flow
/* global MouseEvent */
import Observable from './util/observable'

export default new Observable(observer => {
  const next = (event: MouseEvent) => observer.next(
    [event.clientX, event.clientY]
  )
  document.addEventListener('mousemove', next, true)
  return () => document.removeEventListener('mousemove', next, true)
})