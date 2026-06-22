import experience from './experience.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faInfinity, faPaintBrush, faGears, faDatabase, faTerminal, faRocket, faDownload, faSun, faMoon, faHammer, faPaintRoller, faCode, faBug, faGem, faToolbox, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';
// return <div className="FullStack">
//     <div><FontAwesomeIcon icon={faPaintBrush} /> Front End</div>
//     <div><FontAwesomeIcon icon={faGears} /> Back End</div>
//     <div><FontAwesomeIcon icon={faDatabase} /> Databases</div>
//     <div><FontAwesomeIcon icon={faInfinity} /> DevOps</div>
// </div>
const Experience = () => {
    return <div>
        <h2>Experience</h2>
        {experience.map((obj) =>
            <Card key={obj.company} title={`${obj.company}  ${obj.from}-${obj.until}`} webpage={obj.webpage}>
                <div className='ExperienceContent'>
                    <div className='ExperienceStack'>
                        <div>
                            <FontAwesomeIcon icon={faPaintBrush} />
                            <ul className='Bullet'>
                                {obj.tech?.frontend.map(o => <li>{o}</li>)}
                            </ul>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGears} />
                            <ul className='Bullet'>
                                {obj.tech?.backend.map(o => <li>{o}</li>)}
                            </ul>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faDatabase} />
                            <ul className='Bullet'>
                                {obj.tech?.databases?.map(o => <li>{o}</li>)}
                            </ul>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faInfinity} />
                            <ul className='Bullet'>
                                {obj.tech?.devops?.map(o => <li>{o}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className='Accomplishments'>
                        <p>Accomplishments</p>
                        {obj.accomplishments.map((accomplishment) => <p key={accomplishment}>{accomplishment}</p>)}
                    </div>
                    <div className='Tasks'>
                        <p>Tasks</p>
                        {obj.tasks.map((task) => <p key={task}>{task}</p>)}
                    </div>
                </div>
            </Card>)}
    </div>;
}

export { Experience };