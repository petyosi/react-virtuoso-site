import React from 'react'
import styled from '@emotion/styled'
import { VirtuosoGrid } from 'react-virtuoso'

const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 25%;
  background: #f5f5f5;
  display: flex;
  flex: none;
  align-content: stretch;

  @media (max-width: 1024px) {
    width: 33%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const ItemWrapper = styled.div`
    flex: 1;
    text-align: center;
    font-size: 80%;
    padding: 2rem;
    box-shadow: 0 5px 6px -6px #777;
    background: white;
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default () => (
  <VirtuosoGrid
    totalCount={10000}
    overscan={200}
    ItemContainer={ItemContainer}
    ListContainer={ListContainer}
    item={index => <ItemWrapper>Item {index}</ItemWrapper>}
    style={{ height: '500px', width: '100%' }}
  />
)
