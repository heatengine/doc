# Angular

## Compilation
### JIT - Just In Time Compiler
- Creates vendor bundle to with angular compiler
- Shows Errors at run time
- Compiles the application in users browser
- Suitable for development purpose
### AOT-  Ahead Of Time Compiler
- Compiles application at run time (so the errors also)
- Smaller and faster
- Suitable for production

## Life Cycle Hooks
- `constructor` - when the component class instance is created (once)
- `ngOnChange` - every time there is any change in the input property of the component
- `ngOnInit` - when component is initialized (only once after first `onChange`)
- `ngDoCheck` - when the change detector of the given component is invoked. It allows us to implement our own change detection algorithm for the given component
  - `ngAfterContentInit` - after angular perform any content projection
  - `ngAfterContentChecked` - after each time component has been checked by change detector
  - `ngAfterViewInit` - after component's view fully initialized
  - `ngAfterViewChecked` - each time after component view is checked
- `ngOnDestroy` - before angular destroys the component

## Component ```@component```
- The most basic building block of Angular is a Component. It consist of 3 files
  1. template file (.html)
  2. component file {.ts}
  2. style file {.css}
```
@component({
  selector: 'app-component-name',
  template: './component-name.html',
  style: './component-name.css'
})

export class ComponentName {}
```

## Module ```@ngModule```
- A place where you can group components, services, directives, pipes etc.
```
@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  bootstrap: [AppComponent] // only in app component
})
export class AppModule {}
```
## Service ```@Injectable```
- Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
```
@Injectable({ providedIn: 'root' })
export class ServiceNameServiceService { }
```

## Directives 
- Directives are classes that add additional behavior to elements in your Angular applications. 
- Types
  - Component - directive with a template
  - Attribute - changes the appearance or behavior of an element (ngClass, ngStyle etc.)
  - structural - manipulates the DOM layout (ngFor, ngIf etc.)

## Pipes `@Pipe`
- Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. (number, currency, date pipe etc.)

## Dependency Injection
- Dependencies are services or objects that a class needs to perform its function. Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them. It uses `@injectable` decorator.

## RxJS - Reactive Extensions for JavaScript
- Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.
- RxJS is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.
- observable, operators, subject, behavior subject subscription.

## Observables and Behavior subjects
- `Observable` - Observables are lazy Push collections of multiple values.
- `Subscription` -  A Subscription is an object that represents a disposable resource, usually the execution of an Observable. A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription.
- `Subject` - An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers.
- `BehaviorSubject` - One of the variants of Subjects is the BehaviorSubject, which has a notion of "the current value". It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive the "current value" from the BehaviorSubject.
 

## Interpolation
- One way text binding.
- `<p>1 + 1 is {{ 1 + 1 }}</p>`

## Promise vs Observable
- One major difference between observables and promises. Observables keep "emitting" data into the "subscription" instead of using single use .then() and .catch() handlers.

## Interceptor
- The Angular HTTP Interceptor is introduced along with the new HTTPClientModule. The Interceptor helps us to modify the HTTP Request by intercepting it before the Request is sent to the back end.

## Route Guards
- Angular route guards are interfaces provided by angular which when implemented allow us to control the accessibility of a route based on condition provided in class implementation of that interface.

## Forms
- Reactive Forms
- Template Driven Forms

## Zone?
- Zone helps Angular know when to trigger change detection and let the developers focus on the application development. By default, Zone is loaded and works without additional configuration. However, you don't necessarily have to use Zone to make Angular work. Instead, you can opt to trigger change detection on your own.

## Data sharing between components
- Using `@Input` and `@Output`
- Using Service

## Template Syntax

## What is diff btwn JS module and ngModule

## 3rd PARTY LIBRARY
- ngx-spinner
- ngx-cropper
- quill

```
@Host
@HostBinding
@HostListener
exportAs
@ViewChild
@ViewChildren
@ContentChild
@ContentChildren
@Directive 
provideIn
providers
```