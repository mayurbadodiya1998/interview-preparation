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
                    a: `A component is the fundamental building block of Angular applications. It controls a portion of the screen called a view and consists of a TypeScript class, an HTML template, and optional CSS styles.
<pre><code>@Component({
  selector: 'app-hello',
  template: '&lt;h1&gt;Hello, {{name}}!&lt;/h1&gt;',
  styles: ['h1 { color: blue; }']
})
export class HelloComponent {
  name = 'Angular';
}</code></pre>
Every Angular app has at least one root component that connects the component tree to the DOM.`
                },
                {
                    q: "What does the @Component decorator do?",
                    a: `The @Component decorator marks a class as an Angular component and provides configuration metadata that tells Angular how to create and use the component.
<pre><code>@Component({
  selector: 'app-user',       // HTML tag name
  templateUrl: './user.component.html',  // external template
  styleUrls: ['./user.component.css'],   // external styles
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent { }</code></pre>
Key metadata properties include <strong>selector</strong>, <strong>template/templateUrl</strong>, <strong>styles/styleUrls</strong>, <strong>changeDetection</strong>, and <strong>encapsulation</strong>.`
                },
                {
                    q: "How does component communication work with @Input and @Output?",
                    a: `@Input allows a parent component to pass data down to a child. @Output lets the child emit events back to the parent using an EventEmitter.
<pre><code>// Child component
@Component({ selector: 'app-child', template: '&lt;button (click)="send()"&gt;Send&lt;/button&gt;' })
export class ChildComponent {
  @Input() message: string = '';
  @Output() notify = new EventEmitter&lt;string&gt;();
  send() { this.notify.emit('Hello from child'); }
}

// Parent template
// &lt;app-child [message]="parentMsg" (notify)="onNotify($event)"&gt;&lt;/app-child&gt;</code></pre>
This is the primary mechanism for parent-child component interaction in Angular.`
                },
                {
                    q: "What is View Encapsulation in Angular?",
                    a: `View Encapsulation defines how styles defined in a component are scoped. Angular supports three encapsulation modes.
<pre><code>@Component({
  selector: 'app-demo',
  template: '&lt;p&gt;Styled text&lt;/p&gt;',
  styles: ['p { color: red; }'],
  encapsulation: ViewEncapsulation.Emulated // default
})
export class DemoComponent { }</code></pre>
<strong>Emulated</strong> (default): Emulates shadow DOM by adding unique attributes. <strong>ShadowDom</strong>: Uses native Shadow DOM. <strong>None</strong>: No encapsulation; styles are global. Use <code>None</code> cautiously as it leaks styles to the entire application.`
                },
                {
                    q: "What is content projection in Angular?",
                    a: `Content projection allows you to insert external content into a component's template using the &lt;ng-content&gt; tag. It is Angular's version of "slots."
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
Multi-slot projection uses the <strong>select</strong> attribute on ng-content to target specific projected elements.`
                },
                {
                    q: "How do you create dynamic components in Angular?",
                    a: `Dynamic components are created programmatically at runtime using ViewContainerRef. Since Angular 13+, you no longer need ComponentFactoryResolver.
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
This pattern is useful for modals, tabs, or plugin-based architectures where components are loaded on demand.`
                },
                {
                    q: "What are the key lifecycle hooks of a component?",
                    a: `Angular components have a defined lifecycle managed by Angular. The most important hooks are:
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
The full order is: <strong>ngOnChanges</strong> &rarr; <strong>ngOnInit</strong> &rarr; <strong>ngDoCheck</strong> &rarr; <strong>ngAfterContentInit</strong> &rarr; <strong>ngAfterContentChecked</strong> &rarr; <strong>ngAfterViewInit</strong> &rarr; <strong>ngAfterViewChecked</strong> &rarr; <strong>ngOnDestroy</strong>.`
                },
                {
                    q: "What is the difference between inline and external templates?",
                    a: `Inline templates are defined directly in the @Component decorator using the <strong>template</strong> property; external templates use a separate HTML file via <strong>templateUrl</strong>.
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
Inline is convenient for small templates. External is preferred for larger, more complex views as it keeps concerns separated and improves readability.`
                },
                {
                    q: "What are standalone components in Angular?",
                    a: `Standalone components, introduced in Angular 14+, do not need to be declared in an NgModule. They manage their own dependencies via the <strong>imports</strong> array in the decorator.
<pre><code>@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '&lt;p *ngIf="show"&gt;I am standalone!&lt;/p&gt;'
})
export class StandaloneComponent {
  show = true;
}</code></pre>
Standalone components simplify the architecture by removing the need for NgModules. They can be bootstrapped directly and lazy-loaded individually.`
                },
                {
                    q: "How do you use template reference variables in Angular?",
                    a: `Template reference variables provide a reference to a DOM element, component, or directive within the template. They are declared with the <strong>#</strong> syntax.
<pre><code>&lt;input #nameInput type="text" /&gt;
&lt;button (click)="greet(nameInput.value)"&gt;Greet&lt;/button&gt;

&lt;!-- Reference to a child component --&gt;
&lt;app-timer #timer&gt;&lt;/app-timer&gt;
&lt;button (click)="timer.start()"&gt;Start Timer&lt;/button&gt;</code></pre>
You can also access template references programmatically using <strong>@ViewChild</strong>:
<pre><code>@ViewChild('nameInput') input!: ElementRef;
ngAfterViewInit() { this.input.nativeElement.focus(); }</code></pre>`
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
                    a: `Angular supports four types of data binding that connect the component class to its template:
<pre><code>&lt;!-- 1. Interpolation (one-way: component to view) --&gt;
&lt;p&gt;{{ title }}&lt;/p&gt;

&lt;!-- 2. Property binding (one-way: component to view) --&gt;
&lt;img [src]="imageUrl" /&gt;

&lt;!-- 3. Event binding (one-way: view to component) --&gt;
&lt;button (click)="onClick()"&gt;Click&lt;/button&gt;

&lt;!-- 4. Two-way binding (both directions) --&gt;
&lt;input [(ngModel)]="name" /&gt;</code></pre>
Interpolation and property binding flow data from component to view. Event binding flows from view to component. Two-way binding combines both using the banana-in-a-box syntax.`
                },
                {
                    q: "What is interpolation in Angular?",
                    a: `Interpolation uses double curly braces <strong>{{ }}</strong> to embed expressions in the template. Angular evaluates the expression and converts the result to a string.
<pre><code>@Component({
  selector: 'app-greet',
  template: '&lt;h1&gt;Welcome, {{ fullName }}!&lt;/h1&gt;&lt;p&gt;2 + 2 = {{ 2 + 2 }}&lt;/p&gt;'
})
export class GreetComponent {
  firstName = 'John';
  lastName = 'Doe';
  get fullName() { return this.firstName + ' ' + this.lastName; }
}</code></pre>
Interpolation supports simple expressions, method calls, and property access, but does not support assignments, chaining with semicolons, or using <strong>new</strong>.`
                },
                {
                    q: "How does property binding work in Angular?",
                    a: `Property binding sets a DOM element property or a directive/component input to the value of a component expression using square bracket syntax.
<pre><code>&lt;!-- Bind to element property --&gt;
&lt;img [src]="imageUrl" [alt]="imageAlt" /&gt;

&lt;!-- Bind to component input --&gt;
&lt;app-child [user]="currentUser"&gt;&lt;/app-child&gt;

&lt;!-- Bind to disabled property --&gt;
&lt;button [disabled]="isSubmitting"&gt;Submit&lt;/button&gt;</code></pre>
Property binding is one-way from the component to the DOM. Unlike interpolation, it can bind non-string values such as booleans, objects, and arrays directly without conversion.`
                },
                {
                    q: "How does event binding work in Angular?",
                    a: `Event binding listens for DOM events and calls a component method when the event fires. It uses parentheses syntax around the event name.
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
The special <strong>$event</strong> variable provides access to the raw DOM event object. Angular also supports key event filtering like <strong>(keyup.enter)</strong>.`
                },
                {
                    q: "What is two-way data binding and how does ngModel work?",
                    a: `Two-way binding synchronizes data between the component and the view. The <strong>[(ngModel)]</strong> directive combines property binding and event binding.
<pre><code>&lt;!-- Requires FormsModule --&gt;
&lt;input [(ngModel)]="username" /&gt;
&lt;p&gt;Hello, {{ username }}&lt;/p&gt;

&lt;!-- Equivalent expanded form --&gt;
&lt;input [ngModel]="username" (ngModelChange)="username = $event" /&gt;</code></pre>
To use ngModel, import <strong>FormsModule</strong> in your module:
<pre><code>import { FormsModule } from '@angular/forms';
@NgModule({ imports: [FormsModule] })
export class AppModule { }</code></pre>
The banana-in-a-box syntax <strong>[()]</strong> is a shorthand for a property binding input and an event binding output together.`
                },
                {
                    q: "What is the difference between binding to attributes vs properties?",
                    a: `Property binding sets a DOM <strong>property</strong>, while attribute binding sets an HTML <strong>attribute</strong>. Most of the time they overlap, but some attributes have no corresponding DOM property (e.g., colspan, aria-*).
<pre><code>&lt;!-- Property binding (sets the DOM property) --&gt;
&lt;input [value]="name" /&gt;

&lt;!-- Attribute binding (sets the HTML attribute) --&gt;
&lt;td [attr.colspan]="colSpan"&gt;Merged&lt;/td&gt;
&lt;div [attr.aria-label]="label"&gt;Accessible&lt;/div&gt;
&lt;table&gt;
  &lt;tr [attr.data-id]="rowId"&gt;...&lt;/tr&gt;
&lt;/table&gt;</code></pre>
Use <strong>[attr.name]</strong> prefix when you need to bind to an HTML attribute that has no corresponding DOM property. Properties reflect the current state; attributes reflect the initial HTML value.`
                },
                {
                    q: "How do style and class binding work in Angular?",
                    a: `Angular provides shorthand syntax for binding CSS classes and inline styles to elements.
<pre><code>&lt;!-- Single class binding --&gt;
&lt;div [class.active]="isActive"&gt;Tab&lt;/div&gt;

&lt;!-- Multiple classes with ngClass --&gt;
&lt;div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }"&gt;Item&lt;/div&gt;

&lt;!-- Single style binding --&gt;
&lt;div [style.color]="textColor"&gt;Styled&lt;/div&gt;
&lt;div [style.font-size.px]="fontSize"&gt;Sized&lt;/div&gt;

&lt;!-- Multiple styles with ngStyle --&gt;
&lt;div [ngStyle]="{ 'color': textColor, 'font-weight': isBold ? 'bold' : 'normal' }"&gt;Text&lt;/div&gt;</code></pre>
Class binding toggles a single CSS class based on a boolean. Style binding sets individual style properties with optional unit suffixes like <strong>.px</strong>, <strong>.em</strong>, or <strong>.%</strong>.`
                },
                {
                    q: "What are template expressions and their limitations?",
                    a: `Template expressions are the code snippets inside interpolation {{ }} or binding brackets [ ] that Angular evaluates to produce a value.
<pre><code>&lt;!-- Valid template expressions --&gt;
&lt;p&gt;{{ user.name }}&lt;/p&gt;
&lt;p&gt;{{ items.length &gt; 0 ? 'Has items' : 'Empty' }}&lt;/p&gt;
&lt;p&gt;{{ getTotal() }}&lt;/p&gt;
&lt;img [src]="getImageUrl(product.id)" /&gt;</code></pre>
<strong>Limitations:</strong> Template expressions cannot use assignments (=), the <strong>new</strong> keyword, chaining with semicolons, increment/decrement operators (++ / --), or bitwise operators. They should be simple, fast, and side-effect free because Angular evaluates them on every change detection cycle.`
                },
                {
                    q: "What is the banana-in-a-box syntax?",
                    a: `The banana-in-a-box <strong>[( )]</strong> syntax is Angular's shorthand for two-way data binding. It combines property binding [ ] (the box) with event binding ( ) (the banana).
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
For custom two-way binding, the convention is an @Input named <strong>x</strong> paired with an @Output named <strong>xChange</strong>. Angular then automatically wires up the [( )] syntax.`
                },
                {
                    q: "How does Angular handle null and undefined values in binding?",
                    a: `Angular provides the safe navigation operator <strong>?.</strong> and the nullish coalescing operator <strong>??</strong> to handle null/undefined values in templates gracefully.
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
The safe navigation operator short-circuits when it encounters null or undefined, rendering nothing instead of throwing an error. This is especially useful when data loads asynchronously.`
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
                    a: `Angular has three types of directives: <strong>Component directives</strong> (components with templates), <strong>Structural directives</strong> (change DOM layout by adding/removing elements), and <strong>Attribute directives</strong> (change appearance or behavior of an element).
<pre><code>&lt;!-- Structural directive: adds/removes DOM elements --&gt;
&lt;div *ngIf="isVisible"&gt;Shown conditionally&lt;/div&gt;

&lt;!-- Attribute directive: modifies element behavior/appearance --&gt;
&lt;div [ngClass]="{'highlight': isActive}"&gt;Styled&lt;/div&gt;

&lt;!-- Component directive: component with a template --&gt;
&lt;app-header&gt;&lt;/app-header&gt;</code></pre>
Structural directives are prefixed with an asterisk (*) which is syntactic sugar for an ng-template. Attribute directives are applied like HTML attributes.`
                },
                {
                    q: "How does *ngIf work in Angular?",
                    a: `<strong>*ngIf</strong> is a structural directive that conditionally adds or removes an element from the DOM based on a truthy/falsy expression.
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
Unlike hiding with CSS, *ngIf completely removes the element and its subtree from the DOM when false, which saves resources for complex components.`
                },
                {
                    q: "How does *ngFor work and what is trackBy?",
                    a: `<strong>*ngFor</strong> repeats an element for each item in a collection. The <strong>trackBy</strong> function improves performance by helping Angular identify which items changed.
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
Without trackBy, Angular destroys and recreates all DOM elements on every change. With trackBy, Angular only re-renders items whose tracked identity changed, significantly improving list performance.`
                },
                {
                    q: "How does *ngSwitch work?",
                    a: `<strong>*ngSwitch</strong> is a set of directives that switches between alternative views based on a value, similar to a JavaScript switch statement.
<pre><code>&lt;div [ngSwitch]="userRole"&gt;
  &lt;p *ngSwitchCase="'admin'"&gt;Admin Dashboard&lt;/p&gt;
  &lt;p *ngSwitchCase="'editor'"&gt;Editor Panel&lt;/p&gt;
  &lt;p *ngSwitchCase="'viewer'"&gt;View Only Mode&lt;/p&gt;
  &lt;p *ngSwitchDefault&gt;Unknown Role&lt;/p&gt;
&lt;/div&gt;</code></pre>
<strong>[ngSwitch]</strong> is an attribute directive that binds the expression. <strong>*ngSwitchCase</strong> and <strong>*ngSwitchDefault</strong> are structural directives that add/remove elements. Multiple cases can match, and ngSwitchDefault handles unmatched values.`
                },
                {
                    q: "How do ngClass and ngStyle directives work?",
                    a: `<strong>ngClass</strong> dynamically adds/removes CSS classes. <strong>ngStyle</strong> dynamically sets inline styles. Both accept objects, arrays, or expressions.
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
Prefer single class/style bindings like <strong>[class.active]="isActive"</strong> for simple cases. Use ngClass/ngStyle when you need to manage multiple dynamic classes or styles at once.`
                },
                {
                    q: "How do you create a custom attribute directive?",
                    a: `A custom attribute directive modifies the behavior or appearance of an element. Create it with @Directive and inject ElementRef to access the host element.
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

// Usage: &lt;p appHighlight="cyan"&gt;Hover me&lt;/p&gt;</code></pre>`
                },
                {
                    q: "How do you create a custom structural directive?",
                    a: `A custom structural directive manipulates the DOM by adding or removing elements. It uses TemplateRef and ViewContainerRef to control rendering.
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

// Usage: &lt;p *appUnless="isHidden"&gt;Visible when not hidden&lt;/p&gt;</code></pre>`
                },
                {
                    q: "What is @HostListener and how is it used?",
                    a: `<strong>@HostListener</strong> is a decorator that subscribes to events on the host element of a directive or component. It replaces manual addEventListener calls.
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
You can listen to host element events, document events, or window events. Arguments are passed using the array notation in the second parameter.`
                },
                {
                    q: "What is @HostBinding and how is it used?",
                    a: `<strong>@HostBinding</strong> binds a directive or component property to a property, attribute, or class of its host element.
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
@HostBinding is commonly paired with @HostListener to create interactive directives that respond to events and update the host element's appearance.`
                },
                {
                    q: "What is the difference between structural and attribute directives?",
                    a: `<strong>Structural directives</strong> change the DOM layout by adding, removing, or replacing elements. <strong>Attribute directives</strong> change the appearance or behavior of an existing element without modifying the structure.
<pre><code>&lt;!-- Structural: changes DOM structure (prefixed with *) --&gt;
&lt;div *ngIf="show"&gt;Conditionally rendered&lt;/div&gt;
&lt;li *ngFor="let item of list"&gt;{{ item }}&lt;/li&gt;

&lt;!-- Attribute: changes element behavior/look --&gt;
&lt;div [ngClass]="{'active': isActive}"&gt;Styled div&lt;/div&gt;
&lt;input [ngModel]="value" /&gt;
&lt;p appHighlight&gt;Custom directive&lt;/p&gt;</code></pre>
Key difference: You can only apply <strong>one</strong> structural directive per element. If you need multiple, wrap them in ng-container elements. Attribute directives can be combined freely on a single element.`
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
                    a: `Pipes are simple functions used in templates to transform displayed values. They accept an input value and return a transformed output, using the pipe <strong>|</strong> operator.
<pre><code>&lt;!-- Built-in pipes --&gt;
&lt;p&gt;{{ 'hello world' | uppercase }}&lt;/p&gt;        &lt;!-- HELLO WORLD --&gt;
&lt;p&gt;{{ today | date:'fullDate' }}&lt;/p&gt;           &lt;!-- Wednesday, March 25, 2026 --&gt;
&lt;p&gt;{{ price | currency:'USD' }}&lt;/p&gt;            &lt;!-- $29.99 --&gt;
&lt;p&gt;{{ user | json }}&lt;/p&gt;                       &lt;!-- {"name":"John"} --&gt;</code></pre>
Angular provides several built-in pipes: DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe, AsyncPipe, and KeyValuePipe.`
                },
                {
                    q: "How does the DatePipe work?",
                    a: `The <strong>DatePipe</strong> formats a date value according to locale rules and a format string.
<pre><code>&lt;p&gt;{{ myDate | date }}&lt;/p&gt;                    &lt;!-- Mar 25, 2026 --&gt;
&lt;p&gt;{{ myDate | date:'short' }}&lt;/p&gt;             &lt;!-- 3/25/26, 10:30 AM --&gt;
&lt;p&gt;{{ myDate | date:'fullDate' }}&lt;/p&gt;          &lt;!-- Wednesday, March 25, 2026 --&gt;
&lt;p&gt;{{ myDate | date:'yyyy-MM-dd HH:mm' }}&lt;/p&gt; &lt;!-- 2026-03-25 10:30 --&gt;
&lt;p&gt;{{ myDate | date:'EEEE' }}&lt;/p&gt;              &lt;!-- Wednesday --&gt;

// In the component
export class AppComponent {
  myDate = new Date();
}</code></pre>
Common format tokens: <strong>y</strong> (year), <strong>M</strong> (month), <strong>d</strong> (day), <strong>H</strong> (hour 24h), <strong>h</strong> (hour 12h), <strong>m</strong> (minute), <strong>s</strong> (second). You can also pass timezone and locale parameters.`
                },
                {
                    q: "How does the CurrencyPipe work?",
                    a: `The <strong>CurrencyPipe</strong> formats a number as a currency string based on locale and currency code.
<pre><code>&lt;p&gt;{{ 1234.5 | currency }}&lt;/p&gt;               &lt;!-- $1,234.50 --&gt;
&lt;p&gt;{{ 1234.5 | currency:'EUR' }}&lt;/p&gt;          &lt;!-- &euro;1,234.50 --&gt;
&lt;p&gt;{{ 1234.5 | currency:'GBP':'symbol' }}&lt;/p&gt; &lt;!-- &pound;1,234.50 --&gt;
&lt;p&gt;{{ 1234.5 | currency:'USD':'code' }}&lt;/p&gt;   &lt;!-- USD1,234.50 --&gt;
&lt;p&gt;{{ 99.9 | currency:'INR':'symbol':'1.0-0' }}&lt;/p&gt; &lt;!-- &#8377;100 --&gt;</code></pre>
Parameters: <strong>currencyCode</strong> (ISO 4217), <strong>display</strong> ('code', 'symbol', or 'symbol-narrow'), and <strong>digitsInfo</strong> (format: minIntegerDigits.minFractionDigits-maxFractionDigits).`
                },
                {
                    q: "What is the AsyncPipe and why is it useful?",
                    a: `The <strong>AsyncPipe</strong> subscribes to an Observable or Promise and returns the latest emitted value. It automatically unsubscribes when the component is destroyed, preventing memory leaks.
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
AsyncPipe handles subscription, value extraction, and cleanup automatically. It also marks the component for change detection when new values arrive. This eliminates the need for manual subscribe/unsubscribe patterns.`
                },
                {
                    q: "How do you create a custom pipe?",
                    a: `Create a class decorated with <strong>@Pipe</strong> that implements the <strong>PipeTransform</strong> interface and its transform method.
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
Custom pipes must be declared in an NgModule's declarations array (or marked standalone) before use. The first argument to transform is the value being piped; subsequent arguments correspond to parameters passed after colons.`
                },
                {
                    q: "What is the difference between pure and impure pipes?",
                    a: `A <strong>pure pipe</strong> (default) only re-evaluates when its input value or parameters change by reference. An <strong>impure pipe</strong> runs on every change detection cycle.
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
Pure pipes are more performant. Impure pipes detect changes within objects/arrays but can cause performance issues. Use impure pipes sparingly and with caution.`
                },
                {
                    q: "How do you chain multiple pipes?",
                    a: `Pipes can be chained by using multiple pipe operators. Each pipe receives the output of the previous pipe as its input.
<pre><code>&lt;!-- Chain pipes: applied left to right --&gt;
&lt;p&gt;{{ birthday | date:'fullDate' | uppercase }}&lt;/p&gt;
&lt;!-- Output: WEDNESDAY, MARCH 25, 2026 --&gt;

&lt;p&gt;{{ longText | truncate:100 | lowercase }}&lt;/p&gt;

&lt;p&gt;{{ amount | currency:'USD' | slice:0:5 }}&lt;/p&gt;

&lt;!-- Order matters --&gt;
&lt;p&gt;{{ 'hello world' | uppercase | slice:0:5 }}&lt;/p&gt;  &lt;!-- HELLO --&gt;
&lt;p&gt;{{ 'hello world' | slice:0:5 | uppercase }}&lt;/p&gt;  &lt;!-- HELLO --&gt;</code></pre>
The execution order is left to right. The output of each pipe becomes the input of the next. Chaining makes it easy to compose multiple transformations in a readable way.`
                },
                {
                    q: "How does the KeyValuePipe work?",
                    a: `The <strong>KeyValuePipe</strong> transforms an Object or Map into an array of key-value pairs, making it possible to iterate over object properties with *ngFor.
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
By default, KeyValuePipe sorts entries by key. You can pass a custom comparator function to control the order: <strong>{{ map | keyvalue:customCompare }}</strong>.`
                },
                {
                    q: "How does the SlicePipe work?",
                    a: `The <strong>SlicePipe</strong> creates a subset of an array or string, similar to JavaScript's Array.prototype.slice() method.
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
SlicePipe takes a start index and optional end index. Negative indices count from the end. It is pure, so it only recalculates when the input reference or parameters change.`
                },
                {
                    q: "How do parameterized pipes work?",
                    a: `Pipes accept parameters after a colon <strong>:</strong> in the template. Multiple parameters are separated by additional colons.
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
In the transform method, the first argument is always the piped value. Additional arguments map to the colon-separated parameters in order. Default values can be assigned in the method signature.`
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
                    a: `A service is a class that encapsulates reusable business logic, data access, or utility functions. Services promote separation of concerns by keeping logic out of components.
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
Services are typically injected into components, directives, pipes, or other services via Angular's dependency injection system. They are the recommended place for HTTP calls, state management, and shared logic.`
                },
                {
                    q: "What does the @Injectable decorator do?",
                    a: `The <strong>@Injectable</strong> decorator marks a class as available for dependency injection and optionally specifies where it should be provided.
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
Using <strong>providedIn: 'root'</strong> is recommended because it makes the service a singleton across the app and enables tree-shaking (unused services are removed from the bundle).`
                },
                {
                    q: "What does providedIn: 'root' mean?",
                    a: `<strong>providedIn: 'root'</strong> registers the service in the application's root injector, making it a singleton available throughout the entire application.
<pre><code>@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = [];

  addItem(product: Product) { this.items.push(product); }
  getItems() { return this.items; }
  getTotal() { return this.items.reduce((sum, p) =&gt; sum + p.price, 0); }
}</code></pre>
Benefits of providedIn root: <strong>1)</strong> The service is a singleton shared across all components. <strong>2)</strong> It is tree-shakable; if no component injects it, it is excluded from the bundle. <strong>3)</strong> No need to add it to any module's providers array. Alternative values include <strong>'platform'</strong>, <strong>'any'</strong>, or a specific module class.`
                },
                {
                    q: "What is the hierarchical injector system?",
                    a: `Angular uses a hierarchical dependency injection system with multiple injector levels. Each level can provide its own instance of a service.
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
When a component requests a dependency, Angular looks up the injector tree: component &rarr; parent component &rarr; module &rarr; root. The first matching provider wins. Component-level providers create new instances per component.`
                },
                {
                    q: "What are injection tokens in Angular?",
                    a: `An <strong>InjectionToken</strong> is used to provide non-class dependencies (like configuration values, strings, or interfaces) via dependency injection.
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
InjectionTokens prevent naming collisions when multiple providers use simple types. They are essential for injecting interfaces, primitives, and configuration objects.`
                },
                {
                    q: "What are useClass, useValue, useFactory, and useExisting?",
                    a: `These are provider configuration options that control how Angular resolves a dependency.
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
<strong>useClass</strong> creates a new instance. <strong>useValue</strong> provides a constant. <strong>useFactory</strong> runs a function to resolve the dependency. <strong>useExisting</strong> creates an alias to an already-registered provider.`
                },
                {
                    q: "What are multi providers?",
                    a: `Multi providers allow multiple values to be registered under the same token. Angular collects all values into an array when injected.
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
The <strong>multi: true</strong> flag tells Angular to add the provider to a collection rather than replacing previous providers. Angular uses this internally for HTTP_INTERCEPTORS.`
                },
                {
                    q: "How do you handle optional dependencies?",
                    a: `The <strong>@Optional</strong> decorator tells Angular to return null instead of throwing an error if a dependency is not found.
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
Without @Optional, Angular throws a NullInjectorError if the service is not provided. This is useful for plugins or optional features that may not always be registered.`
                },
                {
                    q: "What do @Self, @SkipSelf, and @Host decorators do?",
                    a: `These decorators control how far Angular searches the injector hierarchy when resolving a dependency.
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
<strong>@Self()</strong> restricts lookup to the current injector. <strong>@SkipSelf()</strong> starts lookup from the parent injector. <strong>@Host()</strong> stops lookup at the host component boundary. These are often combined with @Optional to avoid errors when a provider is not found at the restricted scope.`
                },
                {
                    q: "What are tree-shakable providers?",
                    a: `Tree-shakable providers are services that can be removed from the final bundle if no component or service injects them. They are created by using <strong>providedIn</strong> in the @Injectable decorator.
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
When a service uses <strong>providedIn: 'root'</strong>, the service references the injector rather than the injector referencing the service. This inverted dependency allows bundlers to tree-shake services that nothing imports.`
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
                    a: `The RouterModule is configured with route definitions and imported into the root module using <strong>forRoot()</strong>.
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
                    a: `Route parameters are defined with a colon prefix in the route path. They are accessed via the <strong>ActivatedRoute</strong> service.
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
Use the observable approach when the same component may be reused with different parameters (e.g., navigating from user/1 to user/2).`
                },
                {
                    q: "How do query parameters work in Angular routing?",
                    a: `Query parameters are optional key-value pairs appended to the URL after a <strong>?</strong> symbol. They are independent of the route path.
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
                    a: `The <strong>Router</strong> service provides methods for programmatic navigation: <strong>navigate()</strong> and <strong>navigateByUrl()</strong>.
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
                    a: `Lazy loading defers the loading of a feature module until the user navigates to its route. This reduces the initial bundle size and improves startup time.
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
                    a: `Child routes are nested routes rendered inside a parent component's &lt;router-outlet&gt;. They are defined with the <strong>children</strong> property.
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
The parent component must contain its own &lt;router-outlet&gt; to display child route components. Child routes inherit the parent's path prefix, so 'users' becomes '/admin/users'.`
                },
                {
                    q: "What is a wildcard route and how is it used?",
                    a: `A wildcard route uses <strong>**</strong> as its path to catch any URL that does not match a defined route. It is typically used for displaying a 404 page.
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
The wildcard route must be the <strong>last route</strong> in the configuration because Angular matches routes in order. The first matching route wins, so placing ** earlier would catch all navigation.`
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
                    a: `<strong>ActivatedRoute</strong> is a service that provides information about the currently activated route, including its parameters, query parameters, data, and URL segments.
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
                    a: `Angular's Router emits events throughout the navigation lifecycle. You can subscribe to <strong>router.events</strong> to track navigation progress.
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
                    a: `<strong>Template-driven forms</strong> use directives like ngModel in the template and are easier for simple forms. <strong>Reactive forms</strong> define the form model programmatically in the component class, offering more control and testability.
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
                    a: `<strong>ngModel</strong> creates a two-way data binding between a form control element and a component property. Each ngModel creates a FormControl instance behind the scenes.
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
                    a: `<strong>ngForm</strong> is automatically applied to every &lt;form&gt; element when FormsModule is imported. It creates a top-level FormGroup that tracks the form's overall validity and value.
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
                    a: `Angular provides built-in validator directives that map to HTML5 validation attributes. They are applied directly in the template.
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
                    a: `Custom validators for template-driven forms are created as directives that implement the <strong>Validator</strong> interface and are registered as NG_VALIDATORS providers.
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
                    a: `Export the ngModel as a template reference variable, then conditionally display error messages based on the control's error state.
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
                    a: `Use the <strong>(ngSubmit)</strong> event on the form element to handle submission. Access form data through the template reference variable or component properties.
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
Use <strong>ngSubmit</strong> instead of the native submit event to prevent default browser form submission and enable Angular's validation.`
                },
                {
                    q: "What are template reference variables in the context of forms?",
                    a: `Template reference variables in forms provide access to the <strong>NgForm</strong>, <strong>NgModel</strong>, or <strong>NgModelGroup</strong> directive instances, exposing their state and methods.
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
                    a: `<strong>NgModelGroup</strong> groups related form controls together as a sub-group within a form, creating a nested object in the form's value.
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
                    a: `Async validators are directives registered under the <strong>NG_ASYNC_VALIDATORS</strong> token. They return a Promise or Observable that resolves to validation errors or null.
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
                    a: `Reactive forms provide a model-driven approach where the form structure is defined explicitly in the component class using FormControl, FormGroup, and FormArray.
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
                    a: `<strong>FormControl</strong> represents a single input element in a form. It tracks the value, validation status, and user interaction state of the control.
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
                    a: `<strong>FormGroup</strong> groups multiple FormControls together as a single unit. It tracks the aggregate value and validation status of all children.
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
                    a: `<strong>FormBuilder</strong> is a service that provides shorthand methods to create FormControl, FormGroup, and FormArray instances with less boilerplate.
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
                    a: `<strong>FormArray</strong> manages a dynamic collection of controls. Unlike FormGroup, its children are indexed by number rather than name, making it ideal for lists.
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
                    a: `Angular provides several built-in validators in the <strong>Validators</strong> class for common validation scenarios.
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
                    a: `Custom validators are plain functions that receive an AbstractControl and return a ValidationErrors object or null.
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
                    a: `Dynamic forms are built by programmatically adding and removing controls based on user actions or configuration data.
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
                    a: `<strong>valueChanges</strong> is an Observable that emits every time the value of a control, group, or array changes. It enables reactive programming patterns with forms.
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
                    a: `<strong>setValue</strong> requires you to provide values for <em>all</em> controls in the group. <strong>patchValue</strong> allows partial updates, only setting the controls you specify.
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
                    a: `Import <strong>HttpClientModule</strong> in your root module to enable HTTP communication. Then inject <strong>HttpClient</strong> in your services.
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
                    a: `Use <strong>HttpClient.get()</strong> to fetch data from an API. It returns an Observable that you subscribe to or consume with the async pipe.
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
                    a: `Use <strong>HttpClient.post()</strong> to send data to a server. The second argument is the request body.
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
                    a: `Handle HTTP errors using RxJS <strong>catchError</strong> operator or the error callback in subscribe. HttpClient returns an <strong>HttpErrorResponse</strong> for failed requests.
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
                    a: `<strong>HttpHeaders</strong> is an immutable class for setting HTTP request headers. Pass headers via the options parameter of HTTP methods.
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
                    a: `<strong>HttpParams</strong> builds URL query parameters in an immutable, type-safe way. Pass them through the options object.
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
                    a: `HttpClient supports generic type parameters to specify the expected response type, providing compile-time type safety and autocompletion.
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
                    a: `Use the RxJS <strong>retry</strong> or <strong>retryWhen</strong> operator to automatically retry failed HTTP requests before propagating the error.
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
                    a: `Use <strong>reportProgress: true</strong> and <strong>observe: 'events'</strong> to receive upload or download progress events.
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
                    a: `HTTP interceptors inspect and transform HTTP requests and responses globally. They are used for adding auth tokens, logging, caching, and error handling.
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
                    a: `An <strong>Observable</strong> is a lazy collection of values that can be delivered synchronously or asynchronously over time. Angular uses Observables extensively for HTTP, forms, routing, and events.
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
                    a: `Observables and Promises both handle asynchronous operations, but they differ in key ways.
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
                    a: `The <strong>map</strong> operator transforms each value emitted by an Observable by applying a function to it, similar to Array.prototype.map().
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
                    a: `<strong>switchMap</strong> maps each value to an inner Observable and switches to the latest one, cancelling any previous inner Observable that is still active.
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
                    a: `<strong>mergeMap</strong> maps each value to an inner Observable and merges all inner Observables concurrently. Unlike switchMap, it does not cancel previous inner Observables.
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
                    a: `<strong>combineLatest</strong> takes multiple Observables and emits an array of the latest values from each whenever any of them emits a new value.
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
                    a: `<strong>takeUntil</strong> emits values from the source Observable until a notifier Observable emits a value. It is the recommended pattern for cleaning up subscriptions in Angular components.
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
                    a: `<strong>debounceTime</strong> delays emissions from the source Observable. It only emits a value after a specified time period has passed without another emission.
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
                    a: `<strong>catchError</strong> intercepts errors from an Observable and lets you handle them by returning a replacement Observable or re-throwing.
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
                }
            ]
        }
    ,
        {
            id: "lifecycle-hooks", title: "Lifecycle Hooks", icon: "bi-recycle",
            questions: [
            { q: "What are lifecycle hooks in Angular?", a: "<p>Lifecycle hooks are methods that Angular calls on directives and components as it creates, changes, and destroys them. They let you tap into key moments in a component's life.</p><ul><li><code>ngOnChanges</code> — when input properties change</li><li><code>ngOnInit</code> — after first ngOnChanges</li><li><code>ngDoCheck</code> — custom change detection</li><li><code>ngAfterContentInit</code> — after content projection</li><li><code>ngAfterViewInit</code> — after view initialization</li><li><code>ngOnDestroy</code> — cleanup before destruction</li></ul>" },
            { q: "What is ngOnInit and when is it called?", a: "<p><code>ngOnInit</code> is called once after the first <code>ngOnChanges</code>. It's the best place for initialization logic.</p><pre><code>export class UserComponent implements OnInit {\n  @Input() userId!: string;\n  user: User;\n\n  ngOnInit() {\n    // Safe to use @Input values here\n    this.user = this.userService.getUser(this.userId);\n  }\n}</code></pre>" },
            { q: "What is the difference between constructor and ngOnInit?", a: "<p>The <strong>constructor</strong> is a TypeScript/JavaScript feature for class instantiation. <strong>ngOnInit</strong> is an Angular lifecycle hook.</p><ul><li>Constructor: DI injection happens here, but @Input values are NOT available yet</li><li>ngOnInit: @Input values ARE available, DOM is ready, bindings are resolved</li></ul><p>Use constructor only for DI. Use ngOnInit for initialization logic.</p>" },
            { q: "What is ngOnChanges and what is SimpleChanges?", a: "<p><code>ngOnChanges</code> is called when any data-bound @Input property changes. It receives a <code>SimpleChanges</code> object.</p><pre><code>ngOnChanges(changes: SimpleChanges) {\n  if (changes['userId']) {\n    console.log('Previous:', changes['userId'].previousValue);\n    console.log('Current:', changes['userId'].currentValue);\n    console.log('First change:', changes['userId'].firstChange);\n  }\n}</code></pre>" },
            { q: "What is ngDoCheck?", a: "<p><code>ngDoCheck</code> is called during every change detection run. It lets you implement custom change detection for changes that Angular doesn't detect on its own.</p><pre><code>ngDoCheck() {\n  if (this.currentName !== this.previousName) {\n    this.previousName = this.currentName;\n    this.changeLog.push('Name changed to: ' + this.currentName);\n  }\n}</code></pre><p><strong>Warning:</strong> This hook is called very frequently — keep the logic lightweight.</p>" },
            { q: "What is ngAfterViewInit?", a: "<p><code>ngAfterViewInit</code> is called once after Angular initializes the component's views and child views. It's safe to access @ViewChild references here.</p><pre><code>@ViewChild('myInput') inputRef!: ElementRef;\n\nngAfterViewInit() {\n  this.inputRef.nativeElement.focus();\n}</code></pre>" },
            { q: "What is ngAfterContentInit?", a: "<p><code>ngAfterContentInit</code> is called once after Angular projects external content into the component via <code>&lt;ng-content&gt;</code>.</p><pre><code>@ContentChild(ChildDirective) child!: ChildDirective;\n\nngAfterContentInit() {\n  console.log(this.child); // Now available\n}</code></pre>" },
            { q: "What is ngOnDestroy?", a: "<p><code>ngOnDestroy</code> is called just before Angular destroys the component. Use it for cleanup: unsubscribe from observables, detach event listeners, stop timers.</p><pre><code>private sub!: Subscription;\n\nngOnInit() {\n  this.sub = this.data$.subscribe(val =&gt; this.value = val);\n}\n\nngOnDestroy() {\n  this.sub.unsubscribe(); // Prevent memory leaks\n}</code></pre>" },
            { q: "What is the correct order of lifecycle hooks?", a: "<p>Angular calls lifecycle hooks in this order:</p><ol><li><code>ngOnChanges</code> (if inputs exist)</li><li><code>ngOnInit</code></li><li><code>ngDoCheck</code></li><li><code>ngAfterContentInit</code></li><li><code>ngAfterContentChecked</code></li><li><code>ngAfterViewInit</code></li><li><code>ngAfterViewChecked</code></li><li><code>ngOnDestroy</code></li></ol><p>Steps 3-7 repeat on every change detection cycle.</p>" },
            { q: "How do you use takeUntilDestroyed with lifecycle?", a: "<p>Angular 16+ provides <code>takeUntilDestroyed</code> to auto-unsubscribe when a component is destroyed:</p><pre><code>import { takeUntilDestroyed } from '@angular/core/rxjs-interop';\n\nexport class MyComponent {\n  constructor() {\n    this.data$.pipe(\n      takeUntilDestroyed() // auto-unsubscribes on destroy\n    ).subscribe(val =&gt; this.value = val);\n  }\n}</code></pre>" }
            ]
        },
        {
            id: "modules", title: "Modules", icon: "bi-grid-3x3-gap",
            questions: [
            { q: "What is an NgModule?", a: "<p>An NgModule is a class decorated with <code>@NgModule()</code> that organizes related code into cohesive blocks with metadata about declarations, imports, exports, and providers.</p><pre><code>@NgModule({\n  declarations: [AppComponent, HeaderComponent],\n  imports: [BrowserModule, FormsModule],\n  providers: [DataService],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }</code></pre>" },
            { q: "What are declarations, imports, and exports in NgModule?", a: "<ul><li><strong>declarations</strong>: Components, directives, and pipes that belong to this module</li><li><strong>imports</strong>: Other modules whose exported classes are needed by component templates in this module</li><li><strong>exports</strong>: Components, directives, pipes visible to importing modules</li><li><strong>providers</strong>: Services available to module's injector</li></ul>" },
            { q: "What is a feature module?", a: "<p>A feature module encapsulates a set of related functionality. It helps organize code and enables lazy loading.</p><pre><code>@NgModule({\n  declarations: [ProductListComponent, ProductDetailComponent],\n  imports: [CommonModule, RouterModule.forChild(routes)],\n  exports: [ProductListComponent]\n})\nexport class ProductsModule { }</code></pre>" },
            { q: "What is a shared module?", a: "<p>A shared module contains common components, directives, and pipes used across multiple feature modules.</p><pre><code>@NgModule({\n  declarations: [SpinnerComponent, HighlightDirective, TruncatePipe],\n  imports: [CommonModule],\n  exports: [SpinnerComponent, HighlightDirective, TruncatePipe, CommonModule]\n})\nexport class SharedModule { }</code></pre>" },
            { q: "What is lazy loading of modules?", a: "<p>Lazy loading loads feature modules on demand when the user navigates to their routes, reducing initial bundle size.</p><pre><code>const routes: Routes = [\n  {\n    path: 'products',\n    loadChildren: () =&gt; import('./products/products.module')\n      .then(m =&gt; m.ProductsModule)\n  }\n];</code></pre>" },
            { q: "What is the difference between forRoot and forChild?", a: "<p><code>forRoot()</code> registers providers for the entire app (use in AppModule). <code>forChild()</code> registers routes for feature modules without re-registering providers.</p><pre><code>// AppModule\nRouterModule.forRoot(appRoutes)\n\n// Feature module\nRouterModule.forChild(featureRoutes)</code></pre>" },
            { q: "What is the CoreModule pattern?", a: "<p>CoreModule contains singleton services and one-time setup. It should only be imported in AppModule.</p><pre><code>@NgModule({\n  providers: [AuthService, LoggerService]\n})\nexport class CoreModule {\n  constructor(@Optional() @SkipSelf() parent: CoreModule) {\n    if (parent) throw new Error('CoreModule already loaded!');\n  }\n}</code></pre>" },
            { q: "Can a component belong to multiple modules?", a: "<p>No, a component can be declared in only <strong>one</strong> NgModule. If you need it in multiple modules, export it from a shared module and import that shared module.</p>" },
            { q: "What is the purpose of BrowserModule vs CommonModule?", a: "<p><code>BrowserModule</code> includes <code>CommonModule</code> plus browser-specific providers. Use BrowserModule only in the root AppModule. Use <code>CommonModule</code> in feature modules for directives like ngIf and ngFor.</p>" },
            { q: "What are preloading strategies?", a: "<p>Preloading strategies load lazy modules in the background after the app starts, improving navigation speed.</p><pre><code>RouterModule.forRoot(routes, {\n  preloadingStrategy: PreloadAllModules\n})\n\n// Or use custom strategy\nexport class CustomPreloader implements PreloadingStrategy {\n  preload(route: Route, load: () =&gt; Observable&lt;any&gt;) {\n    return route.data?.['preload'] ? load() : of(null);\n  }\n}</code></pre>" }
            ]
        },
        {
            id: "change-detection", title: "Change Detection", icon: "bi-eye",
            questions: [
            { q: "What is change detection in Angular?", a: "<p>Change detection is the mechanism Angular uses to keep the DOM in sync with component data. When data changes, Angular checks the component tree and updates the DOM accordingly.</p>" },
            { q: "What are the two change detection strategies?", a: "<p><strong>Default:</strong> Angular checks the entire component tree on every change detection cycle.</p><p><strong>OnPush:</strong> Angular only checks the component when its @Input references change, an event fires within the component, or change detection is manually triggered.</p><pre><code>@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})</code></pre>" },
            { q: "What is zone.js?", a: "<p>Zone.js is a library that patches async APIs (setTimeout, Promise, addEventListener, XHR) to notify Angular when async operations complete, triggering change detection automatically.</p>" },
            { q: "What is markForCheck?", a: "<p><code>markForCheck()</code> marks a component and its ancestors for checking in the next change detection cycle. Used with OnPush when data changes without @Input reference change.</p><pre><code>constructor(private cdr: ChangeDetectorRef) {}\n\nupdateData() {\n  this.data.push(newItem); // Mutation - OnPush won't detect\n  this.cdr.markForCheck(); // Tell Angular to check\n}</code></pre>" },
            { q: "What is detectChanges?", a: "<p><code>detectChanges()</code> immediately triggers change detection for the component and its children, without waiting for the next cycle.</p><pre><code>this.value = 'updated';\nthis.cdr.detectChanges(); // Immediately update DOM</code></pre>" },
            { q: "How does OnPush improve performance?", a: "<p>OnPush skips change detection for a component subtree unless: an @Input reference changes, an event originates from the component, an Observable linked to the async pipe emits, or markForCheck/detectChanges is called. This dramatically reduces checks in large apps.</p>" },
            { q: "How does the async pipe help with OnPush?", a: "<p>The async pipe automatically subscribes, gets values, and calls <code>markForCheck()</code> when new values arrive, making it perfect for OnPush components.</p><pre><code>&lt;div *ngIf=\"user$ | async as user\"&gt;\n  {{ user.name }}\n&lt;/div&gt;</code></pre>" },
            { q: "What is detach and reattach?", a: "<p><code>detach()</code> removes a component from change detection entirely. <code>reattach()</code> adds it back. Useful for components that rarely change.</p><pre><code>this.cdr.detach(); // Stop checking\n// ... later when update needed\nthis.cdr.reattach();\nthis.cdr.detectChanges();</code></pre>" },
            { q: "What is runOutsideAngular?", a: "<p><code>NgZone.runOutsideAngular()</code> runs code outside Angular's zone so it doesn't trigger change detection. Useful for performance-heavy animations or frequent events.</p><pre><code>constructor(private ngZone: NgZone) {}\n\nngOnInit() {\n  this.ngZone.runOutsideAngular(() =&gt; {\n    window.addEventListener('mousemove', this.onMouseMove);\n  });\n}</code></pre>" },
            { q: "What triggers change detection by default?", a: "<p>Change detection is triggered by: DOM events (click, input, submit), HTTP responses, timers (setTimeout, setInterval), Promises resolving, and any async operation patched by zone.js.</p>" }
            ]
        },
        {
            id: "guards-resolvers", title: "Guards & Resolvers", icon: "bi-shield-lock",
            questions: [
            { q: "What are route guards in Angular?", a: "<p>Route guards are interfaces that let you control whether a user can navigate to or away from a route. Types include CanActivate, CanDeactivate, CanLoad, CanMatch, and Resolve.</p>" },
            { q: "How do you create a CanActivate guard?", a: "<p>A CanActivate guard determines if a route can be activated:</p><pre><code>@Injectable({ providedIn: 'root' })\nexport class AuthGuard implements CanActivate {\n  constructor(private auth: AuthService, private router: Router) {}\n\n  canActivate(): boolean | UrlTree {\n    if (this.auth.isLoggedIn()) return true;\n    return this.router.parseUrl('/login');\n  }\n}\n\n// Route config\n{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }</code></pre>" },
            { q: "What is a functional guard in Angular 15+?", a: "<p>Angular 15+ supports functional guards — plain functions instead of class-based guards:</p><pre><code>export const authGuard: CanActivateFn = (route, state) =&gt; {\n  const auth = inject(AuthService);\n  const router = inject(Router);\n  return auth.isLoggedIn() ? true : router.parseUrl('/login');\n};\n\n{ path: 'admin', canActivate: [authGuard] }</code></pre>" },
            { q: "What is CanDeactivate guard?", a: "<p>CanDeactivate guards prevent users from leaving a route, typically to warn about unsaved changes:</p><pre><code>export const unsavedChangesGuard: CanDeactivateFn&lt;EditComponent&gt; = (component) =&gt; {\n  if (component.hasUnsavedChanges()) {\n    return confirm('Discard unsaved changes?');\n  }\n  return true;\n};</code></pre>" },
            { q: "What is the Resolve guard?", a: "<p>Resolve pre-fetches data before the route activates, ensuring the component has data when it loads:</p><pre><code>export const userResolver: ResolveFn&lt;User&gt; = (route) =&gt; {\n  return inject(UserService).getUser(route.paramMap.get('id')!);\n};\n\n{ path: 'user/:id', component: UserComponent, resolve: { user: userResolver } }\n\n// In component\nconstructor(private route: ActivatedRoute) {\n  this.user = this.route.snapshot.data['user'];\n}</code></pre>" },
            { q: "What is CanLoad guard?", a: "<p><code>CanLoad</code> prevents lazy-loaded modules from being downloaded at all if the user doesn't have permission. Unlike CanActivate, it blocks the module download entirely.</p>" },
            { q: "Can a guard return an Observable or Promise?", a: "<p>Yes, guards can return <code>boolean</code>, <code>UrlTree</code>, <code>Observable&lt;boolean | UrlTree&gt;</code>, or <code>Promise&lt;boolean | UrlTree&gt;</code>. Angular will wait for async results.</p>" },
            { q: "How do you pass data to a guard?", a: "<p>Use the route's <code>data</code> property to pass metadata to guards:</p><pre><code>{ path: 'admin', canActivate: [roleGuard], data: { roles: ['admin'] } }\n\nexport const roleGuard: CanActivateFn = (route) =&gt; {\n  const requiredRoles = route.data['roles'];\n  return inject(AuthService).hasRole(requiredRoles);\n};</code></pre>" },
            { q: "What is CanMatch?", a: "<p><code>CanMatch</code> (Angular 14.1+) determines if a route should even be considered during URL matching. If false, the router continues to the next route definition.</p>" },
            { q: "How do multiple guards work together?", a: "<p>Multiple guards run in the order they're listed. If any guard returns false or a UrlTree, navigation is canceled or redirected.</p><pre><code>{ \n  path: 'admin', \n  canActivate: [authGuard, roleGuard, subscriptionGuard] \n  // All three must return true\n}</code></pre>" }
            ]
        },
        {
            id: "interceptors", title: "Interceptors", icon: "bi-funnel-fill",
            questions: [
            { q: "What is an HTTP interceptor?", a: "<p>An interceptor intercepts and optionally transforms HTTP requests and responses. It sits between the HttpClient and the server.</p><pre><code>@Injectable()\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler): Observable&lt;HttpEvent&lt;any&gt;&gt; {\n    const authReq = req.clone({\n      setHeaders: { Authorization: 'Bearer ' + this.token }\n    });\n    return next.handle(authReq);\n  }\n}</code></pre>" },
            { q: "How do you register an interceptor?", a: "<p>Register interceptors as multi-providers in the module or with <code>withInterceptors</code> for standalone:</p><pre><code>// Module-based\nproviders: [{\n  provide: HTTP_INTERCEPTORS,\n  useClass: AuthInterceptor,\n  multi: true\n}]\n\n// Standalone (Angular 15+)\nprovideHttpClient(withInterceptors([authInterceptor]))</code></pre>" },
            { q: "How do you create a functional interceptor?", a: "<p>Angular 15+ supports functional interceptors:</p><pre><code>export const loggingInterceptor: HttpInterceptorFn = (req, next) =&gt; {\n  console.log('Request:', req.url);\n  return next(req).pipe(\n    tap(event =&gt; {\n      if (event instanceof HttpResponse) {\n        console.log('Response:', event.status);\n      }\n    })\n  );\n};</code></pre>" },
            { q: "How do you handle errors in an interceptor?", a: "<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {\n  return next.handle(req).pipe(\n    catchError((error: HttpErrorResponse) =&gt; {\n      if (error.status === 401) {\n        this.auth.logout();\n        this.router.navigate(['/login']);\n      }\n      return throwError(() =&gt; error);\n    })\n  );\n}</code></pre>" },
            { q: "How do you add retry logic in an interceptor?", a: "<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {\n  return next.handle(req).pipe(\n    retry({ count: 3, delay: 1000 }),\n    catchError(err =&gt; throwError(() =&gt; err))\n  );\n}</code></pre>" },
            { q: "Can you modify the response in an interceptor?", a: "<p>Yes, use the <code>map</code> operator to transform responses:</p><pre><code>return next.handle(req).pipe(\n  map(event =&gt; {\n    if (event instanceof HttpResponse) {\n      return event.clone({ body: event.body.data });\n    }\n    return event;\n  })\n);</code></pre>" },
            { q: "What is the order of interceptor execution?", a: "<p>Interceptors execute in the order they are provided for requests, and in <strong>reverse order</strong> for responses. First interceptor registered = first to handle request, last to handle response.</p>" },
            { q: "How do you skip an interceptor for specific requests?", a: "<p>Use custom headers or request context to skip interceptors:</p><pre><code>// Set a marker header\nconst req = new HttpRequest('GET', url, { headers: new HttpHeaders({ 'Skip-Auth': 'true' }) });\n\n// In interceptor\nif (req.headers.has('Skip-Auth')) {\n  return next.handle(req.clone({ headers: req.headers.delete('Skip-Auth') }));\n}</code></pre>" },
            { q: "How do you show a loading spinner with an interceptor?", a: "<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {\n  this.loadingService.show();\n  return next.handle(req).pipe(\n    finalize(() =&gt; this.loadingService.hide())\n  );\n}</code></pre>" },
            { q: "Can interceptors handle both requests and responses?", a: "<p>Yes, interceptors have access to both. The request is the <code>req</code> parameter, and the response comes from the Observable returned by <code>next.handle(req)</code>. You can transform either or both.</p>" }
            ]
        },
        {
            id: "decorators", title: "Decorators", icon: "bi-at",
            questions: [
            { q: "What are decorators in Angular?", a: "<p>Decorators are functions that modify classes, properties, methods, or parameters. Angular uses them extensively to add metadata. TypeScript decorators are prefixed with <code>@</code>.</p><ul><li>Class: @Component, @Directive, @Injectable, @NgModule, @Pipe</li><li>Property: @Input, @Output, @HostBinding, @ContentChild, @ViewChild</li><li>Method: @HostListener</li><li>Parameter: @Inject, @Optional, @Self, @SkipSelf</li></ul>" },
            { q: "What does @Input() do?", a: "<p>@Input marks a property as bindable from a parent component's template:</p><pre><code>// Child\n@Input() name: string = '';\n@Input({ required: true }) id!: number; // Required in Angular 16+\n\n// Parent template\n&lt;app-child [name]=\"userName\" [id]=\"userId\"&gt;&lt;/app-child&gt;</code></pre>" },
            { q: "What does @Output() do?", a: "<p>@Output marks a property as an event emitter that sends data to the parent:</p><pre><code>@Output() itemSelected = new EventEmitter&lt;Item&gt;();\n\nonSelect(item: Item) {\n  this.itemSelected.emit(item);\n}\n\n// Parent template\n&lt;app-child (itemSelected)=\"onItemSelect($event)\"&gt;&lt;/app-child&gt;</code></pre>" },
            { q: "What is @ViewChild?", a: "<p>@ViewChild queries for a child element, directive, or component in the template:</p><pre><code>@ViewChild('inputRef') input!: ElementRef;\n@ViewChild(ChildComponent) child!: ChildComponent;\n\nngAfterViewInit() {\n  this.input.nativeElement.focus();\n  this.child.doSomething();\n}</code></pre>" },
            { q: "What is @ContentChild?", a: "<p>@ContentChild queries for projected content (content between component tags):</p><pre><code>// Content projection\n&lt;app-card&gt;\n  &lt;app-header&gt;Title&lt;/app-header&gt;\n&lt;/app-card&gt;\n\n// In CardComponent\n@ContentChild(HeaderComponent) header!: HeaderComponent;</code></pre>" },
            { q: "What is @HostListener?", a: "<p>@HostListener listens to events on the host element:</p><pre><code>@HostListener('click', ['$event'])\nonClick(event: MouseEvent) {\n  console.log('Host clicked!', event);\n}\n\n@HostListener('window:resize', ['$event'])\nonResize(event: Event) {\n  this.windowWidth = window.innerWidth;\n}</code></pre>" },
            { q: "What is @HostBinding?", a: "<p>@HostBinding binds a property to the host element:</p><pre><code>@Directive({ selector: '[appHighlight]' })\nexport class HighlightDirective {\n  @HostBinding('class.active') isActive = false;\n  @HostBinding('style.backgroundColor') bgColor = '';\n\n  @HostListener('mouseenter') onHover() {\n    this.bgColor = 'yellow';\n    this.isActive = true;\n  }\n}</code></pre>" },
            { q: "What is @Injectable?", a: "<p>@Injectable marks a class as available for dependency injection:</p><pre><code>@Injectable({ providedIn: 'root' }) // Tree-shakable singleton\nexport class DataService {\n  constructor(private http: HttpClient) {}\n}</code></pre><p>The <code>providedIn: 'root'</code> option makes it a singleton available app-wide without adding to providers array.</p>" },
            { q: "What is @Inject?", a: "<p>@Inject explicitly specifies the token used for dependency injection, especially for non-class tokens:</p><pre><code>constructor(@Inject(API_URL) private apiUrl: string) {}\n\n// With InjectionToken\nexport const API_URL = new InjectionToken&lt;string&gt;('api-url');</code></pre>" },
            { q: "What is the difference between @ViewChildren and @ContentChildren?", a: "<p><code>@ViewChildren</code> queries elements defined in the component's own template. <code>@ContentChildren</code> queries elements projected via <code>&lt;ng-content&gt;</code>. Both return a <code>QueryList</code> that can be observed for changes.</p>" }
            ]
        },
        {
            id: "standalone-components", title: "Standalone Components", icon: "bi-box-seam",
            questions: [
            { q: "What are standalone components?", a: "<p>Standalone components (Angular 14+) don't require an NgModule. They declare their own dependencies via the <code>imports</code> array:</p><pre><code>@Component({\n  standalone: true,\n  selector: 'app-hello',\n  imports: [CommonModule, FormsModule],\n  template: '&lt;input [(ngModel)]=\"name\"&gt; Hello {{name}}'\n})\nexport class HelloComponent { name = 'World'; }</code></pre>" },
            { q: "How do you bootstrap a standalone component?", a: "<pre><code>// main.ts\nimport { bootstrapApplication } from '@angular/platform-browser';\nimport { AppComponent } from './app/app.component';\nimport { appConfig } from './app/app.config';\n\nbootstrapApplication(AppComponent, appConfig);</code></pre>" },
            { q: "How do you configure routing with standalone components?", a: "<pre><code>// app.config.ts\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideRouter(routes),\n    provideHttpClient()\n  ]\n};\n\n// routes\nexport const routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'users', loadComponent: () =&gt;\n    import('./users/users.component').then(m =&gt; m.UsersComponent) }\n];</code></pre>" },
            { q: "How do you lazy load a standalone component?", a: "<p>Use <code>loadComponent</code> for individual component lazy loading:</p><pre><code>{ \n  path: 'profile', \n  loadComponent: () =&gt; import('./profile/profile.component')\n    .then(c =&gt; c.ProfileComponent)\n}</code></pre>" },
            { q: "How do you provide services with standalone?", a: "<pre><code>bootstrapApplication(AppComponent, {\n  providers: [\n    provideHttpClient(withInterceptors([authInterceptor])),\n    provideRouter(routes, withPreloading(PreloadAllModules)),\n    provideAnimations(),\n    { provide: API_URL, useValue: 'https://api.example.com' }\n  ]\n});</code></pre>" },
            { q: "Can standalone directives and pipes exist?", a: "<p>Yes, directives and pipes can also be standalone:</p><pre><code>@Directive({ standalone: true, selector: '[appHighlight]' })\nexport class HighlightDirective { }\n\n@Pipe({ standalone: true, name: 'truncate' })\nexport class TruncatePipe implements PipeTransform { }</code></pre>" },
            { q: "How do you migrate from NgModules to standalone?", a: "<p>Angular provides a migration schematic:</p><pre><code>ng generate @angular/core:standalone</code></pre><p>Steps: Mark components/directives/pipes as standalone, add imports array to each, remove from NgModule declarations, eventually remove the NgModule entirely.</p>" },
            { q: "What is importProvidersFrom?", a: "<p><code>importProvidersFrom</code> extracts providers from NgModules for use in standalone applications:</p><pre><code>bootstrapApplication(AppComponent, {\n  providers: [\n    importProvidersFrom(SomeLibraryModule.forRoot())\n  ]\n});</code></pre>" },
            { q: "How do you use standalone components in NgModule apps?", a: "<p>Import standalone components in an NgModule's imports array:</p><pre><code>@NgModule({\n  imports: [StandaloneHelloComponent], // Standalone in imports, not declarations\n  declarations: [AppComponent]\n})</code></pre>" },
            { q: "What are the benefits of standalone components?", a: "<ul><li>Simplified mental model — no NgModules needed</li><li>Better tree-shaking — only import what you use</li><li>Easier lazy loading with loadComponent</li><li>Reduced boilerplate</li><li>Self-contained and portable</li></ul>" }
            ]
        },
        {
            id: "signals", title: "Signals", icon: "bi-broadcast",
            questions: [
            { q: "What are signals in Angular?", a: "<p>Signals (Angular 16+) are reactive primitives for state management. They track when values change and automatically update dependent computations and views.</p><pre><code>import { signal, computed, effect } from '@angular/core';\n\nconst count = signal(0);\ncount.set(5);\ncount.update(v =&gt; v + 1);\nconsole.log(count()); // Read value: 6</code></pre>" },
            { q: "What is computed()?", a: "<p><code>computed()</code> creates a derived signal that recalculates when its dependencies change:</p><pre><code>const firstName = signal('John');\nconst lastName = signal('Doe');\nconst fullName = computed(() =&gt; firstName() + ' ' + lastName());\n\nconsole.log(fullName()); // \"John Doe\"\nfirstName.set('Jane');\nconsole.log(fullName()); // \"Jane Doe\" - auto-updated</code></pre>" },
            { q: "What is effect()?", a: "<p><code>effect()</code> runs side effects when signals it reads change:</p><pre><code>const user = signal({ name: 'John', age: 30 });\n\neffect(() =&gt; {\n  console.log('User changed:', user().name);\n  // Runs when user signal changes\n});</code></pre><p>Effects run at least once and re-run whenever their signal dependencies change.</p>" },
            { q: "How do signals differ from RxJS Observables?", a: "<ul><li>Signals are <strong>synchronous</strong>; Observables can be async</li><li>Signals always have a current value; Observables may not</li><li>Signals auto-track dependencies; Observables require explicit subscription</li><li>No need for subscribe/unsubscribe with signals</li><li>RxJS is better for event streams, HTTP, complex async flows</li></ul>" },
            { q: "What is toSignal()?", a: "<p><code>toSignal()</code> converts an Observable to a Signal:</p><pre><code>import { toSignal } from '@angular/core/rxjs-interop';\n\nconst users = toSignal(this.http.get&lt;User[]&gt;('/api/users'), {\n  initialValue: []\n});\n\n// In template — no async pipe needed\n&lt;li *ngFor=\"let user of users()\"&gt;{{ user.name }}&lt;/li&gt;</code></pre>" },
            { q: "What is toObservable()?", a: "<p><code>toObservable()</code> converts a Signal to an Observable:</p><pre><code>import { toObservable } from '@angular/core/rxjs-interop';\n\nconst search = signal('');\nconst search$ = toObservable(this.search);\n\nsearch$.pipe(\n  debounceTime(300),\n  switchMap(q =&gt; this.api.search(q))\n).subscribe(results =&gt; this.results.set(results));</code></pre>" },
            { q: "What are input signals?", a: "<p>Angular 17.1+ introduces signal-based inputs:</p><pre><code>@Component({...})\nexport class UserComponent {\n  name = input&lt;string&gt;();           // Optional input signal\n  id = input.required&lt;number&gt;();    // Required input signal\n  label = input('default');          // Input with default value\n\n  // Computed based on input\n  greeting = computed(() =&gt; 'Hello ' + this.name());\n}</code></pre>" },
            { q: "What is model() in signals?", a: "<p><code>model()</code> creates a two-way bindable signal (Angular 17.2+):</p><pre><code>@Component({\n  selector: 'app-counter',\n  template: '&lt;button (click)=\"increment()\"&gt;{{ value() }}&lt;/button&gt;'\n})\nexport class CounterComponent {\n  value = model(0); // Two-way binding\n  increment() { this.value.update(v =&gt; v + 1); }\n}\n\n// Parent: &lt;app-counter [(value)]=\"count\" /&gt;</code></pre>" },
            { q: "How do you use signals in templates?", a: "<p>Call signals like functions in templates:</p><pre><code>@Component({\n  template: '&lt;p&gt;Count: {{ count() }}&lt;/p&gt;&lt;button (click)=\"increment()\"&gt;+1&lt;/button&gt;'\n})\nexport class CounterComponent {\n  count = signal(0);\n  increment() { this.count.update(v =&gt; v + 1); }\n}</code></pre>" },
            { q: "What is the signal update method?", a: "<p><code>update()</code> modifies a signal based on its current value:</p><pre><code>const items = signal&lt;string[]&gt;([]);\n\n// set replaces entirely\nitems.set(['a', 'b']);\n\n// update derives from current value\nitems.update(list =&gt; [...list, 'c']); // ['a', 'b', 'c']</code></pre>" }
            ]
        },
        {
            id: "testing", title: "Testing", icon: "bi-bug",
            questions: [
            { q: "How do you set up a component test with TestBed?", a: "<pre><code>describe('HeroComponent', () =&gt; {\n  let component: HeroComponent;\n  let fixture: ComponentFixture&lt;HeroComponent&gt;;\n\n  beforeEach(async () =&gt; {\n    await TestBed.configureTestingModule({\n      declarations: [HeroComponent],\n      providers: [{ provide: HeroService, useValue: mockHeroService }]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(HeroComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n});</code></pre>" },
            { q: "How do you test @Input and @Output?", a: "<pre><code>it('should display name', () =&gt; {\n  component.name = 'Batman';\n  fixture.detectChanges();\n  const el = fixture.nativeElement.querySelector('h1');\n  expect(el.textContent).toContain('Batman');\n});\n\nit('should emit on click', () =&gt; {\n  spyOn(component.selected, 'emit');\n  fixture.nativeElement.querySelector('button').click();\n  expect(component.selected.emit).toHaveBeenCalledWith(component.hero);\n});</code></pre>" },
            { q: "How do you mock a service in tests?", a: "<pre><code>const mockService = jasmine.createSpyObj('HeroService', ['getHeroes']);\nmockService.getHeroes.and.returnValue(of([{ id: 1, name: 'Hero' }]));\n\nTestBed.configureTestingModule({\n  providers: [{ provide: HeroService, useValue: mockService }]\n});</code></pre>" },
            { q: "What is fakeAsync and tick?", a: "<p><code>fakeAsync</code> wraps a test to control async operations synchronously. <code>tick()</code> simulates time passing.</p><pre><code>it('should update after debounce', fakeAsync(() =&gt; {\n  component.search('hello');\n  tick(300); // Simulate 300ms debounce\n  fixture.detectChanges();\n  expect(component.results.length).toBe(3);\n}));</code></pre>" },
            { q: "How do you test HTTP calls?", a: "<pre><code>let httpMock: HttpTestingController;\n\nbeforeEach(() =&gt; {\n  TestBed.configureTestingModule({\n    imports: [HttpClientTestingModule]\n  });\n  httpMock = TestBed.inject(HttpTestingController);\n});\n\nit('should fetch users', () =&gt; {\n  service.getUsers().subscribe(users =&gt; expect(users.length).toBe(2));\n  const req = httpMock.expectOne('/api/users');\n  expect(req.request.method).toBe('GET');\n  req.flush([{ name: 'A' }, { name: 'B' }]);\n});</code></pre>" },
            { q: "How do you query DOM elements in tests?", a: "<pre><code>// By CSS selector\nconst el = fixture.nativeElement.querySelector('.title');\n\n// By directive\nconst debugEl = fixture.debugElement.query(By.css('app-child'));\n\n// All matching\nconst items = fixture.debugElement.queryAll(By.css('li'));\nexpect(items.length).toBe(3);</code></pre>" },
            { q: "What is fixture.detectChanges()?", a: "<p><code>fixture.detectChanges()</code> triggers change detection for the test component. You must call it after modifying component properties to update the DOM in tests.</p>" },
            { q: "How do you test a pipe?", a: "<pre><code>describe('TruncatePipe', () =&gt; {\n  const pipe = new TruncatePipe();\n\n  it('should truncate long text', () =&gt; {\n    expect(pipe.transform('Hello World', 5)).toBe('Hello...');\n  });\n\n  it('should not truncate short text', () =&gt; {\n    expect(pipe.transform('Hi', 5)).toBe('Hi');\n  });\n});</code></pre>" },
            { q: "How do you test a guard?", a: "<pre><code>it('should allow access for logged-in user', () =&gt; {\n  authService.isLoggedIn.and.returnValue(true);\n  const result = TestBed.runInInjectionContext(() =&gt; authGuard(mockRoute, mockState));\n  expect(result).toBeTrue();\n});\n\nit('should redirect to login', () =&gt; {\n  authService.isLoggedIn.and.returnValue(false);\n  const result = TestBed.runInInjectionContext(() =&gt; authGuard(mockRoute, mockState));\n  expect(result).toEqual(router.parseUrl('/login'));\n});</code></pre>" },
            { q: "What is the difference between unit and integration tests?", a: "<p><strong>Unit tests</strong> test a single component/service in isolation with mocked dependencies. <strong>Integration tests</strong> test how multiple components work together, often rendering child components and using real services.</p>" }
            ]
        },
        {
            id: "performance-optimization", title: "Performance", icon: "bi-speedometer2",
            questions: [
            { q: "What is AOT compilation?", a: "<p>Ahead-of-Time (AOT) compilation converts Angular HTML and TypeScript into JavaScript during the build step, rather than at runtime. Benefits: faster rendering, fewer async requests, smaller bundle, template error detection at build time.</p><pre><code>ng build --configuration production // AOT is default in production</code></pre>" },
            { q: "What is tree shaking?", a: "<p>Tree shaking is a build optimization that eliminates unused code from the final bundle. Angular's <code>providedIn: 'root'</code> enables tree-shakable services — unused services are automatically removed.</p>" },
            { q: "How does trackBy improve *ngFor performance?", a: "<p>trackBy tells Angular how to identify items in a list, preventing unnecessary DOM re-creation:</p><pre><code>&lt;li *ngFor=\"let item of items; trackBy: trackById\"&gt;{{ item.name }}&lt;/li&gt;\n\ntrackById(index: number, item: Item): number {\n  return item.id; // Angular reuses DOM for items with same id\n}</code></pre>" },
            { q: "What is lazy loading and how does it improve performance?", a: "<p>Lazy loading defers loading of feature modules until they're needed, reducing initial bundle size and startup time.</p><pre><code>{ path: 'admin', loadChildren: () =&gt; import('./admin/admin.module').then(m =&gt; m.AdminModule) }\n// or standalone\n{ path: 'admin', loadComponent: () =&gt; import('./admin.component').then(c =&gt; c.AdminComponent) }</code></pre>" },
            { q: "What is virtual scrolling?", a: "<p>Virtual scrolling (CDK) only renders visible items in a large list, dramatically improving performance:</p><pre><code>&lt;cdk-virtual-scroll-viewport itemSize=\"50\" class=\"viewport\"&gt;\n  &lt;div *cdkVirtualFor=\"let item of items\"&gt;{{ item.name }}&lt;/div&gt;\n&lt;/cdk-virtual-scroll-viewport&gt;</code></pre>" },
            { q: "How do you analyze bundle size?", a: "<pre><code>ng build --stats-json\nnpx webpack-bundle-analyzer dist/my-app/stats.json</code></pre><p>This generates a visual treemap of your bundle, showing which modules are largest and where optimization is needed.</p>" },
            { q: "What are preloading strategies?", a: "<p>Preloading loads lazy modules in the background after the app is initialized:</p><pre><code>RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })\n// or QuicklinkStrategy for only visible links</code></pre>" },
            { q: "How does the async pipe help performance?", a: "<p>The async pipe automatically subscribes and unsubscribes, preventing memory leaks. With OnPush, it calls <code>markForCheck()</code> automatically, enabling efficient change detection.</p>" },
            { q: "What is @defer in Angular 17?", a: "<p><code>@defer</code> enables declarative lazy loading of template blocks:</p><pre><code>@defer (on viewport) {\n  &lt;app-heavy-chart [data]=\"data\" /&gt;\n} @placeholder {\n  &lt;div&gt;Loading chart...&lt;/div&gt;\n} @loading (minimum 500ms) {\n  &lt;app-spinner /&gt;\n}</code></pre>" },
            { q: "What is image optimization with NgOptimizedImage?", a: "<p>NgOptimizedImage directive optimizes image loading with lazy loading, priority hints, and srcset:</p><pre><code>&lt;img ngSrc=\"hero.jpg\" width=\"400\" height=\"300\" priority /&gt;</code></pre><p>It enforces best practices and automatically adds loading=\"lazy\" to non-priority images.</p>" }
            ]
        }
]
};
