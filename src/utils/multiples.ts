export const isMultipleOf = (target: number, value: number) => {
  return +value % +target === 0
}

export const isMultipleOfAllTargets = (targets: number[], value: number) => {
  return targets.every((target) => +value % +target === 0)
}

export const isMultipleOfAnyTargets = (targets: number[], value: number) => {
  return targets.some((target) => +value % +target === 0)
}

export const sumOfAllMultiplesBy = (targets: number[], limit: number) => {
  let result = 0
  for (let target = 1; target < limit; target++) {
    if (isMultipleOfAllTargets(targets, target)) {
      result += target
    }
  }
  return result
}

export const sumOfAnyMultiplesBy = (targets: number[], limit: number) => {
  let result = 0
  for (let target = 1; target < limit; target++) {
    if (isMultipleOfAnyTargets(targets, target)) {
      result += target
    }
  }
  return result
}

export const sumOfOrTargertAndTargetsBy = (
  orTargets: number[],
  andTargets: number[],
  limit: number
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
