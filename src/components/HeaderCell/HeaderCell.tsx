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
  Up = "up",
  Down = "down",
  Neutral = "neutral"
}

type Props = {
  handleIconClick: () => void
  sortingStatus: SortingStatus
  textAlignment: TextAlignment
  title: string
}

export function HeaderCell(props: Props) {
    const { handleIconClick, sortingStatus, textAlignment, title } = props

    const textAlignmentClass = getTextAlignment(textAlignment)
    
  return (
    <th className={textAlignmentClass} onClick={handleIconClick}>
      <div className="header-cell-container">
      {title}
      {sortingStatus === SortingStatus.Neutral && <NeutralIcon />}
      {sortingStatus === SortingStatus.Up &&  <UpIcon />}
      {sortingStatus === SortingStatus.Down && <DownIcon />}
      </div>
    </th>
  )
}
