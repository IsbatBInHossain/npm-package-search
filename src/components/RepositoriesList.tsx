import { useState } from 'react';
import { useAction } from '../hooks/useAction';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { data, error, loading } = useSelector(
    (state: RootState) => state.repositories
  );
  const { searchRepositories } = useAction();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </>
  );
};
export default RepositoriesList;
