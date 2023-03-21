### ディレクトリ構成
```
src/
  ├── components/
  │   ├── Chat/
  │   │   ├── Chat.js
  │   │   └── Chat.css
  │   ├── ChatHistory/
  │   │   ├── ChatHistory.js
  │   │   └── ChatHistory.css
  │   └── Message/
  │       ├── Message.js
  │       └── Message.css
  ├── App.js
  └── App.css
```
### コンポーネントの説明：

Chat コンポーネント: ユーザーの入力とAIの応答を処理し、会話履歴を管理します。App.js の現在のコンテンツを Chat.js に移動し、適切なCSSスタイルを Chat.css に追加します。

ChatHistory コンポーネント: 会話履歴を表示します。Chat.js から会話履歴を表示する部分を切り出し、ChatHistory.js に移動します。適切なCSSスタイルを ChatHistory.css に追加します。

Message コンポーネント: 個々のメッセージを表示します。ChatHistory.js からメッセージを表示する部分を切り出し、Message.js に移動します。適切なCSSスタイルを Message.css に追加します。

# Frontend Application

This is the frontend application for the Personalized AI Web App. It uses React to communicate with the backend server.

## Setup

1. Install Node.js.
2. Use `npx create-react-app` to create a new React application.
3. Install any required dependencies.
4. Edit `src/App.js` to implement the communication with the backend server.

## Running the Application

In the terminal, navigate to the `frontend` directory and run the following command:

``

---

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
