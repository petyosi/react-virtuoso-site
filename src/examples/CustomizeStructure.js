import React from 'react'
import { GroupedVirtuoso } from 'react-virtuoso'

const ListContainer = ({ listRef, children, className }) => (
  <ul
    ref={listRef}
    className={className}
    style={{ marginTop: 0, marginBottom: 0 }}
  >
    {children}
  </ul>
)

const ItemContainer = props => <li {...props} style={{ margin: 0 }} />

const GroupContainer = ({ children, ...props }) => (
  <li {...props} style={{ margin: 0, backgroundColor: 'white' }}>
    <strong>{children}</strong>
    <hr />
  </li>
)

const FooterContainer = ({ children, footerRef }) => (
  <li ref={footerRef} style={{ margin: 0 }}>
    <hr />
    {children}
  </li>
)

export default () => (
  <GroupedVirtuoso
    ListContainer={ListContainer}
    ItemContainer={ItemContainer}
    GroupContainer={GroupContainer}
    FooterContainer={FooterContainer}
    groupCounts={[10, 10, 10, 10, 10, 10]}
    item={index => <>Item {index}</>}
    group={index => <>Group {index}</>}
    footer={() => <>End</>}
    style={{ height: '400px', width: '350px' }}
  />
)
