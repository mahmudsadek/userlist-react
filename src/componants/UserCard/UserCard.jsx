import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function UserCard(props) {
	return (
			<div className="card">
				<img
					className="card-img"
					src={props.img}
					alt="Title"
				/>
				<div className="virfid">
          {
            props.virifed?<FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' , fontSize: '24px'}} /> : <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'red' , fontSize: '24px'}} />
          }
					
				</div>
				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>
					<p className="card-text">{props.email}</p>
					<p className="card-text">{props.phone}</p>
				</div>
			</div>
	);
}

export default UserCard;
