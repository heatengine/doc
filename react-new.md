# React

## Component

- Components can not be used as a wrapper out of the box, to do so `props.children` prop us used, this concept is called composition.

## Binding `{}`

## Props

```
  // Parent Component
  <ChildComponent attribute1="" attribute2="" />

  // Child Component
  const ChildComponent = (props) => {
    // props -> { attribute1, attribute1 }
    return <h1>Hello</h1>
  }
  export default ChildComponent;
```

# State management

## React hooks

1. useState


    - It registers new state for the component it is used in

```
    const [state, setState] = useState(<initial-value>);

    // best practice for updating state if it depends on previousValue
    setState((previousValue) => {
      return <new-state-value>
    })
```
## 2 way binding
## Controlled component
- When the value and change to the value in not controlled by the parent component.
## stateless/dumb/presentational and stateful/smart component
## Conditional rendering
- Map through or use ternary operators for conditional and list rendering in template or store JSX in variable.
- All the list expect a value for `key` prop to keep keep the application bug free and high performing which must be unique. id is perfect fit for this value.


## Styling
### Dynamic styling *{MUST USE STATE}*
- Using inline styling
- Dynamic classes
## Scoped styles
- pkg `styled-components`
- CSS Modules
  - filename.module.css
  ```
  import styles from 'filename.module.css';
  // access all the classes in css as property of `styles` which are basically custom class names specific to component
  ```