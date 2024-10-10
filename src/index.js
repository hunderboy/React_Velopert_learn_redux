import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules';

// 주의사항
// createStore는 완전히 제거된 것은 아니며, 여전히 사용할 수 있습니다.
// 다만, 새로운 프로젝트에서는 Redux Toolkit의 사용이 강력히 권장됩니다.
// 기존 프로젝트에서 createStore를 사용 중이라면,
// 점진적으로 Redux Toolkit으로 마이그레이션하는 것이 좋습니다.
// Redux Toolkit을 사용하면 액션 생성자, 리듀서 등의 Redux 관련 코드를 더 간결하게 작성할 수 있습니다.

// const store = createStore(rootReducer); // 스토어를 만듭니다.
const store = configureStore({
  reducer: rootReducer,
});
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
