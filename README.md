# mi Budget

<br>

## Description

This is a Single Page App that recieves and calculates personal budgets.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anon I can sign up in the platform so that I can start creating and managing my personal budget.
- **Login:** As a user I can login to the platform so that I can start creating and managing my personal budget.
- **Logout:** As a user I can logout from the platform so no one else can modify my information.
- **Add Information** As a user I can add income and expenses which applie to me.
- **See Table** As a user I can see a table with the information I provided.
- **Get Sum** As a user I can see a the sum or difference of the numbers I provided.
- **Update Table** As a user I can add new data if I need to.
- **Delete Information** As a user I can remove information if no longer applies.
- **Budget History** As a user I can save my information and review it in the future.

## Backlog

- Upload Docs file
- ~~Create Frontend
- ~~Create Backend
- ~~Deploy
- ~~Make pizza
- ~~show error if input form is empty
- ~remove single month from state when deleting
- ~~update table when deletion has been made
- ~~edit table individualy
- ~~filter diferently when creating budget.model and not by month only
- ~~return the sum of values
- ~~return result of subtracting both sums
- clear form after submit
- create basic profile
- show a year table with all months together
- capitalize first letter of each month

# Nice to Have

- Table sent by email
- Calendar selection
- Weekly/ Monthly/ Yearly view
- Upload User Image

<br>

# Client / Frontend

## React Router Routes (React App)

| Path               | Component              | Permissions                | Behavior                                                       |
| ------------------ | ---------------------- | -------------------------- | -------------------------------------------------------------- |
| `/`                | HomePage               | public `<Route>`           | Landing page                                                   |
| `/`                | Form                   | user only `<PrivateRoute>` | Input Form                                                     |
| `/signup`          | SignupPage             | user only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup  |
| `/login`           | LoginPage              | user only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login   |
| `/logout`          | n/a                    | user only `<PrivateRoute>` | Navigate to Landing page after logout, expire session          |
| `/protected/table` | NavBar, Buttons, Table | user only `<PrivateRoute>` | Shows result of provided numbers by month in a table, plus the |
|                    | BudgetInfo, EditInfo,  |                            | sum ofsaid numbers. The table displays "edit" and "delete"     |
|                    | EditBudgetButton,      |                            | buttons which modify the numbers.                              |
|                    | DeleteInfo,            |                            |                                                                |

## Components

- LoginPage

- SignupPage

- NavBar

- ProtectedTable

- Buttons

- Table

- BudgetInfo

- EditInfo

- EditBudgetButton

- DeleteInfo

## Services

- Auth Service

  - login(user)
  - signup(user)
  - logout()
  - me()

- Data Input Service

  - sendData()
  - updateData()
  - getData()
  - removeSingleBudget()

<br>

# Server / Backend

## Models

User model

```javascript
{
  username: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  avatar: {type: String}
  budget: [{
          Object:{
              type: Schema.Types.ObjectId,
              ref:'Budget',
            }
            }]
}
```

Budget model

```javascript
 {
   month: String
        income:{
                 passive: Number,
                 active: Number,
                 otherIncome: Number,
                }
        expenses:{
                 fixed: Number,
                 variable: Number,
                  periodic: Number,
                  otherExpenses: Number,
                   },
   user: {type: Schema.Types.ObjectId,ref:'User'},
 }
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL            | Request Body            | Success status | Error Status | Description                                                                                                                     |
| ----------- | -------------- | ----------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/profile `    | Saved session           | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup` | {name, email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password}    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout` | (empty)                 | 204            | 400          | Logs out the user                                                                                                               |

<br>

## Links

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Praa199/mi-budget-client)

[Server repository Link](https://github.com/Praa199/mi-budget-api)

[Deployed App Link](https://mi-budget.netlify.app/)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1CaWDEtlLkG-H59dmJ-tPk2nLxLvYF-gH92c0HWay_EQ/edit?usp=sharing)
