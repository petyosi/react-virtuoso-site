import styled from 'styled-components'
import React from 'react'
import { FC } from 'react'

export const ExampleAvatar = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  flex: none;
  font-weight: bold;
  font-size: 1.2em;
`

export const ExampleImgAvatar = styled.img`
  width: 50px;
  height: 50px;
  flex: none;
  border-radius: 50%;
  margin: 0;
`

export const ExampleAvatarPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  flex: none;
`
export const ExampleListItem = styled.div`
  background-color: ${props => (props.even ? '#fff' : '#f4f4f4')};
  border-radius: 3px;
  display: flex;
  padding: 12px;
  color: #333;
  font-size: 14px;
`

export const ExampleGroup = styled.div`
  background-color: rgba(200, 200, 200, 0.8);
  color: #333;
  padding: 9px;
  font-weight: bold;
`

export const ExampleUserInfo = ({ title, children }) => {
  return (
    <div style={{ marginLeft: '1rem' }}>
      <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{title}</h3>
      <p style={{ marginBottom: 0 }}>{children}</p>
    </div>
  )
}

export const UserItem = ({ user, index }) => {
  const title = `${index + 1}. ${user.name}`
  return (
    <ExampleListItem even={index % 2 === 0}>
      <ExampleAvatar
        style={{ color: user.fgColor, backgroundColor: user.bgColor }}
      >
        {user.initials}
      </ExampleAvatar>
      <ExampleUserInfo title={title}>
        {user.description}
      </ExampleUserInfo>
    </ExampleListItem>
  )
}
