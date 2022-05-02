# Node.js 입문

# Node.js

V8은 자바스크립트 엔진 중 오픈소스로 만들어진 엔진이었다.

V8을 활용해서 브라우저 없이 자바스크립트로 실행할 수 있도록 만들면 자바스크립트로 server-side 프로그램을 만들 수 있지 않을까?

- 비동기 실행 방식을 기본적으로 지원하여 IO관련 작업 시 최고의 성능을 보인다.
- Node.js의 비동기 모델은 다른 언어에도 큰 영향을 주게 되었다.
- npm으로 구성된 생태계로 인해 인기를 얻었다.

# Node.js의 구성

- V8 엔진
- libuv
    - C로 작성된 이벤트 루프
    - 비동기 작업을 마친 후 실행되는 콜백함수들을 각종 큐에서 우선순위에 맞게 꺼내와 자바스크립트 엔진에게 전달한다.
    - 싱글 스레드
- Node.js 기본 라이브러리
    - 브라우저가 아닌 일반 머신 환경에서 실행되기 때문에 Web API와는 다른 라이브러리들이 포함되어있다.
    - fs, path, crypto, Stream, zlib, child_process, EventEmitter
    

# Node.js 기본 생태계

- Node.js runtime
- 패키지 매니저 (npm, yarn, pnpm)
    - node.js 프로젝트의 의존성 관리, 태스크 작성, npm registry 배포, 프로젝트에 관련된 메타데이터 작성
    - 서드 파티 라이브러리/모듈을 npm registry로부터 다운 받아서 개발중인 프로젝트에서 사용할 수 있다.
    - 개발중인 라이브러리/모듈을 npm registry로 업로드
    - package.json이라는 프로젝트 명세 파일에 따라 기능을 수행함
- npm registry (public, private)
    - Node.js/VanillaJS로 작성한 서드 파티 라이브러리/모듈을 업로드하는 공간
    - public registry: 누구나 접근 가능
    - private registry: 제한된 공간
    - 이곳에서 서드 파티 라이브러리/모듈을 받아 본인 코드에서 사용할 수 있다.
    - 회사 내부에서만 사용하는 라이브러리/모듈은 private registry에 올려서 관리하는 경우가 많다.