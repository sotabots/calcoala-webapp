import Avatar from './Avatar'

import { TUser } from '../types'

type TProps = {
  user?: TUser
  size?: number
}

function User({ user, size = 40 }: TProps) {
  const fullName = [
    ...(user?.first_name ? [user.first_name] : []),
    ...(user?.last_name ? [user.last_name] : []),
  ].join(' ')
  return (
    <div className="w-full flex gap-2 items-center truncate">
      <Avatar url={user?.profile_photo} size={size} fullName={fullName} />
      <div className="flex flex-col -gap-0.5 flex-1 text-left truncate text-[16px] leading-[20px]">
        {!user ? (
          <div className="text-hint truncate">(выберите)</div>
        ) : (
          <>
            <div className="truncate">{user.first_name} {user.last_name}</div>
            {user.username && (
              <div className="text-[14px] leading-[18px] text-hint truncate">
                @{user.username}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default User
