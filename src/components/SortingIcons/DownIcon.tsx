import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./sortingIcons.css"

export function DownIcon() {
  return (
    <div className='sorting-icon'>      
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  )
}
