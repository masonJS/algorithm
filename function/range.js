const { log } = require('./log')


/**
 * @model basic range
 * @params { length }
 * @return array
 * */
// function range(length) {
//   return Array.from({ length }, (_, i) => i)
// }
// log(range(10))


/**
 * @model range by step
 * @params { start, stop, step }
 * @return array
 * */
function range (start = 0, stop = start, step = 1){
  return Array(Math.ceil((stop - start) / step)).fill(start).map((v, i) => v + (i * step))
}


exports.range = range
