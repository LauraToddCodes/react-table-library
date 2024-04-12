import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import "./sortingIcons.css"

export function NeutralIcon() {
  return (
    <div className='neutral-icon-container sorting-icon'>      
      <FontAwesomeIcon icon={faCaretUp} />
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  )
}
