import React, { useEffect } from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import { getAllData } from './src/redux/dataSlice';
import { Loading } from './src/components';
import { AppDispatch, RootState } from './src/redux/store'; // Yeni eklenen import

const IndexWrapper = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

const Index = () => {
  const dispatch = useDispatch<AppDispatch>(); // Tipini belirtin
  const { isLoading, isSaved } = useSelector((state: RootState) => state.data); // Tipini belirtin

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch, isSaved]);

  if (isLoading) return <Loading />;

  return <RootNavigation />;
};

export default IndexWrapper;
