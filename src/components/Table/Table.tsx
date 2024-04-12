import React from 'react'
import { HeaderRow } from '../HeaderRow'
import { Row, RowData } from "../Row"
import { useContext, useState } from 'react'
import { SelectionContext } from '../../context'
import "./table.css"
import { RowSpacing, TextAlignment } from '../Cell'
import { HeaderData, SortingStatus } from '../HeaderCell'


type Props = {
    headerTitles: string[]
    rowsData: RowData[]
    selectionBox?: Boolean
    rowSpacing: RowSpacing
    textAlignment: TextAlignment
}

export function Table(props: Props) {
    const { headerTitles, rowsData, selectionBox, rowSpacing, textAlignment } = props
    const { selectedIndex } = useContext(SelectionContext)

    const selectionBoxPresent = selectionBox ? true : false

    const initialHeaderData = processHeaderTitles(headerTitles)

    const [headerData, setHeaderData] = useState(initialHeaderData)

    function handleIconClick(index: number) {
        setHeaderData(prevData => {
            const updatedData = [...prevData]
            updatedData[index] = {...updatedData[index], sortingStatus: getNewStatus(headerData[index].sortingStatus)}
            return updatedData
        })
    }

    function getNewStatus(currentStatus: SortingStatus): SortingStatus {
        if (currentStatus === SortingStatus.Neutral) return SortingStatus.Down
        else if (currentStatus === SortingStatus.Down) return SortingStatus.Up
        else return SortingStatus.Neutral
    }
  
    return (
    <table className="table-main">
        <thead>
            <HeaderRow
            data={headerData}
            handleIconClick={handleIconClick}
            selectionBox={selectionBoxPresent}
            textAlignment={textAlignment}
            />
        </thead>
        <tbody>
            {rowsData.map((rowData, index) => 
            <Row
            rowData={rowData}
            rowSpacing={rowSpacing}
            selectionBox={selectionBoxPresent}
            textAlignment={textAlignment}
            index={index}
            key={index} 
            />)}
        </tbody>
    </table>
  )
}

function processHeaderTitles(headerTitles: string[]): HeaderData[] {
    return headerTitles.map(title => {
        return {
           title: title,
           sortingStatus: SortingStatus.Neutral
        }
    })
}
