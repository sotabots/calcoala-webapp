import { useTranslation } from 'react-i18next'

import Button from './Button'

import User from './User'
import { useUsers } from '../hooks'
import { TSummaryItem } from '../types'

type TSummaryItemProps = TSummaryItem & {
  onClick: () => void
}

function SummaryItem({ from_user, to_user, amount, onClick }: TSummaryItemProps) {
  const { t } = useTranslation()

  const { getUserById } = useUsers()

  const fromUser = getUserById(from_user._id)
  const toUser = getUserById(to_user._id)

  if (!fromUser || !toUser) {
    return null
  }

  return (
    <div className="flex gap-3">
      <User user={fromUser} size={48} />

      <div className="font-semibold">{amount}</div>

      <Button
        text={t('settleUp')}
        onClick={onClick}
      />
    </div>
  )
}

export default SummaryItem