import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const contents = [
  '今日のうちにブログを書き終えよう。',
  '明日は夕方から雨なので傘を持って出る。',
  '欲しかった技術書をネットで注文しておいた。',
];

const Header = () => (
  <div>
    <p>Header</p>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/memo">Memo</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Content = ({ match }) => {
  const id = Number(match.params.contentId);
  if (!id || id > contents.length) {
    return (<p>Not Found.</p>);
  }
  return (
    <p>
      {contents[id - 1]}
    </p>
  );
};

const ContentList = ({ match }) => {
  const list = contents.map((elem, index) => (
    <li key={index}><Link to={`${match.url}/${index + 1}`}>{index + 1}</Link></li>
  ));
  return (
    <ul>
      {list}
    </ul>
  );
};

const Memo = ({ match }) => (
  <div>
    <h2>Memo</h2>
    <Route exact path={`${match.url}/:contentId`} component={Content} />
    <Route exact path={match.url} component={ContentList} />
  </div>
);

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
);

const Root = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/memo" component={Memo} />
      <Route path="/profile" component={Profile} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.querySelector('#root'));