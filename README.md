# Project-Board 제작 일기

# setup 설정하기
1. $ npm run create-react-app {ProjectName}
프로젝트 기본 구성을 create-react-app 을 사용하여 제작할것 입니다.

2. $ npm run eject
create-react-app 설치가 완료 되었으면 캡슐화된 react를 풀어줄것 입니다.

3. $ npm install --save-d @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/polyfill @babel/preset-env @babel/preset-react apollo-boost apollo-link-http graphql graphql-tag isomorphic-fetch node-fetch react-apollo react-router-dom styled-components

이번 프로젝트에 사용할 모듈을 설치해 줍니다.

4. package.json
babel 설정을 수정해 줍니다.

  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  },

5. config/webpack.config.js
React 는 이제 IE 9 까지만 지원해줍니다.
IE 에 맞춰 polyfill 설정을 추가합니다. 
관련 내용은 블로그에 있습니다. 주소''

    entry: [
      "@babel/polyfill",
      "./src/index.js",

6. React 의 상대경로 를 절대경로 로 변경해주어야 합니다.
모듈을 불러올때 from '../../../Home' 이런식으로 지저분한 코드가 아닌
절대경로 로 할 경우 from 'Home' 이렇게 깔끔하게 사용할 수 있습니다.
파일의 최상단 디렉트 루트에 .env 파일을 생성후 NODE_PATH=./src 작성후 저장합니다.

자 이제 준비는 끝났습니다.
Fron View 먼저 꾸며보겠습니다.

# Fron View 초기화

1. 파일 디렉토리 구성
server
src
    - components
    - containers
    - module
    - style
    index.js

우선 필요없는 create-react-app 의 기존 css 와 코드를 제거하여 초기상태로 돌립니다.

2. src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';

ReactDOM.render(<App />, document.getElementById('root'));

3. src/containers/App.js

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>환영합니다.</div>
    );
  }
}

export default App;

# Fron View reset-style

이제 기본 style 을 적용해 줄것입니다.
style은 styled-components 를 활용하여 더욱 React의 활용도를 높이도록 하겠습니다.
https://www.styled-components.com/

1. src/style/reset.js

const reset = `
    * { 
        -webkit-font-smoothing:antialiased;
        font-smoothing:antialiased;
    }
    body, form, div, p, h1, h2, h3, h4, h5, h6, dl, dt, dd, ul, ol, li, fieldset, th, td, input, textarea,button,select { 
        margin:0; padding:0;
    }
    article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary { 
        display:block; 
        margin:0; 
        padding:0; 
    }
    img,fieldset,button { 
        border:0 none; 
    }
    table {
        border-spacing:0;
    }
    ol, ul, dl { 
        list-style:none; 
    }
    li { 
        list-style:none; 
    }
    a { 
        text-decoration:none; 
        color: #333;
    }
    img{ 
        vertical-align:top
    }
    address, caption, em, var { 
        font-style:normal; 
        font-weight:normal; 
    }
    input, textarea, select{ 
        letter-spacing:normal; 
    }
    button { 
        border:0; 
        background:none; 
        cursor:pointer; 
    }
    body { 
        font-family:'Noto-Sans';
        font-weight:300; 
        font-size:14px; 
    }
`;

export default reset;

reset css 를 사용할 수 있도록 저장합니다.

2. src/style/globalStyles.js

import { createGlobalStyle } from 'styled-components';
import reset from './reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    html {
        background-color: #fbf1ff;
    }
`;

reset 을 불러와 createGlobalStyle 내부에 넣어 전역에 style 을 적용 시킵니다.
또 원하는 전역 css는 기호에 맞게 GlobalStyle 내부에 적어서 사용합니다.

이제 만들어 놓은 GlobalStyle 를 적용시키도록 하겠습니다.

3. src/containers/App.js

import React, { Component } from 'react';
// GlobalStyle
import { GlobalStyle } from 'style/globalStyles';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <GlobalStyle />
            Hello~
        </React.Fragment>
    );
  }
}

export default App;

GlobalStyle 을 적용하고 정상적으로 적용되어있는지 확인해봅니다.

$ npm run start 명령어로 실행해 봅니다.

# Fron View components 와 containers

1. src/components

상단의 검색과 로그인 부분을 담을 Header
글 작성시 메인에 리스트로 보여줄 BoardList
회원의 상태를 보여주는 MyList

Header, BoardList, MyList

각각의 파일들을

import React from 'react';

const Header = () => (
    <div>Header</div>
);

export default Header;

이런식으로 우선 3개의 파일을 생성합니다.

그리고 이들을 담아줘서 통합적으로 관리하는 index.js 를 생성합니다.

import Header from './Header';
import BoardList from './BoardList';
import MyList from './MyList';

export {
    Header, 
    BoardList, 
    MyList,
};

2. src/containers/Home.js

Home.js 를 생성합니다.
Home.js 에는 components 을 불러와 view 할수 있도록 할것 입니다.

import React from 'react';
// Header
import {Header, BoardList, MyList} from 'components';

const Home = () => (
    <React.Fragment>
        <Header />
        <BoardList />
        <MyList />
    </React.Fragment>
);

export default Home;

이제 Home 을 view 할수 있도록 설정하겠습니다.

3. src/containers/App.js

import React, { Component } from 'react';
// React-Router-v4
import { BrowserRouter as Router, Route } from "react-router-dom";
// GlobalStyle
import { GlobalStyle } from 'style/globalStyles';
// Contains
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <GlobalStyle />
            <Route exact={true} path={'/'} component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

React-Router-v4 를 활용하여 기본 메인은 Home 인것으로 설정하였습니다.
자 이제 정상적으로 3개 모두가 나오는지 확인해 주세요.
정상적으로 나온다면 다음은 Header 를 꾸며보겠습니다.

~
여차여차 메인과 로그인 부분 style을 꾸며준다음..
~

# Server 로그인 회원가입 구현

server 구현에 사용한 모듈

express
mongoose
apollo-server-express
bcryptjs (암호화 모듈)

우선 src/server 파일을 생성후 index.js 파일을 만들어 줍니다.

1. $ npm install --save-d express mongoose apollo-server-express bcryptjs

우선 서버 구동 명령어를 설정하기 위해

package.json 
"start:d": "nodemon --exec babel-node server/index.js"

추가합니다.

mongoose 명령어 기본
참고 : https://velopert.com/457

추가 : insert()
Database 제거 : dropDatabase()
Collection 생성 : db.createCollection(name, [options]) 
Collection 제거: db.COLLECTION_NAME.drop()
Document 추가: db.COLLECTION_NAME.insert(document)
Document 제거: db.COLLECTION_NAME.remove(criteria, justOne)

2. 파일 디렉토리 구성
server
    - models
        index.js
        user.js

    - resolvers
        index.js
        user.js

    - typeDefs
        index.js
        root.js
        user.js

    config.js
    index.js

typeDefs 에서는 Schema 를 정의해주는 폴더

resolvers 에서는 해석해 주고 명령을 실행시켜주는 곳

models 에서는 mogoose 서버로 전달해 주는곳