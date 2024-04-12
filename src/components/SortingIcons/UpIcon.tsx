import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import "./sortingIcons.css"

export function UpIcon() {
  return (
    <div className='sorting-icon'>      
      <FontAwesomeIcon icon={faCaretUp} />
    </div>
  )
}