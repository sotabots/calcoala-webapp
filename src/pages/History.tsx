import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../kit/Button'
import Panel from '../kit/Panel'
import Pie from '../kit/Pie'
import Category from '../kit/Category'

import { closeApp } from '../utils'

// import { useStore } from '../store'
// import { useCurrencies } from '../hooks'
// import { formatAmount } from '../utils'

import { ReactComponent as FilterIcon } from '../assets/filter.svg'
import { ReactComponent as FilterActiveIcon } from '../assets/filter-active.svg'


function History({ isFilterOpen, setIsFilterOpen }: {
  isFilterOpen: boolean
  setIsFilterOpen: (isFilterOpen: boolean) => void
}) {
  const { t } = useTranslation()

  const [isFilterActive, setIsFilterActive] = useState(false)

  // const { chat } = useStore()
  // const { getCurrencyById } = useCurrencies()

  // if (!summary) {
  //   return null
  // }

  const applyFilter = () => {
    setIsFilterActive(true)
    setIsFilterOpen(false)
  }

  return (
    <>
      {!isFilterOpen && (
        <>
          <div className="flex flex-col gap-2 pb-5">
            <Panel>
              <div className="flex items-center justify-between gap-4">
                <h3>Total</h3>
                <Button
                  theme="clear"
                  className="flex items-center justify-center w-8 h-8"
                  onClick={() => { setIsFilterOpen(true) }}
                  text={
                    isFilterActive
                      ? <FilterActiveIcon />
                      : <FilterIcon />
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <Pie />
                <div className="">
                  {[1,2,3,4,5].map(i => (
                    <Category key={i} />
                  ))}
                </div>
              </div>
            </Panel>
            <Panel>
              <h3>Transactions</h3>
              <div className="mt-4 flex flex-col gap-4">
                ...
              </div>
            </Panel>
          </div>

          <Button
            isBottom
            text={t('close')}
            onClick={closeApp}
          />
        </>
      )}

      {isFilterOpen && (
        <>
          <h2 className="pt-[2px] pb-[6px]">{t('Filter')}</h2>
          <Panel>
            ...
          </Panel>

          <Button
            isBottom
            text={t('Apply')}
            onClick={applyFilter}
          />
        </>
      )}

    </>
  )
}

export default History
