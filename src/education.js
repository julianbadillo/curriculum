import React from 'react';

export class Education extends React.Component{
    render(){
        const education = [
            {
                institution: 'Universidad de los Andes.',
                city: 'Bogota, Colombia',
                degree: 'Systems and Computing Engineer (Honors)',
                level: 'MSc',
                years: '2007–2010',
            },
            {
                institution: 'Universidad de los Andes.',
                city: 'Bogota, Colombia',
                degree: 'Systems and Computing Engineer (Honors)',
                level: 'BSc',
                years: '2003–2007',
            },
        ];
        return <div>
                {education.map((t) => (<div>
                                        <b>{t.level} {t.degree}</b>: {t.institution}
                                        <div>{t.years}</div>
                                        <br/>
                                        </div>))}

                </div>
    }
}