import { FC } from 'react';

import Catalog from '../Catalog/Catalog';

interface IHome {}

const Home: FC<IHome> = () => {
  return (
    <>
        <Catalog />
    </>
  );
};

export default Home;