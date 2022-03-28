const multiply = 8

const exists = (value?: number): boolean => {
  return value !== undefined && value !== null && typeof value === 'number'
}

const nonExists = (value?: number): boolean => {
  return (!value && value !== 0) || typeof value !== 'number'
}

export const spacing = (
  first: number,
  second?: number,
  third?: number,
  fourth?: number
): string | undefined => {
  if (nonExists(first)) {
    return undefined
  }

  if (nonExists(second) && nonExists(third) && nonExists(fourth)) {
    return `${multiply * first}px`
  }

  if (nonExists(third) && nonExists(fourth) && exists(second)) {
    return `${multiply * first}px ${multiply * (second as number)}px`
  }

  if (exists(second) && exists(third) && nonExists(fourth)) {
    return `${multiply * first}px ${multiply * (second as number)}px ${
      multiply * (third as number)
    }px`
  }

  if (exists(second) && exists(third) && exists(fourth)) {
    return `${multiply * first}px ${multiply * (second as number)}px ${
      multiply * (third as number)
    }px ${multiply * (fourth as number)}px`
  }

  return undefined
}
