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

# mongoose 터미널 연결 하기
$ mongo --help
$ mongo chat --host <host> --port <port> -u <user> --authenticationDatabase chat

# mongoose 유효성 검사 - 이미 존재하는 값 체크

https://mongoosejs.com/docs/validation.html#custom-validators
https://www.youtube.com/watch?v=90h2MeBnfig&index=8&list=PLcCp4mjO-z9_y8lByvIfNgA_F18l-soQv

models/user.js

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: async email => await User.where({ email: email }).countDocuments() === 0,
            message: ({ value }) => `Email ${value} 은 이미 존재합니다.`
        }
    },
)}

# 진행 방향

1. server/index.js > typeDefs 와 resolvers 를 연결

2. typeDefs 

typeDef 란 자료형(type)을 정의(define) 하는것	

3. resolvers

Resolver 란, query에서 특정 필드에 대한 요청이 있을 때, 
그것을 어떤 로직으로 처리할지 GraphQL에게 알려주는 역할

4. resolvers 에서 검색 유저의 상태 파악 후 반환

auth.js 로 이동 해당 유저의 Query 가 서버값과 일치하는지 검사
or
현재 유저의 상태를 확인후 return

로그아웃의경우 쿠키를 바로 삭제 signOut

5. auth의 검사후 문제가 없을경우 

-1. Query 경우 바로 해당 목록을 검색

-2. Mutation 경우 Joi 유효성 검사를 실시

동적으로 실시한다 Joi 이때 보내지는것이 schemas 파일 유효성 검사파일

이상이 없다면 User.create() 실행 후 값을 몽고db에 저장하기 위해 models 로 이동 


# 채팅 기능 만들기

1. typeDefs 

첫번째로 typeDef 자료형(type)을 정의(define) 하는것
chat 과 message 를 정의합니다.

- 1. chat 
    type Chat {
        id: ID!                 -- 고유 아이디값
        title: String!          -- 채팅의 제목
        users: [User!]!         -- 채팅에 속한 유저 목록
        messages: [Message!]!   -- 채팅의 메세지
        createdAt: String!      -- 만든날짜
        updatedAt: String!      -- 보낸날짜
    }

    extend type Mutation {
        startChat(title: String, userIds: [ID!]!): Chat @auth 
        -- @auth로 인해 유저일경우에만 채팅 가능
    }

- 2. message
    type Message {
        id: ID!                 -- 고유 아이디값
        body: String!           -- 채팅의 내용
        sender User!            -- 메세지를 보낸 유저
        createdAt: String!      -- 만든날짜
        updatedAt: String!      -- 보낸날짜
    }

- 3. user
    type User {
        ...code...
        chats: [Chat!]!         -- 해당 유저의 채팅 목록 추가
        updatedAt: String!      -- 보낸날짜
    } 

2. models 
어떤 로직으로 처리할지 GraphQL에게 알려주는 역할을 chat 과 message 생성

models/user.js
import mongoose, { Schema } from 'mongoose';
Schema 를 불러오고
userSchema 에 chats 추가
    chats: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }],

models/user && models/chat 

typeDefs 에 정의한 값을 mongoose.model 에서 생성합니다.

import mongoose, { Schema } from 'mongoose';
const { ObjectId } = Schema.Types;
const messageSchema = new Schema({
    body: String,
    sender: {
        type: ObjectId,
        ref: 'User'
    },
    chat: {
        type: ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

export default mongoose.model('Message', messageSchema);

3. resolvers 
query에서 특정 필드에 대한 요청이 있을 때, 
그것을 어떤 로직으로 처리할지 GraphQL에게 알려주는 역할

resolvers/chat.js 를 생성

유효성 검사를 위해 schemas 를 생성 합니다.
import { startChat } from '../schemas';

다음 startChat() Joi 로 userId 를 보내 유효성 검사를 실시합니다.
await Joi.validate(args, startChat(userId), { abortEarly: false });

4. schemas
schemas/chat.js 를 생성

chat의 배열을 유효성 검사를 하기위해 Joi.array() 사용

chat.js 에서 import Joi from './joi'; joi 라는 js 파일을 따로 만들어서 사용하는것을 볼수 있다
chat.js 유효성 검사는 채팅을 하는 user 가 본인이 맞는지도 같이 체크해야 하기 때문에 추가적으로
Joi 기능을 커스텀 해야하기 때문이다.
이를 구현하기위해 extend 확장 기능을 사용한다.
https://github.com/hapijs/joi/blob/v14.3.1/API.md#extendextension

joi.js 를 생성하여 확장 Joi 를 만듭니다.

정상적으로 채팅의 유효성이 끝났다면 resolvers/chat.js 이동합니다.

Chat.create({ title, users: userIds })
chat 을 생성하여 추가할 준비를 하고
mongosee User.updateMany 를 활용하여 chat을 업데이트 합니다.

5. 
{
    users {
        id
        chats {
            id
        }
    }
}
오류가 날것 배열을 출력을 못하는것 뇌피셜..
resolves 에서  return (await user.populate('chats').execPopulate()).chats
사용함으로서 배열을 추가하는것

6. chat message 기능 넣기

resolves/chat.js 
message 의 요청 행위를 정합니다.

Chat:  messages 를 models/message 로 값을 return 합니다.

{
  users {
    id
    chats {
      id
      users {
        id
      }

    }
  }
}

명령어를 하면 위에 오류가 나는것처럼
 "ID cannot represent value: <Buffer 5c 5d b5 64 f3 f1 79 47 9c c7 a9 e7>",
 이또한 users 의 배열을 출력 못해서 인듯 하다.

 7. chat title 추가하기 

 resolves/chat.js 에서
 startChat을 실행과 동시에 Chat.create 으로 moduls/chat.js 로 이동
 title 을 지정해 준다.
