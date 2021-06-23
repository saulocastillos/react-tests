export const isMultipleOf = (target, value) => {
  return value % target === 0;
};

export const isMultipleOfAllTargets = (targets, value) => {
  let result = true;
  targets.forEach((target) => {
    if (value % target === 0 && result !== false) {
      result = true;
    } else {
      result = false;
    }
  });
  return result;
};

export const isMultipleOfAnyTargets = (targets, value) => {
  let result = false;
  targets.forEach((target) => {
    if (value % target === 0) {
      result = true;
      return;
    }
  });
  return result;
};

export const sumOfAllMultiplesBy = (targets, limit) => {
  let result = 0;
  for (let target = 1; target < limit; target++) {
    if (isMultipleOfAllTargets(targets, target)) {
      result = result + target;
    }
  }
  return result;
};

export const sumOfAnyMultiplesBy = (targets, limit) => {
  let result = 0;
  for (let target = 1; target < limit; target++) {
    if (isMultipleOfAnyTargets(targets, target)) {
      result = result + target;
    }
  }
  return result;
};

export const sumOfOrTargertAndTargetsBy = (orTargets, andTargets, limit) => {
  let result = 0;
  for (let target = 1; target < limit; target++) {
    if (
      isMultipleOfAnyTargets(orTargets, target) &&
      isMultipleOfAllTargets(andTargets, target)
    ) {
      result = result + target;
    }
  }
  return result;
};
