import React from 'react';
import {TopNavigation, TopNavigationProps} from '@cloudscape-design/components';
import {signIn, signOut, useSession} from 'next-auth/react';

// const cognitoLogoutUrl = `https://coffeeshot.auth.ap-southeast-2.amazoncognito.com/logout?client_id=YOUR_CLIENT_ID&logout_uri=${encodeURIComponent("https://coffeeshot.com")}`;
const logoutUrl = `${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}&logout_uri=${encodeURIComponent("https://coffeeshot.com")}`;


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
              // window.location.href = logoutUrl;
              handleSignOut()
            });
          },
        },
      ]
    }

    function handleSignOut() {
      const clientId = '7pp6v2jftg7f93okjl6m7ntqt2';
      // const domain = 'https://coffeeshot.auth.ap-southeast-2.amazoncognito.com';
      const domain = `${process.env.NEXT_PUBLIC_COGNITO_DOMAIN}`;
      window.location.href = `${domain}/logout?client_id=${clientId}&logout_uri=http%3A%2F%2Flocalhost:3000/about`
    }
// GET https://mydomain.auth.us-east-1.amazoncognito.com/logout?
//   client_id=1example23456789&
//   logout_uri=https%3A%2F%2Fwww.example.com%2Fwelcome
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
