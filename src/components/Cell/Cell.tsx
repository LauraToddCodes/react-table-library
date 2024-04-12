import React from 'react'
import "./cell.css"

export enum RowSpacing {
  Small,
  Regular,
  Large
}

export enum TextAlignment {
  Left,
  Centre,
  Right
}

type Props = {
  data: string
  href: string
  rowSpacing: RowSpacing
  textAlignment: TextAlignment
}

export function Cell(props: Props) {
  const { data, href, rowSpacing, textAlignment } = props
  
  function getRowSpacing(rowSpacing: RowSpacing): string {
    if (rowSpacing === RowSpacing.Small) return "small-spacing"
    else if (rowSpacing === RowSpacing.Large) return "large-spacing"
    else return "regular-spacing"
  }

  const rowSpacingClass = getRowSpacing(rowSpacing)

  const textAlignmentClass = getTextAlignment(textAlignment)

  return (
    <td className={textAlignmentClass}>
      <a href={href} className="cell-link">
        <div className={`data-container ${rowSpacingClass}`}>
          {data}
        </div>
      </a>
    </td>
  )
}

export function getTextAlignment(textAlignment: TextAlignment): string {
  if (textAlignment === TextAlignment.Left) return "left-alignment"
  else if (textAlignment === TextAlignment.Right) return "right-alignment"
  else return "centre-alignment"
}
