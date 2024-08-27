# 포트폴리오 사이트 만들기 프로젝트

이 튜토리얼은 하나의 웹사이트를 여러 가지 프레임워크를 사용하여 만드는 방법에 대해 소개합니다.
웹 개발자들은 종종 다양한 프레임워크를 이용하여 작업하게 됩니다.
이 과정에서 여러 가지 프레임워크들을 어떻게 적용하는지 알아보고,
각 프레임워크들의 장단점을 비교 분석하며 학습하게 됩니다.

1. [vite](https://github.com/webstoryboy/port2023-vite)를 이용하여 사이트를 제작합니다.
2. [react.js](https://github.com/webstoryboy/port2023-react)를 이용하여 사이트를 제작합니다.
3. [vue.js](https://github.com/webstoryboy/port2023-vue)를 이용하여 사이트를 제작합니다.
4. [next.js](https://github.com/webstoryboy/port2023-next)를 이용하여 사이트를 제작합니다.

이 튜토리얼은 포트폴리오 컨셉의 사이트를 4가지 버전으로 반복하여 만들어 보면서, 프론트앤드 개발의 시발점이 될 수 있는 튜토리업입니다.
자바스크립트 프레임워크를 통해 사이트를 효율적으로 만들어 보는 방법을 익힙니다.
깊이 배우기 보다는 다양한 방법을 사용하여 흐름과 감각을 익히기 위한 튜토리얼입니다.

## 완성작 보기

미리보기 :

## 사용 스택

- vite(https://ko.vitejs.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행

- react 설치합니다. `npx create-react-app 타이틀`
- react-router-dom을 설치합니다. `npm install react-router-dom`
- axios를 설치합니다. `npm install axios`
- react-icons 을 설치합니다. `npm install react-icons`
- react-player를 설치합니다.`npm install react-player`
- sass를 설치합니다. `npm install sass`
- react-helmet-async를 설치합니다. `npm install react-helmet-async`
- swiper를 설치합니다. `npm install swiper`
- vite를 설치합니다. `npm create vite@latest`
- gsap를 설치합니다. `npm install gsap`
- lenis를 설치합니다. `npm install @studio-frei ght/lenis`
- vite를 설치 후 환경 설정을 합니다. `vite.config.js`파일을 만들고 다음과 같이 작성합니다.

```javascript
export default {
    root: "src",
    build: {
    outDir: "../public",
    },
};
출처: https://webstoryboy.co.kr/1924 [WEBSTORYBOY:티스토리]

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
```
