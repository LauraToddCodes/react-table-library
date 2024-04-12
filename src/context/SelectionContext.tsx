import { createContext } from "react"

export type ContextValues = {
    selectedIndex: number
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
  }

export const SelectionContext = createContext<ContextValues>({
    selectedIndex: 0,
    setSelectedIndex: () => console.info("Selection not yet initialised")
})