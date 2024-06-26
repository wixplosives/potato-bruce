# Mr. Potato Bruce

[![Build Status](https://github.com/wixplosives/potato-bruce/workflows/tests/badge.svg)](https://github.com/wixplosives/potato-bruce/actions)

Mr. Potato Bruce (MPB) is a demo application showcasing the features and typed style API of **[Stylable](https://stylable.io)**. You can see the [working demo here](https://wixplosives.github.io/potato-bruce/).

It is a full demo so you can play with the features and use the API.

## Structure

MPB has several components simulating the structure of a simple web application. These components are composed of a TypeScript file with the component's logic, and the **Stylable** .st.css file.

```
App
 ├── app.tsx
 ├── app.st.css
 |
 ├── nav-bar
 |  ├── nav-bar.tsx
 |  └── nav-bar.st.css
 |
 └── potato
    ├── potato.tsx
    ├── potato.st.css
    |
    ├── eyes
    |  ├── eyes.tsx
    |  └── eyes.st.css
    |
    └── mouth
       ├── mouth.tsx
       └── mouth.st.css
```

### App

The App component is the root level of our application. It's the only component that manages the state for the entire application.

In this demo we used the App component to compose both the `nav-bar` and `potato` components, and to apply our overrides to their styling.

### Nav-bar

The `nav-bar` component functions as the menu for the application and is located on the top of the rendered page. This menu is where users can select between various pre-defined styles and customizations.

For the purposes of the demo, we have full control over the `nav-bar's` API. It was created specifically to be the menu for this application and serves no other, generic purpose. **Stylable** components typically are generic and stored in accessible libraries so they could potentially be reused in other applications.

We are able to tailor the 'nav-bar' component, exposing the various internal parts and behaviors to match the rest of our application.

> Note: We chose to customize most of this component's styling from our `app.st.css` stylesheet, creating one location to specify our entire application look and feel.

### Potato

The 'potato' is the main graphical element in our application. You can select between its various states.

The 'potato' component illustrates a use case in which we have a **Stylable** component with an API that this application does not control. This can simulate a component coming from a UI Library, another team in the company, or a 3rd party source (e.g. NPM).

Although we don't have complete control over this component's API (props), its **Stylable** stylesheet exposes a typed interface declaring its internal parts and states. This enables us to customize it externally, ensuring that any actions we take for this application's component's states, internal parts or look and feel are both valid and don't change the component itself.

## Running the project

1. Clone the repo.
2. Run `npm i`.
3. Run `npm start`.
