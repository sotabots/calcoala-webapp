import { create } from 'zustand'

import { TCurrency, TCurrencyId, TTransaction, TUser, TChat, TSummary, TCategories, TFilterTotal, TFilterPeriod, TNewTransaction } from '../types'

type TStore = {
  overlays: number[]
  setOverlays: (val: number[]) => void

  chatIdStart: undefined | number
  setChatIdStart: (chatIdStart: number) => void
  txId: undefined | string
  setTxId: (ixId: string) => void
  users: TUser[]
  setUsers: (users: TUser[]) => void
  selectPersonId: string | null
  setSelectPersonId: (i: string | null) => void
  isSelectPayers: null | boolean
  setIsSelectPayers: (isSelectPayers: null | boolean) => void
  currencies: TCurrency[]
  setCurrencies: (currencies: TCurrency[]) => void
  setCurrency: (currency: TCurrencyId) => void
  categories: undefined | TCategories
  setCategories: (categories: TCategories) => void
  chat: undefined | TChat
  setChat: (chat: TChat) => void
  transaction: undefined | TTransaction | TNewTransaction,
  setTransaction: (transaction: TTransaction | TNewTransaction) => void
  isAuthorSharesInited: boolean
  setIsAuthorSharesInited: (isAuthorSharesInited: boolean) => void
  txComment: string,
  setTxComment: (txComment: string) => void
  isSuccess: boolean | null
  setSuccess: (val: boolean | null) => void
  txPatchError: null | Error
  setTxPatchError: (txPatchError: null | Error) => void

  summaryId: undefined | string
  setSummaryId: (summaryId: string) => void
  summaryCurrencyId: null | TCurrencyId
  setSummaryCurrencyId: (summaryCurrencyId: null | TCurrencyId) => void
  summary: undefined | TSummary
  setSummary: (summary: TSummary) => void

  transactions: undefined | TTransaction[]
  setTransactions: (transactions: TTransaction[]) => void

  isEditTx: boolean
  setIsEditTx: (isEditTx: boolean) => void

  isFilterOpen: boolean
  setIsFilterOpen: (isFilterOpen: boolean) => void

  filterTotal: TFilterTotal
  setFilterTotal: (filterTotal: TFilterTotal) => void
  filterTotalPre: TFilterTotal
  setFilterTotalPre: (filterTotalPre: TFilterTotal) => void

  filterPeriod: TFilterPeriod
  setFilterPeriod: (filterPeriod: TFilterPeriod) => void
  filterPeriodPre: TFilterPeriod
  setFilterPeriodPre: (filterPeriodPre: TFilterPeriod) => void

  isDebug: boolean
  setDebug: (isDebug: boolean) => void
}

export const useStore = create<TStore>((set, get) => ({
  overlays: [],
  setOverlays: (overlays) => set(({ overlays })),

  chatIdStart: undefined,
  setChatIdStart: (chatIdStart) => set(({ chatIdStart })),
  txId: undefined,
  setTxId: (txId) => set(({ txId })),
  users: [],
  setUsers: (users) => set({ users }),
  selectPersonId: null,
  setSelectPersonId: (selectPersonId) => set({ selectPersonId }),
  isSelectPayers: null,
  setIsSelectPayers: (isSelectPayers) => set({ isSelectPayers }),
  currencies: [],
  setCurrencies: (currencies) => set({ currencies }),
  setCurrency: (currencyId) => {
    if (get().transaction === undefined) {
      return
    }
    set({
      transaction: {
        ...get().transaction as TTransaction,
        currency_id: currencyId
      }
    })
  },
  categories: undefined,
  setCategories: (categories) => set({ categories }),
  chat: undefined,
  setChat: (chat) => set(({ chat })),
  transaction: undefined,
  setTransaction: (transaction) => set(({ transaction })),
  isAuthorSharesInited: false,
  setIsAuthorSharesInited: (isAuthorSharesInited) => set(({ isAuthorSharesInited })),
  txComment: '',
  setTxComment: (txComment) => set(({ txComment })),
  isSuccess: null,
  setSuccess: (isSuccess) => set(({ isSuccess })),
  txPatchError: null,
  setTxPatchError: (txPatchError) => set(({ txPatchError })),

  summaryId: undefined,
  setSummaryId: (summaryId) => set(({ summaryId })),
  summaryCurrencyId: null,
  setSummaryCurrencyId: (summaryCurrencyId) => set(({ summaryCurrencyId })),
  summary: undefined,
  setSummary: (summary) => set(( { summary } )),

  transactions: undefined,
  setTransactions: (transactions) => set(( { transactions } )),

  isEditTx: false,
  setIsEditTx: (isEditTx) => set(( { isEditTx } )),

  isFilterOpen: false,
  setIsFilterOpen: (isFilterOpen) => set(( { isFilterOpen } )),

  filterTotal: 'ALL_CHAT',
  setFilterTotal: (filterTotal) => set(( { filterTotal } )),
  filterTotalPre: 'ALL_CHAT',
  setFilterTotalPre: (filterTotalPre) => set(( { filterTotalPre } )),

  filterPeriod: 'ALL_TIME',
  setFilterPeriod: (filterPeriod) => set(( { filterPeriod } )),
  filterPeriodPre: 'ALL_TIME',
  setFilterPeriodPre: (filterPeriodPre) => set(( { filterPeriodPre } )),

  isDebug: false,
  setDebug: (isDebug) => set(( { isDebug } )),
}))
