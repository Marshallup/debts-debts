import { Debt } from './debt'

export type Debts = Debt[]

export interface DebtsListItem {
  id: string
  debts: Debts
}

export type DebtsList = DebtsListItem[]
