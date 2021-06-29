export const isMultipleOf = (target: Number, value: Number) => {
  return +value % +target === 0
}

export const isMultipleOfAllTargets = (targets: Number[], value: Number) => {
  return targets.every((target) => +value % +target === 0)
}

export const isMultipleOfAnyTargets = (targets: Number[], value: Number) => {
  return targets.some((target) => +value % +target === 0)
}

export const sumOfAllMultiplesBy = (targets: Number[], limit: Number) => {
  let result = 0
  for (let target = 1; target < limit; target++) {
    if (isMultipleOfAllTargets(targets, target)) {
      result += target
    }
  }
  return result
}

export const sumOfAnyMultiplesBy = (targets: Number[], limit: Number) => {
  let result = 0
  for (let target = 1; target < limit; target++) {
    if (isMultipleOfAnyTargets(targets, target)) {
      result += target
    }
  }
  return result
}

export const sumOfOrTargertAndTargetsBy = (
  orTargets: Number[],
  andTargets: Number[],
  limit: Number
) => {
  let result = 0
  for (let target = 1; target < limit; target++) {
    if (
      isMultipleOfAnyTargets(orTargets, target) &&
      isMultipleOfAllTargets(andTargets, target)
    ) {
      result += target
    }
  }
  return result
}
