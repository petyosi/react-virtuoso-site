import React from "react"
import { Virtuoso } from "react-virtuoso"
import { getUser } from "./FakeData"
import { UserItem } from "./ExampleComponents"

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

export default () => (
  <Virtuoso
    style={{ height: "300px", width: "500px" }}
    totalCount={100}
    item={GenerateItem}
    footer={() => (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        -- end reached --
      </div>
    )}
  />
)
