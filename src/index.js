import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.less';

class App extends React.Component {
  render() {
    return (<div className={style.header}>My Header Text</div>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);