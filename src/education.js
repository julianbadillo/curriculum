import React from 'react';

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

export class Education extends React.Component{

    constructor(props){
        super(props);
        this.state = {education: education};
    }

    render(){
        const education = this.state.education;
        return <div className="Education slideDown">
                {education.map((t, i) => (<div key={i} className="card">
                                            <b>{t.level} {t.degree}</b>: {t.institution}
                                            <div>{t.years}</div>
                                            <br/>
                                        </div>))}

                </div>
    }
}