export type Person = {
  email: string
  imageUrl: string
  name: string
  lastSeen: string | null
  role: string
  lastSeenDateTime?: string
}

export type PersonWithKey = Person & {
  key: string
}
