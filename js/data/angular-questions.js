/**
 * Angular Interview Questions Data
 * Organized by topic — each topic has 20+ questions.
 */

const ANGULAR_DATA = {
    framework: "angular",
    label: "Angular",
    icon: "bi-bootstrap",
    topics: [
        /* ====================================================
           1. Angular Basics & Architecture
           ==================================================== */
        {
            id: "angular-basics",
            title: "Angular Basics & Architecture",
            icon: "bi-building",
            questions: [
                {
                    q: "What is Angular and how does it differ from AngularJS?",
                    a: `<p>Angular is a <strong>TypeScript-based</strong> open-source front-end web application framework developed by Google. Key differences from AngularJS:</p>
<ul>
<li>Angular uses <strong>TypeScript</strong>; AngularJS uses JavaScript.</li>
<li>Angular follows a <strong>component-based</strong> architecture; AngularJS uses MVC (Model-View-Controller).</li>
<li>Angular has a <strong>hierarchical dependency injection</strong> system.</li>
<li>Angular uses <strong>RxJS</strong> for reactive programming.</li>
<li>Angular supports <strong>mobile development</strong>; AngularJS does not.</li>
</ul>`
                },
                {
                    q: "What is the Angular CLI and what are its most useful commands?",
                    a: `<p>The Angular CLI (Command Line Interface) is a tool to initialize, develop, scaffold, and maintain Angular applications. Key commands:</p>
<pre><code>ng new my-app          # Create a new project
ng serve               # Start dev server
ng generate component  # Generate a component
ng build --prod        # Production build
ng test                # Run unit tests
ng lint                # Lint the project
ng add @angular/material # Add a library</code></pre>`
                },
                {
                    q: "Explain the Angular application bootstrapping process.",
                    a: `<p>The bootstrapping process follows these steps:</p>
<ol>
<li><strong>main.ts</strong> is the entry point — it calls <code>platformBrowserDynamic().bootstrapModule(AppModule)</code>.</li>
<li>Angular loads the <strong>AppModule</strong> (root module).</li>
<li>The AppModule's <code>bootstrap</code> array tells Angular which component to render first (<code>AppComponent</code>).</li>
<li>Angular finds the selector (<code>app-root</code>) in <code>index.html</code> and renders the component tree.</li>
<li>Change detection starts and the application becomes interactive.</li>
</ol>`
                },
                {
                    q: "What are Angular modules (NgModules)? Why are they important?",
                    a: `<p>NgModules are classes decorated with <code>@NgModule()</code> that organize an application into cohesive blocks. An NgModule declares:</p>
<ul>
<li><strong>declarations</strong>: Components, directives, and pipes belonging to this module.</li>
<li><strong>imports</strong>: Other modules whose exported classes are needed.</li>
<li><strong>exports</strong>: Classes that should be accessible to other modules.</li>
<li><strong>providers</strong>: Services available at the module's injector level.</li>
<li><strong>bootstrap</strong>: The root component (only in AppModule).</li>
</ul>
<p>They help with <strong>lazy loading</strong>, <strong>encapsulation</strong>, and <strong>organization</strong> of large applications.</p>`
                },
                {
                    q: "What is a Component in Angular?",
                    a: `<p>A component is the fundamental building block of Angular UI. It consists of:</p>
<ul>
<li>A <strong>TypeScript class</strong> with the <code>@Component</code> decorator.</li>
<li>An <strong>HTML template</strong> that defines the view.</li>
<li>Optional <strong>CSS styles</strong> scoped to the component.</li>
<li>A <strong>selector</strong> used to embed the component in templates.</li>
</ul>
<pre><code>@Component({
  selector: 'app-hello',
  template: '&lt;h1&gt;Hello {{name}}&lt;/h1&gt;',
  styles: ['h1 { color: blue; }']
})
export class HelloComponent {
  name = 'World';
}</code></pre>`
                },
                {
                    q: "What is the difference between a Module and a Component?",
                    a: `<p>A <strong>Module</strong> (<code>@NgModule</code>) is an organizational container that groups related components, directives, pipes, and services. A <strong>Component</strong> (<code>@Component</code>) is a UI building block with its own template, styles, and logic.</p>
<ul>
<li>Modules define the compilation context for components.</li>
<li>Every component must belong to exactly one module.</li>
<li>A module can contain many components; a component belongs to one module.</li>
</ul>`
                },
                {
                    q: "Explain Angular's compilation types: JIT vs AOT.",
                    a: `<p><strong>JIT (Just-in-Time)</strong>: Compiles the app in the browser at runtime. Used during development (<code>ng serve</code>).</p>
<p><strong>AOT (Ahead-of-Time)</strong>: Compiles the app at build time before the browser downloads it. Used in production (<code>ng build --prod</code>).</p>
<p>AOT advantages:</p>
<ul>
<li>Faster rendering — no compilation in the browser.</li>
<li>Smaller bundle — compiler is not shipped.</li>
<li>Catches template errors at build time.</li>
<li>Better security — templates are pre-compiled.</li>
</ul>`
                },
                {
                    q: "What are Decorators in Angular?",
                    a: `<p>Decorators are special functions that modify classes, properties, methods, or parameters. Angular uses TypeScript decorators extensively:</p>
<ul>
<li><strong>Class decorators</strong>: <code>@Component</code>, <code>@NgModule</code>, <code>@Directive</code>, <code>@Pipe</code>, <code>@Injectable</code></li>
<li><strong>Property decorators</strong>: <code>@Input</code>, <code>@Output</code>, <code>@ViewChild</code>, <code>@ContentChild</code></li>
<li><strong>Method decorators</strong>: <code>@HostListener</code></li>
<li><strong>Parameter decorators</strong>: <code>@Inject</code>, <code>@Optional</code>, <code>@Self</code>, <code>@SkipSelf</code></li>
</ul>`
                },
                {
                    q: "What is data binding in Angular? Explain all types.",
                    a: `<p>Data binding is the mechanism to synchronize data between the component class and the template. Angular supports four types:</p>
<ol>
<li><strong>Interpolation</strong>: <code>{{ expression }}</code> — one-way from component to view.</li>
<li><strong>Property Binding</strong>: <code>[property]="expression"</code> — one-way from component to view.</li>
<li><strong>Event Binding</strong>: <code>(event)="handler()"</code> — one-way from view to component.</li>
<li><strong>Two-Way Binding</strong>: <code>[(ngModel)]="property"</code> — both directions (requires FormsModule).</li>
</ol>`
                },
                {
                    q: "What are Angular lifecycle hooks? List all of them.",
                    a: `<p>Lifecycle hooks allow you to tap into key moments of a component/directive's lifecycle:</p>
<ol>
<li><code>ngOnChanges()</code> — when input properties change.</li>
<li><code>ngOnInit()</code> — after the first <code>ngOnChanges</code>; used for initialization.</li>
<li><code>ngDoCheck()</code> — custom change detection.</li>
<li><code>ngAfterContentInit()</code> — after content projection.</li>
<li><code>ngAfterContentChecked()</code> — after every content check.</li>
<li><code>ngAfterViewInit()</code> — after the component's view is initialized.</li>
<li><code>ngAfterViewChecked()</code> — after every view check.</li>
<li><code>ngOnDestroy()</code> — just before the component is destroyed; cleanup logic.</li>
</ol>`
                },
                {
                    q: "What is the difference between constructor and ngOnInit?",
                    a: `<p><strong>Constructor</strong>: A TypeScript class feature called when the class is instantiated. It is used primarily for <strong>dependency injection</strong>. At this point, input bindings and child views are not yet available.</p>
<p><strong>ngOnInit</strong>: An Angular lifecycle hook called after the constructor and after the first <code>ngOnChanges</code>. It is the right place for <strong>initialization logic</strong> that depends on input properties.</p>
<pre><code>export class MyComponent implements OnInit {
  @Input() data: string;

  constructor(private service: MyService) {
    // service is available
    // this.data is NOT yet available
  }

  ngOnInit() {
    // this.data IS available
    this.service.loadData(this.data);
  }
}</code></pre>`
                },
                {
                    q: "What is Angular Ivy? What are its benefits?",
                    a: `<p>Ivy is Angular's next-generation rendering engine and compiler pipeline (default since Angular 9). Benefits:</p>
<ul>
<li><strong>Smaller bundles</strong> via tree-shaking — unused code is removed.</li>
<li><strong>Faster compilation</strong> — incremental builds.</li>
<li><strong>Better debugging</strong> — human-readable code in dev mode.</li>
<li><strong>Improved template type-checking</strong>.</li>
<li><strong>Locality</strong> — components are compiled independently.</li>
<li>Enables features like <strong>lazy-loaded components</strong> without NgModules.</li>
</ul>`
                },
                {
                    q: "What is the purpose of the angular.json file?",
                    a: `<p>The <code>angular.json</code> file is the workspace configuration file. It defines:</p>
<ul>
<li>Projects in the workspace and their types (application/library).</li>
<li>Build options — output path, assets, styles, scripts, budgets.</li>
<li>Serve, test, lint, and e2e configurations.</li>
<li>Architect targets for custom builders.</li>
<li>File replacements (e.g., environment files).</li>
</ul>`
                },
                {
                    q: "How does Angular handle security (XSS, CSRF)?",
                    a: `<p>Angular has built-in protections:</p>
<ul>
<li><strong>XSS protection</strong>: Angular treats all values as untrusted by default and sanitizes them. It escapes HTML, styles, URLs, and resource URLs. Use <code>DomSanitizer</code> to bypass when necessary.</li>
<li><strong>CSRF/XSRF protection</strong>: Angular's <code>HttpClient</code> supports a cookie-based XSRF protection scheme via <code>HttpClientXsrfModule</code>.</li>
<li>Angular's template compiler prevents injection attacks by interpreting templates as data, not code.</li>
</ul>`
                },
                {
                    q: "What is View Encapsulation in Angular?",
                    a: `<p>View Encapsulation defines how CSS styles are scoped to a component. There are three modes:</p>
<ul>
<li><strong>Emulated</strong> (default): Angular adds unique attributes to elements and rewrites CSS selectors to scope styles.</li>
<li><strong>ShadowDom</strong>: Uses the browser's native Shadow DOM API for true encapsulation.</li>
<li><strong>None</strong>: No encapsulation; styles are global.</li>
</ul>
<pre><code>@Component({
  encapsulation: ViewEncapsulation.ShadowDom
})</code></pre>`
                },
                {
                    q: "Explain the difference between declarations, imports, and providers in @NgModule.",
                    a: `<ul>
<li><strong>declarations</strong>: Lists the components, directives, and pipes that belong to this module. They become available for use within this module's templates.</li>
<li><strong>imports</strong>: Lists other NgModules whose exported declarations are available in this module's templates (e.g., <code>FormsModule</code>, <code>RouterModule</code>).</li>
<li><strong>providers</strong>: Lists services available for dependency injection within this module's injector. Using <code>providedIn: 'root'</code> in the service itself is now preferred.</li>
</ul>`
                },
                {
                    q: "What is Angular Universal? Why use it?",
                    a: `<p>Angular Universal is a technology for <strong>server-side rendering (SSR)</strong> of Angular applications. Benefits:</p>
<ul>
<li><strong>SEO</strong>: Search engines can crawl the fully rendered page.</li>
<li><strong>Performance</strong>: Faster First Contentful Paint (FCP); the user sees content before JavaScript loads.</li>
<li><strong>Social media previews</strong>: Bots get a rendered HTML page.</li>
<li><strong>Low-powered devices</strong>: Reduces client-side processing.</li>
</ul>`
                },
                {
                    q: "What are Standalone Components in Angular?",
                    a: `<p>Introduced in Angular 14, standalone components don't need an NgModule. They declare their own dependencies:</p>
<pre><code>@Component({
  standalone: true,
  selector: 'app-hello',
  imports: [CommonModule, RouterModule],
  template: '&lt;h1&gt;Hello&lt;/h1&gt;'
})
export class HelloComponent {}</code></pre>
<p>Benefits: Simplified mental model, reduced boilerplate, better tree-shaking, easier lazy loading.</p>`
                },
                {
                    q: "What is the purpose of environment files in Angular?",
                    a: `<p>Environment files (<code>environment.ts</code> and <code>environment.prod.ts</code>) store configuration values that differ between development and production:</p>
<pre><code>// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.mysite.com'
};</code></pre>
<p>Angular CLI replaces the file during build via <code>fileReplacements</code> in <code>angular.json</code>.</p>`
                },
                {
                    q: "What is the difference between ViewChild and ContentChild?",
                    a: `<p><strong>@ViewChild</strong> queries elements or components in the component's <strong>own template</strong> (view DOM).</p>
<p><strong>@ContentChild</strong> queries elements or components <strong>projected into the component</strong> via <code>&lt;ng-content&gt;</code> (content DOM).</p>
<pre><code>// ViewChild — querying own template
@ViewChild('myDiv') myDiv: ElementRef;

// ContentChild — querying projected content
@ContentChild(HeaderComponent) header: HeaderComponent;</code></pre>`
                }
            ]
        },

        /* ====================================================
           2. Components & Templates
           ==================================================== */
        {
            id: "components-templates",
            title: "Components & Templates",
            icon: "bi-grid",
            questions: [
                {
                    q: "How do you pass data from parent to child component?",
                    a: `<p>Use the <code>@Input()</code> decorator in the child component:</p>
<pre><code>// child.component.ts
@Input() userName: string;

// parent.component.html
&lt;app-child [userName]="parentName"&gt;&lt;/app-child&gt;</code></pre>`
                },
                {
                    q: "How do you emit events from child to parent component?",
                    a: `<p>Use the <code>@Output()</code> decorator with <code>EventEmitter</code>:</p>
<pre><code>// child.component.ts
@Output() notify = new EventEmitter&lt;string&gt;();

onClick() {
  this.notify.emit('Hello from child!');
}

// parent.component.html
&lt;app-child (notify)="onNotify($event)"&gt;&lt;/app-child&gt;</code></pre>`
                },
                {
                    q: "What is ng-content and content projection?",
                    a: `<p>Content projection allows you to insert external content into a component's template using <code>&lt;ng-content&gt;</code>:</p>
<pre><code>// card.component.html
&lt;div class="card"&gt;
  &lt;ng-content select="[header]"&gt;&lt;/ng-content&gt;
  &lt;ng-content&gt;&lt;/ng-content&gt;
&lt;/div&gt;

// Usage
&lt;app-card&gt;
  &lt;h2 header&gt;Title&lt;/h2&gt;
  &lt;p&gt;Body content&lt;/p&gt;
&lt;/app-card&gt;</code></pre>
<p>Multi-slot projection uses the <code>select</code> attribute to target specific content.</p>`
                },
                {
                    q: "What is ng-template and when would you use it?",
                    a: `<p><code>&lt;ng-template&gt;</code> defines a template that is not rendered by default. It is used with structural directives and for dynamic rendering:</p>
<pre><code>&lt;ng-template #myTemplate let-name="name"&gt;
  &lt;p&gt;Hello, {{name}}&lt;/p&gt;
&lt;/ng-template&gt;

&lt;ng-container *ngTemplateOutlet="myTemplate; context: {name: 'World'}"&gt;
&lt;/ng-container&gt;</code></pre>
<p>Common use cases: conditional rendering, reusable template blocks, and custom structural directives.</p>`
                },
                {
                    q: "What is ng-container and why is it useful?",
                    a: `<p><code>&lt;ng-container&gt;</code> is a grouping element that doesn't render to the DOM. It's useful when you need to apply structural directives without adding extra HTML:</p>
<pre><code>&lt;!-- Without ng-container — adds an extra div --&gt;
&lt;div *ngIf="show"&gt;
  &lt;span *ngFor="let item of items"&gt;{{item}}&lt;/span&gt;
&lt;/div&gt;

&lt;!-- With ng-container — no extra DOM element --&gt;
&lt;ng-container *ngIf="show"&gt;
  &lt;span *ngFor="let item of items"&gt;{{item}}&lt;/span&gt;
&lt;/ng-container&gt;</code></pre>`
                },
                {
                    q: "How does change detection work in Angular?",
                    a: `<p>Angular uses Zone.js to automatically detect changes. When an async event occurs (click, HTTP response, timer), Angular runs change detection from the root component down the component tree.</p>
<p>Two strategies:</p>
<ul>
<li><strong>Default</strong>: Checks every component in the tree on every cycle.</li>
<li><strong>OnPush</strong>: Only checks when inputs change by reference, an event originates in the component, or an Observable emits (used with <code>async</code> pipe).</li>
</ul>
<pre><code>@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})</code></pre>`
                },
                {
                    q: "What is the OnPush change detection strategy?",
                    a: `<p>OnPush tells Angular to skip change detection for a component unless:</p>
<ul>
<li>An <code>@Input</code> reference changes (not just a property of the object).</li>
<li>An event handler in this component fires.</li>
<li>An Observable linked via the <code>async</code> pipe emits a new value.</li>
<li><code>ChangeDetectorRef.markForCheck()</code> is called manually.</li>
</ul>
<p>OnPush significantly improves performance in large applications by reducing the number of components checked.</p>`
                },
                {
                    q: "What are template reference variables?",
                    a: `<p>Template reference variables (declared with <code>#</code>) give you a reference to a DOM element, component, or directive:</p>
<pre><code>&lt;input #nameInput type="text"&gt;
&lt;button (click)="greet(nameInput.value)"&gt;Greet&lt;/button&gt;

&lt;!-- Reference to a component --&gt;
&lt;app-timer #timer&gt;&lt;/app-timer&gt;
&lt;button (click)="timer.start()"&gt;Start Timer&lt;/button&gt;</code></pre>`
                },
                {
                    q: "How do you use the async pipe?",
                    a: `<p>The <code>async</code> pipe subscribes to an Observable or Promise and returns the latest emitted value. It automatically unsubscribes when the component is destroyed:</p>
<pre><code>&lt;div *ngIf="user$ | async as user"&gt;
  &lt;p&gt;Welcome, {{ user.name }}&lt;/p&gt;
&lt;/div&gt;

&lt;ul&gt;
  &lt;li *ngFor="let item of items$ | async"&gt;{{ item }}&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p>Benefits: No manual subscribe/unsubscribe, works well with OnPush change detection.</p>`
                },
                {
                    q: "What are Dynamic Components and how do you create them?",
                    a: `<p>Dynamic components are components created programmatically at runtime. Since Angular 13, you can use <code>ViewContainerRef.createComponent()</code> directly:</p>
<pre><code>@ViewChild('container', { read: ViewContainerRef })
container: ViewContainerRef;

loadComponent() {
  this.container.clear();
  const ref = this.container.createComponent(DynamicComponent);
  ref.instance.data = 'Hello';
}</code></pre>`
                },
                {
                    q: "What is the difference between template-driven and reactive forms?",
                    a: `<p><strong>Template-driven forms</strong>: Logic resides mostly in the template using directives like <code>ngModel</code>. Simpler but less testable.</p>
<p><strong>Reactive forms</strong>: Logic resides in the component class using <code>FormGroup</code>, <code>FormControl</code>, and <code>FormArray</code>. More powerful, testable, and scalable.</p>
<table class="table table-sm">
<tr><th>Feature</th><th>Template-driven</th><th>Reactive</th></tr>
<tr><td>Setup</td><td>FormsModule</td><td>ReactiveFormsModule</td></tr>
<tr><td>Model</td><td>Directives</td><td>Component class</td></tr>
<tr><td>Validation</td><td>Directives</td><td>Functions</td></tr>
<tr><td>Testing</td><td>Harder</td><td>Easier</td></tr>
</table>`
                },
                {
                    q: "What are Angular Signals?",
                    a: `<p>Signals (introduced in Angular 16) are a reactive primitive for managing state. They track when values change and automatically update the UI:</p>
<pre><code>import { signal, computed, effect } from '@angular/core';

count = signal(0);
doubled = computed(() => this.count() * 2);

increment() {
  this.count.update(v => v + 1);
}

constructor() {
  effect(() => console.log('Count:', this.count()));
}</code></pre>
<p>Signals enable <strong>fine-grained reactivity</strong> and reduce reliance on Zone.js.</p>`
                },
                {
                    q: "How do you handle conditional rendering in Angular templates?",
                    a: `<p>Use structural directives:</p>
<pre><code>&lt;!-- *ngIf --&gt;
&lt;div *ngIf="isLoggedIn; else loginTemplate"&gt;
  Welcome!
&lt;/div&gt;
&lt;ng-template #loginTemplate&gt;
  &lt;p&gt;Please log in.&lt;/p&gt;
&lt;/ng-template&gt;

&lt;!-- *ngSwitch --&gt;
&lt;div [ngSwitch]="role"&gt;
  &lt;p *ngSwitchCase="'admin'"&gt;Admin Panel&lt;/p&gt;
  &lt;p *ngSwitchCase="'user'"&gt;User Dashboard&lt;/p&gt;
  &lt;p *ngSwitchDefault&gt;Guest View&lt;/p&gt;
&lt;/div&gt;

&lt;!-- @if (Angular 17+) --&gt;
@if (isLoggedIn) {
  &lt;p&gt;Welcome!&lt;/p&gt;
} @else {
  &lt;p&gt;Please log in.&lt;/p&gt;
}</code></pre>`
                },
                {
                    q: "What is trackBy in ngFor and why is it important?",
                    a: `<p><code>trackBy</code> tells Angular how to identify each item in an <code>*ngFor</code> loop. Without it, Angular destroys and recreates DOM elements when the array changes. With <code>trackBy</code>, Angular reuses existing DOM elements:</p>
<pre><code>&lt;li *ngFor="let user of users; trackBy: trackByUserId"&gt;
  {{ user.name }}
&lt;/li&gt;

trackByUserId(index: number, user: User): number {
  return user.id;
}</code></pre>
<p>This significantly improves rendering performance for large lists.</p>`
                },
                {
                    q: "How do you create and use a custom pipe?",
                    a: `<p>Pipes transform displayed values in templates. Create one with <code>@Pipe</code>:</p>
<pre><code>@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50): string {
    return value.length > limit
      ? value.substring(0, limit) + '...'
      : value;
  }
}

// Usage in template
&lt;p&gt;{{ longText | truncate:100 }}&lt;/p&gt;</code></pre>`
                },
                {
                    q: "What is the difference between pure and impure pipes?",
                    a: `<p><strong>Pure pipes</strong> (default): Angular only re-evaluates them when the input value reference changes. They are highly performant.</p>
<p><strong>Impure pipes</strong>: Angular re-evaluates them on every change detection cycle. Use sparingly as they can impact performance.</p>
<pre><code>@Pipe({
  name: 'filterItems',
  pure: false  // impure pipe
})</code></pre>
<p>Example: The built-in <code>async</code> pipe is impure because it needs to react to Observable emissions.</p>`
                },
                {
                    q: "What is the host property in @Component?",
                    a: `<p>The <code>host</code> property lets you bind to the host element's properties, attributes, and events:</p>
<pre><code>@Component({
  host: {
    'class': 'card-component',
    '[class.active]': 'isActive',
    '(click)': 'onClick($event)',
    '[attr.role]': '"button"'
  }
})</code></pre>
<p>Alternatively, use <code>@HostBinding</code> and <code>@HostListener</code> decorators.</p>`
                },
                {
                    q: "How do you use @defer for lazy loading in templates?",
                    a: `<p>Angular 17 introduced <code>@defer</code> for lazy-loading parts of a template:</p>
<pre><code>@defer (on viewport) {
  &lt;app-heavy-component /&gt;
} @placeholder {
  &lt;p&gt;Loading...&lt;/p&gt;
} @loading (minimum 500ms) {
  &lt;app-spinner /&gt;
} @error {
  &lt;p&gt;Failed to load.&lt;/p&gt;
}</code></pre>
<p>Triggers include: <code>on viewport</code>, <code>on interaction</code>, <code>on hover</code>, <code>on idle</code>, <code>on timer</code>, <code>when condition</code>.</p>`
                },
                {
                    q: "What is content projection with multiple slots?",
                    a: `<p>Multi-slot content projection uses <code>select</code> on <code>&lt;ng-content&gt;</code> to project content into specific areas:</p>
<pre><code>// card.component.html
&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;
    &lt;ng-content select="[card-header]"&gt;&lt;/ng-content&gt;
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;ng-content&gt;&lt;/ng-content&gt;
  &lt;/div&gt;
  &lt;div class="card-footer"&gt;
    &lt;ng-content select="[card-footer]"&gt;&lt;/ng-content&gt;
  &lt;/div&gt;
&lt;/div&gt;

// usage
&lt;app-card&gt;
  &lt;h3 card-header&gt;Title&lt;/h3&gt;
  &lt;p&gt;Main content goes here&lt;/p&gt;
  &lt;button card-footer&gt;OK&lt;/button&gt;
&lt;/app-card&gt;</code></pre>`
                },
                {
                    q: "How do you handle component communication for unrelated components?",
                    a: `<p>For unrelated components, use a <strong>shared service with a Subject/BehaviorSubject</strong>:</p>
<pre><code>// message.service.ts
@Injectable({ providedIn: 'root' })
export class MessageService {
  private messageSource = new BehaviorSubject&lt;string&gt;('');
  message$ = this.messageSource.asObservable();

  sendMessage(msg: string) {
    this.messageSource.next(msg);
  }
}

// sender.component.ts
this.messageService.sendMessage('Hello!');

// receiver.component.ts
this.messageService.message$.subscribe(msg => {
  this.message = msg;
});</code></pre>`
                }
            ]
        },

        /* ====================================================
           3. Directives
           ==================================================== */
        {
            id: "directives",
            title: "Directives",
            icon: "bi-signpost-2",
            questions: [
                {
                    q: "What are Directives in Angular? What are the types?",
                    a: `<p>Directives are classes that add behavior to elements in the DOM. Three types:</p>
<ul>
<li><strong>Component directives</strong>: Directives with a template (i.e., components).</li>
<li><strong>Structural directives</strong>: Change the DOM layout by adding/removing elements (<code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code>).</li>
<li><strong>Attribute directives</strong>: Change the appearance or behavior of an element (<code>ngClass</code>, <code>ngStyle</code>, custom).</li>
</ul>`
                },
                {
                    q: "What is the difference between structural and attribute directives?",
                    a: `<p><strong>Structural directives</strong> modify the DOM structure — they add or remove elements. They use the <code>*</code> prefix syntax (sugar for <code>&lt;ng-template&gt;</code>).</p>
<p><strong>Attribute directives</strong> modify the appearance or behavior of an existing element without changing the structure.</p>
<pre><code>&lt;!-- Structural --&gt;
&lt;div *ngIf="show"&gt;Visible&lt;/div&gt;

&lt;!-- Attribute --&gt;
&lt;div [ngClass]="{'active': isActive}"&gt;Styled&lt;/div&gt;</code></pre>`
                },
                {
                    q: "How do you create a custom attribute directive?",
                    a: `<pre><code>@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement,
      'backgroundColor', this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}

// Usage
&lt;p [appHighlight]="'lightblue'"&gt;Hover me!&lt;/p&gt;</code></pre>`
                },
                {
                    q: "How do you create a custom structural directive?",
                    a: `<pre><code>@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef&lt;any&gt;,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}

// Usage
&lt;p *appUnless="isLoggedIn"&gt;Please log in.&lt;/p&gt;</code></pre>`
                },
                {
                    q: "What is the ngClass directive and how do you use it?",
                    a: `<p><code>ngClass</code> dynamically adds/removes CSS classes. It accepts a string, array, or object:</p>
<pre><code>&lt;!-- String --&gt;
&lt;div [ngClass]="'active bold'"&gt;&lt;/div&gt;

&lt;!-- Array --&gt;
&lt;div [ngClass]="['active', 'bold']"&gt;&lt;/div&gt;

&lt;!-- Object (recommended) --&gt;
&lt;div [ngClass]="{
  'active': isActive,
  'disabled': isDisabled,
  'highlight': isHighlighted
}"&gt;&lt;/div&gt;</code></pre>`
                },
                {
                    q: "What is the ngStyle directive?",
                    a: `<p><code>ngStyle</code> dynamically sets inline styles:</p>
<pre><code>&lt;div [ngStyle]="{
  'color': textColor,
  'font-size.px': fontSize,
  'background-color': isActive ? 'green' : 'red'
}"&gt;
  Styled text
&lt;/div&gt;</code></pre>
<p>Prefer <code>ngClass</code> with CSS classes over <code>ngStyle</code> for maintainability.</p>`
                },
                {
                    q: "What is the difference between ElementRef and Renderer2?",
                    a: `<p><strong>ElementRef</strong> provides direct access to the native DOM element. It is simple but can be a <strong>security risk</strong> (XSS) and breaks <strong>server-side rendering</strong>.</p>
<p><strong>Renderer2</strong> provides an abstraction layer for DOM manipulation. It is <strong>platform-agnostic</strong> and <strong>XSS-safe</strong>.</p>
<pre><code>// ❌ Direct DOM access
this.el.nativeElement.style.color = 'red';

// ✅ Using Renderer2
this.renderer.setStyle(this.el.nativeElement, 'color', 'red');</code></pre>
<p>Always prefer <code>Renderer2</code> over direct DOM manipulation.</p>`
                },
                {
                    q: "What is @HostListener and @HostBinding?",
                    a: `<p><strong>@HostListener</strong> listens for events on the host element:</p>
<pre><code>@HostListener('click', ['$event'])
onClick(event: Event) {
  console.log('Element clicked!');
}</code></pre>
<p><strong>@HostBinding</strong> binds a host element property to a directive/component property:</p>
<pre><code>@HostBinding('class.active') isActive = false;
@HostBinding('style.opacity') opacity = '1';</code></pre>`
                },
                {
                    q: "How does the ngSwitch directive work?",
                    a: `<p><code>ngSwitch</code> is a set of directives that conditionally renders elements:</p>
<pre><code>&lt;div [ngSwitch]="userRole"&gt;
  &lt;p *ngSwitchCase="'admin'"&gt;Admin Dashboard&lt;/p&gt;
  &lt;p *ngSwitchCase="'editor'"&gt;Editor Panel&lt;/p&gt;
  &lt;p *ngSwitchCase="'viewer'"&gt;Read-only View&lt;/p&gt;
  &lt;p *ngSwitchDefault&gt;Unknown Role&lt;/p&gt;
&lt;/div&gt;</code></pre>
<p>Note: <code>[ngSwitch]</code> is an attribute directive; <code>*ngSwitchCase</code> and <code>*ngSwitchDefault</code> are structural directives.</p>`
                },
                {
                    q: "What is the exportAs property in directives?",
                    a: `<p><code>exportAs</code> allows you to access a directive instance in the template using a template reference variable:</p>
<pre><code>@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {
  message = '';
  show() { /* ... */ }
  hide() { /* ... */ }
}

&lt;!-- Usage --&gt;
&lt;span appTooltip #tip="tooltip"&gt;Hover&lt;/span&gt;
&lt;button (click)="tip.show()"&gt;Show Tooltip&lt;/button&gt;</code></pre>`
                },
                {
                    q: "Can you apply multiple structural directives on the same element?",
                    a: `<p>No, Angular does not allow two structural directives on the same element. Use <code>&lt;ng-container&gt;</code> to nest them:</p>
<pre><code>&lt;!-- ❌ This won't work --&gt;
&lt;div *ngIf="show" *ngFor="let item of items"&gt;&lt;/div&gt;

&lt;!-- ✅ Correct approach --&gt;
&lt;ng-container *ngIf="show"&gt;
  &lt;div *ngFor="let item of items"&gt;{{ item }}&lt;/div&gt;
&lt;/ng-container&gt;</code></pre>`
                },
                {
                    q: "What is the new Angular control flow syntax (@if, @for)?",
                    a: `<p>Angular 17 introduced built-in control flow that replaces <code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code>:</p>
<pre><code>@if (user) {
  &lt;p&gt;Welcome, {{ user.name }}&lt;/p&gt;
} @else {
  &lt;p&gt;Please log in&lt;/p&gt;
}

@for (item of items; track item.id) {
  &lt;li&gt;{{ item.name }}&lt;/li&gt;
} @empty {
  &lt;li&gt;No items found&lt;/li&gt;
}

@switch (status) {
  @case ('active') { &lt;span&gt;Active&lt;/span&gt; }
  @case ('inactive') { &lt;span&gt;Inactive&lt;/span&gt; }
  @default { &lt;span&gt;Unknown&lt;/span&gt; }
}</code></pre>
<p>Benefits: Better performance, built-in <code>track</code> (required in <code>@for</code>), and <code>@empty</code> block.</p>`
                },
                {
                    q: "What is the NgTemplateOutlet directive?",
                    a: `<p><code>NgTemplateOutlet</code> renders an <code>&lt;ng-template&gt;</code> dynamically and passes context data:</p>
<pre><code>&lt;ng-template #greetTemplate let-name let-greeting="greeting"&gt;
  &lt;p&gt;{{greeting}}, {{name}}!&lt;/p&gt;
&lt;/ng-template&gt;

&lt;ng-container *ngTemplateOutlet="greetTemplate;
  context: { $implicit: 'World', greeting: 'Hello' }"&gt;
&lt;/ng-container&gt;</code></pre>
<p>It's commonly used for creating configurable/reusable component templates.</p>`
                },
                {
                    q: "How do you handle DOM manipulation safely in Angular?",
                    a: `<p>Always use Angular's abstraction layers instead of direct DOM access:</p>
<ul>
<li><strong>Renderer2</strong> for setting styles, attributes, and classes.</li>
<li><strong>@ViewChild</strong> with <code>ElementRef</code> for reading DOM properties.</li>
<li><strong>ngClass / ngStyle</strong> for dynamic styling.</li>
<li><strong>Template reference variables</strong> for element references.</li>
<li>Avoid <code>document.querySelector</code> and <code>innerHTML</code>.</li>
</ul>
<pre><code>// ✅ Safe approach
this.renderer.setAttribute(this.el.nativeElement, 'aria-label', 'Close');
this.renderer.addClass(this.el.nativeElement, 'visible');</code></pre>`
                },
                {
                    q: "What is the difference between ngIf and the hidden attribute?",
                    a: `<ul>
<li><code>*ngIf</code> <strong>removes/adds</strong> the element from the DOM entirely. The component is destroyed and recreated.</li>
<li><code>[hidden]</code> keeps the element in the DOM but toggles its visibility via CSS <code>display: none</code>.</li>
</ul>
<p>Use <code>*ngIf</code> when the element is expensive and rarely shown. Use <code>[hidden]</code> when you need quick toggling and want to preserve state.</p>`
                },
                {
                    q: "What is a Directive's selector and what types are supported?",
                    a: `<p>The selector defines how the directive is applied in templates. Supported selector types:</p>
<ul>
<li><strong>Element</strong>: <code>'app-my-comp'</code> — matches <code>&lt;app-my-comp&gt;</code></li>
<li><strong>Attribute</strong>: <code>'[appHighlight]'</code> — matches <code>&lt;div appHighlight&gt;</code></li>
<li><strong>Class</strong>: <code>'.app-active'</code> — matches <code>&lt;div class="app-active"&gt;</code></li>
<li><strong>Combination</strong>: <code>'input[type=text]'</code> — matches <code>&lt;input type="text"&gt;</code></li>
<li><strong>NOT</strong>: <code>'div:not(.special)'</code></li>
</ul>
<p>Components typically use element selectors; attribute directives use attribute selectors.</p>`
                },
                {
                    q: "How do you pass multiple inputs to a directive?",
                    a: `<pre><code>@Directive({ selector: '[appTooltip]' })
export class TooltipDirective {
  @Input() appTooltip: string;      // main input
  @Input() tooltipPosition: string = 'top';
  @Input() tooltipDelay: number = 300;
}

&lt;!-- Usage --&gt;
&lt;button
  [appTooltip]="'Click me!'"
  tooltipPosition="bottom"
  [tooltipDelay]="500"&gt;
  Hover
&lt;/button&gt;</code></pre>`
                },
                {
                    q: "What are directive composition patterns?",
                    a: `<p>Angular 15 introduced the <strong>Directive Composition API</strong> (<code>hostDirectives</code>), allowing you to apply directives to a component's host element:</p>
<pre><code>@Component({
  selector: 'app-menu-item',
  hostDirectives: [
    {
      directive: TooltipDirective,
      inputs: ['appTooltip: tooltip'],
      outputs: []
    },
    FocusableDirective
  ],
  template: '&lt;ng-content /&gt;'
})
export class MenuItemComponent {}</code></pre>
<p>This enables powerful reuse without inheritance or manual directive application.</p>`
                },
                {
                    q: "What is the difference between ngOnChanges and ngDoCheck?",
                    a: `<p><strong>ngOnChanges</strong>: Called when any <code>@Input</code> property changes. Receives a <code>SimpleChanges</code> object with previous and current values. It only detects reference changes.</p>
<p><strong>ngDoCheck</strong>: Called on every change detection cycle. Used for custom change detection that <code>ngOnChanges</code> cannot handle, such as deep object changes or array mutations.</p>
<pre><code>ngOnChanges(changes: SimpleChanges) {
  if (changes['data']) {
    console.log('Previous:', changes['data'].previousValue);
    console.log('Current:', changes['data'].currentValue);
  }
}

ngDoCheck() {
  // Manual deep comparison
  if (this.currentLength !== this.items.length) {
    this.currentLength = this.items.length;
    this.refresh();
  }
}</code></pre>`
                },
                {
                    q: "How do you conditionally apply a directive?",
                    a: `<p>There is no built-in way to conditionally apply a directive. Common patterns:</p>
<pre><code>&lt;!-- Pattern 1: Use *ngIf with two elements --&gt;
&lt;input *ngIf="useTooltip" appTooltip="Help"&gt;
&lt;input *ngIf="!useTooltip"&gt;

&lt;!-- Pattern 2: Control behavior inside the directive --&gt;
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input() highlightEnabled = true;

  @HostListener('mouseenter')
  onHover() {
    if (!this.highlightEnabled) return;
    // apply highlight
  }
}</code></pre>`
                }
            ]
        },

        /* ====================================================
           4. Services & Dependency Injection
           ==================================================== */
        {
            id: "services-di",
            title: "Services & Dependency Injection",
            icon: "bi-gear",
            questions: [
                {
                    q: "What are Services in Angular?",
                    a: `<p>Services are classes decorated with <code>@Injectable()</code> that encapsulate business logic, data access, and shared state. They follow the <strong>Single Responsibility Principle</strong> — components handle the view, services handle the logic.</p>
<pre><code>@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers(): Observable&lt;User[]&gt; {
    return this.http.get&lt;User[]&gt;('/api/users');
  }
  constructor(private http: HttpClient) {}
}</code></pre>`
                },
                {
                    q: "How does Dependency Injection work in Angular?",
                    a: `<p>Angular's DI system provides dependencies (services, values) to components and other services. The process:</p>
<ol>
<li>Register a provider (tells Angular how to create the dependency).</li>
<li>Declare the dependency in the constructor.</li>
<li>Angular's injector creates and injects the instance.</li>
</ol>
<pre><code>// Registration
@Injectable({ providedIn: 'root' })
export class DataService {}

// Injection
@Component({ ... })
export class MyComponent {
  constructor(private dataService: DataService) {}
}</code></pre>`
                },
                {
                    q: "What is the difference between providedIn: 'root' and providing in a module?",
                    a: `<p><code>providedIn: 'root'</code> creates a <strong>singleton</strong> service available application-wide. It is <strong>tree-shakable</strong> — if no component injects it, it's removed from the bundle.</p>
<p>Providing in a module's <code>providers</code> array creates the service in that module's injector. If the module is lazy-loaded, the service gets its own instance.</p>
<pre><code>// Tree-shakable (recommended)
@Injectable({ providedIn: 'root' })
export class GlobalService {}

// Module-scoped
@NgModule({
  providers: [ScopedService]
})</code></pre>`
                },
                {
                    q: "What is the hierarchical injector system?",
                    a: `<p>Angular has a hierarchy of injectors:</p>
<ol>
<li><strong>Root injector</strong> (<code>providedIn: 'root'</code>) — application-wide singleton.</li>
<li><strong>Module injector</strong> — created per lazy-loaded module.</li>
<li><strong>Element injector</strong> — created per component/directive; configured via <code>providers</code> or <code>viewProviders</code> in the component decorator.</li>
</ol>
<p>When a component requests a dependency, Angular walks up the injector tree until it finds a provider.</p>`
                },
                {
                    q: "What is the difference between providers and viewProviders?",
                    a: `<p><strong>providers</strong>: Service is available to the component, its view children, AND its content children (projected via <code>ng-content</code>).</p>
<p><strong>viewProviders</strong>: Service is available only to the component and its view children — NOT to content children.</p>
<pre><code>@Component({
  providers: [SharedService],     // visible to projected content too
  viewProviders: [PrivateService] // hidden from projected content
})</code></pre>`
                },
                {
                    q: "What are injection tokens?",
                    a: `<p>Injection tokens are used when the dependency is not a class (e.g., a string, object, or interface):</p>
<pre><code>// Define token
export const API_URL = new InjectionToken&lt;string&gt;('apiUrl');

// Provide
@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
})

// Inject
constructor(@Inject(API_URL) private apiUrl: string) {}</code></pre>`
                },
                {
                    q: "What are the different provider types in Angular?",
                    a: `<ul>
<li><strong>useClass</strong>: Creates a new instance of the given class.
<pre><code>{ provide: Logger, useClass: BetterLogger }</code></pre></li>
<li><strong>useExisting</strong>: Aliases one token to another.
<pre><code>{ provide: OldService, useExisting: NewService }</code></pre></li>
<li><strong>useValue</strong>: Provides a static value.
<pre><code>{ provide: API_URL, useValue: 'https://api.com' }</code></pre></li>
<li><strong>useFactory</strong>: Creates the dependency using a factory function.
<pre><code>{ provide: Logger, useFactory: loggerFactory, deps: [Config] }</code></pre></li>
</ul>`
                },
                {
                    q: "What are @Optional, @Self, @SkipSelf, and @Host decorators?",
                    a: `<ul>
<li><strong>@Optional()</strong>: Don't throw an error if the dependency is not found; inject <code>null</code> instead.</li>
<li><strong>@Self()</strong>: Only look for the dependency in this component's own injector.</li>
<li><strong>@SkipSelf()</strong>: Skip this component's injector; look in parent injectors only.</li>
<li><strong>@Host()</strong>: Look up to the host component's injector (but not beyond).</li>
</ul>
<pre><code>constructor(
  @Optional() private logger: LoggerService,
  @Self() private local: LocalService,
  @SkipSelf() private parent: ParentService
) {}</code></pre>`
                },
                {
                    q: "How do you create a singleton service in Angular?",
                    a: `<p>Two recommended approaches:</p>
<pre><code>// Approach 1: providedIn: 'root' (recommended)
@Injectable({ providedIn: 'root' })
export class SingletonService {}

// Approach 2: Provide in AppModule
@NgModule({
  providers: [SingletonService]
})
export class AppModule {}</code></pre>
<p>Avoid providing the service in multiple modules or components, as this creates multiple instances.</p>`
                },
                {
                    q: "What is the multi provider option?",
                    a: `<p>The <code>multi: true</code> option lets you register multiple providers for the same token. The injector returns an array of all values:</p>
<pre><code>const VALIDATORS = new InjectionToken&lt;Validator[]&gt;('validators');

providers: [
  { provide: VALIDATORS, useClass: RequiredValidator, multi: true },
  { provide: VALIDATORS, useClass: EmailValidator, multi: true },
  { provide: VALIDATORS, useClass: MinLengthValidator, multi: true }
]

// Injected as an array
constructor(@Inject(VALIDATORS) private validators: Validator[]) {
  // validators = [RequiredValidator, EmailValidator, MinLengthValidator]
}</code></pre>`
                },
                {
                    q: "How do you test services with dependencies?",
                    a: `<pre><code>describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].name).toBe('John');
    });

    const req = httpMock.expectOne('/api/users');
    req.flush(mockUsers);
  });
});</code></pre>`
                },
                {
                    q: "What is the inject() function (functional injection)?",
                    a: `<p>Angular 14 introduced the <code>inject()</code> function as an alternative to constructor injection:</p>
<pre><code>import { inject } from '@angular/core';

@Component({ ... })
export class MyComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = inject(API_URL);

  loadData() {
    return this.http.get(this.apiUrl + '/data');
  }
}</code></pre>
<p>Advantages: Works in functions and guards, reduces constructor boilerplate, easier to compose.</p>`
                },
                {
                    q: "How do you provide different service instances in lazy-loaded modules?",
                    a: `<p>Lazy-loaded modules get their own injector. If you provide a service in a lazy-loaded module, it gets a separate instance from the root:</p>
<pre><code>// shared.module.ts (lazy loaded)
@NgModule({
  providers: [DataService] // Separate instance for this module
})
export class SharedModule {}</code></pre>
<p>If you want a single instance everywhere, use <code>providedIn: 'root'</code> in the service itself.</p>`
                },
                {
                    q: "What is forRoot and forChild pattern?",
                    a: `<p>This pattern ensures that services in shared modules are provided only once (in the root module):</p>
<pre><code>@NgModule({})
export class SharedModule {
  static forRoot(): ModuleWithProviders&lt;SharedModule&gt; {
    return {
      ngModule: SharedModule,
      providers: [SingletonService]
    };
  }

  static forChild(): ModuleWithProviders&lt;SharedModule&gt; {
    return {
      ngModule: SharedModule,
      providers: [] // No services — just declarations
    };
  }
}

// AppModule
imports: [SharedModule.forRoot()]

// Feature module
imports: [SharedModule.forChild()]</code></pre>`
                },
                {
                    q: "What is the resolution modifier pattern in DI?",
                    a: `<p>Resolution modifiers control how Angular's injector searches for providers:</p>
<pre><code>// Combine modifiers for fine-grained control
constructor(
  @Optional() @SkipSelf() parentService: ParentService
) {
  // If parent injector has it, use it
  // If not, don't throw — get null
  if (!parentService) {
    // This is the root instance
  }
}</code></pre>
<p>This pattern is common for services that need to detect if they're at the root level of a hierarchy.</p>`
                },
                {
                    q: "How do you use abstract classes as injection tokens?",
                    a: `<pre><code>// Define abstract class (acts as token + interface)
export abstract class StorageService {
  abstract getItem(key: string): string | null;
  abstract setItem(key: string, value: string): void;
}

// Concrete implementation
@Injectable()
export class LocalStorageService extends StorageService {
  getItem(key: string) { return localStorage.getItem(key); }
  setItem(key: string, value: string) { localStorage.setItem(key, value); }
}

// Provide
providers: [
  { provide: StorageService, useClass: LocalStorageService }
]

// Inject (using the abstract class as the type)
constructor(private storage: StorageService) {}</code></pre>`
                },
                {
                    q: "What is tree-shaking and how does DI support it?",
                    a: `<p>Tree-shaking removes unused code from the final bundle. Angular's <code>providedIn: 'root'</code> enables tree-shaking for services:</p>
<ul>
<li>When using <code>providedIn: 'root'</code>, the service references the injector (not the other way around).</li>
<li>If no component injects the service, the bundler removes it entirely.</li>
<li>Module-level <code>providers: []</code> arrays are NOT tree-shakable — the module always references the service.</li>
</ul>`
                },
                {
                    q: "How do you create environment-specific services?",
                    a: `<pre><code>// Abstract service
export abstract class LoggerService {
  abstract log(message: string): void;
}

// Development implementation
@Injectable()
export class ConsoleLogger extends LoggerService {
  log(message: string) { console.log('[DEV]', message); }
}

// Production implementation
@Injectable()
export class RemoteLogger extends LoggerService {
  log(message: string) { /* Send to server */ }
}

// app.module.ts
providers: [
  {
    provide: LoggerService,
    useClass: environment.production ? RemoteLogger : ConsoleLogger
  }
]</code></pre>`
                },
                {
                    q: "What is the inject function context requirement?",
                    a: `<p>The <code>inject()</code> function can only be called in specific contexts:</p>
<ul>
<li>During construction (in constructor or field initializer).</li>
<li>In factory functions used with <code>useFactory</code>.</li>
<li>In functional guards, resolvers, and interceptors.</li>
<li>In <code>runInInjectionContext()</code> calls.</li>
</ul>
<pre><code>// ✅ Works — field initializer
private http = inject(HttpClient);

// ❌ Fails — called later (outside injection context)
ngOnInit() {
  const router = inject(Router); // ERROR!
}

// ✅ Works — runInInjectionContext
this.injector.runInInjectionContext(() => {
  const service = inject(MyService);
});</code></pre>`
                },
                {
                    q: "How do you share state between components using a service?",
                    a: `<pre><code>@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject&lt;CartItem[]&gt;([]);
  items$ = this.itemsSubject.asObservable();
  totalCount$ = this.items$.pipe(
    map(items => items.reduce((sum, i) => sum + i.quantity, 0))
  );

  addItem(item: CartItem) {
    const current = this.itemsSubject.getValue();
    this.itemsSubject.next([...current, item]);
  }

  removeItem(id: string) {
    const current = this.itemsSubject.getValue();
    this.itemsSubject.next(current.filter(i => i.id !== id));
  }
}

// In components — just inject and subscribe
items$ = this.cartService.items$;
// template: *ngFor="let item of items$ | async"</code></pre>`
                }
            ]
        },

        /* ====================================================
           5. Routing & Navigation
           ==================================================== */
        {
            id: "routing",
            title: "Routing & Navigation",
            icon: "bi-signpost-split",
            questions: [
                {
                    q: "How do you set up routing in an Angular application?",
                    a: `<pre><code>// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// app.component.html
&lt;nav&gt;
  &lt;a routerLink="/" routerLinkActive="active"&gt;Home&lt;/a&gt;
  &lt;a routerLink="/about" routerLinkActive="active"&gt;About&lt;/a&gt;
&lt;/nav&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>`
                },
                {
                    q: "What is lazy loading and how do you implement it?",
                    a: `<p>Lazy loading loads feature modules on demand, reducing the initial bundle size:</p>
<pre><code>const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  },
  // Standalone component lazy loading
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(c => c.DashboardComponent)
  }
];</code></pre>`
                },
                {
                    q: "What are Route Guards? List all types.",
                    a: `<p>Route guards control navigation. Types (functional guards are now preferred):</p>
<ul>
<li><strong>canActivate</strong>: Decides if a route can be activated.</li>
<li><strong>canActivateChild</strong>: Decides if child routes can be activated.</li>
<li><strong>canDeactivate</strong>: Decides if the user can leave a route (e.g., unsaved changes).</li>
<li><strong>canMatch</strong>: Decides if a route can be matched (replaces canLoad).</li>
<li><strong>resolve</strong>: Pre-fetches data before the route activates.</li>
</ul>
<pre><code>// Functional guard (modern approach)
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  return auth.isLoggedIn() ? true : inject(Router).createUrlTree(['/login']);
};</code></pre>`
                },
                {
                    q: "How do you pass and read route parameters?",
                    a: `<pre><code>// Route definition
{ path: 'users/:id', component: UserComponent }

// Navigate
this.router.navigate(['/users', userId]);
// or
&lt;a [routerLink]="['/users', user.id]"&gt;View&lt;/a&gt;

// Read parameter (snapshot — one-time)
const id = this.route.snapshot.paramMap.get('id');

// Read parameter (observable — reacts to changes)
this.route.paramMap.subscribe(params => {
  this.userId = params.get('id');
  this.loadUser(this.userId);
});</code></pre>`
                },
                {
                    q: "What is the difference between paramMap and queryParamMap?",
                    a: `<p><strong>paramMap</strong>: Contains route parameters defined in the path (e.g., <code>:id</code>).</p>
<p><strong>queryParamMap</strong>: Contains query string parameters (after <code>?</code> in the URL).</p>
<pre><code>// URL: /users/42?sort=name&order=asc

// Route params
this.route.paramMap.subscribe(p => p.get('id')); // '42'

// Query params
this.route.queryParamMap.subscribe(q => {
  q.get('sort');  // 'name'
  q.get('order'); // 'asc'
});</code></pre>`
                },
                {
                    q: "What is the Router Events observable?",
                    a: `<p>The Router emits events during navigation that you can subscribe to for tracking, loading indicators, etc.:</p>
<pre><code>this.router.events.pipe(
  filter(e => e instanceof NavigationStart
           || e instanceof NavigationEnd
           || e instanceof NavigationError)
).subscribe(event => {
  if (event instanceof NavigationStart) {
    this.loading = true;
  }
  if (event instanceof NavigationEnd
   || event instanceof NavigationError) {
    this.loading = false;
  }
});</code></pre>`
                },
                {
                    q: "What are child routes (nested routes)?",
                    a: `<pre><code>const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'settings', component: AdminSettingsComponent }
    ]
  }
];

// admin-layout.component.html
&lt;h2&gt;Admin Panel&lt;/h2&gt;
&lt;nav&gt;
  &lt;a routerLink="users"&gt;Users&lt;/a&gt;
  &lt;a routerLink="settings"&gt;Settings&lt;/a&gt;
&lt;/nav&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></pre>`
                },
                {
                    q: "What is a Route Resolver and how do you use it?",
                    a: `<p>Resolvers pre-fetch data before a route activates, ensuring data is available when the component loads:</p>
<pre><code>// Functional resolver
export const userResolver: ResolveFn&lt;User&gt; = (route) => {
  const userService = inject(UserService);
  return userService.getUser(route.paramMap.get('id')!);
};

// Route config
{
  path: 'users/:id',
  component: UserDetailComponent,
  resolve: { user: userResolver }
}

// Component
ngOnInit() {
  this.user = this.route.snapshot.data['user'];
  // OR
  this.route.data.subscribe(data => this.user = data['user']);
}</code></pre>`
                },
                {
                    q: "What is the difference between routerLink and router.navigate?",
                    a: `<p><strong>routerLink</strong>: Used in templates (declarative).</p>
<p><strong>router.navigate</strong>: Used in component class (programmatic).</p>
<pre><code>&lt;!-- routerLink (template) --&gt;
&lt;a [routerLink]="['/users', user.id]"
   [queryParams]="{ tab: 'profile' }"&gt;View&lt;/a&gt;

// router.navigate (class)
this.router.navigate(['/users', user.id], {
  queryParams: { tab: 'profile' },
  fragment: 'bio'
});

// Relative navigation
this.router.navigate(['edit'], { relativeTo: this.route });</code></pre>`
                },
                {
                    q: "What is the purpose of RouterOutlet?",
                    a: `<p><code>&lt;router-outlet&gt;</code> is a placeholder directive that marks where the router should display components. You can have:</p>
<ul>
<li><strong>Primary outlet</strong>: <code>&lt;router-outlet&gt;&lt;/router-outlet&gt;</code></li>
<li><strong>Named outlets</strong>: <code>&lt;router-outlet name="sidebar"&gt;&lt;/router-outlet&gt;</code></li>
</ul>
<pre><code>// Named outlet routing
{
  path: 'chat',
  component: ChatComponent,
  outlet: 'sidebar'
}

// Navigation
this.router.navigate([{ outlets: { sidebar: ['chat'] } }]);</code></pre>`
                },
                {
                    q: "How do you handle route redirects?",
                    a: `<pre><code>const routes: Routes = [
  // Redirect empty path to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Redirect old paths
  { path: 'old-page', redirectTo: '/new-page' },

  { path: 'home', component: HomeComponent },
  { path: 'new-page', component: NewPageComponent },

  // Wildcard (404)
  { path: '**', component: NotFoundComponent }
];</code></pre>
<p><strong>pathMatch: 'full'</strong> means the entire URL path must match. Without it, every URL starting with '' would redirect.</p>`
                },
                {
                    q: "What is preloading strategy in Angular routing?",
                    a: `<p>Preloading loads lazy modules in the background after the app starts:</p>
<pre><code>// Built-in: preload all modules
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })]
})

// Custom strategy: selective preloading
@Injectable({ providedIn: 'root' })
export class SelectivePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable&lt;any&gt;) {
    return route.data?.['preload'] ? load() : of(null);
  }
}

// Route with preload flag
{ path: 'dashboard', loadChildren: ..., data: { preload: true } }</code></pre>`
                },
                {
                    q: "How do you implement breadcrumbs using the Router?",
                    a: `<pre><code>// Add data to routes
const routes: Routes = [
  {
    path: 'products',
    data: { breadcrumb: 'Products' },
    children: [
      { path: ':id', data: { breadcrumb: 'Details' },
        component: ProductDetailComponent }
    ]
  }
];

// Breadcrumb component
buildBreadcrumbs(route: ActivatedRoute, url = '', crumbs = []) {
  const children = route.children;
  for (const child of children) {
    const routeURL = child.snapshot.url.map(s => s.path).join('/');
    if (routeURL) url += '/' + routeURL;
    const label = child.snapshot.data['breadcrumb'];
    if (label) crumbs.push({ label, url });
    return this.buildBreadcrumbs(child, url, crumbs);
  }
  return crumbs;
}</code></pre>`
                },
                {
                    q: "What is the ActivatedRoute service?",
                    a: `<p><code>ActivatedRoute</code> provides information about the route associated with the loaded component:</p>
<ul>
<li><code>paramMap</code> / <code>params</code> — route parameters.</li>
<li><code>queryParamMap</code> / <code>queryParams</code> — query parameters.</li>
<li><code>data</code> — static and resolved data.</li>
<li><code>fragment</code> — URL fragment (#hash).</li>
<li><code>url</code> — URL segments.</li>
<li><code>outlet</code> — router outlet name.</li>
<li><code>parent</code> / <code>children</code> — route tree navigation.</li>
</ul>`
                },
                {
                    q: "How do you implement route animations?",
                    a: `<pre><code>// app.component.html
&lt;div [@routeAnimations]="getRouteState(outlet)"&gt;
  &lt;router-outlet #outlet="outlet"&gt;&lt;/router-outlet&gt;
&lt;/div&gt;

// route-animations.ts
export const routeAnimations = trigger('routeAnimations', [
  transition('* &lt;=&gt; *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(20px)' })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease', style({ opacity: 1, transform: 'none' }))
      ], { optional: true })
    ])
  ])
]);</code></pre>`
                },
                {
                    q: "What is Location strategy in Angular routing?",
                    a: `<p>Angular supports two URL strategies:</p>
<ul>
<li><strong>PathLocationStrategy</strong> (default): Uses HTML5 History API. URLs look like <code>/users/42</code>. Requires server-side configuration to redirect all routes to <code>index.html</code>.</li>
<li><strong>HashLocationStrategy</strong>: Uses hash fragments. URLs look like <code>/#/users/42</code>. Works without server configuration.</li>
</ul>
<pre><code>// Use hash strategy
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})</code></pre>`
                },
                {
                    q: "How do you handle query parameters in Angular?",
                    a: `<pre><code>// Setting query params — template
&lt;a routerLink="/products"
   [queryParams]="{ category: 'electronics', page: 1 }"
   queryParamsHandling="merge"&gt;Electronics&lt;/a&gt;

// Setting query params — programmatic
this.router.navigate(['/products'], {
  queryParams: { category: 'electronics', page: 1 },
  queryParamsHandling: 'merge' // 'preserve' | 'merge' | ''
});

// Reading query params
this.route.queryParams.subscribe(params => {
  this.category = params['category'];
  this.page = +params['page'] || 1;
});</code></pre>`
                },
                {
                    q: "What is title strategy in Angular routing?",
                    a: `<p>Angular 14+ supports setting the page title via the route config and a title strategy:</p>
<pre><code>const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  {
    path: 'users/:id',
    component: UserComponent,
    title: userTitleResolver // Can use a resolver
  }
];

// Custom title strategy
@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  updateTitle(snapshot: RouterStateSnapshot) {
    const title = this.buildTitle(snapshot);
    document.title = title ? title + ' | MyApp' : 'MyApp';
  }
}

// Provide it
providers: [{ provide: TitleStrategy, useClass: AppTitleStrategy }]</code></pre>`
                },
                {
                    q: "How do you protect routes with authentication?",
                    a: `<pre><code>// auth.guard.ts (functional)
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  // Store the attempted URL for redirecting after login
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: inject(ActivatedRoute).snapshot.url }
  });
};

// routes
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    children: [...]
  }
];</code></pre>`
                },
                {
                    q: "What is the canDeactivate guard and when would you use it?",
                    a: `<p><code>canDeactivate</code> prevents the user from accidentally leaving a page with unsaved changes:</p>
<pre><code>export interface CanDeactivateComponent {
  canDeactivate(): boolean | Observable&lt;boolean&gt;;
}

export const unsavedChangesGuard: CanDeactivateFn&lt;CanDeactivateComponent&gt; =
  (component) => {
    if (component.canDeactivate()) {
      return true;
    }
    return confirm('You have unsaved changes. Leave anyway?');
  };

// Route
{
  path: 'edit',
  component: EditComponent,
  canDeactivate: [unsavedChangesGuard]
}

// Component implements the interface
export class EditComponent implements CanDeactivateComponent {
  canDeactivate() {
    return !this.form.dirty;
  }
}</code></pre>`
                }
            ]
        },

        /* ====================================================
           6. RxJS & Observables
           ==================================================== */
        {
            id: "rxjs",
            title: "RxJS & Observables",
            icon: "bi-arrow-repeat",
            questions: [
                {
                    q: "What is RxJS and why is it used in Angular?",
                    a: `<p>RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. Angular uses RxJS for:</p>
<ul>
<li>HTTP requests (<code>HttpClient</code> returns Observables).</li>
<li>Router events.</li>
<li>Form value/status changes.</li>
<li>Component communication via services.</li>
<li>Event handling and state management.</li>
</ul>
<p>Observables represent a stream of values over time that you can transform, combine, and subscribe to.</p>`
                },
                {
                    q: "What is the difference between Observable, Subject, and BehaviorSubject?",
                    a: `<ul>
<li><strong>Observable</strong>: Unicast — each subscriber gets an independent execution. Cold by default (doesn't emit until subscribed).</li>
<li><strong>Subject</strong>: Multicast — all subscribers share the same execution. Hot — new subscribers miss previously emitted values.</li>
<li><strong>BehaviorSubject</strong>: Like Subject, but holds a current value. New subscribers immediately receive the last emitted value.</li>
</ul>
<pre><code>const subject = new Subject&lt;number&gt;();
const behavior = new BehaviorSubject&lt;number&gt;(0);

behavior.subscribe(v => console.log('A:', v)); // A: 0
behavior.next(1); // A: 1
behavior.subscribe(v => console.log('B:', v)); // B: 1 (gets current)
behavior.next(2); // A: 2, B: 2</code></pre>`
                },
                {
                    q: "What are the most commonly used RxJS operators?",
                    a: `<ul>
<li><strong>Transformation</strong>: <code>map</code>, <code>switchMap</code>, <code>mergeMap</code>, <code>concatMap</code>, <code>exhaustMap</code></li>
<li><strong>Filtering</strong>: <code>filter</code>, <code>distinctUntilChanged</code>, <code>debounceTime</code>, <code>take</code>, <code>first</code>, <code>skip</code></li>
<li><strong>Combination</strong>: <code>combineLatest</code>, <code>merge</code>, <code>forkJoin</code>, <code>zip</code>, <code>withLatestFrom</code></li>
<li><strong>Error handling</strong>: <code>catchError</code>, <code>retry</code>, <code>retryWhen</code></li>
<li><strong>Utility</strong>: <code>tap</code>, <code>finalize</code>, <code>delay</code>, <code>shareReplay</code></li>
</ul>`
                },
                {
                    q: "What is the difference between switchMap, mergeMap, concatMap, and exhaustMap?",
                    a: `<ul>
<li><strong>switchMap</strong>: Cancels the previous inner Observable when a new value arrives. Use for: search typeahead, route changes.</li>
<li><strong>mergeMap</strong>: Runs inner Observables concurrently. Use for: parallel requests that don't conflict.</li>
<li><strong>concatMap</strong>: Queues inner Observables and runs them sequentially. Use for: ordered operations (save, then refresh).</li>
<li><strong>exhaustMap</strong>: Ignores new values while the inner Observable is active. Use for: preventing duplicate submissions (login button).</li>
</ul>
<pre><code>// Search with switchMap (cancels previous)
this.searchInput.valueChanges.pipe(
  debounceTime(300),
  switchMap(term => this.searchService.search(term))
).subscribe(results => this.results = results);</code></pre>`
                },
                {
                    q: "How do you handle errors in Observables?",
                    a: `<pre><code>this.http.get('/api/data').pipe(
  // Retry up to 3 times
  retry(3),

  // Catch and handle errors
  catchError(error => {
    console.error('Error:', error);

    // Option 1: Return a default value
    return of([]);

    // Option 2: Rethrow
    // return throwError(() => new Error('Custom error'));
  }),

  // Always execute (like finally)
  finalize(() => this.loading = false)
).subscribe({
  next: data => this.data = data,
  error: err => this.errorMessage = err.message
});</code></pre>`
                },
                {
                    q: "What is the async pipe and why should you use it?",
                    a: `<p>The <code>async</code> pipe subscribes to an Observable/Promise in the template and returns the latest value. Benefits:</p>
<ul>
<li><strong>Automatic unsubscription</strong> — no memory leaks.</li>
<li>Works with <strong>OnPush</strong> change detection.</li>
<li>Cleaner code — no manual subscribe/unsubscribe in the component.</li>
</ul>
<pre><code>// Component
users$ = this.userService.getUsers();

// Template
&lt;div *ngIf="users$ | async as users"&gt;
  &lt;p&gt;Total: {{ users.length }}&lt;/p&gt;
  &lt;ul&gt;
    &lt;li *ngFor="let user of users"&gt;{{ user.name }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>`
                },
                {
                    q: "How do you unsubscribe from Observables to prevent memory leaks?",
                    a: `<p>Several approaches:</p>
<pre><code>// 1. async pipe (best — auto unsubscribes)
&lt;div&gt;{{ data$ | async }}&lt;/div&gt;

// 2. takeUntilDestroyed (Angular 16+)
data$ = this.http.get('/api').pipe(
  takeUntilDestroyed()  // auto unsubscribes on destroy
);

// 3. DestroyRef
destroyRef = inject(DestroyRef);
ngOnInit() {
  this.data$.pipe(
    takeUntilDestroyed(this.destroyRef)
  ).subscribe();
}

// 4. Subscription management
private sub = new Subscription();
ngOnInit() {
  this.sub.add(this.obs1$.subscribe());
  this.sub.add(this.obs2$.subscribe());
}
ngOnDestroy() { this.sub.unsubscribe(); }</code></pre>`
                },
                {
                    q: "What is the difference between hot and cold Observables?",
                    a: `<p><strong>Cold Observable</strong>: Produces data only when subscribed. Each subscriber gets its own independent execution. Example: <code>HttpClient.get()</code> — makes a new HTTP request per subscriber.</p>
<p><strong>Hot Observable</strong>: Produces data regardless of subscribers. Subscribers share the same data stream. Example: <code>Subject</code>, DOM events, WebSocket connections.</p>
<pre><code>// Cold — each subscriber gets a new HTTP request
const cold$ = this.http.get('/api/data');

// Make it hot — share the response
const hot$ = cold$.pipe(shareReplay(1));
hot$.subscribe(a => ...); // Makes HTTP request
hot$.subscribe(b => ...); // Uses cached response</code></pre>`
                },
                {
                    q: "What is shareReplay and when should you use it?",
                    a: `<p><code>shareReplay</code> multicasts an Observable and replays the last N values to new subscribers:</p>
<pre><code>// Without shareReplay — 3 HTTP calls
const data$ = this.http.get('/api/data');
data$.subscribe(); // call 1
data$.subscribe(); // call 2
data$.subscribe(); // call 3

// With shareReplay — 1 HTTP call
const data$ = this.http.get('/api/data').pipe(
  shareReplay(1)  // cache and share the last emission
);
data$.subscribe(); // call 1
data$.subscribe(); // cached
data$.subscribe(); // cached</code></pre>
<p>Common use: caching HTTP responses, sharing computed data across components.</p>`
                },
                {
                    q: "What is forkJoin and when do you use it?",
                    a: `<p><code>forkJoin</code> waits for all Observables to complete and emits the last value from each (like <code>Promise.all</code>):</p>
<pre><code>forkJoin({
  users: this.http.get('/api/users'),
  posts: this.http.get('/api/posts'),
  comments: this.http.get('/api/comments')
}).subscribe(({ users, posts, comments }) => {
  this.users = users;
  this.posts = posts;
  this.comments = comments;
});</code></pre>
<p>Use when you need all results before proceeding. If any Observable errors, forkJoin errors.</p>`
                },
                {
                    q: "What is combineLatest and how does it differ from forkJoin?",
                    a: `<p><strong>combineLatest</strong>: Emits whenever ANY source emits, combining the latest value from each source. Works with long-lived Observables.</p>
<p><strong>forkJoin</strong>: Emits ONCE when ALL sources complete. Works with finite Observables (like HTTP requests).</p>
<pre><code>combineLatest([
  this.route.paramMap,     // emits on URL changes
  this.filterService.filters$ // emits on filter changes
]).pipe(
  switchMap(([params, filters]) => {
    const id = params.get('id');
    return this.dataService.getData(id, filters);
  })
).subscribe(data => this.data = data);</code></pre>`
                },
                {
                    q: "How do you implement a search typeahead with RxJS?",
                    a: `<pre><code>this.searchControl.valueChanges.pipe(
  debounceTime(300),         // Wait 300ms after last keystroke
  distinctUntilChanged(),    // Ignore if same as previous
  filter(term => term.length >= 2), // Min 2 chars
  switchMap(term =>          // Cancel previous request
    this.searchService.search(term).pipe(
      catchError(() => of([])) // Handle errors gracefully
    )
  )
).subscribe(results => this.results = results);</code></pre>
<p>Key operators: <code>debounceTime</code> reduces API calls, <code>distinctUntilChanged</code> prevents duplicate searches, <code>switchMap</code> cancels outdated requests.</p>`
                },
                {
                    q: "What is the tap operator used for?",
                    a: `<p><code>tap</code> performs side effects for each emission without modifying the data stream. It's useful for logging, toggling loading states, and debugging:</p>
<pre><code>this.http.get('/api/users').pipe(
  tap(() => this.loading = true),
  tap(data => console.log('Received:', data)),
  map(users => users.filter(u => u.active)),
  tap(() => this.loading = false),
  catchError(err => {
    this.loading = false;
    return of([]);
  })
).subscribe(users => this.users = users);</code></pre>`
                },
                {
                    q: "What is the difference between take, first, and takeUntil?",
                    a: `<ul>
<li><strong>take(n)</strong>: Emits the first <code>n</code> values then completes.</li>
<li><strong>first()</strong>: Emits the first value only (errors if empty).</li>
<li><strong>takeUntil(notifier$)</strong>: Emits values until the notifier Observable emits.</li>
</ul>
<pre><code>obs$.pipe(take(5)).subscribe();       // First 5 values
obs$.pipe(first()).subscribe();       // First value only
obs$.pipe(first(x => x > 10)).subscribe(); // First value > 10

// takeUntil for cleanup
private destroy$ = new Subject&lt;void&gt;();
ngOnInit() {
  this.data$.pipe(takeUntil(this.destroy$)).subscribe();
}
ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}</code></pre>`
                },
                {
                    q: "What is ReplaySubject?",
                    a: `<p><code>ReplaySubject</code> replays a specified number of past emissions to new subscribers:</p>
<pre><code>// Replay the last 3 values
const replay = new ReplaySubject&lt;number&gt;(3);
replay.next(1);
replay.next(2);
replay.next(3);
replay.next(4);

replay.subscribe(v => console.log(v));
// Outputs: 2, 3, 4 (last 3 values)

// Time-based: replay all values from the last 2 seconds
const timed = new ReplaySubject&lt;string&gt;(Infinity, 2000);</code></pre>`
                },
                {
                    q: "What is the scan operator?",
                    a: `<p><code>scan</code> is like <code>Array.reduce</code> but for Observables — it accumulates values over time:</p>
<pre><code>// Running total
clicks$.pipe(
  scan((count) => count + 1, 0)
).subscribe(total => console.log('Total clicks:', total));

// State accumulation
actions$.pipe(
  scan((state, action) => {
    switch(action.type) {
      case 'ADD': return { ...state, items: [...state.items, action.payload] };
      case 'REMOVE': return { ...state, items: state.items.filter(i => i.id !== action.id) };
      default: return state;
    }
  }, initialState)
).subscribe(state => this.state = state);</code></pre>`
                },
                {
                    q: "How do you create a custom RxJS operator?",
                    a: `<pre><code>// Custom operator: filter nulls and undefined
function filterNullish&lt;T&gt;() {
  return (source: Observable&lt;T | null | undefined&gt;) =>
    source.pipe(filter((v): v is T => v != null));
}

// Custom operator: log with tag
function debug&lt;T&gt;(tag: string) {
  return (source: Observable&lt;T&gt;) => source.pipe(
    tap({
      next: v => console.log(\`[\${tag}] next:\`, v),
      error: e => console.log(\`[\${tag}] error:\`, e),
      complete: () => console.log(\`[\${tag}] complete\`)
    })
  );
}

// Usage
this.data$.pipe(
  debug('DataStream'),
  filterNullish(),
  map(data => data.name)
).subscribe();</code></pre>`
                },
                {
                    q: "What is the difference between merge and concat?",
                    a: `<p><strong>merge</strong>: Subscribes to all sources simultaneously and emits values as they arrive (interleaved). Order is not guaranteed.</p>
<p><strong>concat</strong>: Subscribes to sources sequentially — waits for one to complete before subscribing to the next. Order is preserved.</p>
<pre><code>// merge — parallel execution
merge(api1$, api2$, api3$).subscribe(
  result => console.log(result) // Results arrive as they complete
);

// concat — sequential execution
concat(save$, refresh$, notify$).subscribe(
  result => console.log(result) // Guaranteed order
);</code></pre>`
                },
                {
                    q: "What is the toSignal and toObservable bridge?",
                    a: `<p>Angular provides interop between Signals and RxJS Observables:</p>
<pre><code>import { toSignal, toObservable } from '@angular/core/rxjs-interop';

// Observable → Signal
data$ = this.http.get&lt;Data&gt;('/api/data');
dataSignal = toSignal(this.data$, { initialValue: null });
// Use in template: {{ dataSignal()?.name }}

// Signal → Observable
count = signal(0);
count$ = toObservable(this.count);
// Use with RxJS operators
count$.pipe(
  debounceTime(300),
  switchMap(c => this.api.getData(c))
).subscribe();</code></pre>`
                },
                {
                    q: "How do you handle multiple concurrent HTTP requests?",
                    a: `<pre><code>// Parallel (all at once) — use forkJoin
forkJoin({
  users: this.http.get('/api/users'),
  roles: this.http.get('/api/roles')
}).subscribe(({ users, roles }) => {
  this.users = users;
  this.roles = roles;
});

// Sequential (one after another) — use concatMap
this.http.post('/api/order', order).pipe(
  concatMap(savedOrder =>
    this.http.post('/api/payment', { orderId: savedOrder.id })
  ),
  concatMap(payment =>
    this.http.post('/api/notification', { paymentId: payment.id })
  )
).subscribe(result => console.log('All done'));

// Dependent parallel — use switchMap + forkJoin
this.http.get('/api/user/1').pipe(
  switchMap(user => forkJoin({
    posts: this.http.get(\`/api/posts?userId=\${user.id}\`),
    friends: this.http.get(\`/api/friends?userId=\${user.id}\`)
  }))
).subscribe(({ posts, friends }) => { ... });</code></pre>`
                }
            ]
        },

        /* ====================================================
           7. HTTP Client & API Communication
           ==================================================== */
        {
            id: "http-client",
            title: "HTTP Client & APIs",
            icon: "bi-cloud-arrow-down",
            questions: [
                {
                    q: "How do you make HTTP requests in Angular?",
                    a: `<p>Use Angular's <code>HttpClient</code> from <code>@angular/common/http</code>:</p>
<pre><code>// Import HttpClientModule in app.module.ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({ imports: [HttpClientModule] })
export class AppModule {}

// Service
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get&lt;User[]&gt;('/api/users');
  }

  createUser(user: User) {
    return this.http.post&lt;User&gt;('/api/users', user);
  }

  updateUser(id: number, user: User) {
    return this.http.put&lt;User&gt;(\`/api/users/\${id}\`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(\`/api/users/\${id}\`);
  }
}</code></pre>`
                },
                {
                    q: "What are HTTP Interceptors and how do you create one?",
                    a: `<pre><code>// Functional interceptor (Angular 15+)
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', \`Bearer \${token}\`)
    });
    return next(cloned);
  }

  return next(req);
};

// Provide it
provideHttpClient(
  withInterceptors([authInterceptor, loggingInterceptor])
)

// Class-based interceptor
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer ' + this.auth.token }
    });
    return next.handle(authReq);
  }
}</code></pre>`
                },
                {
                    q: "How do you handle HTTP errors globally?",
                    a: `<pre><code>export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'An error occurred';

      if (error.status === 0) {
        message = 'Network error — please check your connection';
      } else if (error.status === 401) {
        inject(AuthService).logout();
        inject(Router).navigate(['/login']);
        message = 'Session expired';
      } else if (error.status === 403) {
        message = 'You do not have permission';
      } else if (error.status === 404) {
        message = 'Resource not found';
      } else if (error.status >= 500) {
        message = 'Server error — please try again later';
      }

      inject(NotificationService).showError(message);
      return throwError(() => error);
    })
  );
};</code></pre>`
                },
                {
                    q: "What is the difference between HttpClient observe options?",
                    a: `<pre><code>// Default — returns the response body
this.http.get&lt;User[]&gt;('/api/users')
  .subscribe(users => console.log(users));

// observe: 'response' — returns the full HttpResponse
this.http.get&lt;User[]&gt;('/api/users', { observe: 'response' })
  .subscribe(response => {
    console.log(response.status);     // 200
    console.log(response.headers);    // HttpHeaders
    console.log(response.body);       // User[]
  });

// observe: 'events' — returns HttpEvents (for upload progress)
this.http.post('/api/upload', formData, {
  observe: 'events',
  reportProgress: true
}).subscribe(event => {
  if (event.type === HttpEventType.UploadProgress) {
    const progress = Math.round(100 * event.loaded / (event.total || 1));
  }
});</code></pre>`
                },
                {
                    q: "How do you set headers and query parameters in HTTP requests?",
                    a: `<pre><code>// Headers
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer my-token'
});
this.http.get('/api/data', { headers });

// Query parameters
const params = new HttpParams()
  .set('page', '1')
  .set('limit', '10')
  .set('sort', 'name');
this.http.get('/api/users', { params });

// Or using object shorthand (Angular 15+)
this.http.get('/api/users', {
  params: { page: 1, limit: 10, sort: 'name' }
});</code></pre>`
                },
                {
                    q: "How do you upload files with HttpClient?",
                    a: `<pre><code>uploadFile(file: File): Observable&lt;number&gt; {
  const formData = new FormData();
  formData.append('file', file, file.name);

  return this.http.post('/api/upload', formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    map(event => {
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
}</code></pre>`
                },
                {
                    q: "What is the difference between HttpClient and fetch API?",
                    a: `<ul>
<li><strong>HttpClient</strong>: Returns Observables, supports interceptors, automatic JSON parsing, typed responses, testable with <code>HttpTestingController</code>, integrated with Angular's DI.</li>
<li><strong>Fetch API</strong>: Returns Promises, browser-native, no built-in interceptor pattern, requires manual JSON parsing, no Angular integration.</li>
</ul>
<p>Angular 18 added experimental <code>withFetch()</code> to use fetch internally while keeping the HttpClient API:</p>
<pre><code>provideHttpClient(withFetch())</code></pre>
<p>Always prefer <code>HttpClient</code> in Angular applications for consistency and testability.</p>`
                },
                {
                    q: "How do you implement caching with HttpClient?",
                    a: `<pre><code>// Simple cache interceptor
export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = inject(CacheService);

  // Only cache GET requests
  if (req.method !== 'GET') {
    return next(req);
  }

  const cached = cache.get(req.urlWithParams);
  if (cached) {
    return of(cached);
  }

  return next(req).pipe(
    tap(response => {
      if (response instanceof HttpResponse) {
        cache.set(req.urlWithParams, response);
      }
    })
  );
};

// Service-level caching with shareReplay
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config$ = this.http.get('/api/config').pipe(
    shareReplay(1) // Cache the response
  );
  getConfig() { return this.config$; }
}</code></pre>`
                },
                {
                    q: "How do you handle CORS in Angular?",
                    a: `<p>CORS is a <strong>server-side configuration</strong>. Angular itself cannot bypass CORS. Solutions:</p>
<ul>
<li><strong>Development proxy</strong>: Configure a proxy in <code>proxy.conf.json</code>:
<pre><code>{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}
// ng serve --proxy-config proxy.conf.json</code></pre></li>
<li><strong>Server-side</strong>: Set CORS headers on the backend:
<pre><code>Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization</code></pre></li>
</ul>`
                },
                {
                    q: "How do you test HTTP requests in Angular?",
                    a: `<pre><code>describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify()); // Ensure no outstanding requests

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'Alice' }];
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});</code></pre>`
                },
                {
                    q: "What are typed HTTP responses?",
                    a: `<p>Angular's <code>HttpClient</code> supports TypeScript generics for type-safe responses:</p>
<pre><code>interface User {
  id: number;
  name: string;
  email: string;
}

// Typed response — TypeScript knows the shape
this.http.get&lt;User[]&gt;('/api/users')
  .subscribe(users => {
    users[0].name; // TypeScript autocompletion works
  });

// Typed response with full HttpResponse
this.http.get&lt;User&gt;('/api/user/1', { observe: 'response' })
  .subscribe(res => {
    res.body?.email; // Type-safe access
  });</code></pre>`
                },
                {
                    q: "How do you retry failed HTTP requests?",
                    a: `<pre><code>this.http.get('/api/data').pipe(
  // Simple retry — 3 attempts
  retry(3),

  // Retry with delay and conditions
  retry({
    count: 3,
    delay: (error, retryCount) => {
      // Only retry on 5xx errors
      if (error.status < 500) {
        return throwError(() => error);
      }
      // Exponential backoff
      const delay = Math.pow(2, retryCount) * 1000;
      console.log(\`Retrying in \${delay}ms...\`);
      return timer(delay);
    }
  }),

  catchError(err => {
    console.error('All retries failed:', err);
    return of(null);
  })
).subscribe();</code></pre>`
                },
                {
                    q: "What is the provideHttpClient function?",
                    a: `<p>Angular 15+ supports <code>provideHttpClient()</code> as a standalone alternative to importing <code>HttpClientModule</code>:</p>
<pre><code>// In bootstrapApplication (standalone)
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor]),
      withFetch(),           // Use fetch API internally
      withJsonpSupport(),    // Enable JSONP
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })
    )
  ]
});</code></pre>`
                },
                {
                    q: "How do you cancel HTTP requests?",
                    a: `<pre><code>// Method 1: Unsubscribe
const sub = this.http.get('/api/data').subscribe();
sub.unsubscribe(); // Cancels the request

// Method 2: switchMap (auto-cancels previous)
this.searchTerm$.pipe(
  switchMap(term => this.http.get(\`/api/search?q=\${term}\`))
).subscribe();

// Method 3: takeUntil
private cancel$ = new Subject&lt;void&gt;();
loadData() {
  this.cancel$.next(); // Cancel previous request
  this.http.get('/api/data').pipe(
    takeUntil(this.cancel$)
  ).subscribe();
}

// Method 4: AbortController (with fetch)
const controller = new AbortController();
fetch('/api/data', { signal: controller.signal });
controller.abort(); // Cancel</code></pre>`
                },
                {
                    q: "How do you implement pagination with HttpClient?",
                    a: `<pre><code>@Injectable({ providedIn: 'root' })
export class PaginatedService {
  getUsers(page: number, pageSize: number): Observable&lt;PaginatedResponse&lt;User&gt;&gt; {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get&lt;PaginatedResponse&lt;User&gt;&gt;('/api/users', {
      params,
      observe: 'response'
    }).pipe(
      map(response => ({
        data: response.body!,
        totalCount: +response.headers.get('X-Total-Count')!,
        page,
        pageSize
      }))
    );
  }
}

interface PaginatedResponse&lt;T&gt; {
  data: T[];
  totalCount: number;
  page: number;
  pageSize: number;
}</code></pre>`
                },
                {
                    q: "What is HttpContext and how do you use it?",
                    a: `<p><code>HttpContext</code> (Angular 12+) passes metadata to interceptors without modifying headers:</p>
<pre><code>// Define a context token
const SKIP_AUTH = new HttpContextToken&lt;boolean&gt;(() => false);
const CACHE_DURATION = new HttpContextToken&lt;number&gt;(() => 0);

// Use in request
this.http.get('/api/public-data', {
  context: new HttpContext()
    .set(SKIP_AUTH, true)
    .set(CACHE_DURATION, 60000)
});

// Read in interceptor
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(SKIP_AUTH)) {
    return next(req); // Skip adding auth header
  }
  // ... add auth header
};</code></pre>`
                },
                {
                    q: "How do you download files using HttpClient?",
                    a: `<pre><code>downloadFile(url: string, filename: string) {
  this.http.get(url, {
    responseType: 'blob',
    reportProgress: true,
    observe: 'events'
  }).subscribe(event => {
    if (event.type === HttpEventType.DownloadProgress) {
      const progress = Math.round(100 * event.loaded / (event.total || 1));
      console.log(\`Download: \${progress}%\`);
    }
    if (event instanceof HttpResponse) {
      const blob = event.body!;
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  });
}</code></pre>`
                },
                {
                    q: "How do you implement request deduplication?",
                    a: `<pre><code>@Injectable({ providedIn: 'root' })
export class DeduplicatedHttpService {
  private pendingRequests = new Map&lt;string, Observable&lt;any&gt;&gt;();

  get&lt;T&gt;(url: string): Observable&lt;T&gt; {
    if (this.pendingRequests.has(url)) {
      return this.pendingRequests.get(url)!;
    }

    const request$ = this.http.get&lt;T&gt;(url).pipe(
      finalize(() => this.pendingRequests.delete(url)),
      shareReplay(1)
    );

    this.pendingRequests.set(url, request$);
    return request$;
  }

  constructor(private http: HttpClient) {}
}</code></pre>
<p>This prevents duplicate concurrent requests to the same URL — useful when multiple components request the same data simultaneously.</p>`
                },
                {
                    q: "What is the withRequestsMadeViaParent option?",
                    a: `<p><code>withRequestsMadeViaParent()</code> configures a lazy-loaded module's HttpClient to pass requests through the parent injector's interceptors:</p>
<pre><code>// Lazy module provides its own interceptors
// but also wants parent interceptors to run
@NgModule({
  providers: [
    provideHttpClient(
      withInterceptors([moduleSpecificInterceptor]),
      withRequestsMadeViaParent() // Also run parent interceptors
    )
  ]
})</code></pre>
<p>Without this, lazy-loaded modules with their own HttpClient configuration would bypass the root-level interceptors.</p>`
                }
            ]
        }
    ]
};
