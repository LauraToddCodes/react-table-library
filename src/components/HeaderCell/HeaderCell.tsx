import React, { useState } from 'react'
import { TextAlignment, getTextAlignment } from '../Cell'
import "../Cell/cell.css"
import { DownIcon, NeutralIcon, UpIcon } from "../SortingIcons"
import "./headerCell.css"

export type HeaderData = {
  title: string
  sortingStatus: SortingStatus
}

export enum SortingStatus {
  Up,
  Down,
  Neutral
}

type Props = {
  handleIconClick: () => void
  // headerIndex: number
  sortingStatus: SortingStatus
  textAlignment: TextAlignment
  title: string
}

export function HeaderCell(props: Props) {
    const { handleIconClick, sortingStatus, textAlignment, title } = props

    const textAlignmentClass = getTextAlignment(textAlignment)

    const [icon, setIcon] = useState(SortingStatus.Neutral)

    function toggleIcon() {
      setIcon(prevIcon => getNewIcon(prevIcon))
      handleIconClick()
    }

    function getNewIcon(currentStatus: SortingStatus): SortingStatus {
      if (currentStatus === SortingStatus.Neutral) return SortingStatus.Down
      else if (currentStatus === SortingStatus.Down) return SortingStatus.Up
      else return SortingStatus.Neutral
  }

  return (
    <th className={textAlignmentClass} onClick={toggleIcon}>
      <div className="header-cell-container">
      {title}
      {icon === SortingStatus.Neutral && <NeutralIcon />}
      {icon === SortingStatus.Up &&  <UpIcon />}
      {icon === SortingStatus.Down && <DownIcon />}
      </div>
    </th>
  )
}
