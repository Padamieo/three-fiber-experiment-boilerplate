import React, { Suspense } from 'react';
// import { render as testRender } from '@testing-library/react';
import { render as testRender, } from '@testing-library/dom';
// import { render as testRender } from 'react-three-fiber';
//import TestRenderer  from 'react-test-renderer';

//  redux: if wanted
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// export const mockStore = configureStore([thunk]);

export * from '@testing-library/react';

export const render = (Component: React.ReactElement<any>, initialState = {}) => {
  const store = {}; // mockStore(initialState);
  const setup = (Component: React.ReactElement<any>) => (
    <Suspense fallback="Loading">
      {/* <Provider key="store" store={store}> */}
        {Component}
      {/* </Provider> */}
    </Suspense>
  );
  const renderUtils = testRender((setup(Component)));
  const { container, baseElement } = renderUtils;

  return {
    store,
    ...renderUtils,
    rerender: (Component: React.ReactElement<any>) => {
      testRender(setup(Component), { container, baseElement });
    },
  };
};
