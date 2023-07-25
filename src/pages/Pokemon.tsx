import { useParams } from 'react-router';

const Pokemon = () => {
    const { name } = useParams();
    return <div>{name}</div>
};

export default Pokemon;