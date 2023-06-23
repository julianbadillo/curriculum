import React from 'react'
import { Card } from 'react-bootstrap'

interface EducationItem {
  institution: string
  city: string
  degree: string
  level: string
  years: string
}

const education: EducationItem[] = [
  {
    institution: 'Universidad de los Andes.',
    city: 'Bogota, Colombia',
    degree: 'Systems and Computing Engineer (Honors)',
    level: 'MSc',
    years: '2007-2010'
  },
  {
    institution: 'Universidad de los Andes.',
    city: 'Bogota, Colombia',
    degree: 'Systems and Computing Engineer (Honors)',
    level: 'BSc',
    years: '2003-2007'
  }
]

export default function Education () {
  return (
    <div className="Education slideDown">
      {education.map((t) => (
        <Card key={t.institution} className="m-3">
          <Card.Header>
            {t.level}
            {' '}
            {t.degree}
          </Card.Header>
          <Card.Body>
          <div>{t.institution}</div>
          <div>{t.years}</div>
          </Card.Body>
        </Card>
      ))}

    </div>
  )
}
