import React from 'react';
import {Virtuoso} from 'react-virtuoso';
import {getUser} from './FakeData';
import {
  ExampleListItem,
  ExampleAvatar,
  ExampleUserInfo,
} from './ExampleComponents';

export default () => (
  <Virtuoso
    style={{width: '100%'}}
    totalCount={100}
    item={index => {
      const user = getUser(index);
      const title = `${index + 1}. ${user.name}`;
      return (
        <ExampleListItem even={index % 2 === 0}>
          <ExampleAvatar
            style={{color: user.fgColor, backgroundColor: user.bgColor}}>
            {user.initials}
          </ExampleAvatar>
          <ExampleUserInfo title={title}>{user.longText}</ExampleUserInfo>
        </ExampleListItem>
      );
    }}
    footer={() => (
      <div style={{padding: '1rem', textAlign: 'center'}}>
        -- end reached --
      </div>
    )}
  />
);
