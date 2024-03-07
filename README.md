# Personal Portfolio Website

[Demo](https://portfolio-tacuong.onrender.com)

![project overview](./images/project-overview.png)

## Tech stack

- Node: 21.1.0
- Frontend: ReactJS
- Backend: ExpressJS

## Deploy app to production

### 1. Create a [Render](https://dashboard.render.com) account

Render account is used to create API server and Static site. Link to Github account to deploy repository

### 2. Create a [Web Service](https://dashboard.render.com/create?type=web)

This is an API server

- Enter name of web service

- Select region **_Singapore (Southest Asia)_**

- Select branch **_main_**

- In the Root Directory section fill **_./backend_**

- In the Runtime section select **_Docker_**

- Add environment variables just like the [.env.example](./backend/.env.example) file

### 3. Create a [Static Site](https://dashboard.render.com/select-repo?type=static)

It is an user interface.

- Enter name of static site

- Select branch **_main_**

- In the Root Directory section fill **_./frontend_**

- In the Build Command section fill **_npm run build_**

- In the Publish directory section fill **_build_**

- In the Environment Variables section add **_NODE_VERSION = 21.1.0_** and add more environment variables just like the [.env.example](./frontend/.env.example) file

## UI library

- [Icons](https://fontawesome.com/search)
- [Components](https://v4.mui.com/)
