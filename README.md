# CodeAnt Assessment

This project is a React application that includes a repository management interface. Below are the instructions for routing, page flow, and other important details.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Routing](#routing)
- [Page Flow](#page-flow)
- [Components](#components)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/codeant-assessment.git
    ```
2. Navigate to the project directory:
    ```bash
    cd codeant-assessment
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the application, run:
```bash
npm start
```
This will start the development server and open the application in your default web browser.

## Routing

The application uses React Router for navigation. Below are the available routes:

- `/`: This route renders the `Repository` component, which is the main interface for managing repositories.
- `/signin`: This route renders the `Signin` component, which is the login page for the application.

### Example Routes and Results

1. **Home Route (`/`)**
    - **URL:** `http://localhost:3000/`
    - **Component Rendered:** `Repository`
    - **Description:** Displays the main repository management interface.

2. **Sign In Route (`/signin`)**
    - **URL:** `http://localhost:3000/signin`
    - **Component Rendered:** `Signin`
    - **Description:** Displays the sign-in page for user authentication.

## Page Flow

1. **Sign In Page**
    - Users start at the `/signin` route.
    - After successful authentication, users are redirected to the home page (`/`).

2. **Home Page**
    - Displays a list of repositories.
    - Users can search, add, and refresh repositories.
    - The sidebar allows navigation to different sections like AI Code Review, Cloud Security, How to Use, and Settings.

## Components

### RepoLeft
- **File Path:** `src/Components/RepoLeft.jsx`
- **Description:** Sidebar component for navigation.

### RepoRight
- **File Path:** `src/Components/RepoRight.jsx`
- **Description:** Main content area displaying repositories.

### RepoListItes
- **File Path:** `src/Components/RepoListItes.jsx`
- **Description:** List items for the sidebar navigation.

### Repository
- **File Path:** `src/Components/Repository.jsx`
- **Description:** Main component that combines `RepoLeft` and `RepoRight`.

### Signin
- **File Path:** `src/Components/Signin.jsx`
- **Description:** Sign-in page component.

### App
- **File Path:** `src/App.jsx`
- **Description:** Main application component that sets up routing.

## Conclusion

This README provides an overview of the project structure, routing, and page flow. For more detailed information, refer to the individual component files and their respective code comments.