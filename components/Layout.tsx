import React from 'react'

type TChildrenProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<TChildrenProps> = ({ children }: TChildrenProps) => {
  return <div>{children}</div>
}

export default Layout
