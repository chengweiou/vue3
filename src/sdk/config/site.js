const host = import.meta.env.VITE_APP_HOST
const wormholePort = import.meta.env.VITE_APP_WORMHOLE_PORT

const site = {
  milkyway: `${host}:60001/milkyway`,
//  milkyway: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/milkyway`,
//  andromeda: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/andromeda`,
//  triangulum: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/triangulum`,
//  mothallah: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/mothallah`,
}

export default site
