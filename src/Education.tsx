import React from 'react'

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
        <div key={t.institution} className="card">
          <b>
            {t.level}
            {' '}
            {t.degree}
          </b>
          <div>{t.institution}</div>
          <div>{t.years}</div>
          <br />
        </div>
      ))}

    </div>
  )
}
