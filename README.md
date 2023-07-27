# TODO List App Review

The initial version of the application had the following characteristics:

1. **Storing Data in Component State:** All tasks were stored directly in the component's state. This approach is fine for a small application with no backend service but is not sustainable for a larger application with a backend service.

2. **Task Addition:** A new task was pushed directly into the state, which is not the correct way to update state in React. Also, the new task was hardcoded, and the application did not provide a way for users to input their own tasks.

3. **Task Completion:** Clicking on a task simply added the task to the completed tasks array without removing the task from the active tasks array and without updating the `done` field of the task.

4. **Use of React Functional Components and Hooks:** The application was using a class-based component for the `Tasks` component.

5. **Key Prop for List Items:** The `key` prop for the task items in the list was not provided, which can lead to unexpected behavior and performance issues in React.

6. **Separation of Components:** The `Tasks` component was handling too many responsibilities: fetching tasks, managing state, and rendering the UI.

7. **Backend Service:** There was no backend service in the initial application.

8. **Error Handling:** There was no error handling in the initial version of the application.

9. **Testing:** There were no tests in the initial version of the application.

10. **Coding Standards:** There were no enforced coding standards or styles.

## Modifications Made

The following modifications were made to the application:

1. **Migration to Vite + TypeScript:** The application was migrated from Create React App to Vite. This was done for several reasons:

   - **Fast Hot Module Replacement (HMR):** Vite provides lightning-fast hot module replacement which significantly improves the development experience.

   - **Out-of-the-box TypeScript Support:** Vite has built-in TypeScript support which means there's no need to set up additional tooling to use TypeScript. This helps us leverage the benefits of TypeScript such as static type checking, better IDE support, and improved code readability and maintainability.

   - **Modern and Future-Proof:** Vite uses native ES modules which makes it more modern and future-proof. It also provides support for .env variables, aliasing, and other advanced configuration out of the box.

2. **Fetching and Updating Data:** The application now fetches data from the Firebase backend service using `react-query` and manages the state of tasks within react-query.

3. **Task Addition:** The application now uses the mutation feature of react-query to add a new task to the backend, and invalidates the tasks query to update the UI. An input field and button have been added for users to add their own tasks.

4. **Task Completion:** Clicking on a task now correctly marks it as completed in the backend, and then invalidates the tasks query to update the UI.

5. **Use of React Functional Components and react-query:** The `Tasks` component has been refactored to be a functional component and uses react-query for data fetching and state management.

6. **Key Prop for List Items:** A unique `key` prop has been added to each task item in the list.

7. **Separation of Components:** The `TaskForm` and `TaskList` components have been extracted to improve code organization and separation of concerns.

8. **Backend Service:** A Node.js service using Express has been added, which connects to a Firebase database to store the tasks.

9. **Error Handling:** Basic error handling has been added for the async operations, such as fetching tasks, adding a new task, and updating a task.

10. **Testing:** Tests have been added for the backend service using Jest and supertest, and for the frontend using React Testing Library.

11. **Coding Standards:** ESLint and Prettier have been added to the project to ensure code consistency and enforce best practices.

12. **Project Restructuring:** The project structure was revised to improve organization, facilitate code maintenance, and align with best practices.

13. **Package Updates:** All packages were updated to their latest versions for security, performance, new features, and compatibility reasons.

# How to Run the Project

This project consists of a client and a server which reside in separate folders. Follow the steps below to run the project locally:

## Server

The server is a Node.js application that connects to a Firebase database.

To run the server:

1. Navigate to the `server` directory:

   ```
   cd server
   ```

2. Install the required dependencies:

   ```
   yarn install
   ```

3. You need to setup the environment variables for the server. A `.env.example` file is included in the server directory. Rename or copy it to `.env` and fill out the required environment variables.

4. Start the server:

   ```
   yarn start
   ```

The server should now be running at `http://localhost:3000`.

## Client

The client is a React application built with Vite and TypeScript.

To run the client:

1. Navigate to the `client` directory:

   ```
   cd client
   ```

2. Install the required dependencies:

   ```
   yarn install
   ```

3. Start the client:

   ```
   yarn dev
   ```

The client should now be running at `http://localhost:5173`.

## Running Tests

You can also run the tests for both the server and the client. The tests use Jest, Supertest, and React Testing Library.

To run the tests:

1. For the server, navigate to the `server` directory and run:

   ```
   yarn test
   ```

2. For the client, navigate to the `client` directory and run:

   ```
   yarn test
   ```
