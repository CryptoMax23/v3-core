export function sleepWait(ms = 1000) {
  console.log(`sleepWait: sleeping ${ms / 1000} seconds`)
  return new Promise((res) => setTimeout(res, ms))
}
