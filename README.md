# Mr. Potato Bruce
Mr. Potato Bruce (MPB) is a demo application written to showcase a typed style API and feature capabilities for **[Stylable](https://stylable.io)**.

## Structure
MPB is comprised of several components simulating the structure of a simple web application.

```
App
 ├── Nav-bar
 |  ├── index.tsx
 |  └── index.st.css
 |
 └── Potato
    ├── index.tsx
    ├── index.st.css
    |
    ├── Eye
    |   ├── index.tsx
    |   └── index.st.css
    |
    └── Mouth
        ├── index.tsx
        └── index.st.css
```

In our case the main App component utilizes two components, Nav-bar and Potato.

### App
The App component is the root level of our application. It also happens to be the only component that manages any state for the entire application.

In this demo we used the App component to compose both the Nav-bar and Potato components, and apply our overrides to their styling.

### Nav-bar
The Nav-bar component functions as the menu for the application located on the top-side of the application, allowing the user to jump between various pre-defined presets and customizations.

For the purposes of a demo the Nav-bar serves the part of a component over whose API we have full control. It was created specifically to be the menu for this application and serves no further generic role.

We are able to tailor its API (props) exposing the various internal parts and behaviors to match the rest of our application.


### Potato
The Potato is the main graphical element in our applications allowing users to jump between its various states.

The Potato component illustrates a usecase in which we have a **Stylable** component with an API that we do not control ourselves. This can simulate a component coming from a UI Library, another team in the company or a 3rd party source (e.g. NPM).

While not having complete control over this component's API (props), its **Stylable** stylesheet exposes a typed interface declaring its internal parts and states. This allows us to customize it externally while keeping us assured of our actions.

## Installing the roject
1. Clone the repo
2. run `yarn install`

## Running the project
1. run `yarn start`
2. open a browser to `localhost:3000/`