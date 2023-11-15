"use client"

import { Button } from "./components"

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48">
      <div className="space-x-3">
        <Button>Add product</Button>
        <Button size="slim">Add product (slim)</Button>
        <Button size="medium">Add product (medium)</Button>
        <Button size="large">Add product (large)</Button>
        <Button disabled>Add product (disabled)</Button>
        <Button modifier="outline">Add product (outline)</Button>
        <Button modifier="plain">Add product (plain)</Button>
        <Button modifier="plain" size="large">
          Add product (large, plain)
        </Button>
        <Button loading>Add product</Button>
      </div>
      <div className="flex gap-3">
        <Button variant="primary">Add product</Button>
        <Button size="slim" variant="primary">
          Add product (slim)
        </Button>
        <Button size="large" variant="primary">
          Add product (large)
        </Button>
        <Button disabled variant="primary">
          Add product (disabled)
        </Button>
        <Button modifier="outline" variant="primary">
          Add product (outline)
        </Button>
        <Button modifier="plain" variant="primary">
          Add product (plain)
        </Button>
        <Button loading variant="primary">
          Add Product
        </Button>
      </div>
    </main>
  )
}
