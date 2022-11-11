import { db } from '@/db/DB'
import { Debt } from '@/domain/debt'
import { DebtsList, DebtsListItem } from '@/domain/debtList'

export const useDebtStore = defineStore('debt', () => {
  const debtsList = ref<DebtsList>([])

  const getDebtsListItem = (debtsListItemID: DebtsListItem['id']) =>
    unref(debtsList).find((item) => item.id === debtsListItemID)

  function addDebtsToList(debtsListItemID: DebtsListItem['id'], debt: Debt) {
    const debtsListItem = getDebtsListItem(debtsListItemID)

    if (debtsListItem) {
      debtsListItem.debts.push(debt)
    }
  }

  async function addDebt(debt: Omit<Debt, 'id'>) {
    db.addDebt(debt)
  }

  async function getDebt(debtID: Debt['id']) {
    return db.getDebt(debtID)
  }

  async function getAllDebtsDB() {
    return db.getAllDebts()
  }

  return {
    debtsList,
    getDebt,
    getDebtsListItem,
    addDebtsToList,
    addDebt,
    getAllDebtsDB,
  }
})
