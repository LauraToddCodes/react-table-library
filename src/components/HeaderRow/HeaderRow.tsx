import React from 'react'
import { TextAlignment } from '../Cell'
import { HeaderCell, HeaderData, SortingStatus } from '../HeaderCell'

type Props = {
    data: HeaderData[]
    handleIconClick: (index: number) => void
    selectionBox: boolean
    textAlignment: TextAlignment
}

export function HeaderRow(props: Props) {
    const { data, handleIconClick, selectionBox, textAlignment } = props

    const [sortingStatus, setIconType] = React.useState<SortingStatus>(SortingStatus.Neutral)
    


    return (
    <tr>
        {selectionBox && <th></th>}
        {data.map((itemData, index) => <HeaderCell textAlignment={textAlignment} title={itemData.title} key={index} handleIconClick={() => handleIconClick(index)} sortingStatus={sortingStatus}/>)}
    </tr>
  )
}
