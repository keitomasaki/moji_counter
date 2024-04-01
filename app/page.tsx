'use client'

import PageDescriptionBox from '../components/topPage/PageDescriptionBox'
import AppDescriptionBox from '../components/topPage/AppDescriptionBox';
import ActionArea from '../components/topPage/ActionArea';

const Home = () => {
  return (
    <div>
      <PageDescriptionBox />
      <AppDescriptionBox />
      <ActionArea />
    </div>
  );
};

export default Home;
