
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const Card = ({ title, webpage, children }: { title: string, webpage?: string; children: React.ReactNode }): React.ReactElement => {
    return <div className="Card">
        <div className="CardHeader">
            {webpage ?
                <a href={webpage} target="_blank">
                    {title}
                    {' '}
                    <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                : title
            }
        </div>
        <div className="CardBody">
            {children}
        </div>
    </div>
}

export { Card };