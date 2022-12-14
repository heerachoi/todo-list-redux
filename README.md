<h1 align="center"> Todolist with Redux </h1> 
<h5 align="center"> Project Duration: 2022.12.13 - 12.15</h5>
<p align="center"> 
<img src="https://user-images.githubusercontent.com/29205152/208035136-1868a013-570b-4850-bc48-c164ad65d792.gif" alt="GIF" width="70%">
</p>

## 📖 Table of Contents
- [📝 About The Project](#-about-the-project-)
- [💡 Skills Stack](#-skills-stack-)
- [📍 Project Link](#-project-link)
- [🗂 Directory Layout](#-directory-layout)
- [🎯 Setting Up](#-setting-up-)

</br>

## 📝 About The Project [🔝](#-table-of-contents)
리덕스를 활용한 할일들을 추가, 삭제, 및 상세보기가 가능합니다.

</br>

## 💡 Skills Stack [🔝](#-table-of-contents)
<img alt="React" src ="https://img.shields.io/badge/react-282C34.svg?&style=for-the-badge&logo=react&logoColor=61DAFB"/> <img alt="Styled Components" src ="https://img.shields.io/badge/styled components-282C34.svg?&style=for-the-badge&logo=styledcomponents&logoColor=DB7093"/> 

</br>

## 📍 Project Link [🔝](#-table-of-contents)
https://react-to-do-list-alpha.vercel.app/

</br>

## 🗂 Directory Layout [🔝](#-table-of-contents)
```
📦src
 ┣ 📂app
 ┣ 📂component
 ┃ ┣ 📂Details
 ┃ ┃ ┣ 📜TopdoDetails.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂Form
 ┃ ┃ ┣ 📜Form.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂TodoItem
 ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┗ 📜style.js
 ┃ ┗ 📂TodoList
 ┃ ┃ ┣ 📜TodoList.jsx
 ┃ ┃ ┗ 📜style.js
 ┣ 📂pages
 ┃ ┣ 📜Details.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┗ 📜style.js
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜todos.js
 ┣ 📂routers
 ┃ ┗ 📜Router.js
 ┣ 📜.DS_Store
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜setupTests.js
 ```

</br>

## 🎯 Setting Up [🔝](#-table-of-contents)
```sh
npx npx create-react-app todo-list-redux --template redux
cd todo-list-redux
npm start
```
