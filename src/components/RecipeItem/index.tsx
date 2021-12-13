import { RecipeState } from '../../state/actions/index';
import { Link } from 'react-router-dom';

interface ChildComponentProps {
    data: RecipeState;
};

const RecipeItem: React.FC<ChildComponentProps> = (props) => {
    return(
        <div className="card">
            <img src={props.data.img} className="card-img-top" alt={props.data.img} />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text text-break">{props.data.tags.map(tag => <span>{"#"+tag+" "}</span>)}</p>
                <p className="card-text text-break">{props.data.description}</p>
                <Link className="btn btn-primary" to="/recipe" state={{data: props.data}}>Details</Link>
            </div>
        </div>
    )
}
export default RecipeItem;