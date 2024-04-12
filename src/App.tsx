import React from 'react';
import { Table } from "./components"
import { RowSpacing, TextAlignment } from './components/Cell';
import { RowData } from './components/Row';
import { ContextValues, SelectionContext } from './context';
import "./app.css"


function App() {

  const headerTitles = ["Item", "Qty", "Cost"]
  const rowsData: RowData[] = [
    {
      dataHref: "https://www.youtube.com/watch?v=orfVr0_SfJg",
      data: ["Apples", "5", "0.40"]
    },
    {
      dataHref: "https://www.youtube.com/watch?v=6BdKUO2QbA0",
      data: ["Oranges", "3", "0.60"]
    },
    {
      dataHref: "https://www.youtube.com/watch?v=6BdKUO2QbA0",
      data: ["Bananas", "8", "0.50"]
    }
  ]

  const selectedItem = useSelectionProvider()

  const rowSpacing = RowSpacing.Regular

  const showSelectionBox = false

  const textAlignment = TextAlignment.Left

  return (
    <div><p>Oh, hello, here's a table...</p>
      <div className="table-container">
        <SelectionContext.Provider value={selectedItem}>
          <Table
          headerTitles={headerTitles}
          rowsData={rowsData}
          rowSpacing={rowSpacing}
          selectionBox={showSelectionBox}
          textAlignment={textAlignment}
          />
        </SelectionContext.Provider>
      </div>
    </div>
  );
}



function useSelectionProvider(): ContextValues {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  return {
    selectedIndex,
    setSelectedIndex
  }
}

export default App;
