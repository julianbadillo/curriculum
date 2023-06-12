import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'

interface AwardItem {
  year: number
  name: string
}

const awards: AwardItem[] = [
  { year: 2018, name: 'Fermilab - Exceptional Performance Recognition Award' },
  { year: 2009, name: 'Honors Degree “Cum Laude” on Master studies. GPA 4.9/5.0' },
  { year: 2007, name: 'Honors Degree “Magna Cum Laude” on Bachelor studies. GPA 4.6/5.0' },
  { year: 2006, name: 'Top-five score on National Exam (ECAES) for Systems Engineering' },
  { year: 2006, name: '2nd place on ACM International Collegiate Programming Contest - South America' },
  { year: 2002, name: 'Honors Degree “Best year student” and “Highest ICFES score” on Highschool' },
  { year: 2002, name: '“Andres Bello” award to top-100 National Highschool Exam (ICFES)' }
]

export default function Awards () {
  return (
    <div className="Awards slideDown">
      {awards.map((a) => (
        <Card key={a.name} className="card m-3">
          <Card.Header><FontAwesomeIcon icon={faMedal} /> {a.year}: {a.name}</Card.Header>
        </Card>
      ))}
    </div>
  )
}
