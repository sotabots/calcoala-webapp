import type { ReactNode } from 'react'

import { Button } from '../kit'

import { ReactComponent as Back2 } from '../assets/back2.svg'
import { useBack } from '../hooks'

export const CustomHeader = ({ backText, onBack, center, right }: {
  backText?: string
  onBack?: () => void
  center?: string
  right?: ReactNode
}) => {
  const { goBack } = useBack()
  const _onBack = onBack || goBack

  return (
    <header className="CustomHeader flex items-center justify-between p-4 min-h-[56px]">
      {_onBack ? (
        <Button
          wrapperClassName="flex-[0_0_64px]"
          className="flex items-center gap-1 text-icon"
          onClick={_onBack}
        >
          <Back2 className="w-4 h-6" />
          {!!onBack && !!backText &&
            <div className="text-[14px] leading-[20px]">{backText}</div>
          }
        </Button>
      ) : (
        <div>&nbsp;</div>
      )}
      {!!center &&
        <div className="flex-[1_1_auto] px-3 text-center text-[16px] leading-[32px] font-semibold truncate">{center}</div>
      }
      {!!right &&
        <div className="flex-[0_0_64px] flex justify-end">{right}</div>
      }
    </header>
  )
}
