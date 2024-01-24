import { v4 } from 'uuid'

export const RandomId = (prefix?: string) => {
  if (prefix != null) return prefix + '-' + v4()
  return v4()
}
