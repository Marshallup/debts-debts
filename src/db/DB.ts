import uniqid from 'uniqid'
import { openDB, DBSchema, IDBPDatabase } from 'idb'
import { Debt } from '@/domain/debt'
import { DebtsList } from '@/domain/debtList'
import { Person } from '@/domain/person'

export const DB_NAME = 'DebtsDebts'
export const DB_VERSION = 3

export type MyDBT = IDBPDatabase<MyDB>

export enum DB_ENTITIES {
  DEBTS = 'debts',
  DEBTS_LIST = 'debtsList',
  PERSON = 'person',
}

interface MyDB extends DBSchema {
  [DB_ENTITIES.DEBTS]: {
    key: string
    value: Debt
  }
  [DB_ENTITIES.PERSON]: {
    key: string
    value: Person
  }
  [DB_ENTITIES.DEBTS_LIST]: {
    value: DebtsList
    key: string
  }
}

export class DB {
  db?: MyDBT

  async initDB() {
    this.db = await this.sync()
  }

  async sync(): Promise<MyDBT> {
    if (this.db) {
      return this.db
    }

    return openDB<MyDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        db.createObjectStore(DB_ENTITIES.PERSON, {
          keyPath: 'id',
          autoIncrement: true,
        })

        db.createObjectStore(DB_ENTITIES.DEBTS, {
          keyPath: 'id',
          autoIncrement: true,
        })

        db.createObjectStore(DB_ENTITIES.DEBTS_LIST, {
          keyPath: 'id',
          autoIncrement: true,
        })
      },
    })
  }

  async getDB() {
    return this.sync()
  }

  async getAllDebts() {
    const dbItem = await db.getDB()

    return dbItem.getAll(DB_ENTITIES.DEBTS)
  }

  async addDebt(debt: Omit<Debt, 'id'>) {
    const dbItem = await db.getDB()

    dbItem.add(DB_ENTITIES.DEBTS, { id: uniqid('debt-'), ...debt })
  }

  async getDebt(debtID: Debt['id']) {
    const dbItem = await db.getDB()

    return dbItem.get(DB_ENTITIES.DEBTS, debtID)
  }
}

export const db = new DB()
