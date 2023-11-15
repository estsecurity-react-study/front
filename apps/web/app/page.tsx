"use client"

import { Button, Button2 } from "ui"
import { useState } from "react"
import { cn } from "../utils"

export default function Page(): JSX.Element {
  const [pending, _] = useState(true)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={cn("text-yellow-500 p-3", { "bg-gray-500": pending })}>
        test
      </div>
      <div>
        <Button2 label="Try Again" size="lg" variant="grey" />
        <Button2 label="장바구니" size="md" variant="grey" />
        <Button2 label="회원가입" size="wlg" variant="blue" />
      </div>
      <div className="bg-[var(--cta-bg)] text-[var(--cta-text)] h-40 p-8 flex justify-center items-center">
        <Button className="text-red-500 ml-[100px]">test button test</Button>
      </div>
    </main>
  )
}
