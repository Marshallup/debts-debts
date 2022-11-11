import { Person } from './person'

export type DebtType = 'loan' | 'debt'

export interface Debt {
  id: string
  person: Person
  type: DebtType
  sum: number
}
