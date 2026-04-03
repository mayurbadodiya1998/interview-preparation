window.__CATEGORY_angular__ = {
    category: "angular",
    label: "Angular",
    icon: "bi-bootstrap",
    topics: [
        {
            id: "components",
            title: "Components",
            icon: "bi-box",
            questions: [
                {
                    q: "What is a component in Angular?",
                    a: `A <strong>component</strong> is the fundamental building block of Angular applications. It controls a portion of the screen called a <strong>view</strong> and is made up of three main parts. The <strong>TypeScript class</strong> handles logic and data, the <strong>HTML template</strong> defines the UI, and optional <strong>CSS styles</strong> control appearance. Components are organized in a tree structure starting from the root component.
<pre><code>@Component({
  selector: 'app-hello',
  template: '&lt;h1&gt;Hello, {{name}}!&lt;/h1&gt;',
  styles: ['h1 { color: blue; }']
})
export class HelloComponent {
  name = 'Angular';
}</code></pre>
Every Angular app has at least one <strong>root component</strong> that connects the component tree to the DOM. Components make your application <strong>modular, testable, and reusable</strong> across different parts of the app.`
                },
                {
                    q: "What does the @Component decorator do?",
                    a: `The <strong>@Component decorator</strong> marks a class as an Angular component and provides configuration metadata. It tells Angular how to create, render, and use the component in the application. The decorator accepts an object with properties like <strong>selector</strong>, <strong>template</strong>, <strong>styles</strong>, and <strong>changeDetection</strong>. Without this decorator, Angular will not recognize the class as a component.
<pre><code>@Component({
  selector: 'app-user',       // HTML tag name
  templateUrl: './user.component.html',  // external template
  styleUrls: ['./user.component.css'],   // external styles
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent { }</code></pre>
Key metadata includes <strong>selector</strong> for the HTML tag, <strong>template/templateUrl</strong> for the view, and <strong>styles/styleUrls</strong> for CSS. You can also configure <strong>changeDetection</strong> and <strong>encapsulation</strong> to optimize performance and style scoping.`
                },
                {
                    q: "How does component communication work with @Input and @Output?",
                    a: `<strong>@Input</strong> allows a parent component to pass data down to a child through property binding. <strong>@Output</strong> lets the child emit events back to the parent using an <strong>EventEmitter</strong>. This creates a clear one-way data flow where data goes down and events bubble up. It is the primary mechanism for direct parent-child communication in Angular.
<pre><code>// Child component
@Component({ selector: 'app-child', template: '&lt;button (click)="send()"&gt;Send&lt;/button&gt;' })
export class ChildComponent {
  @Input() message: string = '';
  @Output() notify = new EventEmitter&lt;string&gt;();
  send() { this.notify.emit('Hello from child'); }
}

// Parent template
// &lt;app-child [message]="parentMsg" (notify)="onNotify($event)"&gt;&lt;/app-child&gt;</code></pre>
The parent uses <strong>square brackets []</strong> for property binding to pass data and <strong>parentheses ()</strong> for event binding to listen. For communication between unrelated components, use a <strong>shared service</strong> with observables.`
                },
                {
                    q: "What is View Encapsulation in Angular?",
                    a: `<strong>View Encapsulation</strong> defines how component styles are scoped and isolated from the rest of the application. Angular supports three encapsulation modes to control style behavior. By default, Angular uses <strong>Emulated</strong> mode which adds unique attributes to elements to mimic shadow DOM. This prevents component styles from leaking out and affecting other parts of the app.
<pre><code>@Component({
  selector: 'app-demo',
  template: '&lt;p&gt;Styled text&lt;/p&gt;',
  styles: ['p { color: red; }'],
  encapsulation: ViewEncapsulation.Emulated // default
})
export class DemoComponent { }</code></pre>
<strong>Emulated</strong> adds unique attributes for style scoping. <strong>ShadowDom</strong> uses native browser Shadow DOM for true isolation. <strong>None</strong> removes all encapsulation making styles global — use it cautiously as it causes style conflicts.`
                },
                {
                    q: "What is content projection in Angular?",
                    a: `<strong>Content projection</strong> allows you to insert external content into a component's template using the <strong>&lt;ng-content&gt;</strong> tag. It is Angular's version of slots, similar to React's children or Vue's slots. This makes components more flexible because the parent decides what content goes inside the child. You can use <strong>single-slot</strong> or <strong>multi-slot</strong> projection depending on your needs.
<pre><code>// Card component template
&lt;div class="card"&gt;
  &lt;div class="header"&gt;&lt;ng-content select="[header]"&gt;&lt;/ng-content&gt;&lt;/div&gt;
  &lt;div class="body"&gt;&lt;ng-content&gt;&lt;/ng-content&gt;&lt;/div&gt;
&lt;/div&gt;

// Usage
&lt;app-card&gt;
  &lt;h2 header&gt;Title&lt;/h2&gt;
  &lt;p&gt;Body content here&lt;/p&gt;
&lt;/app-card&gt;</code></pre>
Multi-slot projection uses the <strong>select</strong> attribute to target elements by tag, class, or attribute. This pattern is essential for building <strong>reusable layout components</strong> like cards, modals, and tabs.`
                },
                {
                    q: "How do you create dynamic components in Angular?",
                    a: `<strong>Dynamic components</strong> are created programmatically at runtime instead of being declared in a template. You use <strong>ViewContainerRef</strong> to create and insert them into the DOM dynamically. Since Angular 13+, you no longer need <strong>ComponentFactoryResolver</strong> — you can pass the component class directly. This approach is useful when you do not know which component to display until runtime.
<pre><code>@Component({
  selector: 'app-host',
  template: '&lt;ng-container #container&gt;&lt;/ng-container&gt;'
})
export class HostComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  loadComponent() {
    this.container.clear();
    const ref = this.container.createComponent(DynamicComponent);
    ref.instance.data = 'Hello';
  }
}</code></pre>
This pattern is commonly used for <strong>modals, tabs, or plugin systems</strong> where components are loaded on demand. You can pass data to dynamic components through the <strong>component reference instance</strong> properties.`
                },
                {
                    q: "What are the key lifecycle hooks of a component?",
                    a: `Angular components have a clearly defined <strong>lifecycle</strong> managed by the framework. Each lifecycle hook is an interface method that Angular calls at specific moments. The most important hooks are <strong>ngOnInit</strong> for setup, <strong>ngOnChanges</strong> for reacting to input changes, and <strong>ngOnDestroy</strong> for cleanup. Understanding when each hook runs helps you write efficient and bug-free components.
<pre><code>export class MyComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value!: string;

  ngOnChanges(changes: SimpleChanges) {
    // Called when @Input properties change
  }
  ngOnInit() {
    // Called once after first ngOnChanges; ideal for initialization
  }
  ngOnDestroy() {
    // Called before component is removed; clean up subscriptions
  }
}</code></pre>
The full order is: <strong>ngOnChanges</strong> &rarr; <strong>ngOnInit</strong> &rarr; <strong>ngDoCheck</strong> &rarr; <strong>ngAfterContentInit</strong> &rarr; <strong>ngAfterContentChecked</strong> &rarr; <strong>ngAfterViewInit</strong> &rarr; <strong>ngAfterViewChecked</strong> &rarr; <strong>ngOnDestroy</strong>. Hooks from <strong>ngDoCheck</strong> to <strong>ngAfterViewChecked</strong> repeat on every change detection cycle.`
                },
                {
                    q: "What is the difference between inline and external templates?",
                    a: `<strong>Inline templates</strong> are defined directly in the @Component decorator using the <strong>template</strong> property as a string. <strong>External templates</strong> use a separate HTML file linked via <strong>templateUrl</strong>. Inline templates are good for small, simple views with a few lines of HTML. External templates keep the HTML separate from TypeScript for better organization.
<pre><code>// Inline template
@Component({
  selector: 'app-inline',
  template: '&lt;h1&gt;{{title}}&lt;/h1&gt;&lt;p&gt;Inline template&lt;/p&gt;'
})
export class InlineComponent { title = 'Hello'; }

// External template
@Component({
  selector: 'app-external',
  templateUrl: './external.component.html'
})
export class ExternalComponent { title = 'Hello'; }</code></pre>
<strong>Inline</strong> is convenient for small templates with minimal HTML. <strong>External</strong> is preferred for larger views as it separates concerns and improves readability. Most Angular CLI-generated components use external templates by default.`
                },
                {
                    q: "What are standalone components in Angular?",
                    a: `<strong>Standalone components</strong> were introduced in Angular 14+ and do not need to be declared in an NgModule. They manage their own dependencies via the <strong>imports</strong> array in the decorator. This removes the need to create NgModules just to use a component. Standalone components are now the <strong>recommended default</strong> approach in Angular 17+.
<pre><code>@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '&lt;p *ngIf="show"&gt;I am standalone!&lt;/p&gt;'
})
export class StandaloneComponent {
  show = true;
}</code></pre>
Standalone components simplify the architecture by eliminating <strong>NgModule boilerplate</strong>. They can be <strong>bootstrapped directly</strong>, lazy-loaded individually, and mixed with NgModule-based components in the same app.`
                },
                {
                    q: "How do you use template reference variables in Angular?",
                    a: `<strong>Template reference variables</strong> provide a direct reference to a DOM element, component, or directive in the template. They are declared using the <strong>#</strong> symbol followed by a variable name. You can use them to access element properties, call component methods, or read directive values directly in the template. They are scoped to the template where they are defined.
<pre><code>&lt;input #nameInput type="text" /&gt;
&lt;button (click)="greet(nameInput.value)"&gt;Greet&lt;/button&gt;

&lt;!-- Reference to a child component --&gt;
&lt;app-timer #timer&gt;&lt;/app-timer&gt;
&lt;button (click)="timer.start()"&gt;Start Timer&lt;/button&gt;</code></pre>
You can also access template references programmatically using <strong>@ViewChild</strong>:
<pre><code>@ViewChild('nameInput') input!: ElementRef;
ngAfterViewInit() { this.input.nativeElement.focus(); }</code></pre>
References are available after the <strong>ngAfterViewInit</strong> lifecycle hook. This gives you full control over DOM elements from your TypeScript code.`
                },
                {
                    q: "What is the difference between @ViewChild and @ViewChildren?",
                    a: `<strong>@ViewChild</strong> returns the first matching element from the component's template as a single reference. <strong>@ViewChildren</strong> returns all matching elements as a <strong>QueryList</strong>, which is useful when you have multiple instances of the same child. @ViewChild is available after <strong>ngAfterViewInit</strong>, and @ViewChildren also provides a <strong>changes</strong> observable so you can react when items are added or removed dynamically.
<pre><code>@ViewChild(ChildComponent) child!: ChildComponent;
@ViewChildren(ChildComponent) children!: QueryList&lt;ChildComponent&gt;;

ngAfterViewInit() {
  console.log(this.child);           // single instance
  console.log(this.children.length); // count of all instances
  this.children.changes.subscribe(list =&gt; console.log('changed', list.length));
}</code></pre>
Both decorators accept a <strong>component class</strong>, <strong>directive class</strong>, or <strong>template reference variable</strong> string as the selector. Use @ViewChild for single elements and @ViewChildren when dealing with dynamic lists.`
                },
                {
                    q: "What is ng-container and when do you use it?",
                    a: `<strong>ng-container</strong> is a special Angular element that acts as a grouping element without rendering any extra DOM node. It is useful when you need to apply <strong>structural directives</strong> like *ngIf or *ngFor but do not want an additional wrapper element. This keeps your DOM clean and avoids unintended CSS side effects from extra elements. It is commonly used with <strong>ng-template</strong> for conditional content display.
<pre><code>&lt;ng-container *ngIf="isLoggedIn"&gt;
  &lt;p&gt;Welcome back!&lt;/p&gt;
  &lt;button&gt;Logout&lt;/button&gt;
&lt;/ng-container&gt;

&lt;ng-container *ngFor="let item of items"&gt;
  &lt;span&gt;{{ item.name }}&lt;/span&gt;
&lt;/ng-container&gt;</code></pre>
Unlike a <strong>div</strong> or <strong>span</strong>, ng-container does not appear in the rendered DOM at all. This makes it perfect for applying directives without affecting your layout or styling.`
                },
                {
                    q: "What is ng-template in Angular?",
                    a: `<strong>ng-template</strong> defines a block of HTML that Angular does not render by default. It is only rendered when explicitly told to using <strong>structural directives</strong> like *ngIf else, *ngFor, or programmatically via <strong>ViewContainerRef</strong>. It acts as a blueprint for content that can be stamped out when needed. Angular replaces the ng-template tag itself — it never appears in the final DOM.
<pre><code>&lt;div *ngIf="hasData; else loadingTpl"&gt;
  Data loaded!
&lt;/div&gt;
&lt;ng-template #loadingTpl&gt;
  &lt;p&gt;Loading...&lt;/p&gt;
&lt;/ng-template&gt;</code></pre>
Use <strong>ng-template</strong> with the <strong>#ref</strong> syntax to define reusable template blocks. You can render them using <strong>ngTemplateOutlet</strong> or reference them in *ngIf else clauses.`
                },
                {
                    q: "What is the difference between constructor and ngOnInit in a component?",
                    a: `The <strong>constructor</strong> is a standard TypeScript class feature that runs when the class is instantiated and is used for <strong>dependency injection</strong> only. <strong>ngOnInit</strong> is an Angular lifecycle hook that runs after Angular has set all <strong>@Input</strong> properties and initialized the component. You should use the constructor only to inject services and ngOnInit for initialization logic. This is because @Input values are not available in the constructor but are fully resolved by the time ngOnInit runs.
<pre><code>export class UserComponent implements OnInit {
  @Input() userId!: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // userId is available here, NOT in constructor
    this.userService.getUser(this.userId);
  }
}</code></pre>
Use the <strong>constructor</strong> for DI injection and <strong>ngOnInit</strong> for data fetching, subscriptions, and property setup. This separation keeps your code clean and avoids timing issues with input bindings.`
                },
                {
                    q: "What is the difference between a smart component and a dumb component?",
                    a: `<strong>Smart components</strong> (also called container components) handle business logic, data fetching, and state management. They know about services and application logic. <strong>Dumb components</strong> (also called presentational components) only receive data through <strong>@Input</strong> and emit events through <strong>@Output</strong>. They do not know where the data comes from, making them highly reusable and easy to test.
<pre><code>// Smart (container) component
@Component({ template: '&lt;app-user-list [users]="users" (select)="onSelect($event)"&gt;&lt;/app-user-list&gt;' })
export class UserContainerComponent {
  users = this.userService.getUsers();
  constructor(private userService: UserService) {}
  onSelect(user: User) { this.router.navigate(['/user', user.id]); }
}

// Dumb (presentational) component
@Component({ selector: 'app-user-list', template: '...' })
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() select = new EventEmitter&lt;User&gt;();
}</code></pre>
This separation follows the <strong>single responsibility principle</strong> and makes your app easier to maintain. Smart components orchestrate data flow while dumb components focus purely on presentation.`
                },
                {
                    q: "How does change detection work in a component?",
                    a: `Angular uses a <strong>change detection</strong> mechanism that checks each component from top to bottom in the component tree. By default, it checks every component on every browser event, timer, or HTTP response. You can optimize this by using <strong>ChangeDetectionStrategy.OnPush</strong>, which only checks when @Input references change, an event fires, or you trigger it manually. <strong>OnPush</strong> significantly improves performance in large applications.
<pre><code>@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '&lt;p&gt;{{ data.name }}&lt;/p&gt;'
})
export class OptimizedComponent {
  @Input() data!: { name: string };
}</code></pre>
With <strong>OnPush</strong>, always use <strong>immutable data</strong> patterns to ensure Angular detects changes properly. Use the <strong>async pipe</strong> or <strong>markForCheck()</strong> when data changes without a new @Input reference.`
                },
                {
                    q: "What is the host property in the @Component decorator?",
                    a: `The <strong>host</strong> property in the @Component or @Directive decorator lets you bind properties, attributes, and event listeners directly on the <strong>host element</strong>. It provides a cleaner alternative to using <strong>@HostBinding</strong> and <strong>@HostListener</strong> decorators separately. The keys in the host object can be properties, attributes, or event names, and the values are expressions to evaluate. This is especially useful when you have multiple host bindings to configure.
<pre><code>@Component({
  selector: 'app-button',
  template: '&lt;ng-content&gt;&lt;/ng-content&gt;',
  host: {
    '[class.active]': 'isActive',
    '[attr.role]': '"button"',
    '(click)': 'onClick()',
    '[style.cursor]': '"pointer"'
  }
})
export class ButtonComponent {
  isActive = false;
  onClick() { this.isActive = !this.isActive; }
}</code></pre>
The <strong>host</strong> property keeps all host bindings in one place making the code easier to read. It is functionally equivalent to using separate @HostBinding and @HostListener decorators.`
                }
            ]
        },
        {
            id: "data-binding",
            title: "Data Binding",
            icon: "bi-link-45deg",
            questions: [
                {
                    q: "What are the types of data binding in Angular?",
                    a: `Angular supports <strong>four types of data binding</strong> that connect the component class to its template. <strong>Interpolation</strong> and <strong>property binding</strong> are one-way from component to view. <strong>Event binding</strong> is one-way from view to component. <strong>Two-way binding</strong> combines both directions using the banana-in-a-box syntax [(ngModel)].
<pre><code>&lt;!-- 1. Interpolation (one-way: component to view) --&gt;
&lt;p&gt;{{ title }}&lt;/p&gt;

&lt;!-- 2. Property binding (one-way: component to view) --&gt;
&lt;img [src]="imageUrl" /&gt;

&lt;!-- 3. Event binding (one-way: view to component) --&gt;
&lt;button (click)="onClick()"&gt;Click&lt;/button&gt;

&lt;!-- 4. Two-way binding (both directions) --&gt;
&lt;input [(ngModel)]="name" /&gt;</code></pre>
<strong>Interpolation</strong> and <strong>property binding</strong> display data from the component. <strong>Event binding</strong> captures user actions and sends them to the component. <strong>Two-way binding</strong> keeps the view and model in sync automatically.`
                },
                {
                    q: "What is interpolation in Angular?",
                    a: `<strong>Interpolation</strong> uses double curly braces <strong>{{ }}</strong> to embed expressions directly in the template. Angular evaluates the expression and converts the result to a string for display. It is the simplest form of <strong>one-way data binding</strong> from the component to the view. You can use property access, method calls, and simple expressions inside the curly braces.
<pre><code>@Component({
  selector: 'app-greet',
  template: '&lt;h1&gt;Welcome, {{ fullName }}!&lt;/h1&gt;&lt;p&gt;2 + 2 = {{ 2 + 2 }}&lt;/p&gt;'
})
export class GreetComponent {
  firstName = 'John';
  lastName = 'Doe';
  get fullName() { return this.firstName + ' ' + this.lastName; }
}</code></pre>
Interpolation supports simple expressions, method calls, and property access but does <strong>not</strong> support assignments, chaining with semicolons, or the <strong>new</strong> keyword. Expressions should be simple, fast, and free of side effects.`
                },
                {
                    q: "How does property binding work in Angular?",
                    a: `<strong>Property binding</strong> sets a DOM element property or a directive/component input to a value from the component class. It uses <strong>square bracket []</strong> syntax around the property name. Unlike interpolation, property binding can pass <strong>non-string values</strong> like booleans, objects, and arrays directly. It is a one-way binding from the component to the DOM.
<pre><code>&lt;!-- Bind to element property --&gt;
&lt;img [src]="imageUrl" [alt]="imageAlt" /&gt;

&lt;!-- Bind to component input --&gt;
&lt;app-child [user]="currentUser"&gt;&lt;/app-child&gt;

&lt;!-- Bind to disabled property --&gt;
&lt;button [disabled]="isSubmitting"&gt;Submit&lt;/button&gt;</code></pre>
Property binding is <strong>one-way</strong> from the component to the DOM and updates whenever the expression value changes. Use it when you need to pass non-string data or bind to element properties like <strong>disabled</strong>, <strong>hidden</strong>, or <strong>src</strong>.`
                },
                {
                    q: "How does event binding work in Angular?",
                    a: `<strong>Event binding</strong> listens for DOM events and calls a component method when the event fires. It uses <strong>parentheses ()</strong> syntax around the event name. This is the one-way binding from the <strong>view to the component</strong> that captures user interactions. You can listen to any native DOM event like click, input, keyup, or mouseover.
<pre><code>&lt;button (click)="handleClick($event)"&gt;Click Me&lt;/button&gt;
&lt;input (keyup.enter)="onEnter()" /&gt;
&lt;div (mouseover)="onHover($event)"&gt;Hover me&lt;/div&gt;

// Component class
export class AppComponent {
  handleClick(event: MouseEvent) {
    console.log('Clicked at:', event.clientX, event.clientY);
  }
  onEnter() { console.log('Enter pressed'); }
}</code></pre>
The special <strong>$event</strong> variable provides access to the raw DOM event object. Angular also supports <strong>key event filtering</strong> like (keyup.enter) and (keydown.escape) for cleaner event handling.`
                },
                {
                    q: "What is two-way data binding and how does ngModel work?",
                    a: `<strong>Two-way data binding</strong> synchronizes data between the component and the view in both directions simultaneously. The <strong>[(ngModel)]</strong> directive combines property binding and event binding into one syntax. When the user types in an input, the component property updates automatically and vice versa. You need to import <strong>FormsModule</strong> to use ngModel in your templates.
<pre><code>&lt;!-- Requires FormsModule --&gt;
&lt;input [(ngModel)]="username" /&gt;
&lt;p&gt;Hello, {{ username }}&lt;/p&gt;

&lt;!-- Equivalent expanded form --&gt;
&lt;input [ngModel]="username" (ngModelChange)="username = $event" /&gt;</code></pre>
To use ngModel, import <strong>FormsModule</strong> in your module:
<pre><code>import { FormsModule } from '@angular/forms';
@NgModule({ imports: [FormsModule] })
export class AppModule { }</code></pre>
The <strong>banana-in-a-box syntax [()]</strong> is a shorthand combining property binding and event binding. For custom components, name the @Output as <strong>xChange</strong> to match the @Input <strong>x</strong>.`
                },
                {
                    q: "What is the difference between binding to attributes vs properties?",
                    a: `<strong>Property binding</strong> sets a DOM <strong>property</strong>, while <strong>attribute binding</strong> sets an HTML <strong>attribute</strong>. Most of the time they overlap, but some attributes have no corresponding DOM property like <strong>colspan</strong> and <strong>aria-*</strong>. Properties reflect the current state of the element while attributes reflect the initial HTML value. Use the <strong>[attr.name]</strong> prefix when binding to attributes that have no DOM property equivalent.
<pre><code>&lt;!-- Property binding (sets the DOM property) --&gt;
&lt;input [value]="name" /&gt;

&lt;!-- Attribute binding (sets the HTML attribute) --&gt;
&lt;td [attr.colspan]="colSpan"&gt;Merged&lt;/td&gt;
&lt;div [attr.aria-label]="label"&gt;Accessible&lt;/div&gt;
&lt;table&gt;
  &lt;tr [attr.data-id]="rowId"&gt;...&lt;/tr&gt;
&lt;/table&gt;</code></pre>
<strong>Property binding</strong> is the default and should be used in most cases. Use <strong>[attr.name]</strong> specifically for accessibility attributes, data attributes, and colspan where no DOM property exists.`
                },
                {
                    q: "How do style and class binding work in Angular?",
                    a: `Angular provides shorthand syntax for binding <strong>CSS classes</strong> and <strong>inline styles</strong> to elements dynamically. You can toggle a single class with <strong>[class.name]</strong> or manage multiple classes with <strong>[ngClass]</strong>. Similarly, set individual styles with <strong>[style.prop]</strong> or multiple styles with <strong>[ngStyle]</strong>. These bindings update automatically when the component data changes.
<pre><code>&lt;!-- Single class binding --&gt;
&lt;div [class.active]="isActive"&gt;Tab&lt;/div&gt;

&lt;!-- Multiple classes with ngClass --&gt;
&lt;div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }"&gt;Item&lt;/div&gt;

&lt;!-- Single style binding --&gt;
&lt;div [style.color]="textColor"&gt;Styled&lt;/div&gt;
&lt;div [style.font-size.px]="fontSize"&gt;Sized&lt;/div&gt;

&lt;!-- Multiple styles with ngStyle --&gt;
&lt;div [ngStyle]="{ 'color': textColor, 'font-weight': isBold ? 'bold' : 'normal' }"&gt;Text&lt;/div&gt;</code></pre>
<strong>Class binding</strong> toggles a single CSS class based on a boolean expression. <strong>Style binding</strong> sets individual style properties with optional unit suffixes like <strong>.px</strong>, <strong>.em</strong>, or <strong>.%</strong>.`
                },
                {
                    q: "What are template expressions and their limitations?",
                    a: `<strong>Template expressions</strong> are the code snippets inside interpolation {{ }} or binding brackets [ ] that Angular evaluates to produce a value. They are evaluated on every <strong>change detection cycle</strong>, so they should be simple and fast. The expression context is the component instance, so you can access properties and call methods directly. Template expressions should be <strong>side-effect free</strong> and return a value quickly.
<pre><code>&lt;!-- Valid template expressions --&gt;
&lt;p&gt;{{ user.name }}&lt;/p&gt;
&lt;p&gt;{{ items.length &gt; 0 ? 'Has items' : 'Empty' }}&lt;/p&gt;
&lt;p&gt;{{ getTotal() }}&lt;/p&gt;
&lt;img [src]="getImageUrl(product.id)" /&gt;</code></pre>
<strong>Limitations:</strong> Template expressions cannot use assignments (=), the <strong>new</strong> keyword, chaining with semicolons, or increment/decrement operators. Keep expressions simple and move complex logic to the component class for better performance.`
                },
                {
                    q: "What is the banana-in-a-box syntax?",
                    a: `The <strong>banana-in-a-box [( )]</strong> syntax is Angular's shorthand for two-way data binding. It combines <strong>property binding []</strong> (the box) with <strong>event binding ()</strong> (the banana) in one expression. The most common use is <strong>[(ngModel)]</strong> for form inputs to keep the view and model in sync. You can also create custom two-way bindings on your own components.
<pre><code>&lt;!-- Two-way binding shorthand --&gt;
&lt;input [(ngModel)]="searchTerm" /&gt;

&lt;!-- Custom two-way binding on a component --&gt;
@Component({ selector: 'app-sizer', template: '...' })
export class SizerComponent {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter&lt;number&gt;();
  inc() { this.sizeChange.emit(this.size + 1); }
}

&lt;!-- Usage --&gt;
&lt;app-sizer [(size)]="fontSize"&gt;&lt;/app-sizer&gt;</code></pre>
For custom two-way binding, the convention is an <strong>@Input</strong> named <strong>x</strong> paired with an <strong>@Output</strong> named <strong>xChange</strong>. Angular automatically wires up the [( )] syntax when this naming convention is followed.`
                },
                {
                    q: "How does Angular handle null and undefined values in binding?",
                    a: `Angular provides the <strong>safe navigation operator ?.</strong> and the <strong>nullish coalescing operator ??</strong> to handle null and undefined values gracefully in templates. Without these operators, accessing a property on a null object would throw a runtime error. The safe navigation operator short-circuits and returns undefined instead of crashing the template. The nullish coalescing operator provides a default value when the expression is null or undefined.
<pre><code>&lt;!-- Safe navigation operator prevents errors on null --&gt;
&lt;p&gt;{{ user?.address?.city }}&lt;/p&gt;

&lt;!-- Nullish coalescing provides defaults --&gt;
&lt;p&gt;{{ username ?? 'Guest' }}&lt;/p&gt;

&lt;!-- Without safe navigation, this throws if user is null --&gt;
&lt;!-- &lt;p&gt;{{ user.name }}&lt;/p&gt;  ERROR --&gt;

&lt;!-- Combining with ngIf for conditional rendering --&gt;
&lt;div *ngIf="user"&gt;
  &lt;p&gt;{{ user.name }}&lt;/p&gt;
&lt;/div&gt;</code></pre>
The <strong>safe navigation operator</strong> is especially useful when data loads asynchronously from APIs. Combined with <strong>*ngIf</strong>, you can handle loading states cleanly without risking template errors.`
                },
                {
                    q: "What is the difference between one-way and two-way data binding?",
                    a: `<strong>One-way data binding</strong> flows data in a single direction — either from the component to the view using <strong>interpolation</strong> or <strong>property binding</strong>, or from the view to the component using <strong>event binding</strong>. <strong>Two-way data binding</strong> flows data in both directions simultaneously using the <strong>[(ngModel)]</strong> syntax. One-way binding is more predictable and easier to debug because data flows in one direction. Two-way binding is convenient for form inputs where you want the view and model to stay in sync.
<pre><code>&lt;!-- One-way: component to view --&gt;
&lt;p&gt;{{ message }}&lt;/p&gt;
&lt;img [src]="imageUrl" /&gt;

&lt;!-- One-way: view to component --&gt;
&lt;button (click)="onClick()"&gt;Click&lt;/button&gt;

&lt;!-- Two-way: both directions --&gt;
&lt;input [(ngModel)]="name" /&gt;</code></pre>
<strong>One-way binding</strong> is preferred for most cases as it gives better control over data flow. Use <strong>two-way binding</strong> mainly for form inputs where automatic synchronization is needed.`
                },
                {
                    q: "What is the difference between [ngClass] and [class] binding?",
                    a: `<strong>[class.className]</strong> is used to toggle a single CSS class based on a boolean condition. <strong>[ngClass]</strong> is used when you need to apply multiple classes dynamically using an object, array, or string expression. The single class binding is simpler and slightly more performant for toggling one class. Use <strong>ngClass</strong> when you have complex conditional logic with multiple classes.
<pre><code>&lt;!-- Single class toggle --&gt;
&lt;div [class.active]="isActive"&gt;Single&lt;/div&gt;

&lt;!-- Multiple classes with ngClass --&gt;
&lt;div [ngClass]="{'active': isActive, 'disabled': isDisabled, 'highlight': isNew}"&gt;Multi&lt;/div&gt;

&lt;!-- Array syntax --&gt;
&lt;div [ngClass]="['base', isSpecial ? 'special' : 'normal']"&gt;Array&lt;/div&gt;</code></pre>
Prefer <strong>[class.name]</strong> for simple single-class toggling as it is more readable. Use <strong>[ngClass]</strong> when you need to manage multiple dynamic classes based on different conditions.`
                },
                {
                    q: "What is the purpose of the $event object in event binding?",
                    a: `<strong>$event</strong> is a special variable in Angular event binding that contains the raw <strong>DOM event object</strong> for native events or the emitted value for custom events. For native events like click or input, $event gives you access to properties like <strong>target</strong>, <strong>clientX</strong>, and methods like <strong>preventDefault()</strong>. For custom @Output events, $event holds whatever value was passed to <strong>EventEmitter.emit()</strong>. It lets you access event details directly in the template.
<pre><code>&lt;!-- Native DOM event: $event is MouseEvent --&gt;
&lt;button (click)="onClick($event)"&gt;Click&lt;/button&gt;

&lt;!-- Input event: access typed value --&gt;
&lt;input (input)="onInput($event)" /&gt;

&lt;!-- Custom event: $event is the emitted value --&gt;
&lt;app-child (notify)="onNotify($event)"&gt;&lt;/app-child&gt;</code></pre>
For native events, <strong>$event</strong> is the DOM event type like MouseEvent or KeyboardEvent. For custom component events, it is the type you pass to <strong>emit()</strong>.`
                },
                {
                    q: "Can you use pipes inside data binding expressions?",
                    a: `Yes, you can use <strong>pipes</strong> inside <strong>interpolation</strong> and <strong>property binding</strong> expressions to transform displayed values. Pipes work in template expressions by using the <strong>pipe character (|)</strong> after the value. You can chain multiple pipes together and pass parameters using <strong>colons</strong>. However, pipes cannot be used inside <strong>event binding</strong> expressions because event bindings execute statements, not value expressions.
<pre><code>&lt;!-- Pipe in interpolation --&gt;
&lt;p&gt;{{ birthday | date:'fullDate' | uppercase }}&lt;/p&gt;

&lt;!-- Pipe in property binding --&gt;
&lt;p [textContent]="title | uppercase"&gt;&lt;/p&gt;

&lt;!-- Pipe with parameters --&gt;
&lt;p&gt;{{ price | currency:'USD':'symbol':'1.2-2' }}&lt;/p&gt;</code></pre>
Pipes are meant only for <strong>transforming output values</strong> for display. Keep pipe transforms <strong>pure and lightweight</strong> since they run on every change detection cycle.`
                },
                {
                    q: "What is the safe navigation operator in Angular templates?",
                    a: `The <strong>safe navigation operator (?.) </strong> protects against null and undefined values when accessing properties of an object in templates. If any part of the property path is null or undefined, the expression <strong>short-circuits</strong> and returns undefined instead of throwing an error. It is extremely useful when working with data that loads <strong>asynchronously</strong> from APIs where objects might initially be null. This avoids the need for multiple *ngIf checks just to prevent template errors.
<pre><code>&lt;!-- Without safe navigation: throws error if user is null --&gt;
&lt;!-- &lt;p&gt;{{ user.address.city }}&lt;/p&gt; --&gt;

&lt;!-- With safe navigation: renders nothing if any part is null --&gt;
&lt;p&gt;{{ user?.address?.city }}&lt;/p&gt;
&lt;p&gt;{{ user?.orders?.[0]?.total }}&lt;/p&gt;</code></pre>
Use the <strong>safe navigation operator</strong> for optional chaining in templates to prevent runtime errors. Combine it with <strong>*ngIf</strong> or the <strong>nullish coalescing operator ??</strong> for complete null safety.`
                }
            ]
        },
        {
            id: "directives",
            title: "Directives",
            icon: "bi-signpost-split",
            questions: [
                {
                    q: "What are the types of directives in Angular?",
                    a: `Angular has <strong>three types of directives</strong> that let you manipulate the DOM in different ways. <strong>Component directives</strong> are components with templates and are the most common type. <strong>Structural directives</strong> change the DOM layout by adding or removing elements using the * prefix. <strong>Attribute directives</strong> change the appearance or behavior of an existing element.
<pre><code>&lt;!-- Structural directive: adds/removes DOM elements --&gt;
&lt;div *ngIf="isVisible"&gt;Shown conditionally&lt;/div&gt;

&lt;!-- Attribute directive: modifies element behavior/appearance --&gt;
&lt;div [ngClass]="{'highlight': isActive}"&gt;Styled&lt;/div&gt;

&lt;!-- Component directive: component with a template --&gt;
&lt;app-header&gt;&lt;/app-header&gt;</code></pre>
<strong>Structural directives</strong> are prefixed with an asterisk (*) which is syntactic sugar for ng-template. <strong>Attribute directives</strong> are applied like HTML attributes and can be freely combined on a single element.`
                },
                {
                    q: "How does *ngIf work in Angular?",
                    a: `<strong>*ngIf</strong> is a structural directive that conditionally adds or removes an element from the DOM based on a truthy/falsy expression. When the condition is false, the element and all its children are completely removed from the DOM. You can use <strong>else</strong> and <strong>then</strong> blocks with ng-template for alternative content. This is different from hiding with CSS because the component is actually destroyed and recreated.
<pre><code>&lt;!-- Basic usage --&gt;
&lt;div *ngIf="isLoggedIn"&gt;Welcome back!&lt;/div&gt;

&lt;!-- With else block --&gt;
&lt;div *ngIf="user; else noUser"&gt;
  Hello, {{ user.name }}
&lt;/div&gt;
&lt;ng-template #noUser&gt;&lt;p&gt;Please log in.&lt;/p&gt;&lt;/ng-template&gt;

&lt;!-- With then and else --&gt;
&lt;div *ngIf="loaded; then content; else loading"&gt;&lt;/div&gt;
&lt;ng-template #content&gt;Data loaded&lt;/ng-template&gt;
&lt;ng-template #loading&gt;Loading...&lt;/ng-template&gt;</code></pre>
Unlike hiding with CSS, <strong>*ngIf</strong> completely removes the element and its subtree from the DOM when false. This saves resources for complex components and destroys any subscriptions or timers inside them.`
                },
                {
                    q: "How does *ngFor work and what is trackBy?",
                    a: `<strong>*ngFor</strong> is a structural directive that repeats an element for each item in a collection like an array. It provides local variables like <strong>index</strong>, <strong>first</strong>, <strong>last</strong>, <strong>even</strong>, and <strong>odd</strong> for each iteration. The <strong>trackBy</strong> function improves performance by helping Angular identify which items changed instead of re-rendering the entire list. Without trackBy, Angular destroys and recreates all DOM elements on every change.
<pre><code>&lt;!-- Basic iteration --&gt;
&lt;li *ngFor="let item of items; let i = index; let odd = odd"&gt;
  {{ i + 1 }}. {{ item.name }}
&lt;/li&gt;

&lt;!-- With trackBy for better performance --&gt;
&lt;li *ngFor="let user of users; trackBy: trackById"&gt;
  {{ user.name }}
&lt;/li&gt;

// Component class
trackById(index: number, user: User): number {
  return user.id;
}</code></pre>
With <strong>trackBy</strong>, Angular only re-renders items whose tracked identity changed. This significantly improves <strong>list performance</strong> especially for large datasets fetched from APIs.`
                },
                {
                    q: "How does *ngSwitch work?",
                    a: `<strong>*ngSwitch</strong> is a set of directives that switches between alternative views based on a matched value. It works like a JavaScript switch statement but in the template. <strong>[ngSwitch]</strong> binds the expression to evaluate, <strong>*ngSwitchCase</strong> matches specific values, and <strong>*ngSwitchDefault</strong> handles unmatched cases. Multiple cases can match the same element.
<pre><code>&lt;div [ngSwitch]="userRole"&gt;
  &lt;p *ngSwitchCase="'admin'"&gt;Admin Dashboard&lt;/p&gt;
  &lt;p *ngSwitchCase="'editor'"&gt;Editor Panel&lt;/p&gt;
  &lt;p *ngSwitchCase="'viewer'"&gt;View Only Mode&lt;/p&gt;
  &lt;p *ngSwitchDefault&gt;Unknown Role&lt;/p&gt;
&lt;/div&gt;</code></pre>
<strong>[ngSwitch]</strong> is an attribute directive while <strong>*ngSwitchCase</strong> and <strong>*ngSwitchDefault</strong> are structural directives. Use ngSwitch when you have multiple conditions based on the same value instead of chaining *ngIf blocks.`
                },
                {
                    q: "How do ngClass and ngStyle directives work?",
                    a: `<strong>ngClass</strong> dynamically adds or removes CSS classes based on conditions. <strong>ngStyle</strong> dynamically sets inline styles on elements. Both directives accept objects, arrays, or expressions as input. They update automatically whenever the underlying data changes in the component.
<pre><code>&lt;!-- ngClass with object syntax --&gt;
&lt;div [ngClass]="{ 'active': isActive, 'error': hasError, 'bold': isBold }"&gt;Text&lt;/div&gt;

&lt;!-- ngClass with array syntax --&gt;
&lt;div [ngClass]="['card', isSpecial ? 'featured' : 'normal']"&gt;Card&lt;/div&gt;

&lt;!-- ngStyle with object syntax --&gt;
&lt;div [ngStyle]="{
  'background-color': bgColor,
  'font-size.px': fontSize,
  'display': isVisible ? 'block' : 'none'
}"&gt;Styled&lt;/div&gt;</code></pre>
Prefer single class/style bindings like <strong>[class.active]="isActive"</strong> for simple cases. Use <strong>ngClass/ngStyle</strong> when you need to manage multiple dynamic classes or styles at once.`
                },
                {
                    q: "How do you create a custom attribute directive?",
                    a: `A <strong>custom attribute directive</strong> modifies the behavior or appearance of a host element. You create it using the <strong>@Directive</strong> decorator with a selector in square brackets. Inject <strong>ElementRef</strong> to access the host element's DOM node directly. Use <strong>@HostListener</strong> to respond to events and <strong>@Input</strong> to accept configuration values.
<pre><code>@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('');
  }
  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

// Usage: &lt;p appHighlight="cyan"&gt;Hover me&lt;/p&gt;</code></pre>
<strong>Custom attribute directives</strong> are reusable across your application on any element. Declare them in a module's declarations array or mark them as <strong>standalone</strong> in Angular 14+.`
                },
                {
                    q: "How do you create a custom structural directive?",
                    a: `A <strong>custom structural directive</strong> manipulates the DOM by adding or removing elements based on a condition. It uses <strong>TemplateRef</strong> to access the template content and <strong>ViewContainerRef</strong> to control where it renders. The directive receives its condition through an <strong>@Input setter</strong> that shares the directive's selector name. This gives you full control over when and how the template is rendered.
<pre><code>@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef&lt;any&gt;,
    private vcRef: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.vcRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.vcRef.clear();
      this.hasView = false;
    }
  }
}

// Usage: &lt;p *appUnless="isHidden"&gt;Visible when not hidden&lt;/p&gt;</code></pre>
<strong>Structural directives</strong> use the * prefix which is syntactic sugar for ng-template wrapping. Custom structural directives follow the same pattern as built-in ones like <strong>*ngIf</strong> and <strong>*ngFor</strong>.`
                },
                {
                    q: "What is @HostListener and how is it used?",
                    a: `<strong>@HostListener</strong> is a decorator that subscribes to events on the <strong>host element</strong> of a directive or component. It replaces manual addEventListener calls and handles cleanup automatically when the directive is destroyed. You can listen to host element events, <strong>document</strong> events, or <strong>window</strong> events. Arguments from the event are passed using array notation in the second parameter.
<pre><code>@Directive({ selector: '[appClickTracker]' })
export class ClickTrackerDirective {

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Clicked at:', event.clientX, event.clientY);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    console.log('Escape pressed');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('Window resized');
  }
}</code></pre>
<strong>@HostListener</strong> is commonly used in directives to add interactive behavior to elements. It handles event subscription and cleanup automatically, preventing <strong>memory leaks</strong>.`
                },
                {
                    q: "What is @HostBinding and how is it used?",
                    a: `<strong>@HostBinding</strong> binds a directive or component property to a property, attribute, or class of its <strong>host element</strong>. It lets you dynamically control the host element's appearance from inside the directive. You can bind to <strong>CSS classes</strong>, <strong>inline styles</strong>, <strong>HTML attributes</strong>, or DOM properties. When the bound property changes, the host element updates automatically.
<pre><code>@Directive({ selector: '[appCard]' })
export class CardDirective {
  @HostBinding('class.active') isActive = false;
  @HostBinding('style.border') border = '1px solid gray';
  @HostBinding('attr.role') role = 'article';

  @HostListener('click')
  toggle() {
    this.isActive = !this.isActive;
    this.border = this.isActive ? '2px solid blue' : '1px solid gray';
  }
}

// Usage: &lt;div appCard&gt;Click to toggle&lt;/div&gt;</code></pre>
<strong>@HostBinding</strong> is commonly paired with <strong>@HostListener</strong> to create interactive directives. Together they let you respond to events and update the host element dynamically.`
                },
                {
                    q: "What is the difference between structural and attribute directives?",
                    a: `<strong>Structural directives</strong> change the DOM layout by adding, removing, or replacing elements from the page. <strong>Attribute directives</strong> change the appearance or behavior of an existing element without modifying the DOM structure. Structural directives use the <strong>* prefix</strong> which is syntactic sugar for ng-template wrapping. Attribute directives are applied like regular HTML attributes on elements.
<pre><code>&lt;!-- Structural: changes DOM structure (prefixed with *) --&gt;
&lt;div *ngIf="show"&gt;Conditionally rendered&lt;/div&gt;
&lt;li *ngFor="let item of list"&gt;{{ item }}&lt;/li&gt;

&lt;!-- Attribute: changes element behavior/look --&gt;
&lt;div [ngClass]="{'active': isActive}"&gt;Styled div&lt;/div&gt;
&lt;input [ngModel]="value" /&gt;
&lt;p appHighlight&gt;Custom directive&lt;/p&gt;</code></pre>
Key difference: You can only apply <strong>one structural directive</strong> per element, but you can combine multiple <strong>attribute directives</strong> freely. If you need multiple structural directives, wrap them in <strong>ng-container</strong> elements.`
                },
                {
                    q: "What is the ng-template directive in Angular?",
                    a: `<strong>ng-template</strong> is an Angular element that defines a template but does not render it by default. It is used as a container for content that should only appear conditionally or be stamped out programmatically. <strong>Structural directives</strong> like *ngIf and *ngFor internally use ng-template behind the scenes. When you write *ngIf, Angular converts it to an ng-template with a <strong>[ngIf]</strong> attribute binding.
<pre><code>&lt;!-- Used with *ngIf else --&gt;
&lt;div *ngIf="data; else loading"&gt;{{ data }}&lt;/div&gt;
&lt;ng-template #loading&gt;&lt;p&gt;Loading...&lt;/p&gt;&lt;/ng-template&gt;

&lt;!-- Manual rendering with ngTemplateOutlet --&gt;
&lt;ng-container *ngTemplateOutlet="myTemplate"&gt;&lt;/ng-container&gt;
&lt;ng-template #myTemplate&gt;&lt;p&gt;Reusable content&lt;/p&gt;&lt;/ng-template&gt;</code></pre>
You can reference <strong>ng-template</strong> with a template variable (#ref) and render it using <strong>ngTemplateOutlet</strong>. This powerful pattern allows you to create reusable template blocks and configurable components.`
                },
                {
                    q: "What is ngTemplateOutlet and how is it used?",
                    a: `<strong>ngTemplateOutlet</strong> is a directive that renders an ng-template at a specific location in the DOM. It allows you to reuse template blocks and pass <strong>context data</strong> to them dynamically. This is especially useful for creating configurable components where the parent provides custom templates. You can pass context using <strong>ngTemplateOutletContext</strong>, and the template receives data through <strong>let-</strong> variables.
<pre><code>&lt;!-- Define reusable template --&gt;
&lt;ng-template #itemTemplate let-name="name" let-index="idx"&gt;
  &lt;p&gt;{{ index }}: {{ name }}&lt;/p&gt;
&lt;/ng-template&gt;

&lt;!-- Render it with context --&gt;
&lt;ng-container *ngTemplateOutlet="itemTemplate; context: { name: 'Angular', idx: 1 }"&gt;
&lt;/ng-container&gt;</code></pre>
<strong>ngTemplateOutlet</strong> is commonly used in design system components like tables, lists, and dropdowns. It lets consumers customize rendering while the component controls layout and logic.`
                },
                {
                    q: "What is the new @if syntax in Angular 17?",
                    a: `Angular 17 introduced <strong>built-in control flow syntax</strong> that replaces structural directives in templates. The new <strong>@if</strong>, <strong>@for</strong>, and <strong>@switch</strong> blocks are written directly in the template without importing CommonModule. They offer better readability, improved <strong>type narrowing</strong>, and better performance than equivalent structural directives. The @if block supports <strong>@else if</strong> and <strong>@else</strong> branches, while @for requires a <strong>track</strong> expression.
<pre><code>@if (user) {
  &lt;p&gt;Welcome, {{ user.name }}&lt;/p&gt;
} @else if (loading) {
  &lt;p&gt;Loading...&lt;/p&gt;
} @else {
  &lt;p&gt;Please log in&lt;/p&gt;
}

@for (item of items; track item.id) {
  &lt;li&gt;{{ item.name }}&lt;/li&gt;
} @empty {
  &lt;li&gt;No items found&lt;/li&gt;
}</code></pre>
This new syntax is the <strong>recommended approach</strong> for Angular projects starting from version 17. It provides clearer template logic and allows Angular to optimize rendering more effectively.`
                },
                {
                    q: "Can you apply two structural directives on the same element?",
                    a: `No, Angular does <strong>not allow two structural directives</strong> on the same element. If you try to use *ngIf and *ngFor on the same element, Angular will throw an error. The solution is to wrap one of them in an <strong>ng-container</strong> element. Each structural directive needs its own <strong>template reference</strong>, and having two on the same element creates ambiguity.
<pre><code>&lt;!-- This will throw an error --&gt;
&lt;!-- &lt;div *ngIf="isVisible" *ngFor="let item of items"&gt;{{ item }}&lt;/div&gt; --&gt;

&lt;!-- Correct: wrap in ng-container --&gt;
&lt;ng-container *ngIf="isVisible"&gt;
  &lt;div *ngFor="let item of items"&gt;{{ item }}&lt;/div&gt;
&lt;/ng-container&gt;</code></pre>
Using <strong>ng-container</strong> adds no extra DOM element so it does not affect your layout. In Angular 17+, the new <strong>@if</strong> and <strong>@for</strong> control flow syntax handles nesting more naturally.`
                },
                {
                    q: "What is the difference between *ngIf and [hidden]?",
                    a: `<strong>*ngIf</strong> completely adds or removes the element and its children from the DOM. When false, the element does not exist at all, so its component is <strong>destroyed and recreated</strong> each time. <strong>[hidden]</strong> only toggles the CSS display property — the element stays in the DOM but is visually hidden. Use *ngIf when the element is expensive to render, and [hidden] when you need the component to <strong>maintain its state</strong>.
<pre><code>&lt;!-- *ngIf: element removed from DOM entirely --&gt;
&lt;div *ngIf="showPanel"&gt;This component is destroyed when hidden&lt;/div&gt;

&lt;!-- [hidden]: element stays in DOM, just hidden via CSS --&gt;
&lt;div [hidden]="!showPanel"&gt;This component keeps its state&lt;/div&gt;</code></pre>
Use <strong>*ngIf</strong> for components with heavy initialization or subscriptions to save memory. Use <strong>[hidden]</strong> when toggling visibility frequently and you want to preserve the component's internal state.`
                }
            ]
        },
        {
            id: "pipes",
            title: "Pipes",
            icon: "bi-funnel",
            questions: [
                {
                    q: "What are pipes in Angular?",
                    a: `<strong>Pipes</strong> are simple functions used in templates to transform displayed values without changing the underlying data. They accept an input value and return a transformed output using the <strong>pipe | operator</strong>. You can use built-in pipes or create <strong>custom pipes</strong> for your specific needs. Pipes are applied directly in template expressions inside interpolation or property bindings.
<pre><code>&lt;!-- Built-in pipes --&gt;
&lt;p&gt;{{ 'hello world' | uppercase }}&lt;/p&gt;        &lt;!-- HELLO WORLD --&gt;
&lt;p&gt;{{ today | date:'fullDate' }}&lt;/p&gt;           &lt;!-- Wednesday, March 25, 2026 --&gt;
&lt;p&gt;{{ price | currency:'USD' }}&lt;/p&gt;            &lt;!-- $29.99 --&gt;
&lt;p&gt;{{ user | json }}&lt;/p&gt;                       &lt;!-- {"name":"John"} --&gt;</code></pre>
<strong>Angular</strong> provides built-in pipes like <strong>DatePipe</strong>, <strong>CurrencyPipe</strong>, <strong>DecimalPipe</strong>, <strong>AsyncPipe</strong>, <strong>JsonPipe</strong>, and more. You can also chain multiple pipes and pass parameters using colons.`
                },
                {
                    q: "How does the DatePipe work?",
                    a: `The <strong>DatePipe</strong> formats a date value according to locale rules and a format string. It accepts a <strong>Date object</strong>, a number (timestamp), or an ISO date string as input. You can use predefined formats like <strong>'short'</strong>, <strong>'medium'</strong>, or <strong>'fullDate'</strong>, or create custom format strings. It is one of the most commonly used pipes in Angular applications.
<pre><code>&lt;p&gt;{{ myDate | date }}&lt;/p&gt;                    &lt;!-- Mar 25, 2026 --&gt;
&lt;p&gt;{{ myDate | date:'short' }}&lt;/p&gt;             &lt;!-- 3/25/26, 10:30 AM --&gt;
&lt;p&gt;{{ myDate | date:'fullDate' }}&lt;/p&gt;          &lt;!-- Wednesday, March 25, 2026 --&gt;
&lt;p&gt;{{ myDate | date:'yyyy-MM-dd HH:mm' }}&lt;/p&gt; &lt;!-- 2026-03-25 10:30 --&gt;
&lt;p&gt;{{ myDate | date:'EEEE' }}&lt;/p&gt;              &lt;!-- Wednesday --&gt;

// In the component
export class AppComponent {
  myDate = new Date();
}</code></pre>
Common format tokens: <strong>y</strong> (year), <strong>M</strong> (month), <strong>d</strong> (day), <strong>H</strong> (hour 24h), <strong>h</strong> (hour 12h), <strong>m</strong> (minute), <strong>s</strong> (second). You can also pass <strong>timezone</strong> and <strong>locale</strong> parameters for internationalization.`
                },
                {
                    q: "How does the CurrencyPipe work?",
                    a: `The <strong>CurrencyPipe</strong> formats a number as a currency string based on the locale and a <strong>currency code</strong>. It accepts parameters for currency code, display format, and digit formatting. You can show currencies as <strong>symbols</strong> ($, €, £), <strong>codes</strong> (USD, EUR), or narrow symbols. The pipe automatically handles thousands separators and decimal places based on locale rules.
<pre><code>&lt;p&gt;{{ 1234.5 | currency }}&lt;/p&gt;               &lt;!-- $1,234.50 --&gt;
&lt;p&gt;{{ 1234.5 | currency:'EUR' }}&lt;/p&gt;          &lt;!-- &euro;1,234.50 --&gt;
&lt;p&gt;{{ 1234.5 | currency:'GBP':'symbol' }}&lt;/p&gt; &lt;!-- &pound;1,234.50 --&gt;
&lt;p&gt;{{ 1234.5 | currency:'USD':'code' }}&lt;/p&gt;   &lt;!-- USD1,234.50 --&gt;
&lt;p&gt;{{ 99.9 | currency:'INR':'symbol':'1.0-0' }}&lt;/p&gt; &lt;!-- &#8377;100 --&gt;</code></pre>
Parameters: <strong>currencyCode</strong> (ISO 4217 like USD, EUR), <strong>display</strong> ('code', 'symbol', or 'symbol-narrow'), and <strong>digitsInfo</strong> for controlling decimal precision. Default currency is based on the application's locale setting.`
                },
                {
                    q: "What is the AsyncPipe and why is it useful?",
                    a: `The <strong>AsyncPipe</strong> subscribes to an <strong>Observable</strong> or <strong>Promise</strong> and returns the latest emitted value directly in the template. It automatically <strong>unsubscribes</strong> when the component is destroyed, preventing memory leaks. This eliminates the need for manual subscribe and unsubscribe patterns in your component. It also works perfectly with <strong>OnPush change detection</strong> because it calls markForCheck() automatically.
<pre><code>@Component({
  selector: 'app-users',
  template: '&lt;ul&gt;&lt;li *ngFor="let user of users$ | async"&gt;{{ user.name }}&lt;/li&gt;&lt;/ul&gt;'
})
export class UsersComponent {
  users$: Observable&lt;User[]&gt;;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get&lt;User[]&gt;('/api/users');
  }
}</code></pre>
<strong>AsyncPipe</strong> handles subscription, value extraction, and cleanup automatically. It marks the component for <strong>change detection</strong> when new values arrive, making it the preferred way to handle observables in templates.`
                },
                {
                    q: "How do you create a custom pipe?",
                    a: `Create a class decorated with <strong>@Pipe</strong> that implements the <strong>PipeTransform</strong> interface and its <strong>transform</strong> method. The pipe name in the decorator is what you use in templates with the | operator. The transform method receives the input value as the first argument and any parameters as subsequent arguments. Custom pipes are <strong>pure by default</strong>, meaning they only recalculate when the input reference changes.
<pre><code>@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50, trail: string = '...'): string {
    if (!value) return '';
    return value.length &gt; limit
      ? value.substring(0, limit) + trail
      : value;
  }
}

// Usage in template
// &lt;p&gt;{{ longText | truncate:30:'...' }}&lt;/p&gt;</code></pre>
Custom pipes must be declared in a module's <strong>declarations</strong> array or marked as <strong>standalone</strong> before use. Additional arguments in transform map to <strong>colon-separated parameters</strong> in the template.`
                },
                {
                    q: "What is the difference between pure and impure pipes?",
                    a: `A <strong>pure pipe</strong> (default) only re-evaluates when its input value or parameters change by <strong>reference</strong>. An <strong>impure pipe</strong> runs on every change detection cycle, regardless of whether the input changed. Pure pipes are the default and much more <strong>performant</strong> because Angular can skip them when the input reference has not changed. Set <strong>pure: false</strong> in the @Pipe decorator to create an impure pipe.
<pre><code>// Pure pipe (default) - efficient, only runs when input reference changes
@Pipe({ name: 'filterPure', pure: true })
export class FilterPurePipe implements PipeTransform {
  transform(items: any[], term: string) {
    return items.filter(i =&gt; i.name.includes(term));
  }
}

// Impure pipe - runs on EVERY change detection cycle
@Pipe({ name: 'filterImpure', pure: false })
export class FilterImpurePipe implements PipeTransform {
  transform(items: any[], term: string) {
    return items.filter(i =&gt; i.name.includes(term));
  }
}</code></pre>
<strong>Pure pipes</strong> are more performant and should be used whenever possible. <strong>Impure pipes</strong> detect changes within objects and arrays but can cause performance issues in large applications.`
                },
                {
                    q: "How do you chain multiple pipes?",
                    a: `<strong>Pipes</strong> can be chained by using multiple pipe <strong>|</strong> operators on the same expression. Each pipe receives the <strong>output of the previous pipe</strong> as its input value. The execution order is strictly <strong>left to right</strong> so the order matters for the final result. This makes it easy to compose multiple transformations in a readable and declarative way.
<pre><code>&lt;!-- Chain pipes: applied left to right --&gt;
&lt;p&gt;{{ birthday | date:'fullDate' | uppercase }}&lt;/p&gt;
&lt;!-- Output: WEDNESDAY, MARCH 25, 2026 --&gt;

&lt;p&gt;{{ longText | truncate:100 | lowercase }}&lt;/p&gt;

&lt;p&gt;{{ amount | currency:'USD' | slice:0:5 }}&lt;/p&gt;

&lt;!-- Order matters --&gt;
&lt;p&gt;{{ 'hello world' | uppercase | slice:0:5 }}&lt;/p&gt;  &lt;!-- HELLO --&gt;
&lt;p&gt;{{ 'hello world' | slice:0:5 | uppercase }}&lt;/p&gt;  &lt;!-- HELLO --&gt;</code></pre>
The output of each pipe becomes the input of the next pipe in the chain. <strong>Chaining</strong> is a powerful pattern for combining simple, reusable transformations into complex formatting.`
                },
                {
                    q: "How does the KeyValuePipe work?",
                    a: `The <strong>KeyValuePipe</strong> transforms an <strong>Object</strong> or <strong>Map</strong> into an array of key-value pairs. This makes it possible to iterate over object properties with <strong>*ngFor</strong>, which normally only works with arrays. Each item in the result has a <strong>key</strong> and <strong>value</strong> property that you can access in the template. It works with both plain JavaScript objects and ES6 Map instances.
<pre><code>@Component({
  selector: 'app-config',
  template: '&lt;div *ngFor="let item of settings | keyvalue"&gt;{{ item.key }}: {{ item.value }}&lt;/div&gt;'
})
export class ConfigComponent {
  settings = {
    theme: 'dark',
    language: 'en',
    fontSize: 14
  };

  // Also works with Map
  map = new Map([['name', 'Angular'], ['version', '17']]);
}</code></pre>
By default, <strong>KeyValuePipe</strong> sorts entries alphabetically by key. You can pass a custom comparator function to control the order: <strong>{{ map | keyvalue:customCompare }}</strong>.`
                },
                {
                    q: "How does the SlicePipe work?",
                    a: `The <strong>SlicePipe</strong> creates a subset of an array or string, similar to JavaScript's <strong>Array.prototype.slice()</strong> method. It takes a <strong>start index</strong> and an optional <strong>end index</strong> as parameters. You can use it for simple pagination, truncating strings, or displaying a portion of a list. <strong>Negative indices</strong> count from the end of the array or string.
<pre><code>&lt;!-- Slice an array --&gt;
&lt;li *ngFor="let item of items | slice:0:5"&gt;{{ item }}&lt;/li&gt;

&lt;!-- Paginate a list --&gt;
&lt;li *ngFor="let item of items | slice:startIndex:endIndex"&gt;
  {{ item.name }}
&lt;/li&gt;

&lt;!-- Slice a string --&gt;
&lt;p&gt;{{ 'Hello Angular' | slice:6 }}&lt;/p&gt;             &lt;!-- Angular --&gt;
&lt;p&gt;{{ 'Hello Angular' | slice:0:5 }}&lt;/p&gt;            &lt;!-- Hello --&gt;

&lt;!-- Negative index (from end) --&gt;
&lt;p&gt;{{ 'Hello Angular' | slice:-7 }}&lt;/p&gt;              &lt;!-- Angular --&gt;</code></pre>
<strong>SlicePipe</strong> is a pure pipe so it only recalculates when the input reference or parameters change. It is useful for quick list pagination without writing additional component logic.`
                },
                {
                    q: "How do parameterized pipes work?",
                    a: `<strong>Pipes</strong> accept parameters after a colon <strong>:</strong> in the template expression. Multiple parameters are separated by additional <strong>colons</strong>. In the transform method, the first argument is always the piped value and additional arguments map to parameters in order. <strong>Default values</strong> can be assigned in the method signature so parameters become optional.
<pre><code>&lt;!-- Single parameter --&gt;
&lt;p&gt;{{ today | date:'shortDate' }}&lt;/p&gt;

&lt;!-- Multiple parameters --&gt;
&lt;p&gt;{{ price | currency:'EUR':'symbol':'1.2-2' }}&lt;/p&gt;

&lt;!-- Custom pipe with parameters --&gt;
@Pipe({ name: 'repeat' })
export class RepeatPipe implements PipeTransform {
  transform(value: string, times: number = 2, separator: string = ' '): string {
    return Array(times).fill(value).join(separator);
  }
}

// Usage: {{ 'Hi' | repeat:3:'-' }}  outputs: Hi-Hi-Hi</code></pre>
The first argument to <strong>transform()</strong> is the value being piped through. Additional arguments correspond to the <strong>colon-separated parameters</strong> in the template, making pipes flexible and configurable.`
                },
                {
                    q: "What is the DecimalPipe and how is it used?",
                    a: `<strong>DecimalPipe</strong> formats a number according to locale rules and a digit formatting string. The format follows the pattern <strong>minIntegerDigits.minFractionDigits-maxFractionDigits</strong>. It is useful for displaying numbers with specific decimal precision like prices, statistics, or measurements. If you do not provide a format string, it uses the default locale formatting.
<pre><code>&lt;p&gt;{{ 3.14159 | number:'1.2-3' }}&lt;/p&gt;    &lt;!-- 3.142 --&gt;
&lt;p&gt;{{ 42 | number:'3.0-0' }}&lt;/p&gt;          &lt;!-- 042 --&gt;
&lt;p&gt;{{ 1234567 | number }}&lt;/p&gt;             &lt;!-- 1,234,567 --&gt;
&lt;p&gt;{{ 0.956 | percent:'1.1-1' }}&lt;/p&gt;      &lt;!-- 95.6% --&gt;</code></pre>
The <strong>number</strong> pipe name is the alias used in templates for DecimalPipe. You can also specify a <strong>locale</strong> as the second parameter for internationalization support.`
                },
                {
                    q: "What is the PercentPipe in Angular?",
                    a: `<strong>PercentPipe</strong> multiplies a number by 100 and formats it as a percentage string with a percent symbol. It accepts a <strong>digit formatting string</strong> similar to DecimalPipe for controlling decimal precision. The input value should be a decimal like <strong>0.75</strong> which displays as <strong>75%</strong>. It is useful for displaying ratios, progress values, or statistics.
<pre><code>&lt;p&gt;{{ 0.259 | percent }}&lt;/p&gt;              &lt;!-- 26% --&gt;
&lt;p&gt;{{ 0.259 | percent:'1.1-1' }}&lt;/p&gt;      &lt;!-- 25.9% --&gt;
&lt;p&gt;{{ 1 | percent }}&lt;/p&gt;                   &lt;!-- 100% --&gt;
&lt;p&gt;{{ 0.5 | percent:'1.0-0' }}&lt;/p&gt;        &lt;!-- 50% --&gt;</code></pre>
<strong>PercentPipe</strong> follows the same digit format pattern as DecimalPipe. You can control the number of <strong>decimal places</strong> and minimum integer digits with the format parameter.`
                },
                {
                    q: "What is the LowerCasePipe and UpperCasePipe?",
                    a: `<strong>LowerCasePipe</strong> converts all characters in a string to lowercase. <strong>UpperCasePipe</strong> converts all characters to uppercase. Angular also provides <strong>TitleCasePipe</strong> which capitalizes the first letter of each word. These are simple transformation pipes commonly used for formatting display text consistently.
<pre><code>&lt;p&gt;{{ 'Hello World' | lowercase }}&lt;/p&gt;    &lt;!-- hello world --&gt;
&lt;p&gt;{{ 'hello world' | uppercase }}&lt;/p&gt;    &lt;!-- HELLO WORLD --&gt;
&lt;p&gt;{{ 'hello world' | titlecase }}&lt;/p&gt;    &lt;!-- Hello World --&gt;</code></pre>
These pipes are <strong>pure by default</strong> so they only recalculate when the input string reference changes. They are the simplest built-in pipes and useful for consistent text formatting across your UI.`
                },
                {
                    q: "What is the difference between pure and impure pipes in terms of performance?",
                    a: `<strong>Pure pipes</strong> (default) are called only when Angular detects a change in the input's <strong>primitive value</strong> or <strong>object reference</strong>. <strong>Impure pipes</strong> are called on every change detection cycle, which can be dozens of times per second. This means impure pipes have a huge <strong>performance impact</strong> if the transform function is expensive. Always prefer pure pipes and use <strong>immutable data patterns</strong> to trigger recalculations.
<pre><code>// Pure pipe: runs only when input reference changes
@Pipe({ name: 'filterPure', pure: true })

// Impure pipe: runs on EVERY change detection cycle
@Pipe({ name: 'filterImpure', pure: false })

// To trigger pure pipe on array changes, create a new reference:
this.items = [...this.items, newItem]; // creates new array reference</code></pre>
To trigger a <strong>pure pipe</strong> on array mutations, create a new reference using the spread operator. If you must use an <strong>impure pipe</strong>, keep the transform logic very lightweight and fast.`
                },
                {
                    q: "How does the JsonPipe work and when is it useful?",
                    a: `<strong>JsonPipe</strong> converts a JavaScript object or value to a JSON-formatted string using <strong>JSON.stringify()</strong>. It is primarily used for <strong>debugging</strong> during development to inspect object shapes or form values in the template. It displays the full nested structure of objects and arrays in a readable format. While not suitable for production UI, it is very handy for verifying <strong>data binding</strong>.
<pre><code>&lt;!-- Debug object structure --&gt;
&lt;pre&gt;{{ user | json }}&lt;/pre&gt;
&lt;!-- Output: { "name": "John", "age": 30 } --&gt;

&lt;!-- Debug form values --&gt;
&lt;pre&gt;{{ myForm.value | json }}&lt;/pre&gt;
&lt;!-- Output: { "email": "test@mail.com", "password": "123" } --&gt;</code></pre>
<strong>JsonPipe</strong> is an impure pipe because it needs to detect changes within objects. Use it inside <strong>&lt;pre&gt;</strong> tags for proper formatting in the browser.`
                }
            ]
        },
        {
            id: "services-dependency-injection",
            title: "Services & Dependency Injection",
            icon: "bi-gear",
            questions: [
                {
                    q: "What is a service in Angular?",
                    a: `A <strong>service</strong> is a class that encapsulates reusable business logic, data access, or utility functions. Services promote <strong>separation of concerns</strong> by keeping logic out of components and making it reusable. They are typically decorated with <strong>@Injectable</strong> and injected into components via Angular's dependency injection system. Services are the recommended place for HTTP calls, state management, and shared business logic.
<pre><code>@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable&lt;User[]&gt; {
    return this.http.get&lt;User[]&gt;(this.apiUrl);
  }

  getUserById(id: number): Observable&lt;User&gt; {
    return this.http.get&lt;User&gt;(this.apiUrl + '/' + id);
  }
}</code></pre>
Services are injected into components, directives, pipes, or other services via <strong>constructor injection</strong> or the <strong>inject()</strong> function. Using <strong>providedIn: 'root'</strong> makes the service a singleton across the entire app.`
                },
                {
                    q: "What does the @Injectable decorator do?",
                    a: `The <strong>@Injectable</strong> decorator marks a class as available for Angular's <strong>dependency injection</strong> system. It optionally specifies where the service should be provided using the <strong>providedIn</strong> property. Without this decorator, Angular cannot inject the service into other classes. You can provide a service at <strong>root level</strong> (singleton), <strong>module level</strong>, or <strong>component level</strong> (new instance per component).
<pre><code>// Provided at root level (singleton, tree-shakable)
@Injectable({ providedIn: 'root' })
export class AuthService { }

// Provided at module level
@Injectable()
export class LegacyService { }
// Must be added to a module's providers array:
// @NgModule({ providers: [LegacyService] })

// Provided at component level (new instance per component)
@Component({
  providers: [LocalService]
})
export class MyComponent { }</code></pre>
Using <strong>providedIn: 'root'</strong> is recommended because it creates a singleton and enables <strong>tree-shaking</strong>. Unused services are automatically removed from the production bundle.`
                },
                {
                    q: "What does providedIn: 'root' mean?",
                    a: `<strong>providedIn: 'root'</strong> registers the service in the application's <strong>root injector</strong>, making it a singleton available throughout the entire application. Only one instance of the service is created and shared across all components. It is also <strong>tree-shakable</strong>, meaning if no component injects the service, it is excluded from the bundle. This is the recommended way to provide services in Angular.
<pre><code>@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = [];

  addItem(product: Product) { this.items.push(product); }
  getItems() { return this.items; }
  getTotal() { return this.items.reduce((sum, p) =&gt; sum + p.price, 0); }
}</code></pre>
Benefits: <strong>1)</strong> Singleton shared across all components. <strong>2)</strong> Tree-shakable if unused. <strong>3)</strong> No need to add it to any module's providers array. Alternative values include <strong>'platform'</strong>, <strong>'any'</strong>, or a specific module class.`
                },
                {
                    q: "What is the hierarchical injector system?",
                    a: `Angular uses a <strong>hierarchical dependency injection</strong> system with multiple injector levels. Each level can provide its own instance of a service, which overrides parents. The hierarchy goes from <strong>root injector</strong> down through module injectors to component injectors. When a component requests a dependency, Angular walks up the tree until it finds a matching provider.
<pre><code>// Root-level: singleton for entire app
@Injectable({ providedIn: 'root' })
export class GlobalService {}

// Module-level: shared within the module
@NgModule({
  providers: [ModuleScopedService]
})
export class FeatureModule {}

// Component-level: new instance for each component
@Component({
  selector: 'app-panel',
  providers: [PanelService]
})
export class PanelComponent {
  constructor(private panelService: PanelService) {}
}</code></pre>
The lookup order is: <strong>component</strong> → <strong>parent component</strong> → <strong>module</strong> → <strong>root</strong>. The first matching provider wins. Component-level providers create <strong>new instances per component</strong>.`
                },
                {
                    q: "What are injection tokens in Angular?",
                    a: `An <strong>InjectionToken</strong> is used to provide non-class dependencies like configuration values, strings, or interfaces via dependency injection. Since TypeScript interfaces are erased at runtime, you cannot use them directly as DI tokens. <strong>InjectionToken</strong> creates a unique token object that Angular can use to look up the value. You provide values using the <strong>useValue</strong> provider and inject them with <strong>@Inject</strong>.
<pre><code>// Define token
export const API_BASE_URL = new InjectionToken&lt;string&gt;('API_BASE_URL');
export const APP_CONFIG = new InjectionToken&lt;AppConfig&gt;('APP_CONFIG');

// Provide value
@NgModule({
  providers: [
    { provide: API_BASE_URL, useValue: 'https://api.example.com' },
    { provide: APP_CONFIG, useValue: { debug: false, version: '1.0' } }
  ]
})
export class AppModule {}

// Inject with @Inject
constructor(@Inject(API_BASE_URL) private apiUrl: string) {}</code></pre>
<strong>InjectionTokens</strong> prevent naming collisions when multiple providers use simple types. They are essential for injecting <strong>interfaces</strong>, <strong>primitives</strong>, and <strong>configuration objects</strong>.`
                },
                {
                    q: "What are useClass, useValue, useFactory, and useExisting?",
                    a: `These are <strong>provider configuration options</strong> that control how Angular resolves a dependency when it is injected. <strong>useClass</strong> provides a class instance, <strong>useValue</strong> provides a static value, <strong>useFactory</strong> uses a function, and <strong>useExisting</strong> creates an alias. They allow you to customize how the DI system creates and delivers dependencies. This flexibility is essential for swapping implementations and providing configuration.
<pre><code>// useClass: provide a class (can swap implementations)
{ provide: LoggerService, useClass: DebugLoggerService }

// useValue: provide a static value
{ provide: API_URL, useValue: 'https://api.example.com' }

// useFactory: provide via a factory function
{
  provide: DataService,
  useFactory: (http: HttpClient, config: AppConfig) =&gt; {
    return config.useMock ? new MockDataService() : new RealDataService(http);
  },
  deps: [HttpClient, APP_CONFIG]
}

// useExisting: alias one token to another
{ provide: AbstractLogger, useExisting: ConsoleLoggerService }</code></pre>
<strong>useClass</strong> creates a new instance. <strong>useValue</strong> provides a constant value. <strong>useFactory</strong> runs a function with optional deps. <strong>useExisting</strong> aliases one token to another existing provider.`
                },
                {
                    q: "What are multi providers?",
                    a: `<strong>Multi providers</strong> allow multiple values to be registered under the same injection token. Angular collects all values into an <strong>array</strong> when the token is injected. This is useful when you need to extend a feature from multiple places, like adding validators or interceptors. Without the <strong>multi: true</strong> flag, each new provider would replace the previous one.
<pre><code>const VALIDATORS = new InjectionToken&lt;Validator[]&gt;('VALIDATORS');

@NgModule({
  providers: [
    { provide: VALIDATORS, useClass: RequiredValidator, multi: true },
    { provide: VALIDATORS, useClass: EmailValidator, multi: true },
    { provide: VALIDATORS, useClass: MinLengthValidator, multi: true }
  ]
})
export class AppModule {}

// Injection returns an array
@Injectable()
export class FormService {
  constructor(@Inject(VALIDATORS) private validators: Validator[]) {
    // validators = [RequiredValidator, EmailValidator, MinLengthValidator]
  }
}</code></pre>
The <strong>multi: true</strong> flag tells Angular to add the provider to a collection rather than replacing previous ones. Angular uses this pattern internally for <strong>HTTP_INTERCEPTORS</strong> and <strong>APP_INITIALIZER</strong>.`
                },
                {
                    q: "How do you handle optional dependencies?",
                    a: `The <strong>@Optional</strong> decorator tells Angular to return <strong>null</strong> instead of throwing an error if a dependency is not found in the injector tree. Without it, Angular throws a <strong>NullInjectorError</strong> when it cannot resolve the dependency. This is useful for plugins, optional features, or services that may not always be registered. In Angular 14+, you can also use the <strong>inject()</strong> function with an optional flag.
<pre><code>@Injectable()
export class NotificationService {
  constructor(
    @Optional() private analytics: AnalyticsService
  ) {}

  notify(msg: string) {
    console.log(msg);
    // Only track if analytics is available
    if (this.analytics) {
      this.analytics.track('notification', msg);
    }
  }
}

// Or using inject() function (Angular 14+)
export class MyComponent {
  private analytics = inject(AnalyticsService, { optional: true });
}</code></pre>
<strong>@Optional</strong> is essential for building flexible components that work with or without certain services. Always check for <strong>null</strong> before using an optional dependency to avoid runtime errors.`
                },
                {
                    q: "What do @Self, @SkipSelf, and @Host decorators do?",
                    a: `These decorators control how far Angular searches the <strong>injector hierarchy</strong> when resolving a dependency. <strong>@Self()</strong> restricts the lookup to only the current component's injector. <strong>@SkipSelf()</strong> skips the current injector and starts from the parent. <strong>@Host()</strong> limits the search up to the host component's boundary and no further.
<pre><code>@Component({
  selector: 'app-child',
  providers: [LocalService]
})
export class ChildComponent {
  constructor(
    // Only look at this component's injector
    @Self() private local: LocalService,

    // Skip this component, look at parent injectors only
    @SkipSelf() private parentService: ParentService,

    // Stop at the host component's injector (no further)
    @Host() private hostService: HostService
  ) {}
}</code></pre>
<strong>@Self()</strong> restricts to the current injector. <strong>@SkipSelf()</strong> starts from the parent. <strong>@Host()</strong> stops at the host boundary. Combine with <strong>@Optional</strong> to avoid errors when a provider is not found at the restricted scope.`
                },
                {
                    q: "What are tree-shakable providers?",
                    a: `<strong>Tree-shakable providers</strong> are services that can be removed from the final bundle if no component or service injects them. They are created by using <strong>providedIn</strong> in the @Injectable decorator instead of listing in module providers. The bundler can detect unused services and exclude them, reducing the <strong>bundle size</strong>. This is one of the main advantages of using providedIn over module-level providers.
<pre><code>// Tree-shakable: removed from bundle if unused
@Injectable({ providedIn: 'root' })
export class UnusedService {
  doWork() { return 'work'; }
}

// NOT tree-shakable: always included because listed in module providers
@Injectable()
export class AlwaysIncludedService {
  doWork() { return 'work'; }
}
@NgModule({
  providers: [AlwaysIncludedService]  // always in bundle
})
export class AppModule {}</code></pre>
With <strong>providedIn: 'root'</strong>, the service references the injector rather than the injector referencing the service. This <strong>inverted dependency</strong> allows bundlers to tree-shake services that nothing imports.`
                },
                {
                    q: "What is the difference between providedIn: 'root' and providing in a module?",
                    a: `When you use <strong>providedIn: 'root'</strong>, the service is a <strong>singleton</strong> available throughout the entire application and is <strong>tree-shakable</strong>. When you provide a service in a module's providers array, it is always included in the bundle regardless of usage. Lazy-loaded modules with providers create their own injector, so a service provided there gets a <strong>separate instance</strong>. Root-level provision is the recommended approach for most services.
<pre><code>// Recommended: tree-shakable, singleton
@Injectable({ providedIn: 'root' })
export class GlobalService { }

// Module-level: always in bundle, not tree-shakable
@NgModule({
  providers: [ModuleService]
})
export class FeatureModule { }</code></pre>
<strong>providedIn: 'root'</strong> is preferred for most services because of tree-shaking and singleton behavior. Use module-level providers only when you need a <strong>separate instance</strong> per lazy-loaded module.`
                },
                {
                    q: "What is the inject() function in Angular?",
                    a: `The <strong>inject()</strong> function is an alternative to constructor-based dependency injection introduced in <strong>Angular 14</strong>. It can be used in constructors, field initializers, and factory functions. It allows injecting dependencies outside of the constructor, making code more concise. It is especially useful in <strong>functional guards</strong>, <strong>interceptors</strong>, and <strong>resolvers</strong> where there is no class constructor.
<pre><code>// Field-level injection
export class UserComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
  private config = inject(APP_CONFIG, { optional: true });
}

// In functional guard
export const authGuard: CanActivateFn = () =&gt; {
  const auth = inject(AuthService);
  return auth.isLoggedIn();
};</code></pre>
The <strong>inject()</strong> function must be called in an <strong>injection context</strong> (constructor, field initializer, or factory). It supports options like <strong>optional</strong>, <strong>self</strong>, and <strong>skipSelf</strong>.`
                },
                {
                    q: "What happens if you provide the same service at both root and component level?",
                    a: `When a service is provided at both <strong>root</strong> and <strong>component level</strong>, the component gets its own separate instance. Angular's <strong>injector hierarchy</strong> first looks at the component's own providers, then walks up to parent components, modules, and root. A component-level provider <strong>overrides</strong> the root-level one for that component and all its children. This is useful when you need isolated state for a specific component subtree.
<pre><code>// Root level: shared singleton
@Injectable({ providedIn: 'root' })
export class CounterService { count = 0; }

// Component level: each instance gets its own CounterService
@Component({
  selector: 'app-counter',
  providers: [CounterService], // separate instance
  template: '&lt;p&gt;{{ counter.count }}&lt;/p&gt;'
})
export class CounterComponent {
  constructor(public counter: CounterService) {}
}</code></pre>
The <strong>component-level instance</strong> is isolated from the root singleton. Other components still use the <strong>root instance</strong> unless they also provide the service at their own level.`
                },
                {
                    q: "What is the difference between useClass and useExisting?",
                    a: `<strong>useClass</strong> creates a brand new instance of the specified class when the token is requested. <strong>useExisting</strong> creates an alias to an already existing provider — both tokens point to the <strong>same instance</strong>. Use useClass when you want to swap one service implementation for another, like replacing a real service with a mock. Use useExisting when you want two different tokens to resolve to the same service instance.
<pre><code>// useClass: creates NEW instance of MockApiService
{ provide: ApiService, useClass: MockApiService }

// useExisting: both tokens point to SAME instance
{ provide: AbstractLogger, useExisting: ConsoleLoggerService }

// Example: one instance shared via two tokens
providers: [
  ConsoleLoggerService,
  { provide: AbstractLogger, useExisting: ConsoleLoggerService }
]</code></pre>
<strong>useClass</strong> is for swapping implementations (e.g., mock vs real). <strong>useExisting</strong> is for creating token aliases that share the same underlying service instance.`
                },
                {
                    q: "What is a singleton service in Angular?",
                    a: `A <strong>singleton service</strong> has only one instance shared across the entire application. When you use <strong>providedIn: 'root'</strong> or add the service to the AppModule providers, Angular creates one instance and gives the same reference to every component. This is useful for shared state like <strong>authentication status</strong>, shopping cart data, or application settings. Be careful not to provide the same service in a lazy-loaded module as it creates a second instance.
<pre><code>@Injectable({ providedIn: 'root' }) // singleton
export class CartService {
  private items: Product[] = [];
  addItem(item: Product) { this.items.push(item); }
  getItems() { return this.items; }
}

// Both components share the same CartService instance
// Changes made by one component are visible to the other</code></pre>
The <strong>providedIn: 'root'</strong> pattern guarantees a singleton across the app. Avoid providing the same service in <strong>lazy-loaded modules</strong> as it breaks the singleton pattern by creating separate instances.`
                }
            ]
        },
        {
            id: "routing",
            title: "Routing",
            icon: "bi-signpost-2",
            questions: [
                {
                    q: "How do you set up the RouterModule in Angular?",
                    a: `The <strong>RouterModule</strong> is configured with route definitions and imported into the root module using <strong>forRoot()</strong>. You define an array of <strong>Routes</strong> objects, each mapping a URL path to a component. The wildcard path <strong>**</strong> catches any unmatched URLs and is typically used for 404 pages. The <strong>&lt;router-outlet&gt;</strong> directive in the template marks where routed components are rendered.
<pre><code>const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// In the template, use router-outlet for rendering
// &lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>
Use <strong>forRoot()</strong> in the app module and <strong>forChild()</strong> in feature modules. The &lt;router-outlet&gt; directive marks where routed components are displayed.`
                },
                {
                    q: "How do you work with route parameters?",
                    a: `Route parameters are defined with a <strong>colon prefix</strong> in the route path like <strong>:id</strong>. They are accessed via the <strong>ActivatedRoute</strong> service in the component. You can read them using the <strong>snapshot</strong> for a one-time read or the <strong>paramMap observable</strong> for reactive updates. The observable approach is needed when the component stays on screen while the parameter changes.
<pre><code>// Route definition
{ path: 'users/:id', component: UserDetailComponent }

// Accessing params in the component
@Component({ template: '&lt;h2&gt;User {{ userId }}&lt;/h2&gt;' })
export class UserDetailComponent implements OnInit {
  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Snapshot (non-reactive)
    this.userId = this.route.snapshot.paramMap.get('id')!;

    // Observable (reactive - responds to param changes)
    this.route.paramMap.subscribe(params =&gt; {
      this.userId = params.get('id')!;
    });
  }
}</code></pre>
Use the <strong>observable approach</strong> when the same component may be reused with different parameters. The <strong>snapshot</strong> is sufficient when the component is always destroyed and recreated on each navigation.`
                },
                {
                    q: "How do query parameters work in Angular routing?",
                    a: `Query parameters are optional <strong>key-value pairs</strong> appended to the URL after a <strong>?</strong> symbol. They are independent of the route path and persist across navigation by default. You can pass them using the <strong>[queryParams]</strong> binding in templates or the <strong>queryParams</strong> option in programmatic navigation. The <strong>queryParamMap</strong> observable on ActivatedRoute is used to read them in the component.
<pre><code>// Navigate with query params
&lt;a [routerLink]="['/products']" [queryParams]="{ sort: 'price', page: 1 }"&gt;
  Products
&lt;/a&gt;

// Programmatic navigation
this.router.navigate(['/products'], {
  queryParams: { sort: 'price', page: 1 },
  queryParamsHandling: 'merge'  // or 'preserve'
});

// Reading query params
constructor(private route: ActivatedRoute) {}
ngOnInit() {
  this.route.queryParamMap.subscribe(params =&gt; {
    const sort = params.get('sort');
    const page = Number(params.get('page'));
  });
}</code></pre>
<strong>queryParamsHandling: 'merge'</strong> merges new params with existing ones. <strong>'preserve'</strong> keeps the current query params unchanged.`
                },
                {
                    q: "How do you navigate programmatically with the Router?",
                    a: `The <strong>Router</strong> service provides methods for programmatic navigation: <strong>navigate()</strong> and <strong>navigateByUrl()</strong>. The <strong>navigate()</strong> method takes an array of route segments and an optional extras object for query params and fragments. The <strong>navigateByUrl()</strong> method takes a complete URL string for absolute navigation. Both methods return a <strong>Promise&lt;boolean&gt;</strong> that resolves to true if navigation succeeds.
<pre><code>import { Router } from '@angular/router';

export class HeaderComponent {
  constructor(private router: Router) {}

  goToUser(id: number) {
    // Navigate with route array
    this.router.navigate(['/users', id]);
  }

  goToSearch(term: string) {
    // Navigate with query params
    this.router.navigate(['/search'], { queryParams: { q: term } });
  }

  goToAbsolute() {
    // Navigate by full URL string
    this.router.navigateByUrl('/about');
  }
}</code></pre>
<strong>navigate()</strong> accepts an array of route segments and extras. <strong>navigateByUrl()</strong> accepts a full URL string. Both return a Promise that resolves to true if navigation succeeds.`
                },
                {
                    q: "How does lazy loading work with Angular routing?",
                    a: `<strong>Lazy loading</strong> defers the loading of a feature module until the user navigates to its route. This reduces the <strong>initial bundle size</strong> and improves startup time significantly. You use the <strong>loadChildren</strong> property with a dynamic import for modules, or <strong>loadComponent</strong> for standalone components. Angular automatically creates a separate chunk for the lazy-loaded code during the build.
<pre><code>// App routing module
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () =&gt; import('./admin/admin.module')
      .then(m =&gt; m.AdminModule)
  },
  {
    path: 'dashboard',
    loadComponent: () =&gt; import('./dashboard/dashboard.component')
      .then(c =&gt; c.DashboardComponent)  // standalone component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}</code></pre>
Use <strong>loadChildren</strong> for lazy-loading modules and <strong>loadComponent</strong> for lazy-loading standalone components. The module is fetched only when the user navigates to that route.`
                },
                {
                    q: "How do child routes work?",
                    a: `<strong>Child routes</strong> are nested routes rendered inside a parent component's <strong>&lt;router-outlet&gt;</strong>. They are defined using the <strong>children</strong> property in the route configuration. Each child route inherits the parent's path prefix, so a child path 'users' under 'admin' becomes <strong>/admin/users</strong>. The parent component must have its own router-outlet to display the child components.
<pre><code>const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  }
];

// admin.component.html
// &lt;nav&gt;
//   &lt;a routerLink="users"&gt;Users&lt;/a&gt;
//   &lt;a routerLink="settings"&gt;Settings&lt;/a&gt;
// &lt;/nav&gt;
// &lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>
The parent component must contain its own <strong>&lt;router-outlet&gt;</strong> to display child route components. Child routes inherit the parent's path prefix, so 'users' becomes <strong>/admin/users</strong>.`
                },
                {
                    q: "What is a wildcard route and how is it used?",
                    a: `A <strong>wildcard route</strong> uses <strong>**</strong> as its path to catch any URL that does not match a defined route. It is typically used for displaying a <strong>404 page</strong> to the user. The wildcard route must always be placed <strong>last</strong> in the routes array because Angular matches routes in order. The first matching route wins, so placing it earlier would catch all navigation attempts.
<pre><code>const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // Wildcard route MUST be last
  { path: '**', component: PageNotFoundComponent }
];

@Component({
  selector: 'app-not-found',
  template: '&lt;h1&gt;404 - Page Not Found&lt;/h1&gt;&lt;a routerLink="/"&gt;Go Home&lt;/a&gt;'
})
export class PageNotFoundComponent {}</code></pre>
The wildcard route must be the <strong>last route</strong> in the configuration because Angular matches routes in <strong>first-match order</strong>. Placing ** earlier would intercept all navigation and prevent other routes from matching.`
                },
                {
                    q: "How do route redirects work?",
                    a: `Route redirects automatically navigate from one route path to another using the <strong>redirectTo</strong> property.
<pre><code>const routes: Routes = [
  // Redirect empty path to /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Redirect old URL to new URL
  { path: 'legacy-page', redirectTo: '/new-page', pathMatch: 'full' },

  // Redirect with prefix matching
  { path: 'old', redirectTo: '/new', pathMatch: 'prefix' },

  { path: 'home', component: HomeComponent },
  { path: 'new-page', component: NewPageComponent },
  { path: '**', redirectTo: '/home' }
];</code></pre>
<strong>pathMatch: 'full'</strong> requires the entire URL to match the path. <strong>pathMatch: 'prefix'</strong> matches if the URL starts with the path. Always use 'full' for empty path redirects to avoid matching everything.`
                },
                {
                    q: "What is ActivatedRoute and what information does it provide?",
                    a: `<strong>ActivatedRoute</strong> is a service that provides detailed information about the currently activated route. It exposes <strong>paramMap</strong>, <strong>queryParamMap</strong>, <strong>data</strong>, <strong>url</strong>, and <strong>fragment</strong> as observables. You can also access a non-reactive <strong>snapshot</strong> for one-time reads of route information. It is injected into components to read route parameters, query strings, and static data.
<pre><code>export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Route parameters
    this.route.paramMap.subscribe(p =&gt; console.log(p.get('id')));

    // Query parameters
    this.route.queryParamMap.subscribe(q =&gt; console.log(q.get('sort')));

    // Route data (static)
    this.route.data.subscribe(d =&gt; console.log(d['title']));

    // URL segments
    this.route.url.subscribe(segments =&gt; console.log(segments));

    // Snapshot (non-reactive)
    const id = this.route.snapshot.paramMap.get('id');
  }
}</code></pre>
Key properties: <strong>paramMap</strong>, <strong>queryParamMap</strong>, <strong>data</strong>, <strong>url</strong>, <strong>fragment</strong>, <strong>outlet</strong>, <strong>parent</strong>, <strong>children</strong>. Each is available as both an Observable and a snapshot.`
                },
                {
                    q: "What are Router events and how do you listen to them?",
                    a: `Angular's <strong>Router</strong> emits events throughout the <strong>navigation lifecycle</strong>. You can subscribe to <strong>router.events</strong> to track navigation progress and show loading indicators. Events include <strong>NavigationStart</strong>, <strong>NavigationEnd</strong>, <strong>NavigationError</strong>, and <strong>NavigationCancel</strong>. You can filter events by type using the <strong>instanceof</strong> operator inside the subscription.
<pre><code>import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

export class AppComponent {
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event =&gt; {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        this.loading = false;
        console.log('Navigated to:', event.urlAfterRedirects);
      }
      if (event instanceof NavigationError) {
        this.loading = false;
        console.error('Navigation failed:', event.error);
      }
    });
  }
}</code></pre>
Key events in order: <strong>NavigationStart</strong> &rarr; <strong>RouteConfigLoadStart</strong> (lazy) &rarr; <strong>RoutesRecognized</strong> &rarr; <strong>GuardsCheckStart</strong> &rarr; <strong>GuardsCheckEnd</strong> &rarr; <strong>ResolveStart</strong> &rarr; <strong>ResolveEnd</strong> &rarr; <strong>NavigationEnd</strong>.`
                },
                {
                    q: "What is routerLink and routerLinkActive?",
                    a: `<strong>routerLink</strong> is a directive that creates navigation links in templates without full page reloads. It takes a URL string or array of route segments and navigates to the specified route when clicked. <strong>routerLinkActive</strong> is a companion directive that adds a CSS class to the element when the linked route is <strong>active</strong>. You can configure it with <strong>routerLinkActiveOptions</strong> for exact URL matching.
<pre><code>&lt;nav&gt;
  &lt;a routerLink="/home" routerLinkActive="active"&gt;Home&lt;/a&gt;
  &lt;a [routerLink]="['/users', userId]" routerLinkActive="active"
     [routerLinkActiveOptions]="{ exact: true }"&gt;Profile&lt;/a&gt;
  &lt;a routerLink="/settings" routerLinkActive="active highlight"&gt;Settings&lt;/a&gt;
&lt;/nav&gt;</code></pre>
<strong>routerLinkActive</strong> can accept multiple CSS class names separated by spaces. Setting <strong>exact: true</strong> ensures the class is only applied when the full URL matches exactly.`
                },
                {
                    q: "What is the difference between forRoot() and forChild()?",
                    a: `<strong>forRoot()</strong> is used once in the root AppModule to configure the router with routes and register the <strong>Router service as a singleton</strong>. <strong>forChild()</strong> is used in feature modules to only register additional routes without re-providing the Router service. If you use forRoot() in a feature module, it creates a second Router instance which breaks navigation. This distinction ensures there is only one Router instance while allowing feature modules to add their own routes.
<pre><code>// App module: forRoot (only once in the entire app)
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppModule { }

// Feature module: forChild (can be used in multiple modules)
@NgModule({
  imports: [RouterModule.forChild(featureRoutes)]
})
export class FeatureModule { }</code></pre>
Always use <strong>forRoot()</strong> only in the AppModule and <strong>forChild()</strong> in all feature modules. This prevents duplicate <strong>Router</strong> instances and routing conflicts.`
                },
                {
                    q: "What is a named router outlet?",
                    a: `<strong>Named router outlets</strong> allow you to display multiple routed components simultaneously on the same page. While the primary outlet has no name, <strong>secondary outlets</strong> are given a name attribute. Each named outlet independently displays a component based on the URL. This is useful for layouts with a <strong>sidebar</strong>, popup panel, or chat widget alongside the main content.
<pre><code>&lt;!-- Template with multiple outlets --&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
&lt;router-outlet name="sidebar"&gt;&lt;/router-outlet&gt;

&lt;!-- Route configuration --&gt;
{ path: 'help', component: HelpComponent, outlet: 'sidebar' }

&lt;!-- Navigation --&gt;
&lt;a [routerLink]="[{ outlets: { sidebar: ['help'] } }]"&gt;Show Help&lt;/a&gt;</code></pre>
The URL shows named outlets in parentheses like <strong>/home(sidebar:help)</strong>. You can clear a named outlet by navigating to <strong>null</strong> for that outlet.`
                },
                {
                    q: "What is route data and how is it used?",
                    a: `The <strong>data</strong> property on a route definition lets you attach <strong>static data</strong> to a route that can be read by components, guards, or resolvers. This is useful for passing metadata like page titles, <strong>breadcrumb labels</strong>, required roles, or feature flags. The data is defined once in the route config and stays constant throughout navigation. You access it via the <strong>ActivatedRoute</strong> service using snapshot or observable.
<pre><code>// Route configuration with static data
{ path: 'admin', component: AdminComponent,
  data: { title: 'Admin Panel', roles: ['admin'], breadcrumb: 'Admin' }
}

// Accessing data in component
export class AdminComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const title = this.route.snapshot.data['title'];
    const roles = this.route.snapshot.data['roles'];
  }
}</code></pre>
Route <strong>data</strong> is ideal for static metadata that does not change. For dynamic data fetched from an API, use a <strong>resolver</strong> instead.`
                },
                {
                    q: "What is preloading strategy in Angular routing?",
                    a: `<strong>Preloading strategies</strong> control how lazy-loaded modules are loaded in the background after the initial app load. Angular provides two built-in strategies: <strong>PreloadAllModules</strong> loads all lazy modules immediately in the background, and <strong>NoPreloading</strong> (default) loads modules only when navigated to. You can also create <strong>custom preloading strategies</strong> that selectively load specific modules based on conditions. Custom strategies use route data flags like <strong>preload: true</strong> to decide which modules to preload.
<pre><code>// Preload all lazy modules in background
RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})

// Custom preloading: only preload routes with data.preload = true
export class SelectivePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () =&gt; Observable&lt;any&gt;) {
    return route.data?.['preload'] ? load() : of(null);
  }
}</code></pre>
<strong>PreloadAllModules</strong> is a good default for small apps. For larger apps, a <strong>custom strategy</strong> gives better control over which modules are preloaded based on user behavior.`
                }
            ]
        },
        {
            id: "template-driven-forms",
            title: "Template-Driven Forms",
            icon: "bi-ui-checks",
            questions: [
                {
                    q: "What is the difference between template-driven and reactive forms?",
                    a: `<strong>Template-driven forms</strong> use directives like <strong>ngModel</strong> in the template and are easier for simple forms. <strong>Reactive forms</strong> define the form model programmatically in the component class using <strong>FormControl</strong> and <strong>FormGroup</strong>. Template-driven forms use <strong>FormsModule</strong> while reactive forms use <strong>ReactiveFormsModule</strong>. Reactive forms offer more control over validation, dynamic fields, and unit testing.
<pre><code>&lt;!-- Template-driven (uses FormsModule) --&gt;
&lt;form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)"&gt;
  &lt;input name="email" ngModel required /&gt;
&lt;/form&gt;

&lt;!-- Reactive (uses ReactiveFormsModule) --&gt;
// Component class
form = new FormGroup({
  email: new FormControl('', Validators.required)
});
// Template: &lt;form [formGroup]="form"&gt;&lt;input formControlName="email" /&gt;&lt;/form&gt;</code></pre>
Template-driven forms are best for simple scenarios. Reactive forms are preferred for complex forms with dynamic fields, custom validation, and unit testing.`
                },
                {
                    q: "How does ngModel work in template-driven forms?",
                    a: `<strong>ngModel</strong> creates a <strong>two-way data binding</strong> between a form control element and a component property. Each ngModel creates a <strong>FormControl</strong> instance behind the scenes to track the value and validation state. You can use it in three ways: <strong>[(ngModel)]</strong> for two-way binding, <strong>[ngModel]</strong> for one-way, or just <strong>ngModel</strong> to register the control without binding.
<pre><code>&lt;form #userForm="ngForm"&gt;
  &lt;!-- Two-way binding --&gt;
  &lt;input name="name" [(ngModel)]="user.name" /&gt;

  &lt;!-- One-way binding (read only from component) --&gt;
  &lt;input name="email" [ngModel]="user.email" /&gt;

  &lt;!-- No binding (just registers control) --&gt;
  &lt;input name="phone" ngModel /&gt;
&lt;/form&gt;

// Component
export class FormComponent {
  user = { name: '', email: '' };
}</code></pre>
Each input using ngModel <strong>must</strong> have a <strong>name</strong> attribute so the form can register the control. Import <strong>FormsModule</strong> to use ngModel.`
                },
                {
                    q: "How does ngForm work?",
                    a: `<strong>ngForm</strong> is automatically applied to every &lt;form&gt; element when <strong>FormsModule</strong> is imported. It creates a top-level <strong>FormGroup</strong> that tracks the form's overall validity, value, and submission state. You export it using a template reference variable like <strong>#myForm="ngForm"</strong> to access form properties in the template. It provides methods like <strong>reset()</strong> and properties like <strong>valid</strong>, <strong>dirty</strong>, and <strong>value</strong>.
<pre><code>&lt;form #registrationForm="ngForm" (ngSubmit)="onSubmit(registrationForm)"&gt;
  &lt;input name="name" ngModel required /&gt;
  &lt;input name="email" ngModel required email /&gt;

  &lt;button [disabled]="registrationForm.invalid"&gt;Submit&lt;/button&gt;

  &lt;p&gt;Form valid: {{ registrationForm.valid }}&lt;/p&gt;
  &lt;p&gt;Form value: {{ registrationForm.value | json }}&lt;/p&gt;
&lt;/form&gt;

// Component
onSubmit(form: NgForm) {
  if (form.valid) {
    console.log('Form data:', form.value);
    form.reset(); // Reset form after submission
  }
}</code></pre>
Access form state via the template reference variable: <strong>.valid</strong>, <strong>.invalid</strong>, <strong>.dirty</strong>, <strong>.pristine</strong>, <strong>.touched</strong>, <strong>.value</strong>.`
                },
                {
                    q: "How do you add validation in template-driven forms?",
                    a: `Angular provides built-in <strong>validator directives</strong> that map to HTML5 validation attributes like <strong>required</strong>, <strong>minlength</strong>, and <strong>email</strong>. They are applied directly in the template as element attributes. You export the control with <strong>#name="ngModel"</strong> to access its error state and display validation messages. The <strong>errors</strong> object contains keys matching the failed validators.
<pre><code>&lt;form #f="ngForm"&gt;
  &lt;input name="name" ngModel required minlength="3" maxlength="50"
         #nameCtrl="ngModel" /&gt;

  &lt;div *ngIf="nameCtrl.invalid && nameCtrl.touched"&gt;
    &lt;p *ngIf="nameCtrl.errors?.['required']"&gt;Name is required&lt;/p&gt;
    &lt;p *ngIf="nameCtrl.errors?.['minlength']"&gt;
      Minimum {{ nameCtrl.errors?.['minlength'].requiredLength }} characters
    &lt;/p&gt;
  &lt;/div&gt;

  &lt;input name="email" ngModel required email #emailCtrl="ngModel" /&gt;
  &lt;input name="age" ngModel type="number" min="18" max="120" /&gt;
&lt;/form&gt;</code></pre>
Built-in validators: <strong>required</strong>, <strong>minlength</strong>, <strong>maxlength</strong>, <strong>pattern</strong>, <strong>email</strong>, <strong>min</strong>, <strong>max</strong>. Export the control with <strong>#name="ngModel"</strong> to access its validation state.`
                },
                {
                    q: "How do you create custom validators for template-driven forms?",
                    a: `Custom validators for template-driven forms are created as <strong>directives</strong> that implement the <strong>Validator</strong> interface. They are registered using the <strong>NG_VALIDATORS</strong> multi-provider token. The directive's <strong>validate()</strong> method receives the control and returns an error object or null. You apply the custom validator by adding the directive's selector as an attribute on the form control.
<pre><code>@Directive({
  selector: '[appForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenNameDirective,
    multi: true
  }]
})
export class ForbiddenNameDirective implements Validator {
  @Input() appForbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.appForbiddenName) return null;
    const forbidden = new RegExp(this.appForbiddenName).test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  }
}

// Usage
// &lt;input name="username" ngModel appForbiddenName="admin" /&gt;</code></pre>
The directive registers itself as a validator using the NG_VALIDATORS multi-provider token. Angular calls the validate method on every value change.`
                },
                {
                    q: "How do you display validation error messages?",
                    a: `Export the <strong>ngModel</strong> as a template reference variable to access the control's validation state. Then use <strong>*ngIf</strong> to conditionally display error messages based on specific error keys. Check <strong>touched</strong> or <strong>dirty</strong> before showing errors so messages do not appear before the user interacts. Angular also adds CSS classes like <strong>ng-invalid</strong> and <strong>ng-touched</strong> automatically for styling.
<pre><code>&lt;input name="email" ngModel required email
       #emailCtrl="ngModel" /&gt;

&lt;div *ngIf="emailCtrl.invalid && (emailCtrl.dirty || emailCtrl.touched)"
     class="error-messages"&gt;
  &lt;p *ngIf="emailCtrl.errors?.['required']" class="error"&gt;
    Email is required.
  &lt;/p&gt;
  &lt;p *ngIf="emailCtrl.errors?.['email']" class="error"&gt;
    Please enter a valid email address.
  &lt;/p&gt;
&lt;/div&gt;

&lt;!-- CSS classes Angular adds automatically --&gt;
&lt;!-- .ng-valid / .ng-invalid --&gt;
&lt;!-- .ng-pristine / .ng-dirty --&gt;
&lt;!-- .ng-untouched / .ng-touched --&gt;</code></pre>
Check <strong>dirty</strong> or <strong>touched</strong> before showing errors to avoid displaying messages before the user interacts with the control. Angular automatically adds CSS classes you can style.`
                },
                {
                    q: "How do you handle form submission in template-driven forms?",
                    a: `Use the <strong>(ngSubmit)</strong> event on the form element to handle submission. Access form data through the <strong>template reference variable</strong> or component properties bound with ngModel. You can disable the submit button using <strong>[disabled]="form.invalid"</strong> to prevent invalid submissions. Always use ngSubmit instead of the native submit event to let Angular handle validation first.
<pre><code>&lt;form #contactForm="ngForm" (ngSubmit)="submitForm(contactForm)"&gt;
  &lt;input name="name" [(ngModel)]="contact.name" required /&gt;
  &lt;input name="email" [(ngModel)]="contact.email" required email /&gt;
  &lt;textarea name="message" [(ngModel)]="contact.message" required&gt;&lt;/textarea&gt;

  &lt;button type="submit" [disabled]="contactForm.invalid"&gt;Send&lt;/button&gt;
&lt;/form&gt;

// Component
contact = { name: '', email: '', message: '' };

submitForm(form: NgForm) {
  if (form.valid) {
    this.contactService.send(this.contact).subscribe({
      next: () =&gt; form.reset(),
      error: (err) =&gt; console.error(err)
    });
  }
}</code></pre>
Use <strong>ngSubmit</strong> instead of the native submit event to prevent default browser form submission. Call <strong>form.reset()</strong> after successful submission to clear all fields and validation states.`
                },
                {
                    q: "What are template reference variables in the context of forms?",
                    a: `<strong>Template reference variables</strong> in forms provide access to the <strong>NgForm</strong>, <strong>NgModel</strong>, or <strong>NgModelGroup</strong> directive instances. By exporting with <strong>#var="ngModel"</strong>, you get access to the directive's properties like <strong>valid</strong>, <strong>touched</strong>, and <strong>value</strong>. Without the export, the variable refers to the plain DOM element instead. This is essential for checking validation state and displaying error messages in the template.
<pre><code>&lt;!-- Form-level reference --&gt;
&lt;form #myForm="ngForm"&gt;
  &lt;!-- Control-level reference --&gt;
  &lt;input name="username" ngModel required #username="ngModel" /&gt;

  &lt;!-- Access control state --&gt;
  &lt;p&gt;Valid: {{ username.valid }}&lt;/p&gt;
  &lt;p&gt;Touched: {{ username.touched }}&lt;/p&gt;
  &lt;p&gt;Value: {{ username.value }}&lt;/p&gt;

  &lt;!-- Access form state --&gt;
  &lt;p&gt;Form valid: {{ myForm.valid }}&lt;/p&gt;
  &lt;button [disabled]="myForm.invalid"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
Without <strong>="ngForm"</strong> or <strong>="ngModel"</strong>, the variable refers to the DOM element. With it, the variable refers to the Angular directive instance, providing access to validation state and form control methods.`
                },
                {
                    q: "What is NgModelGroup and how is it used?",
                    a: `<strong>NgModelGroup</strong> groups related form controls together as a sub-group within a form, creating a <strong>nested object</strong> in the form's value. You apply it using the <strong>ngModelGroup</strong> directive on a container element like a div. It aggregates the <strong>validation status</strong> of all controls inside it, so you can check if the entire group is valid at once. This is useful for grouping related fields like address or contact information.
<pre><code>&lt;form #f="ngForm"&gt;
  &lt;div ngModelGroup="address" #addr="ngModelGroup"&gt;
    &lt;input name="street" ngModel required /&gt;
    &lt;input name="city" ngModel required /&gt;
    &lt;input name="zip" ngModel required pattern="[0-9]{5}" /&gt;
  &lt;/div&gt;

  &lt;p *ngIf="addr.invalid"&gt;Address section has errors&lt;/p&gt;

  &lt;!-- Form value structure:
  {
    address: { street: '...', city: '...', zip: '...' }
  } --&gt;
&lt;/form&gt;</code></pre>
NgModelGroup nests the controls into a sub-object in the form value structure. It also aggregates validation status, so you can check if the entire group is valid or invalid as a unit.`
                },
                {
                    q: "How do async validators work in template-driven forms?",
                    a: `<strong>Async validators</strong> are directives registered under the <strong>NG_ASYNC_VALIDATORS</strong> token. They return a <strong>Promise</strong> or <strong>Observable</strong> that resolves to validation errors or null. This is useful for server-side checks like verifying if an email is already taken. Angular waits for all <strong>sync validators</strong> to pass before running async validators.
<pre><code>@Directive({
  selector: '[appUniqueEmail]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UniqueEmailDirective,
    multi: true
  }]
})
export class UniqueEmailDirective implements AsyncValidator {
  constructor(private userService: UserService) {}

  validate(control: AbstractControl): Observable&lt;ValidationErrors | null&gt; {
    return this.userService.checkEmail(control.value).pipe(
      map(exists =&gt; exists ? { emailTaken: true } : null),
      catchError(() =&gt; of(null))
    );
  }
}

// Usage: &lt;input name="email" ngModel appUniqueEmail /&gt;
// &lt;p *ngIf="emailCtrl.errors?.['emailTaken']"&gt;Email already taken&lt;/p&gt;</code></pre>
While an async validator is pending, the control has a <strong>pending</strong> status. Angular waits for all sync validators to pass before running async validators.`
                },
                {
                    q: "What CSS classes does Angular add to form controls?",
                    a: `Angular automatically adds <strong>CSS classes</strong> to form controls based on their state. The classes are <strong>ng-untouched/ng-touched</strong> for user focus, <strong>ng-pristine/ng-dirty</strong> for value changes, and <strong>ng-valid/ng-invalid</strong> for validation status. You can use these classes in your CSS to visually highlight fields with errors. These classes update automatically as the user interacts with the form.
<pre><code>/* Style invalid fields that have been touched */
input.ng-invalid.ng-touched {
  border: 2px solid red;
}

/* Style valid fields */
input.ng-valid.ng-touched {
  border: 2px solid green;
}

/* Style dirty fields */
input.ng-dirty {
  background-color: #fffde7;
}</code></pre>
The <strong>ng-touched</strong> and <strong>ng-dirty</strong> classes help you avoid showing error styles on a fresh, untouched form. Combine these classes for precise control over when validation styles appear.`
                },
                {
                    q: "How do you reset a template-driven form?",
                    a: `You can reset a template-driven form by calling the <strong>reset()</strong> method on the <strong>NgForm</strong> reference. This resets all controls to their initial values, clears <strong>validation errors</strong>, and reverts the pristine and touched states. You can optionally pass an object to <strong>reset()</strong> to set specific initial values for each control. This is commonly done after a successful form submission.
<pre><code>&lt;form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)"&gt;
  &lt;input name="email" ngModel required /&gt;
  &lt;input name="name" ngModel required /&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
  &lt;button type="button" (click)="myForm.reset()"&gt;Clear&lt;/button&gt;
&lt;/form&gt;

// Or reset with specific values
onSubmit(form: NgForm) {
  this.saveData(form.value);
  form.reset({ email: '', name: 'Default User' });
}</code></pre>
Calling <strong>reset()</strong> without arguments sets all fields to empty. Passing an object lets you set <strong>default values</strong> for specific controls after the reset.`
                },
                {
                    q: "What is the difference between touched and dirty in Angular forms?",
                    a: `<strong>Touched</strong> means the user has focused on the field and then moved away (blurred), regardless of whether the value changed. <strong>Dirty</strong> means the user has actually changed the value of the field. A field can be touched but not dirty if the user clicked in and out without typing. These states are commonly used to decide when to show <strong>validation error messages</strong>.
<pre><code>&lt;input name="email" ngModel required #email="ngModel" /&gt;

&lt;!-- Show error only after user has interacted --&gt;
&lt;div *ngIf="email.invalid &amp;&amp; (email.touched || email.dirty)"&gt;
  Email is required
&lt;/div&gt;

&lt;!-- States explained --&gt;
&lt;!-- touched: user focused then blurred the field --&gt;
&lt;!-- dirty: user changed the value --&gt;
&lt;!-- pristine: value has not been changed (opposite of dirty) --&gt;</code></pre>
<strong>Pristine</strong> is the opposite of dirty — it means the value has not been changed. <strong>Untouched</strong> is the opposite of touched. Use these states to control when validation messages and error styles appear.`
                },
                {
                    q: "How do you disable a submit button until the form is valid?",
                    a: `You can disable the submit button by binding the <strong>[disabled]</strong> property to the form's <strong>invalid</strong> state. Export the form as a template reference variable with <strong>#form="ngForm"</strong> and check its valid or invalid property. When all required fields are filled and all validations pass, the button becomes <strong>enabled automatically</strong>. This is a common UX pattern that prevents users from submitting incomplete forms.
<pre><code>&lt;form #registrationForm="ngForm" (ngSubmit)="submit(registrationForm)"&gt;
  &lt;input name="name" ngModel required minlength="3" /&gt;
  &lt;input name="email" ngModel required email /&gt;

  &lt;button type="submit" [disabled]="registrationForm.invalid"&gt;
    Register
  &lt;/button&gt;
  &lt;p&gt;Form valid: {{ registrationForm.valid }}&lt;/p&gt;
&lt;/form&gt;</code></pre>
The <strong>disabled</strong> binding reacts to form state changes in real time. You can also show the form's <strong>valid/invalid</strong> status to give users feedback as they fill in the fields.`
                },
                {
                    q: "Can you use template-driven forms with standalone components?",
                    a: `Yes, <strong>standalone components</strong> can use template-driven forms by importing <strong>FormsModule</strong> directly in the component's imports array. This is the recommended approach in <strong>Angular 14+</strong> applications that use standalone components. You get the same <strong>ngModel</strong>, ngForm, and validation features as with NgModule-based apps. Each standalone component declares its own dependencies explicitly.
<pre><code>@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-contact',
  template: '&lt;form #f="ngForm" (ngSubmit)="send(f)"&gt;' +
    '&lt;input name="email" ngModel required email /&gt;' +
    '&lt;button [disabled]="f.invalid"&gt;Send&lt;/button&gt;&lt;/form&gt;'
})
export class ContactComponent {
  send(form: NgForm) { console.log(form.value); }
}</code></pre>
With standalone components, you import <strong>FormsModule</strong> per component instead of in a shared NgModule. This improves <strong>tree-shaking</strong> and makes dependencies more explicit.`
                }
            ]
        },
        {
            id: "reactive-forms",
            title: "Reactive Forms",
            icon: "bi-input-cursor-text",
            questions: [
                {
                    q: "What are reactive forms in Angular?",
                    a: `<strong>Reactive forms</strong> provide a model-driven approach where the form structure is defined explicitly in the component class. You use <strong>FormControl</strong>, <strong>FormGroup</strong>, and <strong>FormArray</strong> to build the form model with validators. The form model stays in sync with the template using directives like <strong>formGroup</strong> and <strong>formControlName</strong>. This approach provides better testability, immutable data flow, and reactive access to form state.
<pre><code>import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: '&lt;form [formGroup]="loginForm" (ngSubmit)="onSubmit()"&gt;
    &lt;input formControlName="email" /&gt;
    &lt;input formControlName="password" type="password" /&gt;
    &lt;button [disabled]="loginForm.invalid"&gt;Login&lt;/button&gt;
  &lt;/form&gt;'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  onSubmit() { console.log(this.loginForm.value); }
}</code></pre>
Reactive forms require importing <strong>ReactiveFormsModule</strong>. They offer better testability, immutable data flow, and reactive access to form state via Observables.`
                },
                {
                    q: "What is a FormControl?",
                    a: `<strong>FormControl</strong> represents a single input element in a form. It tracks the <strong>value</strong>, <strong>validation status</strong>, and user interaction state of the control. You create it with an initial value and optional validators as arguments. In Angular 14+, FormControl supports <strong>generics</strong> for type-safe value access.
<pre><code>// Create with initial value and validators
const name = new FormControl('John', [
  Validators.required,
  Validators.minLength(2)
]);

// Access properties
console.log(name.value);    // 'John'
console.log(name.valid);    // true
console.log(name.errors);   // null
console.log(name.dirty);    // false
console.log(name.touched);  // false

// Update value
name.setValue('Jane');
name.patchValue('Jane');

// Reset to initial state
name.reset();

// Disable/enable
name.disable();
name.enable();</code></pre>
FormControl can be typed in Angular 14+: <strong>new FormControl&lt;string&gt;('')</strong> ensures type safety when accessing the value.`
                },
                {
                    q: "What is a FormGroup?",
                    a: `<strong>FormGroup</strong> groups multiple <strong>FormControls</strong> together as a single unit. It tracks the <strong>aggregate value</strong> and validation status of all children. If any child control is invalid, the entire group becomes invalid. You can nest FormGroups inside each other for complex form structures like address sub-forms.
<pre><code>const profileForm = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl('', Validators.pattern('[0-9]{5}'))
  })
});

// Access nested value
console.log(profileForm.value);
// { firstName: '', lastName: '', address: { street: '', city: '', zip: '' } }

// Access nested control
profileForm.get('address.city')?.setValue('New York');</code></pre>
FormGroup aggregates the status of its children: if any child is invalid, the group is invalid. Use <strong>get()</strong> with dot notation to access nested controls.`
                },
                {
                    q: "How does FormBuilder simplify form creation?",
                    a: `<strong>FormBuilder</strong> is a service that provides shorthand methods to create FormControl, FormGroup, and FormArray instances. It reduces the boilerplate of creating forms manually with <strong>new FormControl()</strong> calls. The array syntax <strong>['value', validators]</strong> is the most concise way to define controls. Inject FormBuilder via the constructor or use <strong>inject(FormBuilder)</strong>.
<pre><code>export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: ['']
      }),
      hobbies: this.fb.array(['Reading'])
    });
  }
}</code></pre>
FormBuilder shorthand: <strong>fb.control(value, validators)</strong>, <strong>fb.group({...})</strong>, <strong>fb.array([...])</strong>. The array syntax <strong>['value', validators]</strong> is the most concise way to define controls with validation.`
                },
                {
                    q: "What is a FormArray and how is it used?",
                    a: `<strong>FormArray</strong> manages a dynamic collection of controls indexed by number rather than name. It is ideal for lists like skills, phone numbers, or address entries that users can add and remove. You use <strong>push()</strong> to add controls and <strong>removeAt()</strong> to delete them. Access the FormArray through a getter for cleaner template binding.
<pre><code>@Component({
  template: '&lt;div formArrayName="skills"&gt;
    &lt;div *ngFor="let skill of skills.controls; let i = index"&gt;
      &lt;input [formControlName]="i" /&gt;
      &lt;button (click)="removeSkill(i)"&gt;X&lt;/button&gt;
    &lt;/div&gt;
    &lt;button (click)="addSkill()"&gt;Add Skill&lt;/button&gt;
  &lt;/div&gt;'
})
export class SkillsComponent {
  form = this.fb.group({
    skills: this.fb.array(['Angular', 'TypeScript'])
  });

  get skills() { return this.form.get('skills') as FormArray; }
  addSkill() { this.skills.push(this.fb.control('', Validators.required)); }
  removeSkill(i: number) { this.skills.removeAt(i); }

  constructor(private fb: FormBuilder) {}
}</code></pre>
FormArray methods: <strong>push()</strong>, <strong>removeAt()</strong>, <strong>insert()</strong>, <strong>at()</strong>, <strong>clear()</strong>. Use a getter to access the FormArray for cleaner template binding.`
                },
                {
                    q: "What are the built-in validators in Angular?",
                    a: `Angular provides several built-in validators in the <strong>Validators</strong> class for common validation scenarios. These include <strong>required</strong>, <strong>minLength</strong>, <strong>maxLength</strong>, <strong>min</strong>, <strong>max</strong>, <strong>email</strong>, and <strong>pattern</strong>. You pass them as an array in the second argument of FormControl. Use <strong>Validators.compose()</strong> to combine multiple validators into one.
<pre><code>import { Validators } from '@angular/forms';

this.form = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
  email: ['', [Validators.required, Validators.email]],
  age: [null, [Validators.required, Validators.min(18), Validators.max(120)]],
  website: ['', Validators.pattern('https?://.+')],
  bio: ['']  // no validation
});

// Composed validator
const ctrl = new FormControl('', Validators.compose([
  Validators.required,
  Validators.minLength(3)
]));

// Check errors
if (this.form.get('email')?.hasError('required')) {
  console.log('Email is required');
}</code></pre>
Built-in validators: <strong>required</strong>, <strong>requiredTrue</strong>, <strong>min</strong>, <strong>max</strong>, <strong>minLength</strong>, <strong>maxLength</strong>, <strong>pattern</strong>, <strong>email</strong>, <strong>nullValidator</strong>, <strong>compose</strong>, <strong>composeAsync</strong>.`
                },
                {
                    q: "How do you create custom validators for reactive forms?",
                    a: `Custom validators are plain <strong>functions</strong> that receive an <strong>AbstractControl</strong> and return a <strong>ValidationErrors</strong> object or null. They return null when valid and an error object with a descriptive key when invalid. For reusable validators with parameters, create a <strong>factory function</strong> that returns the validator. Cross-field validators are applied at the <strong>FormGroup</strong> level.
<pre><code>// Validator function
function forbiddenValue(forbidden: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null =&gt; {
    if (!control.value) return null;
    return control.value === forbidden
      ? { forbiddenValue: { value: control.value } }
      : null;
  };
}

// Cross-field validator (applied to FormGroup)
function passwordMatch(group: AbstractControl): ValidationErrors | null {
  const pass = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pass === confirm ? null : { passwordMismatch: true };
}

// Usage
this.form = this.fb.group({
  username: ['', forbiddenValue('admin')],
  password: [''],
  confirmPassword: ['']
}, { validators: passwordMatch });</code></pre>
Custom validators return <strong>null</strong> for valid and an error object for invalid. Cross-field validators are applied at the group level and have access to all child controls.`
                },
                {
                    q: "How do you create dynamic forms with reactive forms?",
                    a: `<strong>Dynamic forms</strong> are built by programmatically adding and removing controls based on user actions or configuration data. You define a data structure describing the fields, then loop through it to create <strong>FormControls</strong> dynamically. Use methods like <strong>addControl()</strong> and <strong>removeControl()</strong> on FormGroup to modify the form at runtime. This pattern is useful for forms generated from server-side configurations or schemas.
<pre><code>@Component({
  template: '&lt;form [formGroup]="form"&gt;
    &lt;div *ngFor="let field of fields"&gt;
      &lt;label&gt;{{ field.label }}&lt;/label&gt;
      &lt;input [formControlName]="field.key" /&gt;
    &lt;/div&gt;
  &lt;/form&gt;'
})
export class DynamicFormComponent implements OnInit {
  fields = [
    { key: 'name', label: 'Name', required: true },
    { key: 'email', label: 'Email', required: true },
    { key: 'phone', label: 'Phone', required: false }
  ];
  form!: FormGroup;

  ngOnInit() {
    const controls: Record&lt;string, FormControl&gt; = {};
    this.fields.forEach(f =&gt; {
      controls[f.key] = new FormControl('', f.required ? Validators.required : []);
    });
    this.form = new FormGroup(controls);
  }
}</code></pre>
You can also use <strong>addControl()</strong>, <strong>removeControl()</strong>, and <strong>setControl()</strong> on a FormGroup to dynamically modify the form structure at runtime.`
                },
                {
                    q: "How does valueChanges work?",
                    a: `<strong>valueChanges</strong> is an Observable that emits every time the value of a control, group, or array changes. It enables <strong>reactive programming patterns</strong> with forms like search-as-you-type and auto-save. You can also subscribe to <strong>statusChanges</strong> to track whether the form is VALID, INVALID, or PENDING. Both observables work on individual FormControls, FormGroups, and FormArrays.
<pre><code>// Listen to a single control
this.form.get('search')?.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term =&gt; this.searchService.search(term))
).subscribe(results =&gt; this.results = results);

// Listen to entire form
this.form.valueChanges.subscribe(value =&gt; {
  console.log('Form value:', value);
  this.autoSave(value);
});

// Listen to status changes
this.form.statusChanges.subscribe(status =&gt; {
  console.log('Form status:', status); // VALID, INVALID, PENDING
});</code></pre>
valueChanges is commonly combined with RxJS operators like <strong>debounceTime</strong>, <strong>distinctUntilChanged</strong>, and <strong>switchMap</strong> to implement search-as-you-type, auto-save, and other reactive patterns.`
                },
                {
                    q: "What is the difference between patchValue and setValue?",
                    a: `<strong>setValue</strong> requires you to provide values for <em>all</em> controls in the group and throws an error if any are missing. <strong>patchValue</strong> allows partial updates, only setting the controls you specify. Use setValue when loading complete data from an API and patchValue for partial UI interactions. Both methods also accept an <strong>options</strong> object to control event emission.
<pre><code>const form = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  age: new FormControl(null)
});

// setValue: must provide ALL controls (throws if any missing)
form.setValue({ name: 'John', email: 'john@test.com', age: 30 });

// patchValue: can provide a SUBSET of controls
form.patchValue({ name: 'Jane' });
// email and age remain unchanged

// setValue throws error if incomplete:
// form.setValue({ name: 'John' }); // ERROR!

// Reset form to initial values
form.reset();

// Reset with specific values
form.reset({ name: 'Default', email: '', age: null });</code></pre>
Use <strong>setValue</strong> when you have complete data (e.g., loading from API). Use <strong>patchValue</strong> when updating specific fields (e.g., from a partial UI interaction).`
                },
                {
                    q: "What is the difference between template-driven and reactive forms?",
                    a: `<strong>Template-driven forms</strong> use directives like ngModel and Angular creates the form model automatically behind the scenes. <strong>Reactive forms</strong> define the form model explicitly in the component class using FormControl, FormGroup, and FormArray. Reactive forms are more <strong>testable</strong> because the model is in TypeScript, not the template. They also handle <strong>dynamic forms</strong> better and offer reactive access to changes via Observables.
<pre><code>// Template-driven: model defined in template
&lt;input name="email" [(ngModel)]="email" required /&gt;

// Reactive: model defined in component class
email = new FormControl('', [Validators.required, Validators.email]);
// Template: &lt;input [formControl]="email" /&gt;</code></pre>
Template-driven forms are simpler for <strong>basic scenarios</strong> with few fields. Reactive forms are preferred for <strong>complex forms</strong> with dynamic fields, custom validation, and unit testing.`
                },
                {
                    q: "What are typed forms in Angular?",
                    a: `Angular 14 introduced <strong>strictly typed reactive forms</strong>. When you create a FormGroup or FormControl, Angular <strong>infers the types</strong> of all controls automatically. This means form.value, form.get(), and valueChanges all have proper TypeScript types instead of <strong>any</strong>. You can also use <strong>NonNullableFormBuilder</strong> to create controls that reset to their initial value instead of null.
<pre><code>// Typed form - Angular 14+
const form = new FormGroup({
  name: new FormControl('', { nonNullable: true }),
  age: new FormControl&lt;number | null&gt;(null)
});

form.value.name // type: string (not any)
form.value.age  // type: number | null

// NonNullableFormBuilder
const fb = inject(NonNullableFormBuilder);
const form = fb.group({
  name: [''], // resets to '' instead of null
});</code></pre>
<strong>Typed forms</strong> catch type errors at compile time and provide better autocompletion in IDEs. The <strong>nonNullable</strong> option ensures controls reset to their initial value rather than null.`
                },
                {
                    q: "How do you add or remove validators dynamically?",
                    a: `You can change validators at runtime using <strong>setValidators()</strong>, <strong>addValidators()</strong>, <strong>removeValidators()</strong>, and <strong>clearValidators()</strong>. After changing validators, you must call <strong>updateValueAndValidity()</strong> to re-run validation with the new rules. This is useful when validation requirements change based on user selections. For example, making a phone number required only when a specific contact method is chosen.
<pre><code>// Add validators dynamically
this.form.get('phone')?.setValidators([Validators.required, Validators.minLength(10)]);
this.form.get('phone')?.updateValueAndValidity();

// Remove all validators
this.form.get('phone')?.clearValidators();
this.form.get('phone')?.updateValueAndValidity();

// Conditionally add based on another field
this.form.get('contactMethod')?.valueChanges.subscribe(method =&gt; {
  const phone = this.form.get('phone');
  if (method === 'phone') phone?.addValidators(Validators.required);
  else phone?.removeValidators(Validators.required);
  phone?.updateValueAndValidity();
});</code></pre>
Always call <strong>updateValueAndValidity()</strong> after modifying validators. Without it, the control retains its old validation state and won't re-evaluate.`
                },
                {
                    q: "How do you disable and enable form controls in reactive forms?",
                    a: `You can disable or enable controls using the <strong>disable()</strong> and <strong>enable()</strong> methods on any FormControl or FormGroup. <strong>Disabled controls</strong> are excluded from the form's value by default but included when you use <strong>getRawValue()</strong>. You can also create a control as disabled initially using the object syntax. This is useful for read-only fields or fields editable only under specific conditions.
<pre><code>// Disable/enable a single control
this.form.get('email')?.disable();
this.form.get('email')?.enable();

// Create initially disabled
email: new FormControl({ value: 'readonly@test.com', disabled: true })

// Disabled controls excluded from form.value
console.log(this.form.value);       // excludes disabled controls
console.log(this.form.getRawValue()); // includes ALL controls</code></pre>
Use <strong>getRawValue()</strong> when you need the values of all controls including disabled ones. The <strong>disabled</strong> state is also reflected in the template through the native disabled attribute.`
                },
                {
                    q: "What are async validators and how do they work?",
                    a: `<strong>Async validators</strong> are validator functions that return a <strong>Promise</strong> or <strong>Observable</strong> instead of a synchronous result. They are used for validations that require server-side checks, like checking if a username is taken. Angular passes them as the <strong>third argument</strong> to FormControl, after sync validators. Async validators only run after all <strong>synchronous validators</strong> pass, and the control's status is set to PENDING while waiting.
<pre><code>// Async validator function
function uniqueEmail(http: HttpClient): AsyncValidatorFn {
  return (control: AbstractControl): Observable&lt;ValidationErrors | null&gt; =&gt; {
    return http.get&lt;boolean&gt;('/api/check-email?email=' + control.value).pipe(
      map(exists =&gt; exists ? { emailTaken: true } : null),
      catchError(() =&gt; of(null))
    );
  };
}

// Usage: third argument is async validators
email = new FormControl('', [Validators.required], [uniqueEmail(this.http)]);

// Template: show loading while checking
&lt;span *ngIf="email.pending"&gt;Checking...&lt;/span&gt;</code></pre>
While the async validator is running, the control status is <strong>PENDING</strong>. You can use this to show a <strong>loading indicator</strong> in the template using *ngIf="control.pending".`
                }
            ]
        },
        {
            id: "http-client",
            title: "HTTP Client",
            icon: "bi-cloud-arrow-down",
            questions: [
                {
                    q: "How do you set up HttpClientModule in Angular?",
                    a: `Import <strong>HttpClientModule</strong> in your root module to enable HTTP communication across the application. Then inject <strong>HttpClient</strong> in your services to make API calls. For standalone apps in <strong>Angular 15+</strong>, use <strong>provideHttpClient()</strong> in the application config instead. HttpClientModule should only be imported once in the root module.
<pre><code>// app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

// For standalone apps (Angular 15+)
// main.ts
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
});</code></pre>
HttpClientModule should be imported only once in the root module. It provides HttpClient, which uses Observables for all HTTP operations and includes features like interceptors, typed responses, and progress events.`
                },
                {
                    q: "How do you make a GET request with HttpClient?",
                    a: `Use <strong>HttpClient.get()</strong> to fetch data from an API. It returns an <strong>Observable</strong> that you subscribe to or consume with the async pipe. Add a generic type parameter like <strong>get&lt;Product[]&gt;</strong> for compile-time type safety. The request is not sent until something subscribes to the Observable.
<pre><code>@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = '/api/products';

  constructor(private http: HttpClient) {}

  // Typed GET request
  getProducts(): Observable&lt;Product[]&gt; {
    return this.http.get&lt;Product[]&gt;(this.apiUrl);
  }

  getProductById(id: number): Observable&lt;Product&gt; {
    return this.http.get&lt;Product&gt;(this.apiUrl + '/' + id);
  }
}

// Component usage
export class ProductListComponent {
  products$ = this.productService.getProducts();
  constructor(private productService: ProductService) {}
}</code></pre>
HttpClient automatically parses JSON responses. Use generic type parameters like <strong>get&lt;Product[]&gt;</strong> for type safety. The request is not sent until something subscribes to the Observable.`
                },
                {
                    q: "How do you make a POST request with HttpClient?",
                    a: `Use <strong>HttpClient.post()</strong> to send data to a server. The second argument is the <strong>request body</strong>, which is automatically serialized to JSON. HttpClient also provides <strong>put()</strong>, <strong>patch()</strong>, and <strong>delete()</strong> for other HTTP methods. Each method returns an Observable that must be subscribed to for the request to execute.
<pre><code>@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable&lt;User&gt; {
    return this.http.post&lt;User&gt;('/api/users', user);
  }

  updateUser(id: number, data: Partial&lt;User&gt;): Observable&lt;User&gt; {
    return this.http.put&lt;User&gt;('/api/users/' + id, data);
  }

  deleteUser(id: number): Observable&lt;void&gt; {
    return this.http.delete&lt;void&gt;('/api/users/' + id);
  }
}

// Component
this.userService.createUser({ name: 'John', email: 'john@test.com' })
  .subscribe({
    next: (created) =&gt; console.log('Created:', created),
    error: (err) =&gt; console.error('Error:', err)
  });</code></pre>
HttpClient automatically serializes objects to JSON and sets the Content-Type header. Other methods: <strong>put()</strong>, <strong>patch()</strong>, <strong>delete()</strong>.`
                },
                {
                    q: "How do you handle HTTP errors in Angular?",
                    a: `Handle HTTP errors using the RxJS <strong>catchError</strong> operator or the error callback in subscribe. HttpClient returns an <strong>HttpErrorResponse</strong> for failed requests with details like status code and message. A <strong>status of 0</strong> typically indicates a network error or CORS issue. Create a centralized error handler method to keep your error handling consistent across services.
<pre><code>@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable&lt;Data[]&gt; {
    return this.http.get&lt;Data[]&gt;('/api/data').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable&lt;never&gt; {
    let message = 'An error occurred';
    if (error.status === 0) {
      message = 'Network error. Check your connection.';
    } else if (error.status === 404) {
      message = 'Resource not found.';
    } else if (error.status === 500) {
      message = 'Server error. Try again later.';
    }
    console.error(message, error.message);
    return throwError(() =&gt; new Error(message));
  }
}</code></pre>
<strong>HttpErrorResponse</strong> contains <strong>status</strong>, <strong>statusText</strong>, <strong>error</strong> (body), and <strong>message</strong>. A status of 0 typically indicates a network error or CORS issue.`
                },
                {
                    q: "How do you use HttpHeaders with HttpClient?",
                    a: `<strong>HttpHeaders</strong> is an immutable class for setting HTTP request headers. Pass headers via the options parameter of HTTP methods. Each <strong>set()</strong>, <strong>append()</strong>, or <strong>delete()</strong> call returns a new instance because headers are immutable. For auth headers, prefer using an HTTP <strong>interceptor</strong> to avoid repeating header logic.
<pre><code>import { HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(token: string): Observable&lt;any&gt; {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get('/api/data', { headers });
  }

  // Headers are immutable; set() returns a new instance
  postData(data: any): Observable&lt;any&gt; {
    let headers = new HttpHeaders();
    headers = headers.set('X-Custom-Header', 'value');
    headers = headers.append('Accept', 'application/json');

    return this.http.post('/api/data', data, { headers });
  }
}</code></pre>
HttpHeaders is immutable: <strong>set()</strong>, <strong>append()</strong>, and <strong>delete()</strong> return new instances. For auth headers, prefer using an HTTP interceptor to avoid repetition.`
                },
                {
                    q: "How do you use HttpParams with HttpClient?",
                    a: `<strong>HttpParams</strong> builds URL query parameters in an immutable, type-safe way. Pass them through the <strong>params</strong> property in the options object. Like HttpHeaders, each <strong>set()</strong> or <strong>append()</strong> call returns a new instance. In Angular 15+, you can also pass a plain object directly as params.
<pre><code>import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  search(term: string, page: number, limit: number): Observable&lt;Results&gt; {
    const params = new HttpParams()
      .set('q', term)
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get&lt;Results&gt;('/api/search', { params });
    // URL: /api/search?q=angular&amp;page=1&amp;limit=10
  }

  // Alternative: pass object directly (Angular 15+)
  searchSimple(term: string): Observable&lt;Results&gt; {
    return this.http.get&lt;Results&gt;('/api/search', {
      params: { q: term, page: '1' }
    });
  }
}</code></pre>
Like HttpHeaders, HttpParams is immutable. Each <strong>set()</strong> or <strong>append()</strong> call returns a new instance. Use <strong>append()</strong> to add multiple values for the same key.`
                },
                {
                    q: "How do typed responses work with HttpClient?",
                    a: `<strong>HttpClient</strong> supports generic type parameters to specify the expected response type, providing <strong>compile-time type safety</strong>. By default, it returns only the response body parsed as the specified type. Use <strong>observe: 'response'</strong> to get the full HttpResponse including headers and status code. Use <strong>observe: 'events'</strong> for tracking upload or download progress.
<pre><code>interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  // Typed response: Observable&lt;User[]&gt;
  getUsers(): Observable&lt;User[]&gt; {
    return this.http.get&lt;User[]&gt;('/api/users');
  }

  // Full response with headers and status
  getUsersFull(): Observable&lt;HttpResponse&lt;User[]&gt;&gt; {
    return this.http.get&lt;User[]&gt;('/api/users', { observe: 'response' });
  }

  // Access headers from full response
  checkHeaders() {
    this.getUsersFull().subscribe(resp =&gt; {
      console.log('Status:', resp.status);
      console.log('Total:', resp.headers.get('X-Total-Count'));
      console.log('Body:', resp.body);
    });
  }
}</code></pre>
Use <strong>observe: 'response'</strong> to get the full HttpResponse with headers, status, and body. Use <strong>observe: 'events'</strong> for progress tracking.`
                },
                {
                    q: "How do you implement retry logic for HTTP requests?",
                    a: `Use the RxJS <strong>retry</strong> operator to automatically retry failed HTTP requests before propagating the error. You can specify the number of retry attempts and an optional <strong>delay</strong> between retries. Only retry on <strong>transient errors</strong> (5xx, network issues), not on client errors (4xx) which will fail every time. Combine retry with <strong>catchError</strong> to handle the final failure gracefully.
<pre><code>import { retry, timer, retryWhen, mergeMap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  // Simple retry (3 attempts)
  getData(): Observable&lt;Data&gt; {
    return this.http.get&lt;Data&gt;('/api/data').pipe(
      retry(3),
      catchError(err =&gt; throwError(() =&gt; err))
    );
  }

  // Retry with delay
  getDataWithDelay(): Observable&lt;Data&gt; {
    return this.http.get&lt;Data&gt;('/api/data').pipe(
      retry({ count: 3, delay: 1000 }),
      catchError(err =&gt; throwError(() =&gt; err))
    );
  }
}</code></pre>
The <strong>retry</strong> operator resubscribes to the source Observable on error. Use <strong>delay</strong> to add wait time between retries. Only retry on transient errors (5xx, network issues) — not on client errors (4xx).`
                },
                {
                    q: "How do you track HTTP request progress events?",
                    a: `Use <strong>reportProgress: true</strong> and <strong>observe: 'events'</strong> to receive upload or download progress events. HttpClient emits <strong>HttpEvent</strong> objects that include event types like UploadProgress and DownloadProgress. The <strong>loaded</strong> and <strong>total</strong> properties on progress events let you calculate the percentage. This is commonly used for file upload progress bars.
<pre><code>import { HttpEventType } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable&lt;number&gt; {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('/api/upload', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event =&gt; {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            return Math.round(100 * (event.loaded / (event.total || 1)));
          case HttpEventType.Response:
            return 100;
          default:
            return 0;
        }
      })
    );
  }
}</code></pre>
Event types include: <strong>Sent</strong>, <strong>UploadProgress</strong>, <strong>ResponseHeader</strong>, <strong>DownloadProgress</strong>, and <strong>Response</strong>. This is commonly used for file upload progress bars.`
                },
                {
                    q: "What are HTTP interceptors and how do you create one?",
                    a: `<strong>HTTP interceptors</strong> inspect and transform HTTP requests and responses globally. They are used for adding <strong>auth tokens</strong>, logging, caching, and centralized error handling. You implement the <strong>HttpInterceptor</strong> interface with an intercept method that receives the request and next handler. The request is <strong>immutable</strong>, so you use clone() to create a modified copy.
<pre><code>@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler): Observable&lt;HttpEvent&lt;any&gt;&gt; {
    const token = this.authService.getToken();
    if (token) {
      const cloned = req.clone({
        setHeaders: { Authorization: 'Bearer ' + token }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}

// Register in module
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})</code></pre>
Interceptors are registered with the <strong>HTTP_INTERCEPTORS</strong> multi-provider token. Requests pass through interceptors in registration order. The request is immutable; use <strong>clone()</strong> to modify it.`
                },
                {
                    q: "What is the difference between HttpClient.get() with observe: 'body' vs 'response'?",
                    a: `By default, HttpClient returns only the <strong>response body</strong> (observe: 'body'). When you set <strong>observe: 'response'</strong>, it returns the full <strong>HttpResponse</strong> object including status code, headers, and body. This is useful when you need to read response headers like pagination info or rate limits. You can also use <strong>observe: 'events'</strong> to track upload or download progress.
<pre><code>// Default: returns body only
this.http.get&lt;User[]&gt;('/api/users')
  .subscribe(users =&gt; console.log(users));

// Full response: includes status, headers, body
this.http.get&lt;User[]&gt;('/api/users', { observe: 'response' })
  .subscribe(resp =&gt; {
    console.log(resp.status);
    console.log(resp.headers.get('X-Total-Count'));
    console.log(resp.body);
  });</code></pre>
Use <strong>observe: 'body'</strong> for simple data fetching. Use <strong>'response'</strong> when you need headers or status codes for pagination, caching, or error differentiation.`
                },
                {
                    q: "What is the difference between map and switchMap when working with HTTP?",
                    a: `<strong>map</strong> transforms the emitted value without creating a new Observable — it is a synchronous transformation. <strong>switchMap</strong> maps each value to a new inner Observable, subscribes to it, and <strong>cancels any previous</strong> inner Observable. Use map when you want to transform response data like extracting a property. Use switchMap when you need to chain HTTP requests or make new requests based on changing values.
<pre><code>// map: transform the response data
this.http.get&lt;ApiResponse&gt;('/api/data').pipe(
  map(response =&gt; response.results) // transform value
);

// switchMap: chain requests, cancel previous
this.searchInput.valueChanges.pipe(
  debounceTime(300),
  switchMap(term =&gt; this.http.get('/api/search?q=' + term))
  // new search cancels the previous HTTP request
);</code></pre>
<strong>switchMap</strong> is ideal for search-as-you-type because it cancels outdated requests. Use <strong>concatMap</strong> if you need to preserve all requests in order, or <strong>mergeMap</strong> for parallel execution.`
                },
                {
                    q: "How do you cancel an HTTP request in Angular?",
                    a: `You cancel an HTTP request by <strong>unsubscribing</strong> from the Observable returned by HttpClient. When you unsubscribe, Angular sends an abort signal to the <strong>XMLHttpRequest</strong>, stopping the request. You can use <strong>takeUntil</strong> with a destroy subject, <strong>switchMap</strong> which auto-cancels previous requests, or the <strong>async pipe</strong> which unsubscribes automatically. This prevents unnecessary processing and saves bandwidth.
<pre><code>// Method 1: unsubscribe directly
const sub = this.http.get('/api/data').subscribe(data =&gt; {});
sub.unsubscribe(); // cancels the HTTP request

// Method 2: takeUntil pattern
private destroy$ = new Subject&lt;void&gt;();
this.http.get('/api/data').pipe(
  takeUntil(this.destroy$)
).subscribe();
ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

// Method 3: switchMap auto-cancels previous
searchTerm$.pipe(
  switchMap(term =&gt; this.http.get('/api/search?q=' + term))
);</code></pre>
The <strong>takeUntil</strong> pattern is the most common approach for cleaning up subscriptions in components. The <strong>async pipe</strong> handles unsubscription automatically in templates.`
                },
                {
                    q: "What is the provideHttpClient function in Angular 15+?",
                    a: `<strong>provideHttpClient</strong> is the standalone alternative to importing HttpClientModule. It is used in the application config to set up <strong>HttpClient</strong> with <strong>feature functions</strong>. These include <strong>withInterceptors</strong> for functional interceptors, <strong>withFetch</strong> to use the Fetch API, and <strong>withJsonpSupport</strong> for JSONP. This is the recommended setup for standalone applications.
<pre><code>// In app.config.ts for standalone apps
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor]),
      withFetch() // use Fetch API
    )
  ]
};

// Bootstrap
bootstrapApplication(AppComponent, appConfig);</code></pre>
Use <strong>withInterceptorsFromDi()</strong> if you need to support class-based interceptors alongside functional ones. The <strong>withFetch()</strong> option switches from XMLHttpRequest to the modern Fetch API.`
                },
                {
                    q: "How do you make parallel HTTP requests in Angular?",
                    a: `Use RxJS <strong>forkJoin</strong> to make multiple HTTP requests simultaneously and wait for all of them to complete. It emits an array or object of results when <strong>all Observables complete</strong>. This is more efficient than sequential requests because all run in parallel. If any request fails, the entire forkJoin errors out, so add <strong>catchError</strong> on individual requests if needed.
<pre><code>import { forkJoin } from 'rxjs';

// Make parallel requests
forkJoin({
  users: this.http.get&lt;User[]&gt;('/api/users'),
  posts: this.http.get&lt;Post[]&gt;('/api/posts'),
  settings: this.http.get&lt;Settings&gt;('/api/settings')
}).subscribe(({ users, posts, settings }) =&gt; {
  this.users = users;
  this.posts = posts;
  this.settings = settings;
});</code></pre>
<strong>forkJoin</strong> waits for all requests to complete before emitting. Use <strong>combineLatest</strong> if you want to react to partial results as they arrive.`
                }
            ]
        },
        {
            id: "observables-rxjs",
            title: "Observables & RxJS",
            icon: "bi-arrow-repeat",
            questions: [
                {
                    q: "What is an Observable in Angular?",
                    a: `An <strong>Observable</strong> is a lazy collection of values that can be delivered synchronously or asynchronously over time. Angular uses Observables extensively for <strong>HTTP requests</strong>, <strong>forms</strong>, <strong>routing</strong>, and <strong>event handling</strong>. They can emit multiple values over time, unlike Promises which resolve once. The convention is to suffix Observable variables with <strong>$</strong> like <strong>users$</strong>.
<pre><code>import { Observable } from 'rxjs';

// Create an Observable
const numbers$ = new Observable&lt;number&gt;(subscriber =&gt; {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

// Subscribe to receive values
numbers$.subscribe({
  next: value =&gt; console.log(value),     // 1, 2, 3
  error: err =&gt; console.error(err),
  complete: () =&gt; console.log('Done')
});</code></pre>
Observables are <strong>lazy</strong>: no work is performed until subscribe() is called. They can emit multiple values over time, unlike Promises which resolve once. The convention is to suffix Observable variables with <strong>$</strong>.`
                },
                {
                    q: "What is the difference between Observable and Promise?",
                    a: `<strong>Observables</strong> and <strong>Promises</strong> both handle asynchronous operations, but they differ in key ways. Promises are <strong>eager</strong> and execute immediately, while Observables are <strong>lazy</strong> and only execute when subscribed. Promises resolve with a single value, while Observables can emit <strong>multiple values</strong> over time. Observables support <strong>cancellation</strong> via unsubscribe(), which Promises do not.
<pre><code>// Promise: eager, single value, not cancellable
const promise = fetch('/api/data')
  .then(res =&gt; res.json())
  .then(data =&gt; console.log(data));

// Observable: lazy, multiple values, cancellable
const obs$ = this.http.get('/api/data');
const sub = obs$.subscribe(data =&gt; console.log(data));

// Cancel the request
sub.unsubscribe();</code></pre>
<table>
<tr><th>Feature</th><th>Promise</th><th>Observable</th></tr>
<tr><td>Execution</td><td>Eager</td><td>Lazy</td></tr>
<tr><td>Values</td><td>Single</td><td>Multiple over time</td></tr>
<tr><td>Cancellation</td><td>Not built-in</td><td>unsubscribe()</td></tr>
<tr><td>Operators</td><td>Limited (.then, .catch)</td><td>Rich (map, filter, merge...)</td></tr>
</table>
Use Observables when you need cancellation, multiple emissions, or RxJS operators for data transformation.`
                },
                {
                    q: "What are the different types of Subjects in RxJS?",
                    a: `A <strong>Subject</strong> is both an Observable and an Observer. RxJS provides four types of Subjects with different behaviors.
<pre><code>import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// Subject: no initial value, late subscribers miss past emissions
const subject = new Subject&lt;string&gt;();

// BehaviorSubject: requires initial value, emits latest to new subscribers
const behavior = new BehaviorSubject&lt;string&gt;('initial');
console.log(behavior.getValue()); // 'initial'

// ReplaySubject: replays N last values to new subscribers
const replay = new ReplaySubject&lt;string&gt;(3); // buffer last 3

// AsyncSubject: emits only the last value, and only on complete
const async$ = new AsyncSubject&lt;string&gt;();
async$.next('a');
async$.next('b');
async$.complete(); // subscriber gets 'b'</code></pre>
<strong>BehaviorSubject</strong> is most common for state management (always has a current value). <strong>ReplaySubject</strong> is useful for caching. Use plain <strong>Subject</strong> when you only care about future emissions.`
                },
                {
                    q: "How does the map operator work?",
                    a: `The <strong>map</strong> operator transforms each value emitted by an Observable by applying a function to it, similar to <strong>Array.prototype.map()</strong>. It is a <strong>transformation operator</strong> that changes emitted values without affecting the number of emissions. You can chain multiple map operations together to apply successive transformations. It is one of the most frequently used RxJS operators.
<pre><code>import { map } from 'rxjs/operators';

// Transform HTTP response
this.http.get&lt;ApiResponse&gt;('/api/users').pipe(
  map(response =&gt; response.data),
  map(users =&gt; users.filter(u =&gt; u.active)),
  map(users =&gt; users.map(u =&gt; u.name))
).subscribe(names =&gt; console.log(names));

// Transform values
import { of } from 'rxjs';
of(1, 2, 3, 4, 5).pipe(
  map(n =&gt; n * 10)
).subscribe(v =&gt; console.log(v));
// Output: 10, 20, 30, 40, 50</code></pre>
map is a <strong>transformation operator</strong> that applies a projection function to each emitted value. It does not change the number of emissions, only the values. It is one of the most frequently used RxJS operators.`
                },
                {
                    q: "What is switchMap and when should you use it?",
                    a: `<strong>switchMap</strong> maps each value to an inner Observable and <strong>switches to the latest one</strong>, cancelling any previous inner Observable. It is ideal for <strong>search-as-you-type</strong> and <strong>route parameter changes</strong> because it prevents race conditions. When a new value arrives, the previous HTTP request is automatically cancelled. This ensures you always get results for the most recent input.
<pre><code>import { switchMap } from 'rxjs/operators';

// Search with auto-cancel of previous requests
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term =&gt; this.searchService.search(term))
).subscribe(results =&gt; this.results = results);

// Route param changes: auto-cancel previous HTTP call
this.route.paramMap.pipe(
  switchMap(params =&gt; {
    const id = Number(params.get('id'));
    return this.userService.getUser(id);
  })
).subscribe(user =&gt; this.user = user);</code></pre>
switchMap is ideal for <strong>search-as-you-type</strong> and <strong>route parameter changes</strong> because it automatically cancels the previous inner Observable when a new value arrives, preventing race conditions and stale data.`
                },
                {
                    q: "What is mergeMap and how does it differ from switchMap?",
                    a: `<strong>mergeMap</strong> maps each value to an inner Observable and merges all inner Observables <strong>concurrently</strong>. Unlike switchMap, it does <strong>not cancel</strong> previous inner Observables. You can set a concurrency limit as the second argument. Use mergeMap when all operations should complete independently, like parallel file uploads.
<pre><code>import { mergeMap } from 'rxjs/operators';

// Process all items concurrently
this.items$.pipe(
  mergeMap(item =&gt; this.http.post('/api/process', item))
).subscribe(result =&gt; console.log('Processed:', result));

// With concurrency limit
this.items$.pipe(
  mergeMap(item =&gt; this.http.post('/api/upload', item), 3) // max 3 concurrent
).subscribe();

// Comparison:
// switchMap: cancel previous, use for search/navigation
// mergeMap:  run all concurrently, use for parallel requests
// concatMap: run one at a time in order, use for sequential operations
// exhaustMap: ignore new until current completes, use for login/submit</code></pre>
Use mergeMap when all inner Observables should complete independently. Use switchMap when only the latest matters. Use concatMap for sequential processing. Use exhaustMap to ignore new values while processing.`
                },
                {
                    q: "How does combineLatest work?",
                    a: `<strong>combineLatest</strong> takes multiple Observables and emits an array of the <strong>latest values</strong> from each whenever any of them emits. It waits until all source Observables have emitted at least once before the first emission. It is ideal for combining multiple reactive data sources like filters, sort options, and data streams. After the initial emission, it re-emits whenever any source changes.
<pre><code>import { combineLatest } from 'rxjs';

// Combine multiple data sources
const user$ = this.userService.getUser(id);
const orders$ = this.orderService.getOrders(id);
const prefs$ = this.prefService.getPreferences(id);

combineLatest([user$, orders$, prefs$]).subscribe(
  ([user, orders, prefs]) =&gt; {
    this.user = user;
    this.orders = orders;
    this.preferences = prefs;
  }
);

// Filter + sort combined
combineLatest([this.items$, this.filter$, this.sort$]).pipe(
  map(([items, filter, sort]) =&gt; {
    let result = items.filter(i =&gt; i.category === filter);
    return result.sort((a, b) =&gt; a[sort] - b[sort]);
  })
).subscribe(filtered =&gt; this.filtered = filtered);</code></pre>
combineLatest waits until <strong>all</strong> source Observables have emitted at least once, then emits on every subsequent change. It is ideal for combining multiple reactive data sources.`
                },
                {
                    q: "How does takeUntil work for unsubscribing?",
                    a: `<strong>takeUntil</strong> emits values from the source Observable until a <strong>notifier Observable</strong> emits a value, then it completes. It is the recommended pattern for cleaning up subscriptions in Angular components. Create a <strong>Subject</strong> as the notifier, pipe takeUntil on every subscription, and trigger the Subject in <strong>ngOnDestroy</strong>. This cleanly unsubscribes from all Observables at once.
<pre><code>import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class UserListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject&lt;void&gt;();

  ngOnInit() {
    this.userService.getUsers().pipe(
      takeUntil(this.destroy$)
    ).subscribe(users =&gt; this.users = users);

    this.route.paramMap.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params =&gt; this.loadUser(params.get('id')!));

    interval(5000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() =&gt; this.refresh());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}</code></pre>
Create a Subject, pipe <strong>takeUntil(destroy$)</strong> on every subscription, and call <strong>next()</strong> and <strong>complete()</strong> in ngOnDestroy. This cleanly unsubscribes from all Observables at once.`
                },
                {
                    q: "How does debounceTime work?",
                    a: `<strong>debounceTime</strong> delays emissions from the source Observable by a specified time period. It only emits a value after the specified milliseconds have passed <strong>without another emission</strong>. This is essential for user input scenarios like search fields to reduce unnecessary API calls. Combine it with <strong>distinctUntilChanged</strong> to also skip duplicate values.
<pre><code>import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Search input with debounce
@Component({
  template: '&lt;input (input)="onSearch($event)" /&gt;'
})
export class SearchComponent implements OnInit {
  private searchSubject = new Subject&lt;string&gt;();

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300),          // wait 300ms after last keystroke
      distinctUntilChanged(),      // skip if same value as previous
      switchMap(term =&gt; this.searchService.search(term))
    ).subscribe(results =&gt; this.results = results);
  }

  onSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.searchSubject.next(term);
  }
}</code></pre>
debounceTime is essential for user input scenarios. The 300ms delay reduces API calls to only trigger after the user stops typing. Combine with <strong>distinctUntilChanged</strong> to avoid redundant calls.`
                },
                {
                    q: "How does catchError work for error handling in RxJS?",
                    a: `<strong>catchError</strong> intercepts errors from an Observable and lets you handle them by returning a <strong>replacement Observable</strong> or re-throwing. You can return <strong>of()</strong> for fallback values, <strong>EMPTY</strong> to complete silently, or <strong>throwError()</strong> to propagate a transformed error. Place catchError after retry operators to handle the final failure. It must always return an Observable.
<pre><code>import { catchError, of, EMPTY } from 'rxjs';

// Return a default value on error
this.http.get&lt;User[]&gt;('/api/users').pipe(
  catchError(error =&gt; {
    console.error('Failed to load users:', error);
    return of([]); // return empty array as fallback
  })
).subscribe(users =&gt; this.users = users);

// Rethrow with custom error
this.http.get('/api/data').pipe(
  catchError(error =&gt; {
    if (error.status === 401) {
      this.router.navigate(['/login']);
      return EMPTY; // complete without emitting
    }
    return throwError(() =&gt; new Error('Server error'));
  })
).subscribe();

// Retry then catch
this.http.get('/api/data').pipe(
  retry(2),
  catchError(err =&gt; of({ error: true, message: err.message }))
).subscribe();</code></pre>
catchError must return an Observable. Use <strong>of()</strong> for default values, <strong>EMPTY</strong> to complete silently, or <strong>throwError()</strong> to propagate a transformed error. Place catchError after retry to catch only the final failure.`
                },
                {
                    q: "What is the difference between switchMap, mergeMap, concatMap, and exhaustMap?",
                    a: `These are all <strong>flattening operators</strong> that map values to inner Observables but handle concurrency differently. <strong>switchMap</strong> cancels the previous inner Observable when a new value arrives. <strong>mergeMap</strong> runs all inner Observables concurrently. <strong>concatMap</strong> queues them and runs one at a time in order. <strong>exhaustMap</strong> ignores new values while the current inner Observable is running.
<pre><code>// switchMap: cancel previous (search)
search$.pipe(switchMap(term =&gt; api.search(term)));

// mergeMap: run all concurrently (parallel uploads)
files$.pipe(mergeMap(file =&gt; api.upload(file)));

// concatMap: run one after another (ordered saves)
saves$.pipe(concatMap(data =&gt; api.save(data)));

// exhaustMap: ignore new until done (login button)
click$.pipe(exhaustMap(() =&gt; api.login(credentials)));</code></pre>
Use <strong>switchMap</strong> for search/navigation, <strong>mergeMap</strong> for parallel tasks, <strong>concatMap</strong> for ordered sequential operations, and <strong>exhaustMap</strong> to prevent duplicate submissions.`
                },
                {
                    q: "What is the difference between subscribe and async pipe?",
                    a: `<strong>subscribe</strong> is used in the component class to manually subscribe and handle values. The <strong>async pipe</strong> is used directly in the template to subscribe automatically. The async pipe handles <strong>unsubscription automatically</strong> when the component is destroyed, preventing memory leaks. It also calls <strong>markForCheck()</strong> for OnPush change detection, which manual subscribe does not.
<pre><code>// Manual subscribe: must handle cleanup yourself
export class UserComponent implements OnDestroy {
  private sub!: Subscription;
  users: User[] = [];
  ngOnInit() {
    this.sub = this.userService.getUsers()
      .subscribe(users =&gt; this.users = users);
  }
  ngOnDestroy() { this.sub.unsubscribe(); }
}

// Async pipe: automatic subscribe and cleanup
// Template: &lt;li *ngFor="let user of users$ | async"&gt;{{ user.name }}&lt;/li&gt;
users$ = this.userService.getUsers();</code></pre>
Prefer the <strong>async pipe</strong> when possible for cleaner code and automatic cleanup. Use <strong>subscribe</strong> when you need to perform side effects or complex logic with the data.`
                },
                {
                    q: "What is forkJoin and when should you use it?",
                    a: `<strong>forkJoin</strong> takes an array or object of Observables and emits their last values when <strong>all of them complete</strong>. It is similar to <strong>Promise.all()</strong> — it waits for all sources to finish before emitting. Use it when you need multiple HTTP requests in parallel and want to process all results together. If any Observable errors, forkJoin immediately errors as well.
<pre><code>import { forkJoin } from 'rxjs';

// Wait for all requests to complete
forkJoin({
  user: this.http.get&lt;User&gt;('/api/user/1'),
  orders: this.http.get&lt;Order[]&gt;('/api/orders'),
  prefs: this.http.get&lt;Prefs&gt;('/api/preferences')
}).subscribe(({ user, orders, prefs }) =&gt; {
  this.user = user;
  this.orders = orders;
  this.preferences = prefs;
});</code></pre>
<strong>forkJoin</strong> only works with Observables that <strong>complete</strong>, not long-lived streams. Add <strong>catchError</strong> on individual requests if you want partial results when one fails.`
                },
                {
                    q: "What is the difference between of, from, and interval in RxJS?",
                    a: `<strong>of()</strong> creates an Observable that emits the values you pass as arguments and then completes immediately. <strong>from()</strong> converts arrays, iterables, Promises, or Observable-like objects into Observables. <strong>interval()</strong> creates an Observable that emits sequential numbers at a specified time interval. These are <strong>creation operators</strong> used to generate Observables from different data sources.
<pre><code>import { of, from, interval } from 'rxjs';

// of: emit values and complete
of(1, 2, 3).subscribe(v =&gt; console.log(v)); // 1, 2, 3, complete

// from: convert array or promise
from([10, 20, 30]).subscribe(v =&gt; console.log(v)); // 10, 20, 30
from(fetch('/api/data')).subscribe(resp =&gt; console.log(resp));

// interval: emit number every N ms
interval(1000).pipe(take(5)).subscribe(v =&gt; console.log(v));
// 0, 1, 2, 3, 4 (one per second)</code></pre>
<strong>of()</strong> is for static values, <strong>from()</strong> is for converting existing data structures, and <strong>interval()</strong> is for time-based emissions. Use <strong>take()</strong> with interval to limit emissions.`
                },
                {
                    q: "How do you handle multiple subscriptions and prevent memory leaks?",
                    a: `<strong>Memory leaks</strong> happen when subscriptions are not cleaned up after a component is destroyed. The most common pattern is using a <strong>Subject with takeUntil</strong> to cancel all subscriptions at once in ngOnDestroy. The <strong>async pipe</strong> handles cleanup automatically in templates. Angular 16+ introduced <strong>takeUntilDestroyed()</strong> which simplifies cleanup even further.
<pre><code>// takeUntil pattern
private destroy$ = new Subject&lt;void&gt;();

ngOnInit() {
  this.data$.pipe(takeUntil(this.destroy$)).subscribe();
  this.events$.pipe(takeUntil(this.destroy$)).subscribe();
}
ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

// Angular 16+: takeUntilDestroyed
constructor() {
  this.data$.pipe(takeUntilDestroyed()).subscribe();
}</code></pre>
Always unsubscribe from <strong>long-lived Observables</strong> like interval, WebSocket connections, and store selectors. HTTP requests complete automatically but should still be cleaned up if the component may be destroyed before the response arrives.`
                }
            ]
        }
    ,
        {
            id: "lifecycle-hooks", title: "Lifecycle Hooks", icon: "bi-recycle",
            questions: [
            { q: "What are lifecycle hooks in Angular?", a: `<strong>Lifecycle hooks</strong> are methods that Angular calls on directives and components as it creates, changes, and destroys them. They let you tap into key moments in a component's life. The main hooks are <strong>ngOnChanges</strong>, <strong>ngOnInit</strong>, <strong>ngDoCheck</strong>, <strong>ngAfterContentInit</strong>, <strong>ngAfterViewInit</strong>, and <strong>ngOnDestroy</strong>. Each hook is defined by implementing its corresponding interface.
<pre><code>export class MyComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data!: string;

  ngOnChanges(changes: SimpleChanges) { /* input changed */ }
  ngOnInit() { /* component initialized */ }
  ngOnDestroy() { /* cleanup before destroy */ }
}</code></pre>
Hooks are called in a specific order: <strong>ngOnChanges</strong> first, then <strong>ngOnInit</strong>, then the check and view hooks. <strong>ngOnDestroy</strong> is always called last before the component is removed.` },
            { q: "What is ngOnInit and when is it called?", a: `<strong>ngOnInit</strong> is called once after the first <strong>ngOnChanges</strong>. It is the best place for initialization logic like fetching data or setting up subscriptions. At this point, all <strong>@Input</strong> properties are available with their bound values. Use ngOnInit instead of the constructor for any logic that depends on input bindings.
<pre><code>export class UserComponent implements OnInit {
  @Input() userId!: string;
  user: User;

  ngOnInit() {
    // Safe to use @Input values here
    this.user = this.userService.getUser(this.userId);
  }
}</code></pre>
<strong>ngOnInit</strong> runs only once during the component's lifetime. For reacting to subsequent input changes, use <strong>ngOnChanges</strong> instead.` },
            { q: "What is the difference between constructor and ngOnInit?", a: `The <strong>constructor</strong> is a TypeScript feature for class instantiation where <strong>dependency injection</strong> happens. <strong>ngOnInit</strong> is an Angular lifecycle hook called after Angular sets input properties. In the constructor, <strong>@Input</strong> values are NOT available yet because bindings have not been resolved. Use the constructor only for DI and ngOnInit for all initialization logic.
<pre><code>export class ExampleComponent implements OnInit {
  @Input() name!: string;

  constructor(private service: DataService) {
    // DI only — this.name is undefined here
  }

  ngOnInit() {
    // this.name is available here
    this.service.load(this.name);
  }
}</code></pre>
The <strong>constructor</strong> runs before Angular processes any bindings. <strong>ngOnInit</strong> is the safe place to use @Input values and interact with services.` },
            { q: "What is ngOnChanges and what is SimpleChanges?", a: `<strong>ngOnChanges</strong> is called when any data-bound <strong>@Input</strong> property changes. It receives a <strong>SimpleChanges</strong> object containing the previous and current values for each changed input. It is called before <strong>ngOnInit</strong> and on every subsequent input change. Use it to react to input property changes from a parent component.
<pre><code>ngOnChanges(changes: SimpleChanges) {
  if (changes['userId']) {
    console.log('Previous:', changes['userId'].previousValue);
    console.log('Current:', changes['userId'].currentValue);
    console.log('First change:', changes['userId'].firstChange);
  }
}</code></pre>
Each entry in <strong>SimpleChanges</strong> has <strong>previousValue</strong>, <strong>currentValue</strong>, and <strong>firstChange</strong> properties. The <strong>firstChange</strong> flag is true during the initial binding.` },
            { q: "What is ngDoCheck?", a: `<strong>ngDoCheck</strong> is called during every change detection run. It lets you implement <strong>custom change detection</strong> for changes that Angular does not detect on its own. This is useful for detecting deep object mutations or comparing complex data structures. Keep the logic <strong>lightweight</strong> because this hook is called very frequently.
<pre><code>ngDoCheck() {
  if (this.currentName !== this.previousName) {
    this.previousName = this.currentName;
    this.changeLog.push('Name changed to: ' + this.currentName);
  }
}</code></pre>
<strong>ngDoCheck</strong> runs on every change detection cycle, even when no inputs have changed. Avoid expensive operations here to prevent <strong>performance issues</strong>.` },
            { q: "What is ngAfterViewInit?", a: `<strong>ngAfterViewInit</strong> is called once after Angular initializes the component's view and all <strong>child views</strong>. It is the safe place to access <strong>@ViewChild</strong> references because the DOM is fully rendered at this point. This hook runs after ngAfterContentInit. Use it for DOM manipulations like focusing an input or initializing third-party libraries.
<pre><code>@ViewChild('myInput') inputRef!: ElementRef;

ngAfterViewInit() {
  this.inputRef.nativeElement.focus();
}</code></pre>
Do not change component data in <strong>ngAfterViewInit</strong> as it can trigger ExpressionChangedAfterItHasBeenCheckedError. If needed, wrap changes in <strong>setTimeout()</strong>.` },
            { q: "What is ngAfterContentInit?", a: `<strong>ngAfterContentInit</strong> is called once after Angular projects external content into the component via <strong>&lt;ng-content&gt;</strong>. At this point, <strong>@ContentChild</strong> and <strong>@ContentChildren</strong> references are available. It runs before ngAfterViewInit. Use it to interact with projected content from a parent component.
<pre><code>@ContentChild(ChildDirective) child!: ChildDirective;

ngAfterContentInit() {
  console.log(this.child); // Now available
}</code></pre>
<strong>@ContentChild</strong> references are only safe to access from this hook onwards. This hook is called once, while <strong>ngAfterContentChecked</strong> runs on every change detection cycle.` },
            { q: "What is ngOnDestroy?", a: `<strong>ngOnDestroy</strong> is called just before Angular destroys the component or directive. Use it for <strong>cleanup</strong>: unsubscribe from observables, detach event listeners, stop timers, and release resources. Failing to clean up can cause <strong>memory leaks</strong> especially with long-lived subscriptions. Every component that subscribes should implement this hook.
<pre><code>private sub!: Subscription;

ngOnInit() {
  this.sub = this.data$.subscribe(val =&gt; this.value = val);
}

ngOnDestroy() {
  this.sub.unsubscribe(); // Prevent memory leaks
}</code></pre>
In Angular 16+, use <strong>takeUntilDestroyed()</strong> to auto-unsubscribe instead of manually implementing ngOnDestroy. Always clean up <strong>event listeners</strong> and <strong>intervals</strong> here.` },
            { q: "What is the correct order of lifecycle hooks?", a: `Angular calls <strong>lifecycle hooks</strong> in a specific order during component creation and change detection. The order is: <strong>ngOnChanges</strong>, <strong>ngOnInit</strong>, <strong>ngDoCheck</strong>, <strong>ngAfterContentInit</strong>, <strong>ngAfterContentChecked</strong>, <strong>ngAfterViewInit</strong>, <strong>ngAfterViewChecked</strong>. Steps 3-7 repeat on every change detection cycle, while ngOnInit runs only once.
<pre><code>// Order during creation:
// 1. ngOnChanges (if @Input exists)
// 2. ngOnInit
// 3. ngDoCheck
// 4. ngAfterContentInit
// 5. ngAfterContentChecked
// 6. ngAfterViewInit
// 7. ngAfterViewChecked
// On destroy: ngOnDestroy</code></pre>
The <strong>init hooks</strong> (ngOnInit, ngAfterContentInit, ngAfterViewInit) run only once. The <strong>check hooks</strong> run on every change detection cycle. <strong>ngOnDestroy</strong> is called last.` },
            { q: "How do you use takeUntilDestroyed with lifecycle?", a: `Angular 16+ provides <strong>takeUntilDestroyed</strong> to auto-unsubscribe when a component is destroyed. It replaces the manual <strong>takeUntil + Subject</strong> pattern with a single operator. It must be called in the <strong>constructor</strong> or injection context. This greatly simplifies cleanup code in components with multiple subscriptions.
<pre><code>import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export class MyComponent {
  constructor() {
    this.data$.pipe(
      takeUntilDestroyed() // auto-unsubscribes on destroy
    ).subscribe(val =&gt; this.value = val);
  }
}</code></pre>
<strong>takeUntilDestroyed()</strong> uses Angular's DestroyRef internally. You can also inject <strong>DestroyRef</strong> directly for more control over cleanup timing.` },
                {
                    q: "What is ngAfterViewChecked and when is it called?",
                    a: `<strong>ngAfterViewChecked</strong> is called after Angular checks the component's view and child views for changes. It runs after <strong>every change detection cycle</strong>, not just once, so keep logic lightweight. It is useful for tasks that depend on the view being fully updated, like measuring <strong>element sizes</strong> after re-rendering. Be careful not to change component state here as it can cause infinite change detection loops.
<pre><code>ngAfterViewChecked() {
  // Runs after every change detection in this view
  const height = this.elementRef.nativeElement.offsetHeight;
  console.log('View checked, height:', height);
}</code></pre>
This hook pairs with <strong>ngAfterViewInit</strong> — the init runs once, checked runs repeatedly. Avoid modifying bound properties here to prevent <strong>ExpressionChangedAfterItHasBeenCheckedError</strong>.`
                },
                {
                    q: "What is ngAfterContentChecked and when is it called?",
                    a: `<strong>ngAfterContentChecked</strong> is called after Angular checks the content projected into the component through <strong>&lt;ng-content&gt;</strong>. It runs after every change detection cycle, before <strong>ngAfterViewChecked</strong>. You can safely use <strong>@ContentChild</strong> references here since content is initialized first. Keep logic minimal due to frequent execution.
<pre><code>@ContentChild('projectedItem') item!: ElementRef;

ngAfterContentChecked() {
  if (this.item) {
    console.log('Projected content checked');
  }
}</code></pre>
This hook tells you when <strong>projected content</strong> has been re-checked. It pairs with <strong>ngAfterContentInit</strong> which runs only once during initialization.`
                },
                {
                    q: "Can you use lifecycle hooks in directives?",
                    a: `Yes, all <strong>lifecycle hooks</strong> work in directives just like in components. Directives support <strong>ngOnInit</strong>, <strong>ngOnChanges</strong>, <strong>ngDoCheck</strong>, <strong>ngOnDestroy</strong>, and the content hooks. However, directives do not have templates, so <strong>ngAfterViewInit</strong> and ngAfterViewChecked are not applicable. The most commonly used hooks in directives are ngOnInit for setup and ngOnDestroy for cleanup.
<pre><code>@Directive({ selector: '[appTracker]' })
export class TrackerDirective implements OnInit, OnDestroy {
  ngOnInit() { console.log('Directive initialized'); }
  ngOnDestroy() { console.log('Directive destroyed'); }
}</code></pre>
Directives are simpler than components because they have no view. Use <strong>ngOnChanges</strong> to react to input changes and <strong>ngOnDestroy</strong> to remove event listeners.`
                },
                {
                    q: "What is the difference between ngOnInit and ngAfterViewInit?",
                    a: `<strong>ngOnInit</strong> runs after Angular sets input properties and initializes the component, but the template is not fully rendered yet. <strong>ngAfterViewInit</strong> runs after the component's view and all child views have been fully initialized. Use ngOnInit for <strong>data fetching</strong> and property setup. Use ngAfterViewInit when you need to access DOM elements or child components via <strong>@ViewChild</strong>.
<pre><code>@ViewChild('myInput') inputRef!: ElementRef;

ngOnInit() {
  // inputRef is NOT available here
  this.loadData();
}

ngAfterViewInit() {
  // inputRef IS available here
  this.inputRef.nativeElement.focus();
}</code></pre>
<strong>@ViewChild</strong> references are only guaranteed to be available in ngAfterViewInit and later hooks. Accessing them in <strong>ngOnInit</strong> will result in undefined.`
                },
                {
                    q: "Why should you avoid changing state in ngAfterViewInit?",
                    a: `Changing component state in <strong>ngAfterViewInit</strong> can cause an <strong>ExpressionChangedAfterItHasBeenCheckedError</strong> in development mode. This happens because Angular has already finished checking the view, and changing state forces another check that finds a different value. The solution is to wrap the change in <strong>setTimeout()</strong> or use <strong>ChangeDetectorRef.detectChanges()</strong>. This error is a safeguard that helps you avoid data flow issues.
<pre><code>// This causes ExpressionChangedAfterItHasBeenCheckedError
ngAfterViewInit() {
  this.title = 'Updated'; // ERROR in dev mode
}

// Fix: use setTimeout
ngAfterViewInit() {
  setTimeout(() => this.title = 'Updated');
}</code></pre>
The error only appears in <strong>development mode</strong> as a safety check. In production, Angular skips the second verification pass for performance reasons.`
                }
            ]
        },
        {
            id: "modules", title: "Modules", icon: "bi-grid-3x3-gap",
            questions: [
            { q: "What is an NgModule?", a: `An <strong>NgModule</strong> is a class decorated with <strong>@NgModule()</strong> that organizes related code into cohesive blocks. It contains metadata about <strong>declarations</strong> (components, directives, pipes), <strong>imports</strong> (other modules), <strong>exports</strong>, and <strong>providers</strong> (services). The root module is <strong>AppModule</strong> which bootstraps the application. Feature modules group related functionality together.
<pre><code>@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }</code></pre>
Every Angular application has at least one <strong>root NgModule</strong>. With Angular 14+ standalone components, NgModules are optional but still widely used.` },
            { q: "What are declarations, imports, and exports in NgModule?", a: `<strong>Declarations</strong> register components, directives, and pipes that belong to this module. <strong>Imports</strong> bring in other modules whose exported classes are needed in this module's templates. <strong>Exports</strong> make declarations and imported modules available to other modules that import this one. <strong>Providers</strong> register services available to the module's injector.
<pre><code>@NgModule({
  declarations: [MyComponent, MyDirective, MyPipe],
  imports: [CommonModule, FormsModule],
  exports: [MyComponent, MyPipe],
  providers: [DataService]
})
export class FeatureModule { }</code></pre>
A component can only appear in <strong>one module's declarations</strong>. To share it across modules, export it from a shared module and import that module elsewhere.` },
            { q: "What is a feature module?", a: `A <strong>feature module</strong> encapsulates a set of related functionality like a product catalog or admin panel. It helps organize code into logical blocks and enables <strong>lazy loading</strong>. Feature modules use <strong>RouterModule.forChild()</strong> for their own routes. They import <strong>CommonModule</strong> instead of BrowserModule.
<pre><code>@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ProductListComponent]
})
export class ProductsModule { }</code></pre>
Feature modules keep the AppModule lean and make the codebase easier to maintain. They can be <strong>eagerly</strong> or <strong>lazily</strong> loaded.` },
            { q: "What is a shared module?", a: `A <strong>shared module</strong> contains common components, directives, and pipes used across multiple feature modules. It avoids duplicating declarations and keeps code <strong>DRY</strong>. You export everything that other modules need from this module. It is common to re-export <strong>CommonModule</strong> so importing modules do not need to import it separately.
<pre><code>@NgModule({
  declarations: [SpinnerComponent, HighlightDirective, TruncatePipe],
  imports: [CommonModule],
  exports: [SpinnerComponent, HighlightDirective, TruncatePipe, CommonModule]
})
export class SharedModule { }</code></pre>
Do not put <strong>services</strong> in a shared module's providers, use <strong>providedIn: 'root'</strong> instead. Shared module providers create separate instances in lazy-loaded modules.` },
            { q: "What is lazy loading of modules?", a: `<strong>Lazy loading</strong> loads feature modules on demand when the user navigates to their routes. This reduces the <strong>initial bundle size</strong> and improves application startup time. Angular creates a separate JavaScript chunk for each lazy-loaded module during the build. Use the <strong>loadChildren</strong> property with a dynamic import in the route configuration.
<pre><code>const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =&gt; import('./products/products.module')
      .then(m =&gt; m.ProductsModule)
  }
];</code></pre>
Lazy-loaded modules get their own <strong>child injector</strong>, so services provided in them are scoped to that module. Use <strong>preloading strategies</strong> to load modules in the background after the initial load.` },
            { q: "What is the difference between forRoot and forChild?", a: "<p><code>forRoot()</code> registers providers for the entire app (use in AppModule). <code>forChild()</code> registers routes for feature modules without re-registering providers.</p><pre><code>// AppModule\nRouterModule.forRoot(appRoutes)\n\n// Feature module\nRouterModule.forChild(featureRoutes)</code></pre>" },
            { q: "What is the CoreModule pattern?", a: "<p>CoreModule contains singleton services and one-time setup. It should only be imported in AppModule.</p><pre><code>@NgModule({\n  providers: [AuthService, LoggerService]\n})\nexport class CoreModule {\n  constructor(@Optional() @SkipSelf() parent: CoreModule) {\n    if (parent) throw new Error('CoreModule already loaded!');\n  }\n}</code></pre>" },
            { q: "Can a component belong to multiple modules?", a: `No, a component can be declared in only <strong>one NgModule</strong>. Declaring it in multiple modules causes a compile-time error. If you need the component in multiple modules, declare it in a <strong>shared module</strong> and export it. Then import that shared module wherever you need the component.
<pre><code>// SharedModule declares and exports the component
@NgModule({
  declarations: [SharedButtonComponent],
  exports: [SharedButtonComponent]
})
export class SharedModule { }

// Feature modules import SharedModule
@NgModule({ imports: [SharedModule] })
export class FeatureAModule { }</code></pre>
With <strong>standalone components</strong> in Angular 14+, this restriction no longer applies because standalone components manage their own dependencies.` },
            { q: "What is the purpose of BrowserModule vs CommonModule?", a: `<strong>BrowserModule</strong> includes <strong>CommonModule</strong> plus browser-specific providers like DOM rendering and sanitization. Use BrowserModule only in the <strong>root AppModule</strong> because it initializes the browser platform. Use <strong>CommonModule</strong> in all feature modules for directives like <strong>ngIf</strong> and <strong>ngFor</strong>. Importing BrowserModule in a feature module causes an error.
<pre><code>// Root module: BrowserModule (only once)
@NgModule({ imports: [BrowserModule] })
export class AppModule { }

// Feature modules: CommonModule
@NgModule({ imports: [CommonModule] })
export class FeatureModule { }</code></pre>
<strong>CommonModule</strong> provides core directives and pipes without the browser platform setup. Always use it instead of BrowserModule in feature modules.` },
            { q: "What are preloading strategies?", a: `<strong>Preloading strategies</strong> load lazy modules in the background after the app starts, improving subsequent navigation speed. Angular provides <strong>PreloadAllModules</strong> which loads all lazy modules. You can also create <strong>custom strategies</strong> that selectively preload based on route data flags. This balances initial load performance with navigation responsiveness.
<pre><code>RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})

// Or use custom strategy
export class CustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: () =&gt; Observable&lt;any&gt;) {
    return route.data?.['preload'] ? load() : of(null);
  }
}</code></pre>
<strong>PreloadAllModules</strong> is good for small apps. Use a <strong>custom strategy</strong> for larger apps to preload only frequently accessed routes.` },
                {
                    q: "What happens when you import a module into multiple other modules?",
                    a: `<p>When a module is imported into multiple other modules, each importing module gets access to the exported declarations of the shared module. Services provided in the shared module get a separate instance in each lazy-loaded module, but a shared instance in eagerly loaded modules. To avoid multiple instances of services, use providedIn: 'root' instead of putting services in shared module providers. Component declarations remain shared across all importing modules properly.</p><pre><code>@NgModule({
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent] // available to all importers
  // Do NOT add services here — use providedIn: 'root' instead
})
export class SharedModule { }</code></pre>`
                },
                {
                    q: "What is the difference between declarations and imports in NgModule?",
                    a: `<strong>Declarations</strong> is where you register components, directives, and pipes that belong to this module. <strong>Imports</strong> is where you bring in other NgModules whose exported classes you need in your templates. For example, if your template uses <strong>ngIf</strong> or <strong>ngFor</strong>, you need to import CommonModule. A component can only be declared in one module, but modules can be imported into many modules.
<pre><code>@NgModule({
  declarations: [MyComponent, MyDirective, MyPipe], // own items
  imports: [CommonModule, FormsModule, SharedModule], // other modules
  exports: [MyComponent] // make available to other modules
})</code></pre>
Only <strong>@Component</strong>, <strong>@Directive</strong>, and <strong>@Pipe</strong> classes go in declarations. Modules and services should never be placed in the declarations array.`
                },
                {
                    q: "How do you prevent CoreModule from being imported more than once?",
                    a: `Add a <strong>constructor guard</strong> that checks if CoreModule has already been loaded. Inject the module itself using <strong>@Optional()</strong> and <strong>@SkipSelf()</strong> decorators. If the parent injector already has CoreModule, it means it was imported before, so throw an error. This pattern ensures <strong>singleton services</strong> are not accidentally duplicated.
<pre><code>@NgModule({
  providers: [AuthService, LoggerService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule is already loaded. Import it only in AppModule.');
    }
  }
}</code></pre>
<strong>@SkipSelf()</strong> looks for CoreModule in parent injectors only. <strong>@Optional()</strong> prevents an error if it is not found, meaning this is the first import.`
                },
                {
                    q: "What is the exports array used for in NgModule?",
                    a: `The <strong>exports</strong> array makes declarations and imported modules available to other modules that import this one. If you declare a component but do not export it, it can only be used within this module's own templates. You can also <strong>re-export modules</strong> like CommonModule so importing modules get ngIf, ngFor, etc. automatically. Exporting makes sense for shared and reusable UI components.
<pre><code>@NgModule({
  declarations: [ButtonComponent, TooltipDirective],
  imports: [CommonModule],
  exports: [
    ButtonComponent,     // export own declarations
    TooltipDirective,
    CommonModule         // re-export so importers get ngIf, ngFor etc.
  ]
})
export class SharedModule { }</code></pre>
Only <strong>exported</strong> declarations are visible to importing modules. Non-exported declarations are <strong>private</strong> to the declaring module.`
                },
                {
                    q: "Are NgModules still needed with standalone components?",
                    a: `No, <strong>NgModules are optional</strong> starting from Angular 14+. <strong>Standalone components</strong>, directives, and pipes manage their own dependencies through their imports array. New projects generated with <strong>Angular 17+</strong> use standalone by default with no NgModules. However, NgModules are still fully supported for existing applications and third-party libraries.
<pre><code>// Standalone: no NgModule needed
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: '...'
})
export class MyComponent { }

// Bootstrap without NgModule
bootstrapApplication(AppComponent, { providers: [...] });</code></pre>
You can <strong>mix standalone and NgModule-based components</strong> in the same application during gradual migration. The Angular CLI provides schematics to help with the migration process.`
                }
            ]
        },
        {
            id: "change-detection", title: "Change Detection", icon: "bi-eye",
            questions: [
            { q: "What is change detection in Angular?", a: "<p>Change detection is the mechanism Angular uses to keep the DOM in sync with component data. When data changes, Angular checks the component tree and updates the DOM accordingly.</p>" },
            { q: "What are the two change detection strategies?", a: "<p><strong>Default:</strong> Angular checks the entire component tree on every change detection cycle.</p><p><strong>OnPush:</strong> Angular only checks the component when its @Input references change, an event fires within the component, or change detection is manually triggered.</p><pre><code>@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})</code></pre>" },
            { q: "What is zone.js?", a: "<p>Zone.js is a library that patches async APIs (setTimeout, Promise, addEventListener, XHR) to notify Angular when async operations complete, triggering change detection automatically.</p>" },
            { q: "What is markForCheck?", a: "<p><code>markForCheck()</code> marks a component and its ancestors for checking in the next change detection cycle. Used with OnPush when data changes without @Input reference change.</p><pre><code>constructor(private cdr: ChangeDetectorRef) {}\n\nupdateData() {\n  this.data.push(newItem); // Mutation - OnPush won't detect\n  this.cdr.markForCheck(); // Tell Angular to check\n}</code></pre>" },
            { q: "What is detectChanges?", a: `<strong>detectChanges()</strong> immediately triggers change detection for the component and its children without waiting for the next cycle. Unlike markForCheck(), it runs the check <strong>right now</strong>. This is useful after programmatic data changes that need to be reflected in the DOM instantly. It only checks the current component subtree, not the entire application.
<pre><code>this.value = 'updated';
this.cdr.detectChanges(); // Immediately update DOM</code></pre>
Use <strong>detectChanges()</strong> sparingly and only when immediate DOM updates are required. Prefer <strong>markForCheck()</strong> in most cases to let Angular batch checks efficiently.` },
            { q: "How does OnPush improve performance?", a: "<p>OnPush skips change detection for a component subtree unless: an @Input reference changes, an event originates from the component, an Observable linked to the async pipe emits, or markForCheck/detectChanges is called. This dramatically reduces checks in large apps.</p>" },
            { q: "How does the async pipe help with OnPush?", a: "<p>The async pipe automatically subscribes, gets values, and calls <code>markForCheck()</code> when new values arrive, making it perfect for OnPush components.</p><pre><code>&lt;div *ngIf=\"user$ | async as user\"&gt;\n  {{ user.name }}\n&lt;/div&gt;</code></pre>" },
            { q: "What is detach and reattach?", a: "<p><code>detach()</code> removes a component from change detection entirely. <code>reattach()</code> adds it back. Useful for components that rarely change.</p><pre><code>this.cdr.detach(); // Stop checking\n// ... later when update needed\nthis.cdr.reattach();\nthis.cdr.detectChanges();</code></pre>" },
            { q: "What is runOutsideAngular?", a: "<p><code>NgZone.runOutsideAngular()</code> runs code outside Angular's zone so it doesn't trigger change detection. Useful for performance-heavy animations or frequent events.</p><pre><code>constructor(private ngZone: NgZone) {}\n\nngOnInit() {\n  this.ngZone.runOutsideAngular(() =&gt; {\n    window.addEventListener('mousemove', this.onMouseMove);\n  });\n}</code></pre>" },
            { q: "What triggers change detection by default?", a: `Change detection is triggered by <strong>DOM events</strong> (click, input, submit), <strong>HTTP responses</strong>, <strong>timers</strong> (setTimeout, setInterval), Promises resolving, and any async operation patched by <strong>zone.js</strong>. Essentially, any asynchronous browser operation triggers Angular's change detection. This ensures the DOM stays in sync with component data automatically. With OnPush, only specific triggers cause checks.
<pre><code>// All of these trigger change detection:
button.click();                    // DOM event
this.http.get('/api').subscribe(); // HTTP response
setTimeout(() =&gt; {}, 1000);        // Timer
Promise.resolve().then(() =&gt; {});  // Promise</code></pre>
<strong>Zone.js</strong> monkey-patches these browser APIs to intercept async operations. Each intercepted operation triggers Angular's <strong>ApplicationRef.tick()</strong> which starts the change detection cycle.` },
                {
                    q: "What is the difference between markForCheck and detectChanges?",
                    a: `<strong>markForCheck()</strong> marks the component and all its ancestors as needing to be checked in the <strong>next change detection cycle</strong>. It does not run detection immediately. <strong>detectChanges()</strong> immediately runs change detection for the component and its children right now. Use markForCheck with <strong>OnPush</strong> strategy when data changes without a new @Input reference.
<pre><code>// markForCheck: schedule check for next cycle
this.cdr.markForCheck();

// detectChanges: run check immediately right now
this.cdr.detectChanges();</code></pre>
Prefer <strong>markForCheck()</strong> in most cases because it lets Angular batch checks efficiently. Use <strong>detectChanges()</strong> only when you need the DOM updated immediately.`
                },
                {
                    q: "Why does OnPush improve performance?",
                    a: `With the <strong>default strategy</strong>, Angular checks every component in the entire tree on every change detection cycle, even if nothing changed. With <strong>OnPush</strong>, Angular skips checking a component and its entire subtree unless specific triggers occur. These triggers are: <strong>@Input reference change</strong>, event from within the component, async pipe emission, or manual markForCheck/detectChanges. In large applications, this dramatically reduces the number of checks per cycle.
<pre><code>@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformantComponent {
  @Input() data!: ReadonlyArray&lt;Item&gt;; // immutable reference
}</code></pre>
OnPush works best with <strong>immutable data</strong> patterns where you replace objects/arrays instead of mutating them. Mutations are not detected because the <strong>reference</strong> stays the same.`
                },
                {
                    q: "How does the async pipe work with OnPush change detection?",
                    a: `The <strong>async pipe</strong> is the best companion for OnPush components. When a new value arrives from the Observable, the async pipe automatically calls <strong>markForCheck()</strong> on the component. This triggers change detection for that component and its ancestors without any manual intervention. It also handles <strong>subscribing and unsubscribing</strong> automatically, preventing memory leaks.
<pre><code>@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '&lt;div *ngFor="let user of users$ | async"&gt;{{ user.name }}&lt;/div&gt;'
})
export class UserListComponent {
  users$ = this.http.get&lt;User[]&gt;('/api/users');
}</code></pre>
The async pipe makes <strong>OnPush components</strong> work reactively without manual ChangeDetectorRef calls. It is the cleanest pattern for consuming Observables in templates.`
                },
                {
                    q: "What is the NgZone service used for?",
                    a: `<strong>NgZone</strong> is a wrapper around Zone.js that allows you to run code <strong>inside or outside</strong> of Angular's change detection zone. Code running inside the zone triggers change detection automatically. Using <strong>runOutsideAngular()</strong> prevents unnecessary change detection for operations like animations or scroll handlers. Use <strong>run()</strong> to bring code back inside the zone when you need to update the view.
<pre><code>constructor(private ngZone: NgZone) {}

startAnimation() {
  this.ngZone.runOutsideAngular(() =&gt; {
    // This won't trigger change detection
    requestAnimationFrame(() =&gt; this.animate());
  });
}

updateUI(value: string) {
  this.ngZone.run(() =&gt; {
    this.result = value; // Triggers change detection
  });
}</code></pre>
<strong>runOutsideAngular()</strong> improves performance for frequent events. <strong>run()</strong> is needed to bring updates back into Angular's awareness when you want the DOM to reflect changes.`
                },
                {
                    q: "What is zoneless change detection in Angular?",
                    a: `Angular is moving towards <strong>zoneless change detection</strong> where Zone.js is no longer needed. With <strong>signals</strong> and the new change detection model, Angular can track exactly which parts of the UI need updating. This improves performance and reduces <strong>bundle size</strong> since Zone.js patches many browser APIs. Zoneless mode is experimental in <strong>Angular 17+</strong> and uses signals for fine-grained updates.
<pre><code>// Experimental zoneless setup in Angular 17+
bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection()
  ]
});

// Components use signals for reactive state
@Component({ template: '&lt;p&gt;{{ count() }}&lt;/p&gt;' })
export class CounterComponent {
  count = signal(0);
  increment() { this.count.update(v =&gt; v + 1); }
}</code></pre>
<strong>Signals</strong> tell Angular exactly which components need re-rendering, eliminating the need for zone-based dirty checking. This is the future direction of Angular's reactivity model.`
                }
            ]
        },
        {
            id: "guards-resolvers", title: "Guards & Resolvers", icon: "bi-shield-lock",
            questions: [
            { q: "What are route guards in Angular?", a: `<strong>Route guards</strong> are interfaces that let you control whether a user can navigate to or away from a route. They run before the route is activated and can allow, deny, or redirect navigation. Types include <strong>CanActivate</strong>, <strong>CanDeactivate</strong>, <strong>CanLoad</strong>, <strong>CanMatch</strong>, and <strong>Resolve</strong>. Guards can return booleans, UrlTrees, Observables, or Promises.
<pre><code>const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    resolve: { user: userResolver }
  }
];</code></pre>
Guards are essential for <strong>authentication</strong> and <strong>authorization</strong> in Angular applications. They prevent unauthorized access to protected routes.` },
            { q: "How do you create a CanActivate guard?", a: `A <strong>CanActivate</strong> guard determines if a route can be activated. It checks conditions like <strong>authentication status</strong> and returns true to allow or a <strong>UrlTree</strong> to redirect. Inject services like AuthService using the constructor or inject() function. The guard is added to the route's canActivate array.
<pre><code>@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.auth.isLoggedIn()) return true;
    return this.router.parseUrl('/login');
  }
}

// Route config
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }</code></pre>
Return a <strong>UrlTree</strong> instead of false to redirect the user to a specific page. This is cleaner than calling <strong>router.navigate()</strong> inside the guard.` },
            { q: "What is a functional guard in Angular 15+?", a: "<p>Angular 15+ supports functional guards — plain functions instead of class-based guards:</p><pre><code>export const authGuard: CanActivateFn = (route, state) =&gt; {\n  const auth = inject(AuthService);\n  const router = inject(Router);\n  return auth.isLoggedIn() ? true : router.parseUrl('/login');\n};\n\n{ path: 'admin', canActivate: [authGuard] }</code></pre>" },
            { q: "What is CanDeactivate guard?", a: `<strong>CanDeactivate</strong> guards prevent users from leaving a route, typically to warn about <strong>unsaved changes</strong>. The guard receives the component instance and can call methods on it to check state. It commonly shows a <strong>confirmation dialog</strong> before navigation. This is essential for forms and editors where data loss would be frustrating.
<pre><code>export const unsavedChangesGuard: CanDeactivateFn&lt;EditComponent&gt; = (component) =&gt; {
  if (component.hasUnsavedChanges()) {
    return confirm('Discard unsaved changes?');
  }
  return true;
};</code></pre>
The component must implement a method like <strong>hasUnsavedChanges()</strong> that the guard can call. Return true to allow navigation or false to block it.` },
            { q: "What is the Resolve guard?", a: `<strong>Resolve</strong> pre-fetches data before the route activates, ensuring the component has data when it loads. This prevents showing empty templates or loading states. The resolved data is available through <strong>ActivatedRoute.data</strong>. Functional resolvers using <strong>ResolveFn</strong> are the recommended approach.
<pre><code>export const userResolver: ResolveFn&lt;User&gt; = (route) =&gt; {
  return inject(UserService).getUser(route.paramMap.get('id')!);
};

{ path: 'user/:id', component: UserComponent, resolve: { user: userResolver } }

// In component
constructor(private route: ActivatedRoute) {
  this.user = this.route.snapshot.data['user'];
}</code></pre>
The component does not load until all resolvers complete. If a resolver errors, navigation is cancelled. Use <strong>catchError</strong> to handle errors gracefully.` },
            { q: "What is CanLoad guard?", a: `<strong>CanLoad</strong> prevents lazy-loaded modules from being downloaded at all if the user does not have permission. Unlike <strong>CanActivate</strong> which only blocks activation, CanLoad blocks the entire module download. This saves bandwidth because the module bundle is never fetched. It is now deprecated in favor of <strong>CanMatch</strong> in newer Angular versions.
<pre><code>export const canLoadGuard: CanLoadFn = (route) =&gt; {
  const auth = inject(AuthService);
  return auth.hasPermission(route.data?.['permission']);
};

{ path: 'admin', loadChildren: () =&gt; import('./admin/admin.module'),
  canLoad: [canLoadGuard] }</code></pre>
Use <strong>CanMatch</strong> instead in Angular 15+ as CanLoad is deprecated. CanMatch provides the same functionality with better integration.` },
            { q: "Can a guard return an Observable or Promise?", a: `Yes, guards can return <strong>boolean</strong>, <strong>UrlTree</strong>, <strong>Observable&lt;boolean | UrlTree&gt;</strong>, or <strong>Promise&lt;boolean | UrlTree&gt;</strong>. Angular will wait for async results before proceeding with navigation. This allows guards to make <strong>HTTP calls</strong> to verify tokens or check server-side permissions. The async result is automatically unwrapped by the router.
<pre><code>export const asyncGuard: CanActivateFn = () =&gt; {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.verifyToken().pipe(
    map(valid =&gt; valid ? true : router.parseUrl('/login')),
    catchError(() =&gt; of(router.parseUrl('/error')))
  );
};</code></pre>
Always handle errors with <strong>catchError</strong> in async guards. An unhandled error will cancel navigation entirely.` },
            { q: "How do you pass data to a guard?", a: `Use the route's <strong>data</strong> property to pass metadata to guards. The guard accesses this metadata via <strong>route.data</strong> inside the function. This pattern is commonly used for <strong>role-based access control</strong> where different routes require different permissions. The data is static and defined at configuration time.
<pre><code>{ path: 'admin', canActivate: [roleGuard], data: { roles: ['admin'] } }

export const roleGuard: CanActivateFn = (route) =&gt; {
  const requiredRoles = route.data['roles'];
  return inject(AuthService).hasRole(requiredRoles);
};</code></pre>
The <strong>data</strong> property is type-safe and accessible in both guards and components. Use <strong>ActivatedRoute.data</strong> to read it in components.` },
            { q: "What is CanMatch?", a: `<strong>CanMatch</strong> (Angular 14.1+) determines if a route should even be considered during URL matching. If the guard returns false, the router skips that route and continues to the next route definition. This is different from <strong>CanActivate</strong> which runs after matching. CanMatch is useful for serving different components on the same path based on user roles.
<pre><code>// Different dashboards for different roles
{ path: 'dashboard', component: AdminDashboard,
  canMatch: [() =&gt; inject(AuthService).isAdmin()] },
{ path: 'dashboard', component: UserDashboard } // fallback
</code></pre>
<strong>CanMatch</strong> replaces the deprecated CanLoad guard. It works with both eagerly and lazily loaded routes.` },
            { q: "How do multiple guards work together?", a: `Multiple guards run in the order they are listed in the route configuration. If any guard returns <strong>false</strong> or a <strong>UrlTree</strong>, navigation is canceled or redirected immediately. All guards must return true for navigation to proceed. This allows layering of checks like <strong>authentication</strong>, <strong>role verification</strong>, and <strong>subscription status</strong>.
<pre><code>{ 
  path: 'admin', 
  canActivate: [authGuard, roleGuard, subscriptionGuard] 
  // All three must return true
}</code></pre>
Guards are evaluated <strong>sequentially</strong>, so the first failing guard stops further evaluation. Place the most common failure case first for efficiency.` },
                {
                    q: "What is the difference between CanActivate and CanMatch?",
                    a: `<strong>CanActivate</strong> runs after the route has been matched and decides whether to activate it. If it returns false, the user sees an error or is redirected. <strong>CanMatch</strong> decides whether the route should even be considered during URL matching. If it returns false, the router skips that route and continues looking for other matching routes. CanMatch is useful when you have the <strong>same path for different user roles</strong>.
<pre><code>// CanMatch: skip this route if not admin, try next match
{ path: 'dashboard', component: AdminDashboard, canMatch: [isAdminGuard] },
{ path: 'dashboard', component: UserDashboard }, // fallback

// CanActivate: route matched, but deny access
{ path: 'settings', component: SettingsComponent, canActivate: [authGuard] }</code></pre>
Use <strong>CanMatch</strong> when you need different components for the same URL. Use <strong>CanActivate</strong> when you want to block access entirely.`
                },
                {
                    q: "How do you create a guard that checks user roles?",
                    a: `A <strong>role-based guard</strong> checks whether the logged-in user has the required role to access a route. The required roles are stored in the route's <strong>data</strong> property. The guard reads the roles from the route, checks the user's roles from the <strong>auth service</strong>, and allows or denies access. If the user does not have the required role, it redirects to an unauthorized page.
<pre><code>export const roleGuard: CanActivateFn = (route) =&gt; {
  const auth = inject(AuthService);
  const router = inject(Router);
  const requiredRoles = route.data['roles'] as string[];

  if (auth.hasAnyRole(requiredRoles)) return true;
  return router.parseUrl('/unauthorized');
};

// Usage in routes
{ path: 'admin', component: AdminComponent,
  canActivate: [roleGuard], data: { roles: ['admin', 'superadmin'] } }</code></pre>
This pattern is <strong>reusable</strong> across multiple routes with different role requirements. Store roles in the <strong>route data</strong> to keep the guard generic.`
                },
                {
                    q: "What is the difference between Resolve and resolver function?",
                    a: `The class-based <strong>Resolve</strong> interface requires creating a full injectable class with a resolve method. The functional resolver (<strong>ResolveFn</strong>) is a simpler approach introduced in Angular 15 where you write a plain function. Both serve the same purpose of <strong>pre-fetching data</strong> before a route loads. Functional resolvers are now the recommended approach because they are more concise and work well with <strong>inject()</strong>.
<pre><code>// Functional resolver (recommended)
export const userResolver: ResolveFn&lt;User&gt; = (route) =&gt; {
  return inject(UserService).getUser(route.paramMap.get('id')!);
};

// Route config
{ path: 'user/:id', component: UserComponent,
  resolve: { user: userResolver } }

// Access in component
this.route.data.subscribe(data =&gt; this.user = data['user']);</code></pre>
<strong>Functional resolvers</strong> are easier to test and compose. They replace class-based resolvers as the preferred pattern.`
                },
                {
                    q: "How does CanDeactivate guard work for unsaved changes?",
                    a: `<strong>CanDeactivate</strong> guards prevent users from accidentally leaving a page with <strong>unsaved changes</strong>. The guard calls a method on the component to check if there are pending changes. If there are, it shows a <strong>confirmation dialog</strong>. The component must implement an interface that the guard can call to check for unsaved state.
<pre><code>export const unsavedGuard: CanDeactivateFn&lt;HasUnsavedChanges&gt; = (component) =&gt; {
  if (component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Leave anyway?');
  }
  return true;
};

// Component implements the interface
export class EditComponent implements HasUnsavedChanges {
  form = this.fb.group({ name: [''] });
  hasUnsavedChanges() { return this.form.dirty; }
}</code></pre>
This is especially useful for long forms and editors. The <strong>form.dirty</strong> property tracks whether the user has changed any field.`
                },
                {
                    q: "Can guards return Observables or Promises?",
                    a: `Yes, all guards can return <strong>boolean</strong>, <strong>UrlTree</strong>, <strong>Observable</strong> of boolean or UrlTree, or <strong>Promise</strong> of boolean or UrlTree. This is important because many guard checks require <strong>async operations</strong> like calling an API to verify a token or checking permissions from a server. Angular waits for the Observable or Promise to resolve before proceeding with or cancelling navigation.
<pre><code>export const authGuard: CanActivateFn = () =&gt; {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.checkToken().pipe(
    map(valid =&gt; valid ? true : router.parseUrl('/login')),
    catchError(() =&gt; of(router.parseUrl('/login')))
  );
};</code></pre>
Return a <strong>UrlTree</strong> instead of false to redirect the user. Always use <strong>catchError</strong> to prevent unhandled errors from blocking navigation.`
                }
            ]
        },
        {
            id: "interceptors", title: "Interceptors", icon: "bi-funnel-fill",
            questions: [
            { q: "What is an HTTP interceptor?", a: `An <strong>HTTP interceptor</strong> intercepts and optionally transforms HTTP requests and responses. It sits between the <strong>HttpClient</strong> and the server, allowing you to modify requests before they are sent and responses before they reach the caller. Common use cases include adding <strong>authentication headers</strong>, logging, caching, and error handling. Interceptors implement the HttpInterceptor interface.
<pre><code>@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler): Observable&lt;HttpEvent&lt;any&gt;&gt; {
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer ' + this.token }
    });
    return next.handle(authReq);
  }
}</code></pre>
Requests are <strong>immutable</strong>, so you must use <strong>clone()</strong> to create a modified copy. The next.handle() passes the request to the next interceptor or the backend.` },
            { q: "How do you register an interceptor?", a: `Register interceptors as <strong>multi-providers</strong> in the module or with <strong>withInterceptors</strong> for standalone applications. Multi-providers allow multiple interceptors to be registered under the same <strong>HTTP_INTERCEPTORS</strong> token. The order of registration determines the order of execution. Standalone apps use the newer provideHttpClient API.
<pre><code>// Module-based
providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}]

// Standalone (Angular 15+)
provideHttpClient(withInterceptors([authInterceptor]))</code></pre>
The <strong>multi: true</strong> flag is required to allow multiple interceptors. Without it, each registration would overwrite the previous one.` },
            { q: "How do you create a functional interceptor?", a: `Angular 15+ supports <strong>functional interceptors</strong> which are plain functions instead of class-based interceptors. They receive the <strong>request</strong> and a <strong>next</strong> function as parameters. Functional interceptors are more concise and use <strong>inject()</strong> for dependencies. They are registered with provideHttpClient(withInterceptors(...)).
<pre><code>export const loggingInterceptor: HttpInterceptorFn = (req, next) =&gt; {
  console.log('Request:', req.url);
  return next(req).pipe(
    tap(event =&gt; {
      if (event instanceof HttpResponse) {
        console.log('Response:', event.status);
      }
    })
  );
};</code></pre>
<strong>Functional interceptors</strong> are the recommended approach for new Angular projects. They avoid the boilerplate of creating injectable classes.` },
            { q: "How do you handle errors in an interceptor?", a: `Error handling interceptors catch <strong>HTTP errors</strong> globally instead of handling them in every service call. Use the <strong>catchError</strong> operator on the response Observable to intercept error responses. Common patterns include redirecting to login on <strong>401 Unauthorized</strong> or showing notification messages. The interceptor can also transform errors into user-friendly messages.
<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
  return next.handle(req).pipe(
    catchError((error: HttpErrorResponse) =&gt; {
      if (error.status === 401) {
        this.auth.logout();
        this.router.navigate(['/login']);
      }
      return throwError(() =&gt; error);
    })
  );
}</code></pre>
Always re-throw the error with <strong>throwError</strong> so that individual service calls can still handle specific errors. This provides both global and local error handling.` },
            { q: "How do you add retry logic in an interceptor?", a: `<strong>Retry interceptors</strong> automatically re-send failed requests a specified number of times before giving up. Use the <strong>retry</strong> operator from RxJS to configure the number of attempts and delay between retries. This is useful for handling temporary network issues or server hiccups. You can also use <strong>retryWhen</strong> for more complex retry strategies.
<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
  return next.handle(req).pipe(
    retry({ count: 3, delay: 1000 }),
    catchError(err =&gt; throwError(() =&gt; err))
  );
}</code></pre>
Only retry <strong>idempotent requests</strong> like GET. Retrying POST requests can cause duplicate data. Add conditions to skip retry for non-GET methods.` },
            { q: "Can you modify the response in an interceptor?", a: `Yes, use the <strong>map</strong> operator to transform responses in an interceptor. Since responses are <strong>immutable</strong>, you must use <strong>clone()</strong> to create a modified copy with a new body. This is useful for unwrapping API responses that wrap data in a standard envelope. You can also transform dates, add default values, or normalize data.
<pre><code>return next.handle(req).pipe(
  map(event =&gt; {
    if (event instanceof HttpResponse) {
      return event.clone({ body: event.body.data });
    }
    return event;
  })
);</code></pre>
Check for <strong>HttpResponse</strong> instances since the Observable also emits other event types. Only modify the final response, not intermediate events like progress updates.` },
            { q: "What is the order of interceptor execution?", a: `Interceptors execute in the order they are provided for <strong>requests</strong>, and in <strong>reverse order</strong> for responses. The first interceptor registered is the first to handle the request and the last to handle the response. This creates a <strong>chain</strong> where each interceptor wraps the next one. Understanding this order is important when interceptors depend on each other.
<pre><code>// Registration order
provideHttpClient(withInterceptors([
  loggingInterceptor,   // 1st request, 3rd response
  authInterceptor,      // 2nd request, 2nd response
  cacheInterceptor      // 3rd request, 1st response
]))</code></pre>
Place <strong>logging interceptors</strong> first to capture all requests. Place <strong>cache interceptors</strong> last so cached responses skip other interceptors.` },
            { q: "How do you skip an interceptor for specific requests?", a: `Use custom <strong>headers</strong> or <strong>HttpContext</strong> to mark requests that should skip certain interceptors. The interceptor checks for the marker and either processes the request normally or passes it through unchanged. Remember to remove the marker header before sending the request to avoid sending it to the server. <strong>HttpContext</strong> is the cleaner approach in modern Angular.
<pre><code>// Set a marker header
const req = new HttpRequest('GET', url, { headers: new HttpHeaders({ 'Skip-Auth': 'true' }) });

// In interceptor
if (req.headers.has('Skip-Auth')) {
  return next.handle(req.clone({ headers: req.headers.delete('Skip-Auth') }));
}</code></pre>
The <strong>HttpContext</strong> API is preferred over custom headers as it does not leak internal markers to the server. Context tokens are type-safe and invisible to the backend.` },
            { q: "How do you show a loading spinner with an interceptor?", a: `A <strong>loading interceptor</strong> shows a spinner when HTTP requests are in progress and hides it when they complete. Use a <strong>LoadingService</strong> to manage the spinner state. The <strong>finalize</strong> operator ensures the spinner is hidden regardless of whether the request succeeds or fails. This provides a centralized loading indicator for all HTTP calls.
<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
  this.loadingService.show();
  return next.handle(req).pipe(
    finalize(() =&gt; this.loadingService.hide())
  );
}</code></pre>
Use a <strong>counter</strong> in the LoadingService to handle multiple concurrent requests. Only hide the spinner when the counter reaches zero.` },
            { q: "Can interceptors handle both requests and responses?", a: `Yes, interceptors have access to both requests and responses. The <strong>request</strong> is the req parameter, and the response comes from the <strong>Observable</strong> returned by next.handle(req). You can modify the request before sending and transform the response when it arrives. This makes interceptors powerful for cross-cutting concerns like authentication.
<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
  // Modify request
  const modifiedReq = req.clone({ setHeaders: { 'X-Custom': 'value' } });

  // Handle response
  return next.handle(modifiedReq).pipe(
    tap(event =&gt; {
      if (event instanceof HttpResponse) {
        console.log('Response received:', event.status);
      }
    })
  );
}</code></pre>
Use <strong>tap</strong> for side effects like logging and <strong>map</strong> for transforming the response body. Keep request and response logic in the same interceptor when they are related.` },
                {
                    q: "What is the difference between class-based and functional interceptors?",
                    a: `<strong>Class-based interceptors</strong> implement the HttpInterceptor interface and are registered using the <strong>HTTP_INTERCEPTORS</strong> multi-provider token. <strong>Functional interceptors</strong> (Angular 15+) are plain functions that receive the request and a next function. Functional interceptors are simpler, more concise, and work with provideHttpClient(withInterceptors(...)). They use <strong>inject()</strong> for dependencies instead of constructor injection.
<pre><code>// Functional interceptor (modern)
export const authInterceptor: HttpInterceptorFn = (req, next) =&gt; {
  const token = inject(AuthService).getToken();
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  return next(authReq);
};

// Register
provideHttpClient(withInterceptors([authInterceptor]))</code></pre>
New projects should prefer <strong>functional interceptors</strong> as they are the modern approach. They avoid the boilerplate of creating injectable classes.`
                },
                {
                    q: "How do you implement token refresh logic in an interceptor?",
                    a: `A <strong>token refresh interceptor</strong> catches 401 Unauthorized responses, refreshes the access token using a <strong>refresh token</strong>, and retries the original request with the new token. The key challenge is handling <strong>multiple concurrent requests</strong> during the refresh process. Use a flag and a Subject to queue requests while the refresh is in progress. Once the new token arrives, replay all queued requests.
<pre><code>export const refreshInterceptor: HttpInterceptorFn = (req, next) =&gt; {
  const auth = inject(AuthService);
  return next(req).pipe(
    catchError(error =&gt; {
      if (error.status === 401) {
        return auth.refreshToken().pipe(
          switchMap(newToken =&gt; {
            const retryReq = req.clone({
              setHeaders: { Authorization: 'Bearer ' + newToken }
            });
            return next(retryReq);
          })
        );
      }
      return throwError(() =&gt; error);
    })
  );
};</code></pre>
Use <strong>switchMap</strong> to chain the retry after the token refresh. Handle cases where the refresh token itself is expired by redirecting to login.`
                },
                {
                    q: "How do you add a cache interceptor for GET requests?",
                    a: `A <strong>cache interceptor</strong> stores GET request responses and returns cached data for subsequent identical requests. Check if the request URL already has a <strong>cached response</strong> in a Map. If yes, return it as an Observable using of(). If not, forward the request and store the response. Only cache <strong>GET requests</strong> and implement cache expiration for production use.
<pre><code>const cache = new Map&lt;string, HttpResponse&lt;any&gt;&gt;();

export const cacheInterceptor: HttpInterceptorFn = (req, next) =&gt; {
  if (req.method !== 'GET') return next(req);

  const cached = cache.get(req.urlWithParams);
  if (cached) return of(cached.clone());

  return next(req).pipe(
    tap(event =&gt; {
      if (event instanceof HttpResponse) {
        cache.set(req.urlWithParams, event.clone());
      }
    })
  );
};</code></pre>
This reduces server load and improves <strong>responsiveness</strong> for data that does not change frequently. Add cache invalidation logic for mutable data.`
                },
                {
                    q: "How do you log request and response details using an interceptor?",
                    a: `A <strong>logging interceptor</strong> records the URL, method, timing, and response status of every HTTP request for <strong>debugging</strong> or analytics. Capture the start time when the request goes out, then use the <strong>tap</strong> operator to log details when the response arrives. This gives you visibility into API performance and helps debug slow requests.
<pre><code>export const loggingInterceptor: HttpInterceptorFn = (req, next) =&gt; {
  const startTime = Date.now();
  console.log('Request:', req.method, req.url);

  return next(req).pipe(
    tap(event =&gt; {
      if (event instanceof HttpResponse) {
        const duration = Date.now() - startTime;
        console.log('Response:', req.url, event.status, duration + 'ms');
      }
    })
  );
};</code></pre>
In production, send logs to a <strong>monitoring service</strong> instead of the console. Use the <strong>finalize</strong> operator to also capture failed requests.`
                },
                {
                    q: "Can interceptors modify the response body?",
                    a: `Yes, interceptors can transform the response body using the <strong>map</strong> operator on the Observable returned by next.handle(). Use <strong>clone()</strong> on the HttpResponse to create a modified copy with a new body. This is useful for unwrapping API responses that wrap data in a <strong>standard envelope</strong>. The original response is immutable, so you always create a clone.
<pre><code>export const unwrapInterceptor: HttpInterceptorFn = (req, next) =&gt; {
  return next(req).pipe(
    map(event =&gt; {
      if (event instanceof HttpResponse &amp;&amp; event.body?.data) {
        // Unwrap: { data: [...], meta: {...} } → [...]
        return event.clone({ body: event.body.data });
      }
      return event;
    })
  );
};</code></pre>
Common transformations include <strong>unwrapping envelopes</strong>, converting date strings to Date objects, and adding default values to responses.`
                }
            ]
        },
        {
            id: "decorators", title: "Decorators", icon: "bi-at",
            questions: [
            { q: "What are decorators in Angular?", a: `<strong>Decorators</strong> are functions that modify classes, properties, methods, or parameters. Angular uses them extensively to add <strong>metadata</strong> to TypeScript classes. They are prefixed with <strong>@</strong> symbol. Decorators tell Angular how to process and configure a class, making them fundamental to the framework's architecture.
<pre><code>// Class decorators: @Component, @Directive, @Injectable, @NgModule, @Pipe
// Property decorators: @Input, @Output, @HostBinding, @ContentChild, @ViewChild
// Method decorators: @HostListener
// Parameter decorators: @Inject, @Optional, @Self, @SkipSelf

@Component({ selector: 'app-root', template: '&lt;h1&gt;Hello&lt;/h1&gt;' })
export class AppComponent {}</code></pre>
Without decorators, Angular cannot identify what role a class plays. <strong>Class decorators</strong> define the type, while <strong>property decorators</strong> configure data flow.` },
            { q: "What does @Input() do?", a: `<strong>@Input()</strong> marks a property as bindable from a parent component's template. The parent passes data down using <strong>property binding</strong> with square brackets. In Angular 16+, you can mark inputs as <strong>required</strong> using the required option. Inputs can also have transform functions and alias names.
<pre><code>// Child
@Input() name: string = '';
@Input({ required: true }) id!: number; // Required in Angular 16+

// Parent template
&lt;app-child [name]="userName" [id]="userId"&gt;&lt;/app-child&gt;</code></pre>
Input values are available in <strong>ngOnInit</strong> and later. Use <strong>ngOnChanges</strong> to react to input value changes over time.` },
            { q: "What does @Output() do?", a: `<strong>@Output()</strong> marks a property as an event emitter that sends data from child to parent. The property must be an <strong>EventEmitter</strong> instance. The parent listens using <strong>event binding</strong> with parentheses. The emitted value is accessible via <strong>$event</strong> in the template.
<pre><code>@Output() itemSelected = new EventEmitter&lt;Item&gt;();

onSelect(item: Item) {
  this.itemSelected.emit(item);
}

// Parent template
&lt;app-child (itemSelected)="onItemSelect($event)"&gt;&lt;/app-child&gt;</code></pre>
@Output enables <strong>child-to-parent communication</strong>. Use descriptive event names and emit only the data the parent needs.` },
            { q: "What is @ViewChild?", a: `<strong>@ViewChild</strong> queries for a child element, directive, or component defined in the component's own template. It provides a reference to the element allowing direct access to its properties and methods. The reference is available in <strong>ngAfterViewInit</strong> lifecycle hook. Use a template reference variable (<strong>#ref</strong>) or component type to query.
<pre><code>@ViewChild('inputRef') input!: ElementRef;
@ViewChild(ChildComponent) child!: ChildComponent;

ngAfterViewInit() {
  this.input.nativeElement.focus();
  this.child.doSomething();
}</code></pre>
Set <strong>static: true</strong> if you need the reference in ngOnInit instead of ngAfterViewInit. Use <strong>@ViewChildren</strong> to query for multiple elements.` },
            { q: "What is @ContentChild?", a: `<strong>@ContentChild</strong> queries for projected content that is placed between the component's tags using <strong>ng-content</strong>. Unlike @ViewChild which queries the component's own template, @ContentChild queries elements that the parent projected into the component. The reference is available in <strong>ngAfterContentInit</strong> lifecycle hook.
<pre><code>// Content projection
&lt;app-card&gt;
  &lt;app-header&gt;Title&lt;/app-header&gt;
&lt;/app-card&gt;

// In CardComponent
@ContentChild(HeaderComponent) header!: HeaderComponent;</code></pre>
Use <strong>@ContentChildren</strong> to query for multiple projected elements. Both return a <strong>QueryList</strong> that can be observed for changes.` },
            { q: "What is @HostListener?", a: `<strong>@HostListener</strong> listens to events on the host element of the directive or component. It takes the event name as the first argument and an optional array of arguments. You can listen to <strong>DOM events</strong> like click, mouseenter, or global events like window:resize. It replaces manually adding event listeners in the constructor.
<pre><code>@HostListener('click', ['$event'])
onClick(event: MouseEvent) {
  console.log('Host clicked!', event);
}

@HostListener('window:resize', ['$event'])
onResize(event: Event) {
  this.windowWidth = window.innerWidth;
}</code></pre>
In modern Angular, prefer the <strong>host</strong> property in the decorator metadata over @HostListener. It provides the same functionality with less boilerplate.` },
            { q: "What is @HostBinding?", a: `<strong>@HostBinding</strong> binds a class property to a property of the host element. It can bind to <strong>classes</strong>, <strong>styles</strong>, attributes, or any DOM property. The binding is automatically updated when the property value changes. This is commonly used in directives to modify the host element's appearance.
<pre><code>@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @HostBinding('class.active') isActive = false;
  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseenter') onHover() {
    this.bgColor = 'yellow';
    this.isActive = true;
  }
}</code></pre>
Combine <strong>@HostBinding</strong> with <strong>@HostListener</strong> to create interactive directives. The host property in the decorator metadata is the modern alternative.` },
            { q: "What is @Injectable?", a: `<strong>@Injectable</strong> marks a class as available for <strong>dependency injection</strong>. The providedIn option specifies where the service is available. Using <strong>providedIn: 'root'</strong> creates a tree-shakable singleton available application-wide. Without this decorator, Angular cannot inject dependencies into the class constructor.
<pre><code>@Injectable({ providedIn: 'root' }) // Tree-shakable singleton
export class DataService {
  constructor(private http: HttpClient) {}
}</code></pre>
The <strong>providedIn: 'root'</strong> option eliminates the need to add the service to a providers array. Angular automatically removes unused services during <strong>tree-shaking</strong>.` },
            { q: "What is @Inject?", a: `<strong>@Inject</strong> explicitly specifies the <strong>injection token</strong> used for dependency injection. It is required for non-class tokens like strings, numbers, or <strong>InjectionToken</strong> instances. Without @Inject, Angular uses the type annotation to determine the token. Use InjectionToken for type-safe non-class values.
<pre><code>constructor(@Inject(API_URL) private apiUrl: string) {}

// With InjectionToken
export const API_URL = new InjectionToken&lt;string&gt;('api-url');</code></pre>
<strong>InjectionToken</strong> prevents naming collisions between providers. Always use InjectionToken instead of plain strings for better type safety and refactoring support.` },
            { q: "What is the difference between @ViewChildren and @ContentChildren?", a: `<strong>@ViewChildren</strong> queries elements defined in the component's own template. <strong>@ContentChildren</strong> queries elements projected via ng-content from the parent. Both return a <strong>QueryList</strong> that can be observed for changes. @ViewChildren is available in ngAfterViewInit, @ContentChildren in ngAfterContentInit.
<pre><code>// ViewChildren: queries own template elements
@ViewChildren(ItemComponent) items!: QueryList&lt;ItemComponent&gt;;

// ContentChildren: queries projected elements
@ContentChildren(TabComponent) tabs!: QueryList&lt;TabComponent&gt;;

ngAfterViewInit() {
  this.items.changes.subscribe(() =&gt; console.log('Items changed'));
}</code></pre>
Use the <strong>changes</strong> Observable on QueryList to react to dynamic additions or removals. Both decorators support the <strong>descendants</strong> option for deep querying.` },
                {
                    q: "What is the difference between @ViewChild and @ContentChild?",
                    a: `<strong>@ViewChild</strong> queries elements defined in the component's own template. <strong>@ContentChild</strong> queries elements projected into the component from outside using <strong>ng-content</strong>. @ViewChild references are available in ngAfterViewInit while @ContentChild references are available earlier in ngAfterContentInit. Both support the <strong>static</strong> option for earlier access.
<pre><code>// ViewChild: queries own template
@ViewChild('myInput') input!: ElementRef;

// ContentChild: queries projected content
@ContentChild(HeaderComponent) header!: HeaderComponent;

// In parent template
&lt;app-card&gt;
  &lt;app-header&gt;Projected!&lt;/app-header&gt;  &lt;!-- queried by ContentChild --&gt;
&lt;/app-card&gt;</code></pre>
Think of <strong>ViewChild</strong> as querying your own template and <strong>ContentChild</strong> as querying what others put inside your component tags.`
                },
                {
                    q: "What is the @Optional decorator used for?",
                    a: `<strong>@Optional</strong> tells Angular that a dependency is not required and should not throw an error if it cannot be found. Without @Optional, Angular throws a <strong>NullInjectorError</strong> if the dependency is not provided anywhere in the injector tree. With @Optional, Angular simply injects <strong>null</strong> instead. This is useful for optional features or plugins.
<pre><code>constructor(
  @Optional() private analytics: AnalyticsService
) {}

trackEvent(name: string) {
  // Only track if analytics service is available
  this.analytics?.track(name);
}</code></pre>
Always check for <strong>null</strong> before using optional dependencies. Use the <strong>optional chaining</strong> operator (?.) for safe access.`
                },
                {
                    q: "What is @Pipe decorator used for?",
                    a: `<strong>@Pipe</strong> decorator marks a class as an Angular pipe and gives it a <strong>name</strong> that can be used in template expressions. Every pipe class must implement the <strong>PipeTransform</strong> interface with a transform method. The name property defines the identifier used in templates with the pipe operator (|). Set pure to false for impure pipes that run on every change detection cycle.
<pre><code>@Pipe({
  name: 'truncate',
  standalone: true,
  pure: true // default
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

// Usage: {{ longText | truncate:30 }}</code></pre>
Pipes can be <strong>standalone</strong> by setting standalone: true for use without NgModules. <strong>Pure pipes</strong> are more performant as they only run when input values change.`
                },
                {
                    q: "What is the @Attribute decorator?",
                    a: `<strong>@Attribute</strong> injects the value of an HTML attribute from the host element as a simple string. Unlike <strong>@Input</strong>, it only reads the attribute once at creation time and does not track changes. It is useful for <strong>static configuration values</strong> that never change. Since it does not create a binding, it is slightly more performant than @Input for pure string constants.
<pre><code>@Component({ selector: 'app-button' })
export class ButtonComponent {
  constructor(@Attribute('size') public size: string) {
    console.log(size); // 'large'
  }
}

// Usage: &lt;app-button size="large"&gt;&lt;/app-button&gt;
// Note: size is read once, NOT bound. [size]="var" won't update it.</code></pre>
The value is always a <strong>string or undefined</strong>. Use @Input instead if you need dynamic values that change over time.`
                },
                {
                    q: "What is the @Directive decorator vs @Component?",
                    a: `<strong>@Component</strong> is actually a subclass of <strong>@Directive</strong> with additional template-related metadata. @Directive creates directives that modify the behavior of existing elements without their own view. @Component creates directives that have their own <strong>template and view</strong>. Both support inputs, outputs, host bindings, lifecycle hooks, and dependency injection.
<pre><code>// Directive: adds behavior to existing elements
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @HostListener('mouseenter') onHover() { /* highlight logic */ }
}

// Component: has its own template and view
@Component({
  selector: 'app-card',
  template: '&lt;div class="card"&gt;&lt;ng-content&gt;&lt;/ng-content&gt;&lt;/div&gt;'
})
export class CardComponent { }</code></pre>
Use <strong>@Directive</strong> when you want to add behavior to existing elements. Use <strong>@Component</strong> when you need a reusable UI element with its own template.`
                }
            ]
        },
        {
            id: "standalone-components", title: "Standalone Components", icon: "bi-box-seam",
            questions: [
            { q: "What are standalone components?", a: `<strong>Standalone components</strong> (Angular 14+) do not require an <strong>NgModule</strong>. They declare their own dependencies directly via the <strong>imports</strong> array in the @Component decorator. This makes components self-contained and eliminates the need for module declarations. Standalone is the default in Angular 17+.
<pre><code>@Component({
  standalone: true,
  selector: 'app-hello',
  imports: [CommonModule, FormsModule],
  template: '&lt;input [(ngModel)]="name"&gt; Hello {{name}}'
})
export class HelloComponent { name = 'World'; }</code></pre>
Standalone components know exactly what they need. They improve <strong>tree-shaking</strong> by making dependencies explicit at the component level.` },
            { q: "How do you bootstrap a standalone component?", a: `Use <strong>bootstrapApplication</strong> from @angular/platform-browser to bootstrap a standalone component directly without any NgModule. Pass the root component and an optional <strong>ApplicationConfig</strong> object for providers. This replaces the traditional platformBrowserDynamic().bootstrapModule() approach. The config object is where you register global providers.
<pre><code>// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig);</code></pre>
The <strong>appConfig</strong> object centralizes all application-level providers like routing, HTTP client, and animations.` },
            { q: "How do you configure routing with standalone components?", a: `Use <strong>provideRouter</strong> in the application config to set up routing for standalone applications. Routes can use <strong>loadComponent</strong> for lazy loading individual components without needing a module. The routes array defines path-to-component mappings just like in NgModule apps. Additional router features are added using <strong>withPreloading</strong>, withDebugTracing, etc.
<pre><code>// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

// routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', loadComponent: () =&gt;
    import('./users/users.component').then(m =&gt; m.UsersComponent) }
];</code></pre>
<strong>provideRouter</strong> replaces RouterModule.forRoot(). Use <strong>loadComponent</strong> instead of loadChildren for single-component lazy loading.` },
            { q: "How do you lazy load a standalone component?", a: `Use <strong>loadComponent</strong> in route definitions for individual component <strong>lazy loading</strong>. This is simpler than the NgModule approach because you do not need to create a separate module for each lazy-loaded feature. The component and its dependencies are automatically split into a separate bundle. The import() function dynamically loads the component when the route is navigated to.
<pre><code>{ 
  path: 'profile', 
  loadComponent: () =&gt; import('./profile/profile.component')
    .then(c =&gt; c.ProfileComponent)
}</code></pre>
<strong>loadComponent</strong> reduces initial bundle size by deferring component code. Each lazy-loaded component gets its own <strong>chunk</strong> in the build output.` },
            { q: "How do you provide services with standalone?", a: `Register global services and providers in the <strong>bootstrapApplication</strong> config object. Use <strong>provide</strong> functions like provideHttpClient, provideRouter, and provideAnimations instead of importing modules. This is cleaner because each provider function accepts configuration options directly. Custom services with <strong>providedIn: 'root'</strong> do not need to be listed here.
<pre><code>bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimations(),
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
});</code></pre>
The <strong>provide</strong> functions are tree-shakable alternatives to NgModule imports. They allow fine-grained configuration of each feature.` },
            { q: "Can standalone directives and pipes exist?", a: `Yes, <strong>directives</strong> and <strong>pipes</strong> can also be standalone by setting standalone: true in their decorator. This allows them to be imported directly by other standalone components without needing an NgModule. They work exactly like standalone components but for reusable behaviors and data transformations. Import them in any component's imports array.\n<pre><code>@Directive({ standalone: true, selector: '[appHighlight]' })\nexport class HighlightDirective { }\n\n@Pipe({ standalone: true, name: 'truncate' })\nexport class TruncatePipe implements PipeTransform { }</code></pre>\nStandalone directives and pipes are <strong>self-contained</strong> and portable. They can be shared across multiple components without a shared module.` },
            { q: "How do you migrate from NgModules to standalone?", a: `Angular provides a <strong>migration schematic</strong> that automates the conversion from NgModules to standalone components. Run the schematic to mark components as standalone, add their imports arrays, and remove NgModule declarations. The migration happens in stages so you can migrate incrementally. Eventually you can remove NgModules entirely.
<pre><code>ng generate @angular/core:standalone</code></pre>
Steps: mark components/directives/pipes as <strong>standalone</strong>, add imports array to each, remove from NgModule declarations, then remove the NgModule. Migrate <strong>incrementally</strong> to avoid breaking changes.` },
            { q: "What is importProvidersFrom?", a: `<strong>importProvidersFrom</strong> extracts providers from NgModules for use in standalone applications. This is the bridge between NgModule-based libraries and standalone apps. When a library only exports an NgModule with providers (like <strong>forRoot()</strong>), use importProvidersFrom to extract those providers. It returns the providers without the NgModule wrapper.
<pre><code>bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(SomeLibraryModule.forRoot())
  ]
});</code></pre>
Use importProvidersFrom only for <strong>legacy NgModule libraries</strong>. Modern libraries provide standalone-compatible <strong>provide</strong> functions instead.` },
            { q: "How do you use standalone components in NgModule apps?", a: `Import <strong>standalone components</strong> directly in an NgModule's <strong>imports</strong> array, not in declarations. This allows you to use standalone components in existing NgModule-based applications. The standalone component brings all its own dependencies so the NgModule does not need to import them. This enables gradual migration to standalone.\n<pre><code>@NgModule({\n  imports: [StandaloneHelloComponent], // Standalone in imports, not declarations\n  declarations: [AppComponent]\n})</code></pre>\nStandalone components go in <strong>imports</strong>, not declarations. They are treated like modules that provide themselves.` },
            { q: "What are the benefits of standalone components?", a: `<strong>Standalone components</strong> offer several key benefits over NgModule-based architecture. They provide a <strong>simplified mental model</strong> where no NgModules are needed. Dependencies are explicit, enabling better <strong>tree-shaking</strong> since you only import what you use. Lazy loading is easier with loadComponent.
<pre><code>// Benefits demonstrated
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule], // Explicit dependencies
  template: '...'
})
export class FeatureComponent { }

// Easy lazy loading
{ path: 'feature', loadComponent: () =&gt;
  import('./feature.component').then(c =&gt; c.FeatureComponent) }</code></pre>
Standalone components are <strong>self-contained and portable</strong>. They reduce boilerplate and are the <strong>default architecture</strong> in Angular 17+.` },
                {
                    q: "What is the difference between standalone components and NgModule components?",
                    a: `<strong>Standalone components</strong> declare their own dependencies directly in the <strong>imports</strong> array of their @Component decorator. <strong>NgModule-based components</strong> rely on the NgModule they belong to for dependency management. Standalone components are self-contained and know exactly what they need. NgModule components inherit available declarations and imports from their module.
<pre><code>// Standalone: self-contained dependencies
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  template: '...'
})
export class StandaloneComponent { }

// NgModule-based: depends on the module
@Component({ template: '...' })
export class ModuleComponent { }
// Needs to be declared in a module that imports CommonModule, etc.</code></pre>
Standalone is the <strong>modern approach</strong> that simplifies architecture and improves <strong>tree-shaking</strong> by making dependencies explicit at the component level.`
                },
                {
                    q: "How do you use Angular Material components with standalone?",
                    a: `With standalone components, import individual <strong>Angular Material modules</strong> directly in the component's imports array. This is better for <strong>tree-shaking</strong> because you only import the specific Material modules you need. Each component declares exactly which Material buttons, inputs, or other components it uses, making the dependency tree explicit.
<pre><code>@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  template: '&lt;mat-card&gt;' +
    '&lt;mat-form-field&gt;&lt;input matInput /&gt;&lt;/mat-form-field&gt;' +
    '&lt;button mat-raised-button&gt;Submit&lt;/button&gt;' +
    '&lt;/mat-card&gt;'
})
export class FormComponent { }</code></pre>
This eliminates the need for a large <strong>SharedModule</strong> that imports all Material components. Only the components you use end up in the bundle.`
                },
                {
                    q: "How do you share common imports across standalone components?",
                    a: `When many standalone components need the same set of imports, create a <strong>shared array</strong> of commonly used modules and spread them into each component's imports. This avoids repeating long import lists. Create a utility file that exports the <strong>common set</strong>. This is the standalone equivalent of a SharedModule but without the NgModule overhead.
<pre><code>// shared-imports.ts
export const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  RouterModule,
  DatePipe,
  UpperCasePipe
] as const;

// Component uses it
@Component({
  standalone: true,
  imports: [...COMMON_IMPORTS, MatButtonModule],
  template: '...'
})
export class MyComponent { }</code></pre>
Use <strong>as const</strong> for type safety. Spread the array with <strong>...</strong> to include all common imports plus component-specific ones.`
                },
                {
                    q: "How do you lazy load child routes with standalone components?",
                    a: `Use <strong>loadComponent</strong> for single components and <strong>loadChildren</strong> with a function returning a routes array for route groups. This is simpler than NgModule lazy loading because you do not need a separate module. Each route or group of routes can be loaded on demand, reducing the <strong>initial bundle size</strong>.
<pre><code>export const routes: Routes = [
  // Lazy load a single component
  { path: 'profile', loadComponent: () =>
    import('./profile/profile.component').then(c => c.ProfileComponent)
  },
  // Lazy load a group of child routes
  { path: 'admin', loadChildren: () =>
    import('./admin/admin.routes').then(r => r.ADMIN_ROUTES)
  }
];

// admin/admin.routes.ts
export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminDashComponent },
  { path: 'users', component: AdminUsersComponent }
];</code></pre>
<strong>loadChildren</strong> with a routes array replaces the NgModule lazy loading pattern. The routes file is a simple TypeScript file exporting a Routes array.`
                },
                {
                    q: "What is the default in Angular 17+ — standalone or NgModule?",
                    a: `Starting from Angular 17, the CLI generates <strong>standalone components by default</strong>. When you run ng new, the application is bootstrapped without any NgModule using <strong>bootstrapApplication()</strong>. When you run ng generate component, it creates a standalone component with standalone: true. You can still create NgModule-based apps with the --standalone=false flag.
<pre><code>// Angular 17+ default: no NgModule
// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});

// Generated component is standalone by default
@Component({
  standalone: true,
  imports: [CommonModule],
  template: '&lt;p&gt;works!&lt;/p&gt;'
})
export class NewComponent { }</code></pre>
This reflects Angular's direction of making <strong>standalone the primary architecture</strong> pattern going forward. NgModules are still supported but no longer the default.`
                }
            ]
        },
        {
            id: "signals", title: "Signals", icon: "bi-broadcast",
            questions: [
            { q: "What are signals in Angular?", a: `<strong>Signals</strong> (Angular 16+) are reactive primitives for <strong>state management</strong>. They track when values change and automatically update dependent computations and views. Signals always have a current value and are <strong>synchronous</strong>. Use set() to replace a value and update() to derive a new value from the current one.
<pre><code>import { signal, computed, effect } from '@angular/core';

const count = signal(0);
count.set(5);
count.update(v =&gt; v + 1);
console.log(count()); // Read value: 6</code></pre>
Signals integrate directly with Angular's <strong>change detection</strong>. Reading a signal in a template creates an automatic dependency that updates the view when the signal changes.` },
            { q: "What is computed()?", a: `<strong>computed()</strong> creates a derived signal that automatically recalculates when its <strong>dependencies change</strong>. It tracks which signals are read during execution and re-runs when any of them update. Computed signals are <strong>lazy</strong> and only recalculate when read. They are read-only and cannot be set directly.
<pre><code>const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() =&gt; firstName() + ' ' + lastName());

console.log(fullName()); // "John Doe"
firstName.set('Jane');
console.log(fullName()); // "Jane Doe" - auto-updated</code></pre>
Computed signals are <strong>memoized</strong> so the same value is returned without recalculation until a dependency changes. They are ideal for derived state.` },
            { q: "What is effect()?", a: `<strong>effect()</strong> runs side effects when signals it reads change. It automatically tracks signal dependencies and re-runs whenever any of them update. Effects run at least once when created and then re-run on every dependency change. They are useful for <strong>logging</strong>, syncing to localStorage, or triggering external API calls.
<pre><code>const user = signal({ name: 'John', age: 30 });

effect(() =&gt; {
  console.log('User changed:', user().name);
  // Runs when user signal changes
});</code></pre>
Effects must be created in an <strong>injection context</strong> (constructor or with inject). Use <strong>untracked()</strong> to read signals inside an effect without creating a dependency.` },
            { q: "How do signals differ from RxJS Observables?", a: `<strong>Signals</strong> are synchronous and always have a current value. <strong>Observables</strong> can be async and may not have a value until subscribed. Signals auto-track dependencies while Observables require explicit subscription. No subscribe/unsubscribe needed with signals. RxJS is better for event streams, HTTP, and complex async flows.
<pre><code>// Signal: synchronous, always has value
const count = signal(0);
console.log(count()); // 0 immediately

// Observable: async, requires subscribe
const count$ = new BehaviorSubject(0);
count$.subscribe(val =&gt; console.log(val));

// Bridge between them
const signalFromObs = toSignal(count$);
const obsFromSignal = toObservable(count);</code></pre>
Use <strong>signals</strong> for synchronous state and <strong>RxJS</strong> for async operations. They complement each other through <strong>toSignal()</strong> and <strong>toObservable()</strong>.` },
            { q: "What is toSignal()?", a: `<strong>toSignal()</strong> converts an Observable to a Signal for use in templates without the async pipe. It subscribes to the Observable and updates the signal with each emitted value. Provide an <strong>initialValue</strong> since signals need a synchronous value immediately. It automatically unsubscribes when the component is destroyed.
<pre><code>import { toSignal } from '@angular/core/rxjs-interop';

const users = toSignal(this.http.get&lt;User[]&gt;('/api/users'), {
  initialValue: []
});

// In template — no async pipe needed
&lt;li *ngFor="let user of users()"&gt;{{ user.name }}&lt;/li&gt;</code></pre>
<strong>toSignal</strong> must be called in an <strong>injection context</strong>. Without initialValue, the signal type includes undefined until the Observable emits.` },
            { q: "What is toObservable()?", a: `<strong>toObservable()</strong> converts a Signal to an Observable, enabling use of <strong>RxJS operators</strong> like debounceTime, switchMap, and filter. This is useful when you need async processing on signal changes. The Observable emits whenever the signal value changes. It bridges signals with existing RxJS-based code.
<pre><code>import { toObservable } from '@angular/core/rxjs-interop';

const search = signal('');
const search$ = toObservable(this.search);

search$.pipe(
  debounceTime(300),
  switchMap(q =&gt; this.api.search(q))
).subscribe(results =&gt; this.results.set(results));</code></pre>
Use <strong>toObservable</strong> when you need RxJS operators. Keep state in signals and use Observables only for <strong>async processing pipelines</strong>.` },
            { q: "What are input signals?", a: `Angular 17.1+ introduces <strong>signal-based inputs</strong> using the <strong>input()</strong> function. They replace the @Input() decorator with a more type-safe and reactive approach. Inputs can be optional, <strong>required</strong>, or have default values. They integrate directly with computed() for derived state based on input values.
<pre><code>@Component({...})
export class UserComponent {
  name = input&lt;string&gt;();           // Optional input signal
  id = input.required&lt;number&gt;();    // Required input signal
  label = input('default');          // Input with default value

  // Computed based on input
  greeting = computed(() =&gt; 'Hello ' + this.name());
}</code></pre>
<strong>Signal inputs</strong> are read-only from within the component. They create a reactive dependency that updates computed signals and effects automatically.` },
            { q: "What is model() in signals?", a: `<strong>model()</strong> creates a <strong>two-way bindable signal</strong> (Angular 17.2+). It replaces the @Input/@Output pattern for two-way binding with a single signal-based API. The parent can bind using <strong>[(value)]</strong> syntax and both parent and child see the same reactive value. model() is a writable signal that emits changes to the parent.
<pre><code>@Component({
  selector: 'app-counter',
  template: '&lt;button (click)="increment()"&gt;{{ value() }}&lt;/button&gt;'
})
export class CounterComponent {
  value = model(0); // Two-way binding
  increment() { this.value.update(v =&gt; v + 1); }
}

// Parent: &lt;app-counter [(value)]="count" /&gt;</code></pre>
<strong>model()</strong> replaces the traditional @Input/@Output EventEmitter pattern. Changes propagate in both directions automatically.` },
            { q: "How do you use signals in templates?", a: `Call signals like <strong>functions</strong> in templates using parentheses. Angular automatically tracks which signals are used in the template and updates only the relevant DOM bindings when they change. This is more efficient than zone-based change detection. No <strong>async pipe</strong> is needed for signals.
<pre><code>@Component({
  template: '&lt;p&gt;Count: {{ count() }}&lt;/p&gt;&lt;button (click)="increment()"&gt;+1&lt;/button&gt;'
})
export class CounterComponent {
  count = signal(0);
  increment() { this.count.update(v =&gt; v + 1); }
}</code></pre>
Signals in templates create <strong>fine-grained reactive bindings</strong>. Only the specific DOM node tied to the changed signal is updated.` },
            { q: "What is the signal update method?", a: `<strong>update()</strong> modifies a signal based on its current value by passing a callback function. Unlike <strong>set()</strong> which replaces the value entirely, update() receives the current value and returns the new value. This is essential when the new value depends on the current state. Both methods trigger reactivity and notify dependents.
<pre><code>const items = signal&lt;string[]&gt;([]);

// set replaces entirely
items.set(['a', 'b']);

// update derives from current value
items.update(list =&gt; [...list, 'c']); // ['a', 'b', 'c']</code></pre>
Use <strong>update()</strong> for counters, arrays, and objects where the new value depends on the old one. Use <strong>set()</strong> when you have the complete new value.` },
                {
                    q: "What is the difference between set and update in signals?",
                    a: `<strong>set()</strong> replaces the signal's value entirely with a new value. <strong>update()</strong> takes a callback function that receives the current value and returns the new value. Use set() when you know the exact new value. Use update() when the new value <strong>depends on the current value</strong> like incrementing or appending.
<pre><code>const count = signal(0);

// set: replace with new value directly
count.set(10);

// update: derive new value from current
count.update(current =&gt; current + 1); // 11

const items = signal&lt;string[]&gt;([]);
items.update(list =&gt; [...list, 'new item']);</code></pre>
Both methods trigger <strong>reactivity</strong> and update all dependent computed signals and effects. Choose based on whether you need the current value.`
                },
                {
                    q: "Can signals replace RxJS completely?",
                    a: `No, <strong>signals</strong> and <strong>RxJS</strong> serve different purposes and work best together. Signals are designed for <strong>synchronous state management</strong> and always have a current value. RxJS is designed for <strong>asynchronous event streams</strong> like HTTP requests, WebSocket messages, and complex async workflows. Angular provides toSignal() and toObservable() to bridge between them.
<pre><code>// Signals: synchronous state
const count = signal(0);
const doubled = computed(() =&gt; count() * 2);

// RxJS: async operations (still needed)
this.http.get('/api/data').pipe(
  retry(3),
  catchError(err =&gt; of([]))
).subscribe(data =&gt; this.data.set(data));

// Bridge: convert Observable to Signal
const users = toSignal(this.userService.getUsers());</code></pre>
Signals replace simple <strong>BehaviorSubject</strong> patterns for state. RxJS is still essential for async operations and complex operator chains.`
                },
                {
                    q: "What is the output() function in Angular signals?",
                    a: `The <strong>output()</strong> function (Angular 17.2+) is the signal-based replacement for <strong>@Output with EventEmitter</strong>. It creates a typed output that components can bind to in templates. The <strong>emit</strong> method sends values to the parent. Unlike EventEmitter, output() does not rely on RxJS Observables and is a lightweight alternative.
<pre><code>@Component({
  selector: 'app-search',
  template: '&lt;input (input)="onSearch($event)"&gt;'
})
export class SearchComponent {
  searchChange = output&lt;string&gt;();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}

// Parent: &lt;app-search (searchChange)="handleSearch($event)" /&gt;</code></pre>
Use <strong>output()</strong> with signal-based inputs to create a fully <strong>signal-based component API</strong>. It provides better type inference than EventEmitter.`
                },
                {
                    q: "What is linkedSignal in Angular?",
                    a: `<strong>linkedSignal</strong> (Angular 18+) creates a writable signal whose value is automatically <strong>reset</strong> when a source signal changes. It acts like a computed signal that you can also manually set. This bridges the gap between <strong>computed</strong> (read-only) and regular signals (no auto-tracking). It is useful for values that should reset when their parent changes.
<pre><code>const users = signal&lt;User[]&gt;([]);

// selectedUser resets whenever users list changes
const selectedUser = linkedSignal(() =&gt; users()[0]);

// Can still manually set it
selectedUser.set(users()[2]);

// When users changes, selectedUser auto-resets to first user</code></pre>
Use linkedSignal for <strong>selected items</strong> that should reset when lists change, or form values that should reset when the parent entity changes.`
                },
                {
                    q: "How do signals work with Angular's change detection?",
                    a: `Signals integrate with Angular's <strong>change detection</strong> by marking the component for check when a signal used in the template changes. With <strong>zoneless mode</strong>, signals enable fine-grained reactivity where only specific DOM bindings tied to the changed signal are updated. In <strong>OnPush</strong> components, signals automatically trigger the right updates without needing markForCheck().
<pre><code>@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '&lt;p&gt;{{ name() }}&lt;/p&gt;&lt;button (click)="update()"&gt;Update&lt;/button&gt;'
})
export class NameComponent {
  name = signal('Angular');
  update() { this.name.set('Updated'); } // auto-triggers view update
}</code></pre>
This is more efficient than <strong>zone-based change detection</strong> which checks the entire component tree. Signals enable the future <strong>zoneless Angular</strong> architecture.`
                }
            ]
        },
        {
            id: "testing", title: "Testing", icon: "bi-bug",
            questions: [
            { q: "How do you set up a component test with TestBed?", a: `<strong>TestBed</strong> is Angular's testing utility that configures a testing module for component tests. Use <strong>configureTestingModule</strong> to declare the component and provide mock services. Call <strong>compileComponents()</strong> to compile template and styles. CreateComponent returns a fixture for interacting with the component.
<pre><code>describe('HeroComponent', () =&gt; {
  let component: HeroComponent;
  let fixture: ComponentFixture&lt;HeroComponent&gt;;

  beforeEach(async () =&gt; {
    await TestBed.configureTestingModule({
      declarations: [HeroComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});</code></pre>
Call <strong>fixture.detectChanges()</strong> after creating the component to trigger initial change detection. Use <strong>fixture.componentInstance</strong> to access the component.` },
            { q: "How do you test @Input and @Output?", a: `Test <strong>@Input</strong> by setting the property directly on the component instance and calling detectChanges(). Test <strong>@Output</strong> by spying on the EventEmitter's emit method and triggering the action that causes the emission. Verify the DOM updates for inputs and verify emit was called with the correct value for outputs.
<pre><code>it('should display name', () =&gt; {
  component.name = 'Batman';
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector('h1');
  expect(el.textContent).toContain('Batman');
});

it('should emit on click', () =&gt; {
  spyOn(component.selected, 'emit');
  fixture.nativeElement.querySelector('button').click();
  expect(component.selected.emit).toHaveBeenCalledWith(component.hero);
});</code></pre>
Always call <strong>fixture.detectChanges()</strong> after setting input values. Use <strong>spyOn</strong> to verify output emissions without subscribing.` },
            { q: "How do you mock a service in tests?", a: `Use <strong>jasmine.createSpyObj</strong> to create a mock service with spy methods. Configure the spy to return test data using <strong>and.returnValue()</strong>. Provide the mock in TestBed using the provide/useValue pattern. This isolates the component from its real dependencies for true unit testing.
<pre><code>const mockService = jasmine.createSpyObj('HeroService', ['getHeroes']);
mockService.getHeroes.and.returnValue(of([{ id: 1, name: 'Hero' }]));

TestBed.configureTestingModule({
  providers: [{ provide: HeroService, useValue: mockService }]
});</code></pre>
Always mock <strong>external dependencies</strong> like HTTP services and routers. Use <strong>of()</strong> from RxJS to return Observable mock data synchronously.` },
            { q: "What is fakeAsync and tick?", a: `<strong>fakeAsync</strong> wraps a test to control async operations synchronously. <strong>tick()</strong> simulates the passage of time in milliseconds. This lets you test debounced inputs, setTimeout, setInterval, and Observable delays without waiting. All async operations in the fakeAsync zone are executed synchronously.
<pre><code>it('should update after debounce', fakeAsync(() =&gt; {
  component.search('hello');
  tick(300); // Simulate 300ms debounce
  fixture.detectChanges();
  expect(component.results.length).toBe(3);
}));</code></pre>
Use <strong>flush()</strong> to drain all pending async operations instead of specifying exact timing. fakeAsync also supports <strong>flushMicrotasks()</strong> for Promise-based code.` },
            { q: "How do you test HTTP calls?", a: `Use <strong>HttpClientTestingModule</strong> and <strong>HttpTestingController</strong> to mock HTTP requests. The controller intercepts real HTTP calls and lets you verify the request and flush mock responses. Use <strong>expectOne()</strong> to assert a single request was made to a URL. Call <strong>flush()</strong> with mock data to simulate the server response.
<pre><code>let httpMock: HttpTestingController;

beforeEach(() =&gt; {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  });
  httpMock = TestBed.inject(HttpTestingController);
});

it('should fetch users', () =&gt; {
  service.getUsers().subscribe(users =&gt; expect(users.length).toBe(2));
  const req = httpMock.expectOne('/api/users');
  expect(req.request.method).toBe('GET');
  req.flush([{ name: 'A' }, { name: 'B' }]);
});</code></pre>
Call <strong>httpMock.verify()</strong> in afterEach to ensure no unexpected requests were made. Use <strong>expectNone()</strong> to verify no request was sent.` },
            { q: "How do you query DOM elements in tests?", a: `Query DOM elements using <strong>nativeElement.querySelector</strong> for CSS selectors or <strong>debugElement.query</strong> with By.css or By.directive predicates. Use queryAll for multiple matches. The <strong>debugElement</strong> provides Angular-specific features like triggerEventHandler and injector access.
<pre><code>// By CSS selector
const el = fixture.nativeElement.querySelector('.title');

// By directive
const debugEl = fixture.debugElement.query(By.css('app-child'));

// All matching
const items = fixture.debugElement.queryAll(By.css('li'));
expect(items.length).toBe(3);</code></pre>
Use <strong>By.directive()</strong> to find elements with a specific directive. The <strong>nativeElement</strong> gives you direct DOM access for simpler queries.` },
            { q: "What is fixture.detectChanges()?", a: `<strong>fixture.detectChanges()</strong> triggers change detection for the test component. In tests, Angular does not run change detection automatically, so you must call it after modifying component properties to update the DOM. Without calling it, the template will not reflect your changes and assertions will fail.
<pre><code>it('should show updated title', () =&gt; {
  component.title = 'Updated Title';
  // DOM still shows old value here
  fixture.detectChanges(); // NOW the DOM updates
  const el = fixture.nativeElement.querySelector('h1');
  expect(el.textContent).toContain('Updated Title');
});</code></pre>
Call detectChanges() after setting inputs, triggering events, or completing <strong>async operations</strong>. The first call also triggers <strong>ngOnInit</strong>.` },
            { q: "How do you test a pipe?", a: `Pipes are the simplest Angular constructs to test. Create a new instance directly without TestBed and call the <strong>transform</strong> method with test inputs. Since pipes are pure functions, they do not need dependency injection. Test both normal cases and <strong>edge cases</strong> like empty strings, null values, and boundary conditions.
<pre><code>describe('TruncatePipe', () =&gt; {
  const pipe = new TruncatePipe();

  it('should truncate long text', () =&gt; {
    expect(pipe.transform('Hello World', 5)).toBe('Hello...');
  });

  it('should not truncate short text', () =&gt; {
    expect(pipe.transform('Hi', 5)).toBe('Hi');
  });
});</code></pre>
Pipes with <strong>dependencies</strong> can be tested with TestBed using inject(). Pure pipes are especially easy to test since they have no side effects.` },
            { q: "How do you test a guard?", a: `Test guards by using <strong>TestBed.runInInjectionContext</strong> to execute the guard function with mock route and state. Mock the auth service to control the guard's behavior. Verify that the guard returns <strong>true</strong> for authorized users and <strong>UrlTree</strong> for unauthorized redirects.
<pre><code>it('should allow access for logged-in user', () =&gt; {
  authService.isLoggedIn.and.returnValue(true);
  const result = TestBed.runInInjectionContext(() =&gt; authGuard(mockRoute, mockState));
  expect(result).toBeTrue();
});

it('should redirect to login', () =&gt; {
  authService.isLoggedIn.and.returnValue(false);
  const result = TestBed.runInInjectionContext(() =&gt; authGuard(mockRoute, mockState));
  expect(result).toEqual(router.parseUrl('/login'));
});</code></pre>
For async guards, use <strong>fakeAsync</strong> and subscribe to the returned Observable. Test both success and failure paths for complete coverage.` },
            { q: "What is the difference between unit and integration tests?", a: `<strong>Unit tests</strong> test a single component or service in isolation with all dependencies mocked. <strong>Integration tests</strong> test how multiple components work together, often rendering child components and using real services. Unit tests are fast and focused while integration tests catch interaction bugs.
<pre><code>// Unit test: mock everything
TestBed.configureTestingModule({
  declarations: [ParentComponent],
  schemas: [NO_ERRORS_SCHEMA] // ignore child components
});

// Integration test: include real child components
TestBed.configureTestingModule({
  declarations: [ParentComponent, ChildComponent],
  providers: [RealService]
});</code></pre>
Use <strong>NO_ERRORS_SCHEMA</strong> in unit tests to ignore unknown child components. Integration tests provide more confidence but are slower to run.` },
                {
                    q: "How do you test a service in Angular?",
                    a: `Services are tested by creating them with <strong>TestBed</strong> and calling their methods. For services with dependencies like HttpClient, mock the dependencies using <strong>jasmine.createSpyObj</strong> or provide HttpClientTestingModule. Services without dependencies can be tested without TestBed by creating a new instance directly.
<pre><code>describe('CalculatorService', () =&gt; {
  let service: CalculatorService;

  beforeEach(() =&gt; {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () =&gt; {
    expect(service.add(2, 3)).toBe(5);
  });
});</code></pre>
Test the <strong>public API</strong> of the service including methods, return values, and side effects. Use <strong>TestBed.inject()</strong> to get the service instance.`
                },
                {
                    q: "How do you test a directive in Angular?",
                    a: `Directives are tested by creating a <strong>test host component</strong> that uses the directive in its template. Use TestBed to compile both the host component and the directive. Interact with the host element and verify the directive applied the expected behavior like changing styles or adding classes. This tests the directive in a <strong>realistic context</strong>.
<pre><code>@Component({ template: '&lt;p appHighlight&gt;Test&lt;/p&gt;' })
class TestHostComponent {}

describe('HighlightDirective', () =&gt; {
  it('should highlight on hover', () =&gt; {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestHostComponent]
    });
    const fixture = TestBed.createComponent(TestHostComponent);
    const el = fixture.debugElement.query(By.directive(HighlightDirective));
    el.triggerEventHandler('mouseenter', null);
    expect(el.nativeElement.style.backgroundColor).toBe('yellow');
  });
});</code></pre>
Use <strong>By.directive()</strong> to find the element with the directive. Use <strong>triggerEventHandler</strong> to simulate DOM events in tests.`
                },
                {
                    q: "What is the purpose of fixture.detectChanges()?",
                    a: `<strong>fixture.detectChanges()</strong> manually triggers change detection for the test component. In tests, Angular does not run change detection automatically like it does in a running application. You must call it after setting properties, triggering events, or when async operations complete. Without calling it, the template will not reflect your changes.
<pre><code>it('should display the title', () =&gt; {
  component.title = 'Hello';
  // DOM still shows old value
  fixture.detectChanges(); // NOW the DOM updates
  const el = fixture.nativeElement.querySelector('h1');
  expect(el.textContent).toContain('Hello');
});</code></pre>
The first call to detectChanges() triggers <strong>ngOnInit</strong>. Subsequent calls update the DOM with the latest property values.`
                },
                {
                    q: "How do you test components with async operations?",
                    a: `For async operations, use <strong>fakeAsync</strong> with <strong>tick()</strong>, waitForAsync, or async/await. fakeAsync lets you control time by simulating the passage of milliseconds. waitForAsync waits for all async operations to complete inside the zone. Use <strong>fixture.whenStable()</strong> to wait for pending async operations.
<pre><code>it('should load data', fakeAsync(() =&gt; {
  component.loadData();
  tick(1000); // simulate 1 second passing
  fixture.detectChanges();
  expect(component.data.length).toBeGreaterThan(0);
}));</code></pre>
Use <strong>flush()</strong> to drain all pending async operations instead of specifying exact timing. For HTTP calls, use <strong>HttpClientTestingModule</strong> to mock and flush requests synchronously.`
                },
                {
                    q: "How do you test router navigation in Angular?",
                    a: `Use <strong>RouterTestingModule</strong> to set up a mock router environment. Spy on <strong>Router.navigate</strong> to verify that components trigger navigation correctly. Use the <strong>Location</strong> service to verify the current URL after navigation. This lets you test navigation without actually loading route components.
<pre><code>beforeEach(() =&gt; {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [MyComponent]
  });
  router = TestBed.inject(Router);
  location = TestBed.inject(Location);
});

it('should navigate to login', () =&gt; {
  const navigateSpy = spyOn(router, 'navigate');
  component.logout();
  expect(navigateSpy).toHaveBeenCalledWith(['/login']);
});</code></pre>
For testing routed components, provide routes with <strong>RouterTestingModule.withRoutes()</strong>. Use <strong>spyOn</strong> to verify navigation calls.`
                }
            ]
        },
        {
            id: "performance-optimization", title: "Performance", icon: "bi-speedometer2",
            questions: [
            { q: "What is AOT compilation?", a: `<strong>Ahead-of-Time (AOT)</strong> compilation converts Angular HTML and TypeScript into JavaScript during the build step, rather than at runtime. This provides <strong>faster rendering</strong> because templates are pre-compiled. It also enables smaller bundles, fewer async requests, and catches template errors at build time. AOT is the default in production builds.
<pre><code>ng build --configuration production // AOT is default in production</code></pre>
AOT catches template errors like typos in property names before deployment. <strong>JIT (Just-in-Time)</strong> compiles at runtime and is used only during development.` },
            { q: "What is tree shaking?", a: `<strong>Tree shaking</strong> is a build optimization that eliminates unused code from the final bundle. The build tool analyzes import/export chains and removes code that is never referenced. Angular's <strong>providedIn: 'root'</strong> enables tree-shakable services where unused services are automatically removed. This significantly reduces bundle size.
<pre><code>// Tree-shakable service: removed if never injected
@Injectable({ providedIn: 'root' })
export class UnusedService { } // removed from bundle

// Not tree-shakable: always included
providers: [AlwaysIncludedService]</code></pre>
Use <strong>providedIn: 'root'</strong> instead of adding services to providers arrays. Import only what you need from libraries for better tree shaking.` },
            { q: "How does trackBy improve *ngFor performance?", a: `<strong>trackBy</strong> tells Angular how to identify items in a list, preventing unnecessary DOM destruction and re-creation. Without trackBy, Angular destroys and recreates all DOM elements when the array reference changes. With trackBy, Angular <strong>reuses existing DOM elements</strong> for items with the same identity. This dramatically improves performance for large lists.
<pre><code>&lt;li *ngFor="let item of items; trackBy: trackById"&gt;{{ item.name }}&lt;/li&gt;

trackById(index: number, item: Item): number {
  return item.id; // Angular reuses DOM for items with same id
}</code></pre>
Always use trackBy for lists that change frequently or contain many items. The <strong>track function</strong> should return a unique identifier like an id or key.` },
            { q: "What is lazy loading and how does it improve performance?", a: `<strong>Lazy loading</strong> defers loading of feature modules or components until they are actually needed, reducing <strong>initial bundle size</strong> and startup time. The code is split into separate chunks that are loaded on demand when the user navigates to a route. This means users only download the code they need. Both NgModule-based and standalone approaches support lazy loading.
<pre><code>{ path: 'admin', loadChildren: () =&gt; import('./admin/admin.module').then(m =&gt; m.AdminModule) }
// or standalone
{ path: 'admin', loadComponent: () =&gt; import('./admin.component').then(c =&gt; c.AdminComponent) }</code></pre>
Lazy loading is one of the most impactful performance optimizations. Combine with <strong>preloading strategies</strong> for instant navigation after initial load.` },
            { q: "What is virtual scrolling?", a: `<strong>Virtual scrolling</strong> (CDK) only renders items that are currently visible in the viewport, dramatically improving performance for large lists. Instead of rendering thousands of DOM elements, it creates just enough to fill the visible area. As the user scrolls, elements are <strong>recycled</strong> and re-rendered with new data. The itemSize specifies the height of each item in pixels.
<pre><code>&lt;cdk-virtual-scroll-viewport itemSize="50" class="viewport"&gt;
  &lt;div *cdkVirtualFor="let item of items"&gt;{{ item.name }}&lt;/div&gt;
&lt;/cdk-virtual-scroll-viewport&gt;</code></pre>
Import <strong>ScrollingModule</strong> from @angular/cdk/scrolling. Virtual scrolling can handle lists with hundreds of thousands of items smoothly.` },
            { q: "How do you analyze bundle size?", a: `Use the <strong>--stats-json</strong> flag to generate a webpack statistics file, then visualize it with <strong>webpack-bundle-analyzer</strong>. This generates a treemap showing which modules and dependencies are largest. It helps identify opportunities for <strong>lazy loading</strong>, removing unused dependencies, and reducing bundle bloat.
<pre><code>ng build --stats-json
npx webpack-bundle-analyzer dist/my-app/stats.json</code></pre>
The analyzer shows a visual treemap of your bundle. Look for unexpectedly large dependencies and consider <strong>dynamic imports</strong> or lighter alternatives.` },
            { q: "What are preloading strategies?", a: `<strong>Preloading strategies</strong> load lazy modules in the background after the initial app has loaded. This gives the bundle size benefits of lazy loading with the <strong>instant navigation</strong> of eager loading. <strong>PreloadAllModules</strong> preloads everything. Custom strategies or QuicklinkStrategy preload only visible or likely routes.
<pre><code>RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
// or QuicklinkStrategy for only visible links</code></pre>
Preloading happens during <strong>idle time</strong> so it does not affect initial load performance. Use custom strategies to prioritize which modules to preload first.` },
            { q: "How does the async pipe help performance?", a: `The <strong>async pipe</strong> automatically subscribes and unsubscribes from Observables, preventing <strong>memory leaks</strong>. With OnPush change detection, it calls markForCheck() automatically, enabling efficient updates. It eliminates the need to manually manage subscriptions in the component.
<pre><code>// Template: auto-subscribes and unsubscribes
&lt;div *ngIf="data$ | async as data"&gt;
  &lt;p&gt;{{ data.name }}&lt;/p&gt;
&lt;/div&gt;

// Component: no subscribe/unsubscribe needed
data$ = this.http.get&lt;User&gt;('/api/user');</code></pre>
The async pipe is the <strong>recommended way</strong> to consume Observables in templates. It reduces boilerplate and prevents common memory leak bugs.` },
            { q: "What is @defer in Angular 17?", a: `<strong>@defer</strong> enables declarative lazy loading of template blocks in Angular 17+. The deferred content loads only when a trigger condition is met like <strong>viewport visibility</strong>, user interaction, or a timer. It automatically splits deferred components into separate bundles. Define placeholder, loading, and error states for a smooth experience.
<pre><code>@defer (on viewport) {
  &lt;app-heavy-chart [data]="data" /&gt;
} @placeholder {
  &lt;div&gt;Loading chart...&lt;/div&gt;
} @loading (minimum 500ms) {
  &lt;app-spinner /&gt;
}</code></pre>
@defer triggers include <strong>on viewport</strong>, on interaction, on hover, on idle, and on timer. It reduces initial bundle size by deferring heavy components.` },
            { q: "What is image optimization with NgOptimizedImage?", a: `<strong>NgOptimizedImage</strong> directive optimizes image loading with lazy loading, priority hints, and srcset for responsive images. It enforces best practices by requiring <strong>width and height</strong> attributes to prevent layout shift. Non-priority images automatically get <strong>loading="lazy"</strong>. Mark above-the-fold images with the priority attribute.
<pre><code>&lt;img ngSrc="hero.jpg" width="400" height="300" priority /&gt;</code></pre>
NgOptimizedImage can integrate with image CDNs for automatic format conversion and resizing. Using it correctly improves <strong>Core Web Vitals</strong> scores.` },
                {
                    q: "What is the @defer block in Angular 17?",
                    a: `<strong>@defer</strong> enables declarative lazy loading of template sections. The deferred content loads only when a specified <strong>trigger condition</strong> is met like viewport visibility, user interaction, or a timer. This reduces the initial bundle size because deferred components are split into <strong>separate chunks</strong>. Define placeholder, loading, and error states.
<pre><code>@defer (on viewport) {
  &lt;app-heavy-chart [data]="chartData" /&gt;
} @placeholder {
  &lt;div&gt;Chart will load here&lt;/div&gt;
} @loading (minimum 500ms) {
  &lt;app-spinner /&gt;
} @error {
  &lt;p&gt;Failed to load chart&lt;/p&gt;
}</code></pre>
The @placeholder shows before loading starts. The @loading block appears during the download. <strong>minimum</strong> prevents flicker by ensuring the loading state shows for a minimum duration.`
                },
                {
                    q: "How does pure pipe caching help performance?",
                    a: `<strong>Pure pipes</strong> (default) are only re-evaluated when the input value changes by <strong>reference</strong>. Angular caches the result and reuses it as long as the input reference stays the same. This is very efficient because change detection runs frequently but the pipe transform only executes when needed. <strong>Impure pipes</strong> run on every change detection cycle.
<pre><code>// Pure pipe: only runs when 'value' reference changes
@Pipe({ name: 'expensive', pure: true })
export class ExpensivePipe implements PipeTransform {
  transform(value: Data[]): Data[] {
    return value.filter(item =&gt; item.active).sort((a, b) =&gt; a.name.localeCompare(b.name));
  }
}</code></pre>
Using pure pipes with <strong>immutable data patterns</strong> gives you free memoization. Always prefer pure pipes and create new array/object references when data changes.`
                },
                {
                    q: "What is server-side rendering (SSR) in Angular?",
                    a: `<strong>Angular Universal</strong> enables SSR where the application is pre-rendered on the server into HTML before being sent to the browser. This improves <strong>First Contentful Paint</strong> because users see content immediately without waiting for JavaScript to download. It also improves <strong>SEO</strong> because search engines can crawl the pre-rendered HTML.
<pre><code>// Angular 17+ SSR setup
ng add @angular/ssr

// app.config.server.ts
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};</code></pre>
After the initial render, Angular <strong>hydrates</strong> the page on the client side, attaching event listeners and making it interactive. SSR is essential for content-heavy and SEO-dependent applications.`
                },
                {
                    q: "How does NgOptimizedImage improve performance?",
                    a: `<strong>NgOptimizedImage</strong> enforces image loading best practices automatically. It adds <strong>lazy loading</strong> for non-priority images, generates proper srcset attributes for responsive images, and prevents <strong>layout shift</strong> by requiring width and height. It marks above-the-fold images as priority for preloading.
<pre><code>import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  template: '&lt;img ngSrc="hero.jpg" width="800" height="400" priority /&gt;' +
    '&lt;img ngSrc="photo.jpg" width="400" height="300" /&gt;'
})
export class GalleryComponent { }</code></pre>
It can integrate with image <strong>CDNs</strong> for automatic optimization and format conversion. Using it correctly improves <strong>Core Web Vitals</strong> scores significantly.`
                },
                {
                    q: "What is the difference between lazy loading and preloading?",
                    a: `<strong>Lazy loading</strong> defers loading of a module or component until the user actually navigates to its route, which can cause a small delay. <strong>Preloading</strong> loads lazy modules in the background after the initial application has loaded, so they are already available when the user navigates. Preloading gives the bundle size benefits of lazy loading with the instant navigation of <strong>eager loading</strong>.
<pre><code>// Lazy loading: loaded only on navigation
{ path: 'admin', loadComponent: () =&gt; import('./admin.component') }

// With preloading: loaded in background after app starts
RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})</code></pre>
Use <strong>PreloadAllModules</strong> for small apps or a <strong>custom strategy</strong> for larger apps to prioritize which modules to preload first.`
                }
            ]
        }
]
};
