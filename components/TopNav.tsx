import React from 'react';
import {TopNavigation, TopNavigationProps} from '@cloudscape-design/components';
import {signIn, signOut, useSession} from 'next-auth/react';
import {getCognitoLogoutUrl} from "@/lib/auth/helpers";

export default function TopNav() {
  const {data: session, status} = useSession()
  //   ✅ Log session data and auth status
  //   console.log("🔐 Auth Status:", status)
  //   console.log("🧑‍💻 Session Data:", data)

  const utilities: TopNavigationProps['utilities'] = React.useMemo(() => {
    if (status === 'loading') {
      return []
    }

    if (status === 'authenticated') {
      return [
        {
          type: 'menu-dropdown',
          text: session.user?.email || 'Account',
          iconName: 'user-profile',
          items: [
            {id: 'signout', text: 'Sign out'},
          ],
          onItemClick: (item: any) => {
            if (item.detail.id === 'signout') signOut({ redirect: false }).then(() => {
              window.location.href = getCognitoLogoutUrl(window.location.origin)
            });
          },
        },
      ]
    }

    return [
      {
        type: 'button',
        text: 'Sign in',
        onClick: () => signIn('cognito'),
      },
    ]
  }, [status, session])

  return (
    <TopNavigation
      identity={{
        href: '/',
        title: 'CFX Labs',
        logo: {
          src: '/logo-chrome-512x512.png',
          alt: 'CFX Labs Logo',
        },
      }}
      utilities={utilities}
    />
  )
}
