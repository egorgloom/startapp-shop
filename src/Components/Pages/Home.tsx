import { FC } from 'react';
import Catalog from '../Catalog/Catalog';

interface IHome {}

const Home: FC<IHome> = () => {
  return (
    <div>
        <Catalog />
    </div>
  );
};

export default Home;