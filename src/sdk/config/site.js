const host = import.meta.env.VITE_APP_HOST

const site = {
  milkyway: `${host}:60001/milkyway`,
//  milkyway: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/milkyway`,
//  andromeda: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/andromeda`,
//  triangulum: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/triangulum`,
//  mothallah: `${host}${wormholePort?`:${wormholePort}`:''}/wormhole/mothallah`,
}

export default site
