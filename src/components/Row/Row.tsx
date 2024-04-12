import React from 'react'
import { Cell, RowSpacing, TextAlignment } from "../Cell"
import "./row.css"



export type RowData = {
  dataHref: string;
  data: string[];
}

type Props = {
  rowData: RowData
  rowSpacing: RowSpacing
  selectionBox: boolean
  textAlignment: TextAlignment
  // TODO - is this index needed?
  index: number
}

export function Row(props: Props) {
  const { rowData, rowSpacing, selectionBox, textAlignment, index } = props
  const { dataHref, data } = rowData

  return (
    <tr className="table-row">
      {selectionBox && (<td><input type="checkbox" value={index}/></td>)}
      {data.map((item, key) => <Cell data={item} href={dataHref} key={key} rowSpacing={rowSpacing} textAlignment={textAlignment} />)}
    </tr>
  )
}
