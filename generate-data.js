/**
 * Generate all data files for InterviewPrep
 * Adds missing topics to angular-data.js and creates react, node, javascript, dsa, logical data files
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'js', 'data');

// Helper: wrap question
function Q(q, a) { return { q, a }; }

// ─── ANGULAR - remaining 10 topics ─────────────────────────
function getAngularRemainingTopics() {
return [
{
    id: "lifecycle-hooks", title: "Lifecycle Hooks", icon: "bi-recycle",
    questions: [
        Q("What are lifecycle hooks in Angular?", `<p>Lifecycle hooks are methods that Angular calls on directives and components as it creates, changes, and destroys them. They let you tap into key moments in a component's life.</p><ul><li><code>ngOnChanges</code> — when input properties change</li><li><code>ngOnInit</code> — after first ngOnChanges</li><li><code>ngDoCheck</code> — custom change detection</li><li><code>ngAfterContentInit</code> — after content projection</li><li><code>ngAfterViewInit</code> — after view initialization</li><li><code>ngOnDestroy</code> — cleanup before destruction</li></ul>`),
        Q("What is ngOnInit and when is it called?", `<p><code>ngOnInit</code> is called once after the first <code>ngOnChanges</code>. It's the best place for initialization logic.</p><pre><code>export class UserComponent implements OnInit {
  @Input() userId!: string;
  user: User;

  ngOnInit() {
    // Safe to use @Input values here
    this.user = this.userService.getUser(this.userId);
  }
}</code></pre>`),
        Q("What is the difference between constructor and ngOnInit?", `<p>The <strong>constructor</strong> is a TypeScript/JavaScript feature for class instantiation. <strong>ngOnInit</strong> is an Angular lifecycle hook.</p><ul><li>Constructor: DI injection happens here, but @Input values are NOT available yet</li><li>ngOnInit: @Input values ARE available, DOM is ready, bindings are resolved</li></ul><p>Use constructor only for DI. Use ngOnInit for initialization logic.</p>`),
        Q("What is ngOnChanges and what is SimpleChanges?", `<p><code>ngOnChanges</code> is called when any data-bound @Input property changes. It receives a <code>SimpleChanges</code> object.</p><pre><code>ngOnChanges(changes: SimpleChanges) {
  if (changes['userId']) {
    console.log('Previous:', changes['userId'].previousValue);
    console.log('Current:', changes['userId'].currentValue);
    console.log('First change:', changes['userId'].firstChange);
  }
}</code></pre>`),
        Q("What is ngDoCheck?", `<p><code>ngDoCheck</code> is called during every change detection run. It lets you implement custom change detection for changes that Angular doesn't detect on its own.</p><pre><code>ngDoCheck() {
  if (this.currentName !== this.previousName) {
    this.previousName = this.currentName;
    this.changeLog.push('Name changed to: ' + this.currentName);
  }
}</code></pre><p><strong>Warning:</strong> This hook is called very frequently — keep the logic lightweight.</p>`),
        Q("What is ngAfterViewInit?", `<p><code>ngAfterViewInit</code> is called once after Angular initializes the component's views and child views. It's safe to access @ViewChild references here.</p><pre><code>@ViewChild('myInput') inputRef!: ElementRef;

ngAfterViewInit() {
  this.inputRef.nativeElement.focus();
}</code></pre>`),
        Q("What is ngAfterContentInit?", `<p><code>ngAfterContentInit</code> is called once after Angular projects external content into the component via <code>&lt;ng-content&gt;</code>.</p><pre><code>@ContentChild(ChildDirective) child!: ChildDirective;

ngAfterContentInit() {
  console.log(this.child); // Now available
}</code></pre>`),
        Q("What is ngOnDestroy?", `<p><code>ngOnDestroy</code> is called just before Angular destroys the component. Use it for cleanup: unsubscribe from observables, detach event listeners, stop timers.</p><pre><code>private sub!: Subscription;

ngOnInit() {
  this.sub = this.data$.subscribe(val =&gt; this.value = val);
}

ngOnDestroy() {
  this.sub.unsubscribe(); // Prevent memory leaks
}</code></pre>`),
        Q("What is the correct order of lifecycle hooks?", `<p>Angular calls lifecycle hooks in this order:</p><ol><li><code>ngOnChanges</code> (if inputs exist)</li><li><code>ngOnInit</code></li><li><code>ngDoCheck</code></li><li><code>ngAfterContentInit</code></li><li><code>ngAfterContentChecked</code></li><li><code>ngAfterViewInit</code></li><li><code>ngAfterViewChecked</code></li><li><code>ngOnDestroy</code></li></ol><p>Steps 3-7 repeat on every change detection cycle.</p>`),
        Q("How do you use takeUntilDestroyed with lifecycle?", `<p>Angular 16+ provides <code>takeUntilDestroyed</code> to auto-unsubscribe when a component is destroyed:</p><pre><code>import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export class MyComponent {
  constructor() {
    this.data$.pipe(
      takeUntilDestroyed() // auto-unsubscribes on destroy
    ).subscribe(val =&gt; this.value = val);
  }
}</code></pre>`)
    ]
},
{
    id: "modules", title: "Modules", icon: "bi-grid-3x3-gap",
    questions: [
        Q("What is an NgModule?", `<p>An NgModule is a class decorated with <code>@NgModule()</code> that organizes related code into cohesive blocks with metadata about declarations, imports, exports, and providers.</p><pre><code>@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }</code></pre>`),
        Q("What are declarations, imports, and exports in NgModule?", `<ul><li><strong>declarations</strong>: Components, directives, and pipes that belong to this module</li><li><strong>imports</strong>: Other modules whose exported classes are needed by component templates in this module</li><li><strong>exports</strong>: Components, directives, pipes visible to importing modules</li><li><strong>providers</strong>: Services available to module's injector</li></ul>`),
        Q("What is a feature module?", `<p>A feature module encapsulates a set of related functionality. It helps organize code and enables lazy loading.</p><pre><code>@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ProductListComponent]
})
export class ProductsModule { }</code></pre>`),
        Q("What is a shared module?", `<p>A shared module contains common components, directives, and pipes used across multiple feature modules.</p><pre><code>@NgModule({
  declarations: [SpinnerComponent, HighlightDirective, TruncatePipe],
  imports: [CommonModule],
  exports: [SpinnerComponent, HighlightDirective, TruncatePipe, CommonModule]
})
export class SharedModule { }</code></pre>`),
        Q("What is lazy loading of modules?", `<p>Lazy loading loads feature modules on demand when the user navigates to their routes, reducing initial bundle size.</p><pre><code>const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =&gt; import('./products/products.module')
      .then(m =&gt; m.ProductsModule)
  }
];</code></pre>`),
        Q("What is the difference between forRoot and forChild?", `<p><code>forRoot()</code> registers providers for the entire app (use in AppModule). <code>forChild()</code> registers routes for feature modules without re-registering providers.</p><pre><code>// AppModule
RouterModule.forRoot(appRoutes)

// Feature module
RouterModule.forChild(featureRoutes)</code></pre>`),
        Q("What is the CoreModule pattern?", `<p>CoreModule contains singleton services and one-time setup. It should only be imported in AppModule.</p><pre><code>@NgModule({
  providers: [AuthService, LoggerService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) throw new Error('CoreModule already loaded!');
  }
}</code></pre>`),
        Q("Can a component belong to multiple modules?", `<p>No, a component can be declared in only <strong>one</strong> NgModule. If you need it in multiple modules, export it from a shared module and import that shared module.</p>`),
        Q("What is the purpose of BrowserModule vs CommonModule?", `<p><code>BrowserModule</code> includes <code>CommonModule</code> plus browser-specific providers. Use BrowserModule only in the root AppModule. Use <code>CommonModule</code> in feature modules for directives like ngIf and ngFor.</p>`),
        Q("What are preloading strategies?", `<p>Preloading strategies load lazy modules in the background after the app starts, improving navigation speed.</p><pre><code>RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
})

// Or use custom strategy
export class CustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: () =&gt; Observable&lt;any&gt;) {
    return route.data?.['preload'] ? load() : of(null);
  }
}</code></pre>`)
    ]
},
{
    id: "change-detection", title: "Change Detection", icon: "bi-eye",
    questions: [
        Q("What is change detection in Angular?", `<p>Change detection is the mechanism Angular uses to keep the DOM in sync with component data. When data changes, Angular checks the component tree and updates the DOM accordingly.</p>`),
        Q("What are the two change detection strategies?", `<p><strong>Default:</strong> Angular checks the entire component tree on every change detection cycle.</p><p><strong>OnPush:</strong> Angular only checks the component when its @Input references change, an event fires within the component, or change detection is manually triggered.</p><pre><code>@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})</code></pre>`),
        Q("What is zone.js?", `<p>Zone.js is a library that patches async APIs (setTimeout, Promise, addEventListener, XHR) to notify Angular when async operations complete, triggering change detection automatically.</p>`),
        Q("What is markForCheck?", `<p><code>markForCheck()</code> marks a component and its ancestors for checking in the next change detection cycle. Used with OnPush when data changes without @Input reference change.</p><pre><code>constructor(private cdr: ChangeDetectorRef) {}

updateData() {
  this.data.push(newItem); // Mutation - OnPush won't detect
  this.cdr.markForCheck(); // Tell Angular to check
}</code></pre>`),
        Q("What is detectChanges?", `<p><code>detectChanges()</code> immediately triggers change detection for the component and its children, without waiting for the next cycle.</p><pre><code>this.value = 'updated';
this.cdr.detectChanges(); // Immediately update DOM</code></pre>`),
        Q("How does OnPush improve performance?", `<p>OnPush skips change detection for a component subtree unless: an @Input reference changes, an event originates from the component, an Observable linked to the async pipe emits, or markForCheck/detectChanges is called. This dramatically reduces checks in large apps.</p>`),
        Q("How does the async pipe help with OnPush?", `<p>The async pipe automatically subscribes, gets values, and calls <code>markForCheck()</code> when new values arrive, making it perfect for OnPush components.</p><pre><code>&lt;div *ngIf="user$ | async as user"&gt;
  {{ user.name }}
&lt;/div&gt;</code></pre>`),
        Q("What is detach and reattach?", `<p><code>detach()</code> removes a component from change detection entirely. <code>reattach()</code> adds it back. Useful for components that rarely change.</p><pre><code>this.cdr.detach(); // Stop checking
// ... later when update needed
this.cdr.reattach();
this.cdr.detectChanges();</code></pre>`),
        Q("What is runOutsideAngular?", `<p><code>NgZone.runOutsideAngular()</code> runs code outside Angular's zone so it doesn't trigger change detection. Useful for performance-heavy animations or frequent events.</p><pre><code>constructor(private ngZone: NgZone) {}

ngOnInit() {
  this.ngZone.runOutsideAngular(() =&gt; {
    window.addEventListener('mousemove', this.onMouseMove);
  });
}</code></pre>`),
        Q("What triggers change detection by default?", `<p>Change detection is triggered by: DOM events (click, input, submit), HTTP responses, timers (setTimeout, setInterval), Promises resolving, and any async operation patched by zone.js.</p>`)
    ]
},
{
    id: "guards-resolvers", title: "Guards & Resolvers", icon: "bi-shield-lock",
    questions: [
        Q("What are route guards in Angular?", `<p>Route guards are interfaces that let you control whether a user can navigate to or away from a route. Types include CanActivate, CanDeactivate, CanLoad, CanMatch, and Resolve.</p>`),
        Q("How do you create a CanActivate guard?", `<p>A CanActivate guard determines if a route can be activated:</p><pre><code>@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.auth.isLoggedIn()) return true;
    return this.router.parseUrl('/login');
  }
}

// Route config
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }</code></pre>`),
        Q("What is a functional guard in Angular 15+?", `<p>Angular 15+ supports functional guards — plain functions instead of class-based guards:</p><pre><code>export const authGuard: CanActivateFn = (route, state) =&gt; {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.parseUrl('/login');
};

{ path: 'admin', canActivate: [authGuard] }</code></pre>`),
        Q("What is CanDeactivate guard?", `<p>CanDeactivate guards prevent users from leaving a route, typically to warn about unsaved changes:</p><pre><code>export const unsavedChangesGuard: CanDeactivateFn&lt;EditComponent&gt; = (component) =&gt; {
  if (component.hasUnsavedChanges()) {
    return confirm('Discard unsaved changes?');
  }
  return true;
};</code></pre>`),
        Q("What is the Resolve guard?", `<p>Resolve pre-fetches data before the route activates, ensuring the component has data when it loads:</p><pre><code>export const userResolver: ResolveFn&lt;User&gt; = (route) =&gt; {
  return inject(UserService).getUser(route.paramMap.get('id')!);
};

{ path: 'user/:id', component: UserComponent, resolve: { user: userResolver } }

// In component
constructor(private route: ActivatedRoute) {
  this.user = this.route.snapshot.data['user'];
}</code></pre>`),
        Q("What is CanLoad guard?", `<p><code>CanLoad</code> prevents lazy-loaded modules from being downloaded at all if the user doesn't have permission. Unlike CanActivate, it blocks the module download entirely.</p>`),
        Q("Can a guard return an Observable or Promise?", `<p>Yes, guards can return <code>boolean</code>, <code>UrlTree</code>, <code>Observable&lt;boolean | UrlTree&gt;</code>, or <code>Promise&lt;boolean | UrlTree&gt;</code>. Angular will wait for async results.</p>`),
        Q("How do you pass data to a guard?", `<p>Use the route's <code>data</code> property to pass metadata to guards:</p><pre><code>{ path: 'admin', canActivate: [roleGuard], data: { roles: ['admin'] } }

export const roleGuard: CanActivateFn = (route) =&gt; {
  const requiredRoles = route.data['roles'];
  return inject(AuthService).hasRole(requiredRoles);
};</code></pre>`),
        Q("What is CanMatch?", `<p><code>CanMatch</code> (Angular 14.1+) determines if a route should even be considered during URL matching. If false, the router continues to the next route definition.</p>`),
        Q("How do multiple guards work together?", `<p>Multiple guards run in the order they're listed. If any guard returns false or a UrlTree, navigation is canceled or redirected.</p><pre><code>{ 
  path: 'admin', 
  canActivate: [authGuard, roleGuard, subscriptionGuard] 
  // All three must return true
}</code></pre>`)
    ]
},
{
    id: "interceptors", title: "Interceptors", icon: "bi-funnel-fill",
    questions: [
        Q("What is an HTTP interceptor?", `<p>An interceptor intercepts and optionally transforms HTTP requests and responses. It sits between the HttpClient and the server.</p><pre><code>@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler): Observable&lt;HttpEvent&lt;any&gt;&gt; {
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer ' + this.token }
    });
    return next.handle(authReq);
  }
}</code></pre>`),
        Q("How do you register an interceptor?", `<p>Register interceptors as multi-providers in the module or with <code>withInterceptors</code> for standalone:</p><pre><code>// Module-based
providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}]

// Standalone (Angular 15+)
provideHttpClient(withInterceptors([authInterceptor]))</code></pre>`),
        Q("How do you create a functional interceptor?", `<p>Angular 15+ supports functional interceptors:</p><pre><code>export const loggingInterceptor: HttpInterceptorFn = (req, next) =&gt; {
  console.log('Request:', req.url);
  return next(req).pipe(
    tap(event =&gt; {
      if (event instanceof HttpResponse) {
        console.log('Response:', event.status);
      }
    })
  );
};</code></pre>`),
        Q("How do you handle errors in an interceptor?", `<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
  return next.handle(req).pipe(
    catchError((error: HttpErrorResponse) =&gt; {
      if (error.status === 401) {
        this.auth.logout();
        this.router.navigate(['/login']);
      }
      return throwError(() =&gt; error);
    })
  );
}</code></pre>`),
        Q("How do you add retry logic in an interceptor?", `<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
  return next.handle(req).pipe(
    retry({ count: 3, delay: 1000 }),
    catchError(err =&gt; throwError(() =&gt; err))
  );
}</code></pre>`),
        Q("Can you modify the response in an interceptor?", `<p>Yes, use the <code>map</code> operator to transform responses:</p><pre><code>return next.handle(req).pipe(
  map(event =&gt; {
    if (event instanceof HttpResponse) {
      return event.clone({ body: event.body.data });
    }
    return event;
  })
);</code></pre>`),
        Q("What is the order of interceptor execution?", `<p>Interceptors execute in the order they are provided for requests, and in <strong>reverse order</strong> for responses. First interceptor registered = first to handle request, last to handle response.</p>`),
        Q("How do you skip an interceptor for specific requests?", `<p>Use custom headers or request context to skip interceptors:</p><pre><code>// Set a marker header
const req = new HttpRequest('GET', url, { headers: new HttpHeaders({ 'Skip-Auth': 'true' }) });

// In interceptor
if (req.headers.has('Skip-Auth')) {
  return next.handle(req.clone({ headers: req.headers.delete('Skip-Auth') }));
}</code></pre>`),
        Q("How do you show a loading spinner with an interceptor?", `<pre><code>intercept(req: HttpRequest&lt;any&gt;, next: HttpHandler) {
  this.loadingService.show();
  return next.handle(req).pipe(
    finalize(() =&gt; this.loadingService.hide())
  );
}</code></pre>`),
        Q("Can interceptors handle both requests and responses?", `<p>Yes, interceptors have access to both. The request is the <code>req</code> parameter, and the response comes from the Observable returned by <code>next.handle(req)</code>. You can transform either or both.</p>`)
    ]
},
{
    id: "decorators", title: "Decorators", icon: "bi-at",
    questions: [
        Q("What are decorators in Angular?", `<p>Decorators are functions that modify classes, properties, methods, or parameters. Angular uses them extensively to add metadata. TypeScript decorators are prefixed with <code>@</code>.</p><ul><li>Class: @Component, @Directive, @Injectable, @NgModule, @Pipe</li><li>Property: @Input, @Output, @HostBinding, @ContentChild, @ViewChild</li><li>Method: @HostListener</li><li>Parameter: @Inject, @Optional, @Self, @SkipSelf</li></ul>`),
        Q("What does @Input() do?", `<p>@Input marks a property as bindable from a parent component's template:</p><pre><code>// Child
@Input() name: string = '';
@Input({ required: true }) id!: number; // Required in Angular 16+

// Parent template
&lt;app-child [name]="userName" [id]="userId"&gt;&lt;/app-child&gt;</code></pre>`),
        Q("What does @Output() do?", `<p>@Output marks a property as an event emitter that sends data to the parent:</p><pre><code>@Output() itemSelected = new EventEmitter&lt;Item&gt;();

onSelect(item: Item) {
  this.itemSelected.emit(item);
}

// Parent template
&lt;app-child (itemSelected)="onItemSelect($event)"&gt;&lt;/app-child&gt;</code></pre>`),
        Q("What is @ViewChild?", `<p>@ViewChild queries for a child element, directive, or component in the template:</p><pre><code>@ViewChild('inputRef') input!: ElementRef;
@ViewChild(ChildComponent) child!: ChildComponent;

ngAfterViewInit() {
  this.input.nativeElement.focus();
  this.child.doSomething();
}</code></pre>`),
        Q("What is @ContentChild?", `<p>@ContentChild queries for projected content (content between component tags):</p><pre><code>// Content projection
&lt;app-card&gt;
  &lt;app-header&gt;Title&lt;/app-header&gt;
&lt;/app-card&gt;

// In CardComponent
@ContentChild(HeaderComponent) header!: HeaderComponent;</code></pre>`),
        Q("What is @HostListener?", `<p>@HostListener listens to events on the host element:</p><pre><code>@HostListener('click', ['$event'])
onClick(event: MouseEvent) {
  console.log('Host clicked!', event);
}

@HostListener('window:resize', ['$event'])
onResize(event: Event) {
  this.windowWidth = window.innerWidth;
}</code></pre>`),
        Q("What is @HostBinding?", `<p>@HostBinding binds a property to the host element:</p><pre><code>@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @HostBinding('class.active') isActive = false;
  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseenter') onHover() {
    this.bgColor = 'yellow';
    this.isActive = true;
  }
}</code></pre>`),
        Q("What is @Injectable?", `<p>@Injectable marks a class as available for dependency injection:</p><pre><code>@Injectable({ providedIn: 'root' }) // Tree-shakable singleton
export class DataService {
  constructor(private http: HttpClient) {}
}</code></pre><p>The <code>providedIn: 'root'</code> option makes it a singleton available app-wide without adding to providers array.</p>`),
        Q("What is @Inject?", `<p>@Inject explicitly specifies the token used for dependency injection, especially for non-class tokens:</p><pre><code>constructor(@Inject(API_URL) private apiUrl: string) {}

// With InjectionToken
export const API_URL = new InjectionToken&lt;string&gt;('api-url');</code></pre>`),
        Q("What is the difference between @ViewChildren and @ContentChildren?", `<p><code>@ViewChildren</code> queries elements defined in the component's own template. <code>@ContentChildren</code> queries elements projected via <code>&lt;ng-content&gt;</code>. Both return a <code>QueryList</code> that can be observed for changes.</p>`)
    ]
},
{
    id: "standalone-components", title: "Standalone Components", icon: "bi-box-seam",
    questions: [
        Q("What are standalone components?", `<p>Standalone components (Angular 14+) don't require an NgModule. They declare their own dependencies via the <code>imports</code> array:</p><pre><code>@Component({
  standalone: true,
  selector: 'app-hello',
  imports: [CommonModule, FormsModule],
  template: '&lt;input [(ngModel)]="name"&gt; Hello {{name}}'
})
export class HelloComponent { name = 'World'; }</code></pre>`),
        Q("How do you bootstrap a standalone component?", `<pre><code>// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig);</code></pre>`),
        Q("How do you configure routing with standalone components?", `<pre><code>// app.config.ts
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
];</code></pre>`),
        Q("How do you lazy load a standalone component?", `<p>Use <code>loadComponent</code> for individual component lazy loading:</p><pre><code>{ 
  path: 'profile', 
  loadComponent: () =&gt; import('./profile/profile.component')
    .then(c =&gt; c.ProfileComponent)
}</code></pre>`),
        Q("How do you provide services with standalone?", `<pre><code>bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimations(),
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
});</code></pre>`),
        Q("Can standalone directives and pipes exist?", `<p>Yes, directives and pipes can also be standalone:</p><pre><code>@Directive({ standalone: true, selector: '[appHighlight]' })
export class HighlightDirective { }

@Pipe({ standalone: true, name: 'truncate' })
export class TruncatePipe implements PipeTransform { }</code></pre>`),
        Q("How do you migrate from NgModules to standalone?", `<p>Angular provides a migration schematic:</p><pre><code>ng generate @angular/core:standalone</code></pre><p>Steps: Mark components/directives/pipes as standalone, add imports array to each, remove from NgModule declarations, eventually remove the NgModule entirely.</p>`),
        Q("What is importProvidersFrom?", `<p><code>importProvidersFrom</code> extracts providers from NgModules for use in standalone applications:</p><pre><code>bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(SomeLibraryModule.forRoot())
  ]
});</code></pre>`),
        Q("How do you use standalone components in NgModule apps?", `<p>Import standalone components in an NgModule's imports array:</p><pre><code>@NgModule({
  imports: [StandaloneHelloComponent], // Standalone in imports, not declarations
  declarations: [AppComponent]
})</code></pre>`),
        Q("What are the benefits of standalone components?", `<ul><li>Simplified mental model — no NgModules needed</li><li>Better tree-shaking — only import what you use</li><li>Easier lazy loading with loadComponent</li><li>Reduced boilerplate</li><li>Self-contained and portable</li></ul>`)
    ]
},
{
    id: "signals", title: "Signals", icon: "bi-broadcast",
    questions: [
        Q("What are signals in Angular?", `<p>Signals (Angular 16+) are reactive primitives for state management. They track when values change and automatically update dependent computations and views.</p><pre><code>import { signal, computed, effect } from '@angular/core';

const count = signal(0);
count.set(5);
count.update(v =&gt; v + 1);
console.log(count()); // Read value: 6</code></pre>`),
        Q("What is computed()?", `<p><code>computed()</code> creates a derived signal that recalculates when its dependencies change:</p><pre><code>const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() =&gt; firstName() + ' ' + lastName());

console.log(fullName()); // "John Doe"
firstName.set('Jane');
console.log(fullName()); // "Jane Doe" - auto-updated</code></pre>`),
        Q("What is effect()?", `<p><code>effect()</code> runs side effects when signals it reads change:</p><pre><code>const user = signal({ name: 'John', age: 30 });

effect(() =&gt; {
  console.log('User changed:', user().name);
  // Runs when user signal changes
});</code></pre><p>Effects run at least once and re-run whenever their signal dependencies change.</p>`),
        Q("How do signals differ from RxJS Observables?", `<ul><li>Signals are <strong>synchronous</strong>; Observables can be async</li><li>Signals always have a current value; Observables may not</li><li>Signals auto-track dependencies; Observables require explicit subscription</li><li>No need for subscribe/unsubscribe with signals</li><li>RxJS is better for event streams, HTTP, complex async flows</li></ul>`),
        Q("What is toSignal()?", `<p><code>toSignal()</code> converts an Observable to a Signal:</p><pre><code>import { toSignal } from '@angular/core/rxjs-interop';

const users = toSignal(this.http.get&lt;User[]&gt;('/api/users'), {
  initialValue: []
});

// In template — no async pipe needed
&lt;li *ngFor="let user of users()"&gt;{{ user.name }}&lt;/li&gt;</code></pre>`),
        Q("What is toObservable()?", `<p><code>toObservable()</code> converts a Signal to an Observable:</p><pre><code>import { toObservable } from '@angular/core/rxjs-interop';

const search = signal('');
const search$ = toObservable(this.search);

search$.pipe(
  debounceTime(300),
  switchMap(q =&gt; this.api.search(q))
).subscribe(results =&gt; this.results.set(results));</code></pre>`),
        Q("What are input signals?", `<p>Angular 17.1+ introduces signal-based inputs:</p><pre><code>@Component({...})
export class UserComponent {
  name = input&lt;string&gt;();           // Optional input signal
  id = input.required&lt;number&gt;();    // Required input signal
  label = input('default');          // Input with default value

  // Computed based on input
  greeting = computed(() =&gt; 'Hello ' + this.name());
}</code></pre>`),
        Q("What is model() in signals?", `<p><code>model()</code> creates a two-way bindable signal (Angular 17.2+):</p><pre><code>@Component({
  selector: 'app-counter',
  template: '&lt;button (click)="increment()"&gt;{{ value() }}&lt;/button&gt;'
})
export class CounterComponent {
  value = model(0); // Two-way binding
  increment() { this.value.update(v =&gt; v + 1); }
}

// Parent: &lt;app-counter [(value)]="count" /&gt;</code></pre>`),
        Q("How do you use signals in templates?", `<p>Call signals like functions in templates:</p><pre><code>@Component({
  template: '&lt;p&gt;Count: {{ count() }}&lt;/p&gt;&lt;button (click)="increment()"&gt;+1&lt;/button&gt;'
})
export class CounterComponent {
  count = signal(0);
  increment() { this.count.update(v =&gt; v + 1); }
}</code></pre>`),
        Q("What is the signal update method?", `<p><code>update()</code> modifies a signal based on its current value:</p><pre><code>const items = signal&lt;string[]&gt;([]);

// set replaces entirely
items.set(['a', 'b']);

// update derives from current value
items.update(list =&gt; [...list, 'c']); // ['a', 'b', 'c']</code></pre>`)
    ]
},
{
    id: "testing", title: "Testing", icon: "bi-bug",
    questions: [
        Q("How do you set up a component test with TestBed?", `<pre><code>describe('HeroComponent', () =&gt; {
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
});</code></pre>`),
        Q("How do you test @Input and @Output?", `<pre><code>it('should display name', () =&gt; {
  component.name = 'Batman';
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector('h1');
  expect(el.textContent).toContain('Batman');
});

it('should emit on click', () =&gt; {
  spyOn(component.selected, 'emit');
  fixture.nativeElement.querySelector('button').click();
  expect(component.selected.emit).toHaveBeenCalledWith(component.hero);
});</code></pre>`),
        Q("How do you mock a service in tests?", `<pre><code>const mockService = jasmine.createSpyObj('HeroService', ['getHeroes']);
mockService.getHeroes.and.returnValue(of([{ id: 1, name: 'Hero' }]));

TestBed.configureTestingModule({
  providers: [{ provide: HeroService, useValue: mockService }]
});</code></pre>`),
        Q("What is fakeAsync and tick?", `<p><code>fakeAsync</code> wraps a test to control async operations synchronously. <code>tick()</code> simulates time passing.</p><pre><code>it('should update after debounce', fakeAsync(() =&gt; {
  component.search('hello');
  tick(300); // Simulate 300ms debounce
  fixture.detectChanges();
  expect(component.results.length).toBe(3);
}));</code></pre>`),
        Q("How do you test HTTP calls?", `<pre><code>let httpMock: HttpTestingController;

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
});</code></pre>`),
        Q("How do you query DOM elements in tests?", `<pre><code>// By CSS selector
const el = fixture.nativeElement.querySelector('.title');

// By directive
const debugEl = fixture.debugElement.query(By.css('app-child'));

// All matching
const items = fixture.debugElement.queryAll(By.css('li'));
expect(items.length).toBe(3);</code></pre>`),
        Q("What is fixture.detectChanges()?", `<p><code>fixture.detectChanges()</code> triggers change detection for the test component. You must call it after modifying component properties to update the DOM in tests.</p>`),
        Q("How do you test a pipe?", `<pre><code>describe('TruncatePipe', () =&gt; {
  const pipe = new TruncatePipe();

  it('should truncate long text', () =&gt; {
    expect(pipe.transform('Hello World', 5)).toBe('Hello...');
  });

  it('should not truncate short text', () =&gt; {
    expect(pipe.transform('Hi', 5)).toBe('Hi');
  });
});</code></pre>`),
        Q("How do you test a guard?", `<pre><code>it('should allow access for logged-in user', () =&gt; {
  authService.isLoggedIn.and.returnValue(true);
  const result = TestBed.runInInjectionContext(() =&gt; authGuard(mockRoute, mockState));
  expect(result).toBeTrue();
});

it('should redirect to login', () =&gt; {
  authService.isLoggedIn.and.returnValue(false);
  const result = TestBed.runInInjectionContext(() =&gt; authGuard(mockRoute, mockState));
  expect(result).toEqual(router.parseUrl('/login'));
});</code></pre>`),
        Q("What is the difference between unit and integration tests?", `<p><strong>Unit tests</strong> test a single component/service in isolation with mocked dependencies. <strong>Integration tests</strong> test how multiple components work together, often rendering child components and using real services.</p>`)
    ]
},
{
    id: "performance-optimization", title: "Performance", icon: "bi-speedometer2",
    questions: [
        Q("What is AOT compilation?", `<p>Ahead-of-Time (AOT) compilation converts Angular HTML and TypeScript into JavaScript during the build step, rather than at runtime. Benefits: faster rendering, fewer async requests, smaller bundle, template error detection at build time.</p><pre><code>ng build --configuration production // AOT is default in production</code></pre>`),
        Q("What is tree shaking?", `<p>Tree shaking is a build optimization that eliminates unused code from the final bundle. Angular's <code>providedIn: 'root'</code> enables tree-shakable services — unused services are automatically removed.</p>`),
        Q("How does trackBy improve *ngFor performance?", `<p>trackBy tells Angular how to identify items in a list, preventing unnecessary DOM re-creation:</p><pre><code>&lt;li *ngFor="let item of items; trackBy: trackById"&gt;{{ item.name }}&lt;/li&gt;

trackById(index: number, item: Item): number {
  return item.id; // Angular reuses DOM for items with same id
}</code></pre>`),
        Q("What is lazy loading and how does it improve performance?", `<p>Lazy loading defers loading of feature modules until they're needed, reducing initial bundle size and startup time.</p><pre><code>{ path: 'admin', loadChildren: () =&gt; import('./admin/admin.module').then(m =&gt; m.AdminModule) }
// or standalone
{ path: 'admin', loadComponent: () =&gt; import('./admin.component').then(c =&gt; c.AdminComponent) }</code></pre>`),
        Q("What is virtual scrolling?", `<p>Virtual scrolling (CDK) only renders visible items in a large list, dramatically improving performance:</p><pre><code>&lt;cdk-virtual-scroll-viewport itemSize="50" class="viewport"&gt;
  &lt;div *cdkVirtualFor="let item of items"&gt;{{ item.name }}&lt;/div&gt;
&lt;/cdk-virtual-scroll-viewport&gt;</code></pre>`),
        Q("How do you analyze bundle size?", `<pre><code>ng build --stats-json
npx webpack-bundle-analyzer dist/my-app/stats.json</code></pre><p>This generates a visual treemap of your bundle, showing which modules are largest and where optimization is needed.</p>`),
        Q("What are preloading strategies?", `<p>Preloading loads lazy modules in the background after the app is initialized:</p><pre><code>RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
// or QuicklinkStrategy for only visible links</code></pre>`),
        Q("How does the async pipe help performance?", `<p>The async pipe automatically subscribes and unsubscribes, preventing memory leaks. With OnPush, it calls <code>markForCheck()</code> automatically, enabling efficient change detection.</p>`),
        Q("What is @defer in Angular 17?", `<p><code>@defer</code> enables declarative lazy loading of template blocks:</p><pre><code>@defer (on viewport) {
  &lt;app-heavy-chart [data]="data" /&gt;
} @placeholder {
  &lt;div&gt;Loading chart...&lt;/div&gt;
} @loading (minimum 500ms) {
  &lt;app-spinner /&gt;
}</code></pre>`),
        Q("What is image optimization with NgOptimizedImage?", `<p>NgOptimizedImage directive optimizes image loading with lazy loading, priority hints, and srcset:</p><pre><code>&lt;img ngSrc="hero.jpg" width="400" height="300" priority /&gt;</code></pre><p>It enforces best practices and automatically adds loading="lazy" to non-priority images.</p>`)
    ]
}
];
}

// ─── Extend Angular data file ───────────────────────────────
function extendAngularData() {
    var filePath = path.join(dataDir, 'angular-data.js');
    var content = fs.readFileSync(filePath, 'utf8');
    
    // Find the last ] before the final };
    var lastBracket = content.lastIndexOf(']');
    var before = content.substring(0, lastBracket);
    var after = content.substring(lastBracket);
    
    var newTopics = getAngularRemainingTopics();
    var topicsJson = newTopics.map(t => {
        var qs = t.questions.map(q => `            { q: ${JSON.stringify(q.q)}, a: ${JSON.stringify(q.a)} }`).join(',\n');
        return `        {\n            id: ${JSON.stringify(t.id)}, title: ${JSON.stringify(t.title)}, icon: ${JSON.stringify(t.icon)},\n            questions: [\n${qs}\n            ]\n        }`;
    }).join(',\n');
    
    var newContent = before + ',\n' + topicsJson + '\n' + after;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Extended angular-data.js with 10 more topics');
}

extendAngularData();
console.log('Done!');
