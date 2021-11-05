import { clone } from '@/fn'
const map = {}
export default map
const detail = {
  xxx: { id: 0, name: '', date: '', phone: '', vote: 0 },
}

createMap()
function createMap() {
  Object.keys(detail).map(k => {
    map[k] = () => clone(detail[k])
  })
}
