import React from "react"
import { Virtuoso } from "react-virtuoso"
import { getUser } from "./FakeData"
import { UserItem } from "./ExampleComponents"

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

export default () => (
  <Virtuoso
    totalCount={100000}
    overscan={200}
    item={GenerateItem}
    style={{ height: "400px", width: "80%", maxWidth: "600px" }}
  />
)
