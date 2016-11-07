function countdown(callback) {
  window.setTimeout(callback, 2)
}

function createMultiplier(mult) {
  return function(given) {
    return mult * given
  }
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(factor1, factor2) {
  return factor1 * factor2
}

function doublerWithBind() {
  return multiplier.bind(null, 2)
}

function triplerWithBind() {
  return multiplier.bind(null, 3)
}
