window.__CATEGORY_react__ = {
    category: "react",
    label: "React",
    icon: "bi-infinity",
    topics: [
        {
            id: "components-jsx",
            title: "Components & JSX",
            icon: "bi-box",
            questions: [
                {
                    q: "What is JSX and why is it used in React?",
                    a: `JSX stands for JavaScript XML. It is a syntax extension that lets you write HTML-like markup inside JavaScript.
<pre><code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
ReactDOM.createRoot(root).render(element);</code></pre>
JSX is compiled by Babel into <code>React.createElement()</code> calls. It makes component templates more readable and expressive compared to writing raw JavaScript.`
                },
                {
                    q: "What is the difference between functional and class components?",
                    a: `Functional components are plain JavaScript functions that accept props and return JSX. Class components extend <code>React.Component</code> and use a <code>render()</code> method.
<pre><code>// Functional
function Greeting({ name }) {
  return &lt;h1&gt;Hello {name}&lt;/h1&gt;;
}

// Class
class Greeting extends React.Component {
  render() { return &lt;h1&gt;Hello {this.props.name}&lt;/h1&gt;; }
}</code></pre>
Functional components are now preferred because they support hooks and are simpler to write and test.`
                },
                {
                    q: "How do you pass and access props in a React component?",
                    a: `Props are passed as attributes on JSX elements and received as a single object argument in functional components.
<pre><code>function UserCard({ name, age }) {
  return &lt;p&gt;{name} is {age} years old&lt;/p&gt;;
}

&lt;UserCard name="Alice" age={30} /&gt;</code></pre>
Props are read-only — a component must never modify its own props. They flow one-way from parent to child.`
                },
                {
                    q: "What is component composition in React?",
                    a: `Component composition is the practice of building complex UIs by combining smaller, reusable components together.
<pre><code>function App() {
  return (
    &lt;Layout&gt;
      &lt;Header /&gt;
      &lt;MainContent /&gt;
      &lt;Footer /&gt;
    &lt;/Layout&gt;
  );
}</code></pre>
This approach promotes reusability and separation of concerns. Each component manages its own responsibility, and they can be nested and combined to form the full UI.`
                },
                {
                    q: "How does conditional rendering work in React?",
                    a: `You can conditionally render elements using JavaScript operators like ternary, logical AND, or if statements.
<pre><code>function Dashboard({ isLoggedIn }) {
  return (
    &lt;div&gt;
      {isLoggedIn ? &lt;UserPanel /&gt; : &lt;LoginForm /&gt;}
      {isLoggedIn &amp;&amp; &lt;LogoutButton /&gt;}
    &lt;/div&gt;
  );
}</code></pre>
Returning <code>null</code> from a component renders nothing. Choose the pattern that best communicates intent for each situation.`
                },
                {
                    q: "How do you render lists in React and why are keys important?",
                    a: `Use <code>Array.map()</code> to render lists of elements. Each item must have a unique <code>key</code> prop to help React identify changes efficiently.
<pre><code>function TodoList({ items }) {
  return (
    &lt;ul&gt;
      {items.map(item =&gt; (
        &lt;li key={item.id}&gt;{item.text}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
Keys should be stable, unique identifiers — avoid using array indices as keys when the list can be reordered.`
                },
                {
                    q: "What are React Fragments and when should you use them?",
                    a: `Fragments let you group multiple elements without adding extra DOM nodes. Use <code>&lt;React.Fragment&gt;</code> or the shorthand <code>&lt;&gt;...&lt;/&gt;</code>.
<pre><code>function Columns() {
  return (
    &lt;&gt;
      &lt;td&gt;Name&lt;/td&gt;
      &lt;td&gt;Age&lt;/td&gt;
    &lt;/&gt;
  );
}</code></pre>
Fragments are useful inside tables, definition lists, or anywhere extra wrapper divs would break the HTML structure.`
                },
                {
                    q: "What does React.createElement do under the hood?",
                    a: `<code>React.createElement(type, props, ...children)</code> creates a React element object. JSX compiles down to these calls.
<pre><code>// JSX
const el = &lt;h1 className="title"&gt;Hello&lt;/h1&gt;;

// Compiled
const el = React.createElement('h1', { className: 'title' }, 'Hello');
// Returns: { type: 'h1', props: { className: 'title', children: 'Hello' } }</code></pre>
Understanding this helps you reason about how JSX works and can be useful for dynamic element creation.`
                },
                {
                    q: "What is a Pure Component in React?",
                    a: `A pure component only re-renders when its props or state actually change. For class components, <code>React.PureComponent</code> performs a shallow comparison automatically.
<pre><code>// Class approach
class Card extends React.PureComponent {
  render() { return &lt;div&gt;{this.props.title}&lt;/div&gt;; }
}

// Functional equivalent
const Card = React.memo(function Card({ title }) {
  return &lt;div&gt;{title}&lt;/div&gt;;
});</code></pre>
This optimization prevents unnecessary renders and improves performance for components with stable props.`
                },
                {
                    q: "How do you set default props for a React component?",
                    a: `You can set default props using default parameter values in functional components or the <code>defaultProps</code> static property.
<pre><code>// Default parameter (preferred)
function Button({ label = "Click me", color = "blue" }) {
  return &lt;button style={{ color }}&gt;{label}&lt;/button&gt;;
}

// defaultProps (legacy)
Button.defaultProps = { label: "Click me", color: "blue" };</code></pre>
Default parameter values are the modern standard. <code>defaultProps</code> is still supported but considered legacy for functional components.`
                }
            ]
        },
        {
            id: "props-state",
            title: "Props & State",
            icon: "bi-diagram-3",
            questions: [
                {
                    q: "What is the difference between props and state in React?",
                    a: `Props are external data passed from a parent component — they are read-only. State is internal data managed within a component that can change over time.
<pre><code>function Counter({ initialCount }) {   // initialCount is a prop
  const [count, setCount] = useState(initialCount); // count is state
  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;{count}&lt;/button&gt;;
}</code></pre>
Props flow down from parent to child. State is local and triggers re-renders when updated via its setter function.`
                },
                {
                    q: "How do you pass props from a parent to a child component?",
                    a: `Props are passed as JSX attributes on the child element and destructured in the child function signature.
<pre><code>function Parent() {
  return &lt;Child name="Alice" age={30} /&gt;;
}

function Child({ name, age }) {
  return &lt;p&gt;{name} is {age}&lt;/p&gt;;
}</code></pre>
You can pass any JavaScript value as a prop: strings, numbers, objects, arrays, functions, or even other components.`
                },
                {
                    q: "Why is state immutability important in React?",
                    a: `React detects state changes by comparing references. Mutating state directly does not trigger a re-render because the reference stays the same.
<pre><code>// Wrong — mutating directly
user.name = "Bob";
setUser(user); // same reference, no re-render

// Correct — creating a new object
setUser({ ...user, name: "Bob" }); // new reference, triggers re-render</code></pre>
Always create new objects or arrays when updating state. This enables React's diffing algorithm and predictable rendering behavior.`
                },
                {
                    q: "What does 'lifting state up' mean in React?",
                    a: `Lifting state up means moving shared state to the closest common ancestor so multiple child components can access and update it.
<pre><code>function Parent() {
  const [value, setValue] = useState("");
  return (
    &lt;&gt;
      &lt;Input value={value} onChange={setValue} /&gt;
      &lt;Display value={value} /&gt;
    &lt;/&gt;
  );
}</code></pre>
This pattern keeps components in sync. The parent owns the state and passes it down along with update callbacks as props.`
                },
                {
                    q: "What is prop drilling and how can you avoid it?",
                    a: `Prop drilling occurs when you pass props through multiple intermediate components that don't use them, just to reach a deeply nested child.
<pre><code>// Prop drilling: App -&gt; Layout -&gt; Sidebar -&gt; UserMenu -&gt; Avatar
&lt;Layout user={user}&gt;   // Layout doesn't use user
  &lt;Sidebar user={user}&gt; // Sidebar doesn't use user
    &lt;UserMenu user={user} /&gt;
  &lt;/Sidebar&gt;
&lt;/Layout&gt;</code></pre>
Solutions include React Context API, state management libraries like Redux, or component composition patterns to avoid unnecessary nesting.`
                },
                {
                    q: "How does the children prop work in React?",
                    a: `The <code>children</code> prop contains whatever JSX is placed between a component's opening and closing tags.
<pre><code>function Card({ children, title }) {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      &lt;div&gt;{children}&lt;/div&gt;
    &lt;/div&gt;
  );
}

&lt;Card title="Info"&gt;&lt;p&gt;Content here&lt;/p&gt;&lt;/Card&gt;</code></pre>
The children prop enables flexible component composition by letting parents inject arbitrary content into a component's layout.`
                },
                {
                    q: "How do you provide default values for props?",
                    a: `Use JavaScript default parameters in functional components to set fallback values when a prop is not provided.
<pre><code>function Alert({ message = "Something happened", type = "info" }) {
  return &lt;div className={\`alert alert-\${type}\`}&gt;{message}&lt;/div&gt;;
}

// Usage
&lt;Alert /&gt;                    // uses both defaults
&lt;Alert message="Error!" type="danger" /&gt;  // overrides both</code></pre>
Default parameter values are evaluated when the prop is <code>undefined</code>, not when it is <code>null</code>.`
                },
                {
                    q: "What is PropTypes and how do you validate props?",
                    a: `PropTypes is a runtime type-checking library for React props. It logs warnings in development when props don't match expected types.
<pre><code>import PropTypes from 'prop-types';

function User({ name, age, email }) {
  return &lt;p&gt;{name} ({age}) — {email}&lt;/p&gt;;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired
};</code></pre>
For modern projects, TypeScript interfaces are generally preferred over PropTypes for static type safety.`
                },
                {
                    q: "What is state batching in React?",
                    a: `State batching is React's optimization of grouping multiple state updates into a single re-render instead of rendering after each update.
<pre><code>function handleClick() {
  setCount(c =&gt; c + 1);   // batched
  setFlag(f =&gt; !f);        // batched
  setName("Alice");         // batched
  // React renders only ONCE after all three updates
}</code></pre>
React 18+ automatically batches all state updates, including those in promises, timeouts, and native event handlers. Earlier versions only batched inside React event handlers.`
                },
                {
                    q: "What is derived state and when should you avoid it?",
                    a: `Derived state is state that is computed from existing props or other state. It is often unnecessary and can lead to bugs if not kept in sync.
<pre><code>// Bad: duplicating state
const [items, setItems] = useState([]);
const [count, setCount] = useState(0); // derived from items.length

// Good: compute during render
const [items, setItems] = useState([]);
const count = items.length; // no extra state needed</code></pre>
Compute values during rendering when possible. Only use state for data that cannot be derived from other state or props.`
                }
            ]
        },
        {
            id: "hooks-usestate-useeffect",
            title: "Hooks — useState & useEffect",
            icon: "bi-hook",
            questions: [
                {
                    q: "How does the useState hook work in React?",
                    a: `<code>useState</code> declares a state variable in a functional component. It returns an array with the current value and a setter function.
<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Count: {count}&lt;/button&gt;;
}</code></pre>
The argument to <code>useState</code> is the initial value. The setter function triggers a re-render with the new value.`
                },
                {
                    q: "How do you manage state with objects or arrays using useState?",
                    a: `Always create new references when updating objects or arrays in state — never mutate directly.
<pre><code>const [user, setUser] = useState({ name: "Alice", age: 25 });
// Update object
setUser(prev =&gt; ({ ...prev, age: 26 }));

const [items, setItems] = useState(["a", "b"]);
// Add to array
setItems(prev =&gt; [...prev, "c"]);
// Remove from array
setItems(prev =&gt; prev.filter(item =&gt; item !== "a"));</code></pre>
Using the spread operator or array methods like <code>filter</code> and <code>map</code> ensures immutability and proper re-rendering.`
                },
                {
                    q: "What does useEffect do and when does it run?",
                    a: `<code>useEffect</code> lets you perform side effects in functional components such as data fetching, subscriptions, or DOM manipulation.
<pre><code>useEffect(() =&gt; {
  document.title = \`Count: \${count}\`;
}, [count]); // runs when count changes</code></pre>
By default, effects run after every render. The dependency array controls when the effect re-runs. It replaces lifecycle methods like <code>componentDidMount</code> and <code>componentDidUpdate</code>.`
                },
                {
                    q: "How does the dependency array in useEffect work?",
                    a: `The dependency array tells React when to re-run the effect. The effect fires only when one of the listed dependencies changes.
<pre><code>useEffect(() =&gt; { /* runs on every render */ });
useEffect(() =&gt; { /* runs once on mount */ }, []);
useEffect(() =&gt; { /* runs when a or b changes */ }, [a, b]);</code></pre>
React compares dependencies using <code>Object.is</code>. Missing dependencies can cause stale closures, while unnecessary ones cause excessive re-runs. Always include all values the effect reads.`
                },
                {
                    q: "What is the cleanup function in useEffect?",
                    a: `The cleanup function returned from <code>useEffect</code> runs before the effect re-executes and when the component unmounts.
<pre><code>useEffect(() =&gt; {
  const handler = (e) =&gt; console.log(e.key);
  window.addEventListener('keydown', handler);

  return () =&gt; {
    window.removeEventListener('keydown', handler); // cleanup
  };
}, []);</code></pre>
Cleanup prevents memory leaks from subscriptions, timers, or event listeners. It is essential for any effect that sets up ongoing processes.`
                },
                {
                    q: "What are the Rules of Hooks in React?",
                    a: `There are two fundamental rules: call hooks only at the top level and only in React functions.
<pre><code>// ✅ Correct — top level of component
function App() {
  const [count, setCount] = useState(0);
  useEffect(() =&gt; { /* ... */ }, []);
}

// ❌ Wrong — inside a condition
function App() {
  if (loggedIn) {
    const [user, setUser] = useState(null); // breaks hook order
  }
}</code></pre>
React relies on the call order of hooks to associate state with the correct hook. Conditional or nested hook calls break this mechanism.`
                },
                {
                    q: "What happens when you pass an empty dependency array to useEffect?",
                    a: `An empty dependency array <code>[]</code> means the effect runs only once after the initial render, similar to <code>componentDidMount</code>.
<pre><code>useEffect(() =&gt; {
  console.log("Component mounted");
  fetchInitialData();

  return () =&gt; {
    console.log("Component will unmount");
  };
}, []); // empty array — runs once</code></pre>
The cleanup function will run when the component unmounts. This is the standard pattern for one-time initialization like API calls or setting up subscriptions.`
                },
                {
                    q: "How do you fetch data with useEffect?",
                    a: `Use <code>useEffect</code> with an async function inside to fetch data on mount or when dependencies change.
<pre><code>function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() =&gt; {
    let cancelled = false;
    fetch(\`/api/users/\${userId}\`)
      .then(res =&gt; res.json())
      .then(data =&gt; { if (!cancelled) setUser(data); });
    return () =&gt; { cancelled = true; };
  }, [userId]);

  return user ? &lt;p&gt;{user.name}&lt;/p&gt; : &lt;p&gt;Loading...&lt;/p&gt;;
}</code></pre>
The cancelled flag prevents setting state on an unmounted component, avoiding race conditions and memory leaks.`
                },
                {
                    q: "Can you use multiple useState calls in one component?",
                    a: `Yes. You can call <code>useState</code> multiple times to manage separate pieces of state independently.
<pre><code>function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  return (
    &lt;form&gt;
      &lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;
      &lt;input value={email} onChange={e =&gt; setEmail(e.target.value)} /&gt;
      &lt;input type="number" value={age} onChange={e =&gt; setAge(+e.target.value)} /&gt;
    &lt;/form&gt;
  );
}</code></pre>
Splitting state into multiple variables keeps updates granular. Group related values into an object only when they always change together.`
                },
                {
                    q: "What are stale closures in hooks and how do you fix them?",
                    a: `A stale closure occurs when a function inside a hook captures an outdated value of state or props.
<pre><code>// Bug: count is always 0 inside the interval
useEffect(() =&gt; {
  const id = setInterval(() =&gt; {
    setCount(count + 1); // stale closure — count is always 0
  }, 1000);
  return () =&gt; clearInterval(id);
}, []);

// Fix: use the functional updater
useEffect(() =&gt; {
  const id = setInterval(() =&gt; {
    setCount(prev =&gt; prev + 1); // always uses latest value
  }, 1000);
  return () =&gt; clearInterval(id);
}, []);</code></pre>
Using the functional updater form of the setter avoids stale closures by referencing the previous state directly.`
                }
            ]
        },
        {
            id: "context-api",
            title: "Context API",
            icon: "bi-share",
            questions: [
                {
                    q: "How do you create a context in React using createContext?",
                    a: `<code>React.createContext</code> creates a context object with a Provider and a Consumer. You pass a default value used when no Provider is found above.
<pre><code>import { createContext } from 'react';

const ThemeContext = createContext('light'); // default value
export default ThemeContext;</code></pre>
The default value is only used when a component reads context without a matching Provider above it in the tree. It is useful for testing or fallback scenarios.`
                },
                {
                    q: "How do you consume context with the useContext hook?",
                    a: `<code>useContext</code> reads the current value from the nearest Provider above in the component tree.
<pre><code>import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return &lt;button className={theme}&gt;Click me&lt;/button&gt;;
}</code></pre>
The component will re-render whenever the context value changes. <code>useContext</code> replaces the older <code>Context.Consumer</code> render prop pattern.`
                },
                {
                    q: "How does the Context Provider component work?",
                    a: `The Provider wraps part of the component tree and supplies a <code>value</code> prop to all descendants that consume the context.
<pre><code>import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;Toolbar /&gt;
      &lt;button onClick={() =&gt; setTheme('light')}&gt;Light&lt;/button&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}</code></pre>
All consumers nested inside the Provider re-render when the <code>value</code> prop changes.`
                },
                {
                    q: "How do you consume context in class and functional components?",
                    a: `Functional components use the <code>useContext</code> hook. Class components can use <code>static contextType</code> or the <code>Context.Consumer</code> pattern.
<pre><code>// Functional
function Display() {
  const theme = useContext(ThemeContext);
  return &lt;div className={theme}&gt;Themed&lt;/div&gt;;
}

// Class
class Display extends React.Component {
  static contextType = ThemeContext;
  render() { return &lt;div className={this.context}&gt;Themed&lt;/div&gt;; }
}</code></pre>
The <code>useContext</code> hook is the modern and preferred approach for consuming context values.`
                },
                {
                    q: "When should you use Context API instead of prop drilling?",
                    a: `Use Context when data needs to be accessed by many components at different nesting levels, such as themes, locale, or authentication status.
<pre><code>// Without Context — prop drilling through 4 levels
&lt;App user={user}&gt; → &lt;Layout user&gt; → &lt;Nav user&gt; → &lt;Avatar user /&gt;

// With Context — direct access
&lt;UserContext.Provider value={user}&gt;
  &lt;App /&gt;   // Avatar can useContext(UserContext) directly
&lt;/UserContext.Provider&gt;</code></pre>
Context is ideal for global or semi-global data. For data used by only one or two levels, regular props are simpler and more explicit.`
                },
                {
                    q: "How can you update context values from a child component?",
                    a: `Pass a setter function or dispatch alongside the value in the Provider so children can trigger updates.
<pre><code>const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return &lt;button onClick={() =&gt; setTheme(theme === 'light' ? 'dark' : 'light')}&gt;Toggle&lt;/button&gt;;
}</code></pre>`
                },
                {
                    q: "How do you use multiple contexts in a single component?",
                    a: `You can nest multiple Providers and call <code>useContext</code> for each context you need in a component.
<pre><code>function App() {
  return (
    &lt;ThemeContext.Provider value="dark"&gt;
      &lt;AuthContext.Provider value={{ user: "Alice" }}&gt;
        &lt;Dashboard /&gt;
      &lt;/AuthContext.Provider&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

function Dashboard() {
  const theme = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  return &lt;div className={theme}&gt;Welcome, {user}&lt;/div&gt;;
}</code></pre>
Splitting concerns into separate contexts prevents unnecessary re-renders and keeps each context focused.`
                },
                {
                    q: "What are the performance considerations when using Context?",
                    a: `Every consumer of a context re-renders whenever the Provider's <code>value</code> changes, even if the specific data they use hasn't changed.
<pre><code>// Problem: new object on every render triggers all consumers
&lt;MyContext.Provider value={{ user, theme }}&gt;

// Fix: memoize the value
const value = useMemo(() =&gt; ({ user, theme }), [user, theme]);
&lt;MyContext.Provider value={value}&gt;</code></pre>
Split large contexts into smaller ones so consumers only subscribe to the data they need. Memoize value objects to avoid unnecessary reference changes.`
                },
                {
                    q: "How can you combine Context with useReducer for complex state?",
                    a: `Pairing <code>useReducer</code> with Context provides a Redux-like pattern for managing complex shared state.
<pre><code>const StateContext = createContext();
const DispatchContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    &lt;StateContext.Provider value={state}&gt;
      &lt;DispatchContext.Provider value={dispatch}&gt;
        {children}
      &lt;/DispatchContext.Provider&gt;
    &lt;/StateContext.Provider&gt;
  );
}</code></pre>
Separating state and dispatch into different contexts prevents components that only dispatch actions from re-rendering when state changes.`
                },
                {
                    q: "When should you use Context vs a state management library?",
                    a: `Context is best for low-frequency updates like themes, auth, and locale. For high-frequency updates or complex state logic, consider a dedicated library.
<pre><code>// Good for Context: theme, auth, locale
&lt;ThemeContext.Provider value={theme}&gt;

// Consider Redux/Zustand for:
// - Frequently changing data (e.g., real-time updates)
// - Complex state with many reducers
// - DevTools and middleware requirements
// - Large applications with many state consumers</code></pre>
Context lacks built-in performance optimizations like selectors. Libraries such as Redux, Zustand, or Jotai offer selective subscriptions and better tooling for complex scenarios.`
                }
            ]
        },
        {
            id: "react-router",
            title: "React Router",
            icon: "bi-signpost-2",
            questions: [
                {
                    q: "How do you set up BrowserRouter in a React application?",
                    a: `Wrap your application root with <code>BrowserRouter</code> to enable client-side routing using the HTML5 History API.
<pre><code>import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  &lt;BrowserRouter&gt;
    &lt;App /&gt;
  &lt;/BrowserRouter&gt;
);</code></pre>
<code>BrowserRouter</code> uses clean URLs without hash fragments. For static hosting that doesn't support URL rewriting, use <code>HashRouter</code> instead.`
                },
                {
                    q: "How do Routes and Route components define page navigation?",
                    a: `<code>Routes</code> wraps a set of <code>Route</code> elements, rendering the first one whose <code>path</code> matches the current URL.
<pre><code>import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    &lt;Routes&gt;
      &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
      &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;Route path="/contact" element={&lt;Contact /&gt;} /&gt;
    &lt;/Routes&gt;
  );
}</code></pre>
In React Router v6, <code>Routes</code> replaces <code>Switch</code> and uses the <code>element</code> prop instead of <code>component</code> or <code>render</code>.`
                },
                {
                    q: "What is the difference between Link and NavLink?",
                    a: `<code>Link</code> navigates without a full page reload. <code>NavLink</code> extends Link by adding active styling when the route matches.
<pre><code>import { Link, NavLink } from 'react-router-dom';

&lt;Link to="/about"&gt;About&lt;/Link&gt;

&lt;NavLink
  to="/about"
  className={({ isActive }) =&gt; isActive ? "active" : ""}
&gt;
  About
&lt;/NavLink&gt;</code></pre>
Use <code>NavLink</code> for navigation menus where you need visual feedback on the current page. Use <code>Link</code> for general in-app links.`
                },
                {
                    q: "How do you navigate programmatically with useNavigate?",
                    a: `<code>useNavigate</code> returns a function that lets you navigate in response to events, form submissions, or side effects.
<pre><code>import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () =&gt; {
    // ... perform login logic
    navigate('/dashboard');          // push
    navigate('/dashboard', { replace: true }); // replace history
    navigate(-1);                    // go back
  };
}</code></pre>
Use <code>replace: true</code> for redirects where the user shouldn't go back to the previous page (e.g., after login).`
                },
                {
                    q: "How do you access URL parameters using useParams?",
                    a: `<code>useParams</code> returns an object of key-value pairs from the dynamic segments of the matched route path.
<pre><code>// Route definition
&lt;Route path="/users/:userId" element={&lt;UserProfile /&gt;} /&gt;

// Component
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return &lt;h1&gt;User ID: {userId}&lt;/h1&gt;;
}</code></pre>
Parameters are always strings. Convert them to numbers or other types as needed. Use multiple params like <code>/posts/:postId/comments/:commentId</code>.`
                },
                {
                    q: "How do you set up nested routes in React Router?",
                    a: `Define child <code>Route</code> elements inside a parent route and use the <code>Outlet</code> component to render the matched child.
<pre><code>function App() {
  return (
    &lt;Routes&gt;
      &lt;Route path="/dashboard" element={&lt;DashboardLayout /&gt;}&gt;
        &lt;Route index element={&lt;Overview /&gt;} /&gt;
        &lt;Route path="settings" element={&lt;Settings /&gt;} /&gt;
        &lt;Route path="profile" element={&lt;Profile /&gt;} /&gt;
      &lt;/Route&gt;
    &lt;/Routes&gt;
  );
}

function DashboardLayout() {
  return &lt;div&gt;&lt;Sidebar /&gt;&lt;Outlet /&gt;&lt;/div&gt;;
}</code></pre>
The <code>index</code> route renders when the parent path matches exactly. Nested routes keep layouts consistent across related pages.`
                },
                {
                    q: "How do dynamic routes work in React Router?",
                    a: `Dynamic segments are prefixed with <code>:</code> in the route path. They match any value at that URL position and are accessible via <code>useParams</code>.
<pre><code>&lt;Routes&gt;
  &lt;Route path="/products/:category" element={&lt;ProductList /&gt;} /&gt;
  &lt;Route path="/products/:category/:productId" element={&lt;ProductDetail /&gt;} /&gt;
&lt;/Routes&gt;

function ProductDetail() {
  const { category, productId } = useParams();
  return &lt;p&gt;{category} — Product #{productId}&lt;/p&gt;;
}</code></pre>
Dynamic routes are essential for pages like user profiles, product details, or any content driven by URL parameters.`
                },
                {
                    q: "How do you implement protected or private routes?",
                    a: `Create a wrapper component that checks authentication before rendering the child route or redirecting to login.
<pre><code>function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return &lt;Navigate to="/login" replace /&gt;;
  }
  return children;
}

// Usage in routes
&lt;Route path="/dashboard" element={
  &lt;ProtectedRoute&gt;&lt;Dashboard /&gt;&lt;/ProtectedRoute&gt;
} /&gt;</code></pre>
Use the <code>replace</code> prop on <code>Navigate</code> so the login redirect doesn't pollute the browser history.`
                },
                {
                    q: "How do you handle 404 pages in React Router?",
                    a: `Add a catch-all route with <code>path="*"</code> at the end of your route definitions to handle unmatched URLs.
<pre><code>&lt;Routes&gt;
  &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
  &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
  &lt;Route path="*" element={&lt;NotFound /&gt;} /&gt;
&lt;/Routes&gt;

function NotFound() {
  return &lt;h1&gt;404 — Page Not Found&lt;/h1&gt;;
}</code></pre>
The <code>*</code> wildcard matches any path not previously matched. Place it last since React Router v6 uses ranking-based matching.`
                },
                {
                    q: "How do you use the useLocation hook?",
                    a: `<code>useLocation</code> returns the current location object with <code>pathname</code>, <code>search</code>, <code>hash</code>, and <code>state</code> properties.
<pre><code>import { useLocation } from 'react-router-dom';

function Analytics() {
  const location = useLocation();

  useEffect(() =&gt; {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

// Passing state during navigation
navigate('/checkout', { state: { from: '/cart' } });
const { state } = useLocation(); // { from: '/cart' }</code></pre>
<code>useLocation</code> is commonly used for analytics tracking, reading query parameters, or accessing navigation state.`
                }
            ]
        },
        {
            id: "forms-controlled-components",
            title: "Forms & Controlled Components",
            icon: "bi-input-cursor-text",
            questions: [
                {
                    q: "What is the difference between controlled and uncontrolled components?",
                    a: `In controlled components, React manages the form value via state. In uncontrolled components, the DOM manages the value and you read it via refs.
<pre><code>// Controlled
const [value, setValue] = useState('');
&lt;input value={value} onChange={e =&gt; setValue(e.target.value)} /&gt;

// Uncontrolled
const inputRef = useRef();
&lt;input ref={inputRef} defaultValue="hello" /&gt;
// Read: inputRef.current.value</code></pre>
Controlled components are preferred because they keep the UI and state in sync, making validation and conditional logic straightforward.`
                },
                {
                    q: "How do you handle form submission in React?",
                    a: `Attach an <code>onSubmit</code> handler to the form element and call <code>e.preventDefault()</code> to prevent full page reload.
<pre><code>function ContactForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    console.log('Submitted:', email);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input value={email} onChange={e =&gt; setEmail(e.target.value)} /&gt;
      &lt;button type="submit"&gt;Send&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
Always prevent default submission to handle data in JavaScript rather than triggering a server round-trip.`
                },
                {
                    q: "How do you handle input changes with onChange in React?",
                    a: `The <code>onChange</code> event fires on every keystroke. Use the event's <code>target.value</code> to update state.
<pre><code>function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    &lt;input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) =&gt; setQuery(e.target.value)}
    /&gt;
  );
}</code></pre>
React's <code>onChange</code> behaves like the DOM's <code>input</code> event — it fires on every change, not just on blur like the native HTML <code>change</code> event.`
                },
                {
                    q: "How do you handle textarea and select elements in React?",
                    a: `Both <code>textarea</code> and <code>select</code> use the <code>value</code> prop and <code>onChange</code> handler just like text inputs.
<pre><code>const [bio, setBio] = useState('');
const [color, setColor] = useState('red');

&lt;textarea value={bio} onChange={e =&gt; setBio(e.target.value)} /&gt;

&lt;select value={color} onChange={e =&gt; setColor(e.target.value)}&gt;
  &lt;option value="red"&gt;Red&lt;/option&gt;
  &lt;option value="blue"&gt;Blue&lt;/option&gt;
  &lt;option value="green"&gt;Green&lt;/option&gt;
&lt;/select&gt;</code></pre>
Unlike HTML, React's <code>textarea</code> uses <code>value</code> instead of inner text, and <code>select</code> uses <code>value</code> instead of the <code>selected</code> attribute on options.`
                },
                {
                    q: "How do you handle multiple form inputs with a single handler?",
                    a: `Use a single state object and a shared handler that reads the input's <code>name</code> attribute to update the correct field.
<pre><code>const [form, setForm] = useState({ name: '', email: '', age: '' });

const handleChange = (e) =&gt; {
  const { name, value } = e.target;
  setForm(prev =&gt; ({ ...prev, [name]: value }));
};

&lt;input name="name" value={form.name} onChange={handleChange} /&gt;
&lt;input name="email" value={form.email} onChange={handleChange} /&gt;
&lt;input name="age" value={form.age} onChange={handleChange} /&gt;</code></pre>
This pattern scales well — each input just needs a matching <code>name</code> prop that corresponds to a key in the state object.`
                },
                {
                    q: "How do you implement basic form validation in React?",
                    a: `Track errors in state and validate on submit or on change. Display error messages conditionally.
<pre><code>const [email, setEmail] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) =&gt; {
  e.preventDefault();
  if (!email.includes('@')) {
    setError('Please enter a valid email');
    return;
  }
  setError('');
  // proceed with submission
};

&lt;form onSubmit={handleSubmit}&gt;
  &lt;input value={email} onChange={e =&gt; setEmail(e.target.value)} /&gt;
  {error &amp;&amp; &lt;span className="error"&gt;{error}&lt;/span&gt;}
&lt;/form&gt;</code></pre>
For complex forms, consider validation libraries like Yup or Zod paired with form libraries.`
                },
                {
                    q: "How do you use useRef for uncontrolled form components?",
                    a: `<code>useRef</code> creates a reference to a DOM element, letting you read its value imperatively without state.
<pre><code>import { useRef } from 'react';

function FileForm() {
  const nameRef = useRef();

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input ref={nameRef} defaultValue="Alice" /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
Uncontrolled components use <code>defaultValue</code> instead of <code>value</code>. They are useful for simple forms or integrating with non-React libraries.`
                },
                {
                    q: "How do you handle file inputs in React?",
                    a: `File inputs are always uncontrolled because their value is read-only. Use a ref or the onChange event to access selected files.
<pre><code>function FileUpload() {
  const handleChange = (e) =&gt; {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected:', file.name, file.size);
      const formData = new FormData();
      formData.append('file', file);
      // upload formData...
    }
  };

  return &lt;input type="file" onChange={handleChange} accept=".pdf,.jpg" /&gt;;
}</code></pre>
Use the <code>accept</code> attribute to filter file types. Access <code>e.target.files</code> for the FileList of selected files.`
                },
                {
                    q: "What are popular form libraries in the React ecosystem?",
                    a: `The most popular form libraries are <strong>React Hook Form</strong> and <strong>Formik</strong>, which simplify validation, error handling, and complex form state.
<pre><code>// React Hook Form example
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =&gt; console.log(data);

  return (
    &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
      &lt;input {...register("email", { required: true })} /&gt;
      {errors.email &amp;&amp; &lt;span&gt;Email is required&lt;/span&gt;}
    &lt;/form&gt;
  );
}</code></pre>
React Hook Form uses uncontrolled inputs with refs for better performance. Formik uses controlled inputs. Both integrate with Yup or Zod for schema validation.`
                },
                {
                    q: "How do you handle controlled checkboxes and radio buttons in React?",
                    a: `Checkboxes use the <code>checked</code> prop tied to a boolean state. Radio buttons share the same state variable and use <code>checked</code> comparisons.
<pre><code>const [agree, setAgree] = useState(false);
const [plan, setPlan] = useState('free');

&lt;label&gt;
  &lt;input type="checkbox" checked={agree}
    onChange={e =&gt; setAgree(e.target.checked)} /&gt; I agree
&lt;/label&gt;

&lt;label&gt;
  &lt;input type="radio" value="free" checked={plan === 'free'}
    onChange={e =&gt; setPlan(e.target.value)} /&gt; Free
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="radio" value="pro" checked={plan === 'pro'}
    onChange={e =&gt; setPlan(e.target.value)} /&gt; Pro
&lt;/label&gt;</code></pre>
For checkboxes use <code>e.target.checked</code>; for radio buttons use <code>e.target.value</code>. Both remain fully controlled through React state.`
                }
            ]
        },
        {
            id: "redux-state-management",
            title: "Redux & State Management",
            icon: "bi-diagram-2",
            questions: [
                {
                    q: "What are the core concepts of Redux?",
                    a: `Redux is built around three principles: a single store holds all application state, state is read-only and changed only by dispatching actions, and reducers are pure functions that compute the next state.
<pre><code>// Action
{ type: 'counter/increment', payload: 1 }

// Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'counter/increment': return state + action.payload;
    default: return state;
  }
}</code></pre>
This unidirectional data flow makes state changes predictable and easy to debug.`
                },
                {
                    q: "How do store, actions, and reducers work together in Redux?",
                    a: `The store holds state, actions describe what happened, and reducers specify how state changes in response to actions.
<pre><code>import { createStore } from 'redux';

const reducer = (state = { count: 0 }, action) =&gt; {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    default: return state;
  }
};

const store = createStore(reducer);
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }</code></pre>
Components dispatch actions to the store, the reducer computes new state, and subscribed components re-render with the updated values.`
                },
                {
                    q: "How do you use useSelector and useDispatch hooks with Redux?",
                    a: `<code>useSelector</code> reads values from the Redux store. <code>useDispatch</code> returns the dispatch function to send actions.
<pre><code>import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state =&gt; state.counter.value);
  const dispatch = useDispatch();

  return (
    &lt;div&gt;
      &lt;span&gt;{count}&lt;/span&gt;
      &lt;button onClick={() =&gt; dispatch({ type: 'increment' })}&gt;+&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
<code>useSelector</code> subscribes to the store and triggers re-renders only when the selected value changes.`
                },
                {
                    q: "How does Redux Toolkit's createSlice simplify Redux?",
                    a: `<code>createSlice</code> generates action creators and action types automatically from a set of reducer functions.
<pre><code>import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) =&gt; { state.value += 1; },
    decrement: (state) =&gt; { state.value -= 1; },
    addBy: (state, action) =&gt; { state.value += action.payload; }
  }
});

export const { increment, decrement, addBy } = counterSlice.actions;
export default counterSlice.reducer;</code></pre>
RTK uses Immer internally, so you can write "mutating" logic in reducers while it produces immutable updates under the hood.`
                },
                {
                    q: "How do you set up a Redux store with configureStore?",
                    a: `<code>configureStore</code> from Redux Toolkit wraps <code>createStore</code> with good defaults including Redux DevTools and middleware.
<pre><code>import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
});

// Wrap your app
&lt;Provider store={store}&gt;
  &lt;App /&gt;
&lt;/Provider&gt;</code></pre>
<code>configureStore</code> automatically adds thunk middleware and enables Redux DevTools — no extra setup needed.`
                },
                {
                    q: "How do you handle async operations with createAsyncThunk?",
                    a: `<code>createAsyncThunk</code> generates pending, fulfilled, and rejected action types for async logic like API calls.
<pre><code>import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetch', async (userId) =&gt; {
  const res = await fetch(\`/api/users/\${userId}\`);
  return res.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  extraReducers: (builder) =&gt; {
    builder
      .addCase(fetchUser.pending, (state) =&gt; { state.loading = true; })
      .addCase(fetchUser.fulfilled, (state, action) =&gt; {
        state.data = action.payload; state.loading = false;
      });
  }
});</code></pre>
Dispatch it like any action: <code>dispatch(fetchUser(123))</code>.`
                },
                {
                    q: "What is middleware in Redux and how is it used?",
                    a: `Middleware intercepts dispatched actions before they reach the reducer, enabling logging, async logic, or action transformation.
<pre><code>const loggerMiddleware = (store) =&gt; (next) =&gt; (action) =&gt; {
  console.log('Dispatching:', action.type);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =&gt; getDefault().concat(loggerMiddleware)
});</code></pre>
Redux Toolkit includes <code>redux-thunk</code> by default. Additional middleware like <code>redux-saga</code> or custom loggers can be added as needed.`
                },
                {
                    q: "How do you use Redux DevTools for debugging?",
                    a: `Redux DevTools is a browser extension that lets you inspect every dispatched action, view state changes, and time-travel through state history.
<pre><code>// With configureStore — DevTools enabled automatically
const store = configureStore({ reducer: rootReducer });

// Manual setup (legacy createStore)
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);</code></pre>
DevTools features include action replay, state diff view, action filtering, and the ability to dispatch test actions directly from the panel.`
                },
                {
                    q: "What is RTK Query and how does it simplify data fetching?",
                    a: `RTK Query is a data fetching and caching tool built into Redux Toolkit. It auto-generates hooks for API endpoints.
<pre><code>import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) =&gt; ({
    getUser: builder.query({ query: (id) =&gt; \`/users/\${id}\` }),
    addUser: builder.mutation({ query: (body) =&gt; ({
      url: '/users', method: 'POST', body
    })})
  })
});

export const { useGetUserQuery, useAddUserMutation } = api;</code></pre>
RTK Query handles caching, invalidation, polling, and loading states automatically — eliminating most hand-written data fetching code.`
                },
                {
                    q: "When should you use Redux vs other state management approaches?",
                    a: `Redux is best for large applications with complex shared state, frequent updates, and a need for predictable state management and debugging tools.
<pre><code>// Use Redux when you need:
// - Centralized state accessed by many components
// - Complex state update logic with many reducers
// - Middleware for side effects (logging, analytics)
// - Time-travel debugging with DevTools
// - Server state caching (RTK Query)

// Consider alternatives:
// - useState/useReducer for local component state
// - Context API for simple shared state (theme, auth)
// - Zustand or Jotai for lighter global state
// - React Query/TanStack Query for server state</code></pre>
Don't adopt Redux prematurely. Start with React's built-in state and add Redux only when your state management needs outgrow simpler solutions.`
                }
            ]
        },
        {
            id: "usereducer-usememo",
            title: "useReducer & useMemo",
            icon: "bi-lightning",
            questions: [
                {
                    q: "How does the useReducer hook work in React?",
                    a: `<code>useReducer</code> manages complex state transitions using a reducer function, similar to Redux but local to the component.
<pre><code>import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return &lt;button onClick={() =&gt; dispatch({ type: 'increment' })}&gt;{state.count}&lt;/button&gt;;
}</code></pre>
<code>useReducer</code> returns the current state and a dispatch function to send actions to the reducer.`
                },
                {
                    q: "How do you write a reducer function for useReducer?",
                    a: `A reducer takes the current state and an action, then returns a new state based on the action type. It must be a pure function.
<pre><code>function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case 'toggle':
      return state.map(t =&gt;
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    case 'delete':
      return state.filter(t =&gt; t.id !== action.id);
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}</code></pre>
Always return new state objects — never mutate the existing state. Throwing on unknown actions helps catch typos early.`
                },
                {
                    q: "How do you dispatch actions with useReducer?",
                    a: `The <code>dispatch</code> function sends action objects to the reducer. Actions typically have a <code>type</code> and optional <code>payload</code>.
<pre><code>const [state, dispatch] = useReducer(todoReducer, []);

// Dispatch various actions
dispatch({ type: 'add', text: 'Learn React' });
dispatch({ type: 'toggle', id: 1 });
dispatch({ type: 'delete', id: 1 });</code></pre>
<code>dispatch</code> is stable across re-renders, so it is safe to pass to child components or include in dependency arrays without causing extra renders.`
                },
                {
                    q: "When should you use useReducer vs useState?",
                    a: `Use <code>useReducer</code> when state logic is complex, involves multiple sub-values, or when the next state depends on the previous one.
<pre><code>// useState — simple, independent values
const [name, setName] = useState('');
const [age, setAge] = useState(0);

// useReducer — complex, related state transitions
const [state, dispatch] = useReducer(formReducer, {
  name: '', age: 0, errors: {}, isSubmitting: false
});
dispatch({ type: 'SET_FIELD', field: 'name', value: 'Alice' });
dispatch({ type: 'SUBMIT' });</code></pre>
<code>useReducer</code> centralizes logic, makes state transitions explicit, and is easier to test since reducers are pure functions.`
                },
                {
                    q: "How does useMemo work and when should you use it?",
                    a: `<code>useMemo</code> caches the result of an expensive computation, recomputing only when its dependencies change.
<pre><code>import { useMemo } from 'react';

function ProductList({ products, filter }) {
  const filtered = useMemo(() =&gt; {
    return products.filter(p =&gt; p.category === filter);
  }, [products, filter]);

  return filtered.map(p =&gt; &lt;div key={p.id}&gt;{p.name}&lt;/div&gt;);
}</code></pre>
Use <code>useMemo</code> for computationally expensive operations. Don't memoize trivial calculations — the overhead of memoization can outweigh the benefit.`
                },
                {
                    q: "What is useCallback and how does it differ from useMemo?",
                    a: `<code>useCallback</code> memoizes a function reference. <code>useMemo</code> memoizes a computed value. Both recompute when dependencies change.
<pre><code>// useMemo — caches a value
const sortedList = useMemo(() =&gt; items.sort(compareFn), [items]);

// useCallback — caches a function
const handleClick = useCallback((id) =&gt; {
  setSelected(id);
}, []);

// useCallback(fn, deps) is equivalent to useMemo(() =&gt; fn, deps)</code></pre>
Use <code>useCallback</code> when passing callbacks to memoized child components to prevent unnecessary re-renders caused by new function references.`
                },
                {
                    q: "How does React.memo prevent unnecessary re-renders?",
                    a: `<code>React.memo</code> is a higher-order component that skips re-rendering when props haven't changed (shallow comparison).
<pre><code>const ExpensiveList = React.memo(function ExpensiveList({ items, onSelect }) {
  console.log('Rendering list');
  return items.map(item =&gt;
    &lt;div key={item.id} onClick={() =&gt; onSelect(item.id)}&gt;{item.name}&lt;/div&gt;
  );
});

// Parent must stabilize props:
const handleSelect = useCallback((id) =&gt; { /* ... */ }, []);
&lt;ExpensiveList items={items} onSelect={handleSelect} /&gt;</code></pre>
<code>React.memo</code> only works if both value props and function props have stable references. Pair it with <code>useCallback</code> and <code>useMemo</code>.`
                },
                {
                    q: "When should you memoize values or callbacks in React?",
                    a: `Memoize when the computation is expensive, the value is passed to a memoized child, or the reference is used in a dependency array.
<pre><code>// ✅ Worth memoizing — expensive computation
const chart = useMemo(() =&gt; generateChartData(rawData), [rawData]);

// ✅ Worth memoizing — passed to React.memo child
const onClick = useCallback(() =&gt; save(id), [id]);

// ❌ Not worth memoizing — trivial computation
const fullName = useMemo(() =&gt; first + ' ' + last, [first, last]);
// Just do: const fullName = first + ' ' + last;</code></pre>
Premature memoization adds complexity without benefit. Profile first and memoize only where you observe actual performance issues.`
                },
                {
                    q: "What is referential equality and why does it matter in React?",
                    a: `React uses referential equality (<code>===</code>) to determine if props or dependencies have changed. New object or function references trigger re-renders even if the content is identical.
<pre><code>// New object every render — breaks React.memo
&lt;Child style={{ color: 'red' }} /&gt;

// Stable reference — React.memo works
const style = useMemo(() =&gt; ({ color: 'red' }), []);
&lt;Child style={style} /&gt;

// New function every render
&lt;Child onClick={() =&gt; doSomething()} /&gt;
// Stable function
const onClick = useCallback(() =&gt; doSomething(), []);</code></pre>
Understanding referential equality is key to making <code>React.memo</code>, <code>useMemo</code>, <code>useCallback</code>, and <code>useEffect</code> dependency arrays work correctly.`
                },
                {
                    q: "How do you approach performance optimization in React?",
                    a: `Start by profiling with React DevTools Profiler to identify actual bottlenecks before optimizing.
<pre><code>// 1. Identify slow renders with React DevTools Profiler
// 2. Prevent unnecessary re-renders
const MemoChild = React.memo(ChildComponent);

// 3. Memoize expensive computations
const result = useMemo(() =&gt; heavyCalc(data), [data]);

// 4. Stabilize callback references
const handler = useCallback(() =&gt; { /* ... */ }, [dep]);

// 5. Virtualize long lists
import { FixedSizeList } from 'react-window';

// 6. Code-split with React.lazy
const Page = React.lazy(() =&gt; import('./HeavyPage'));</code></pre>
Avoid premature optimization. Measure first, then apply targeted fixes. React is fast by default — most apps need very few manual optimizations.`
                }
            ]
        },
        {
            id: "custom-hooks",
            title: "Custom Hooks",
            icon: "bi-puzzle",
            questions: [
                {
                    q: "What are custom hooks in React and why use them?",
                    a: `Custom hooks are JavaScript functions that start with <code>use</code> and can call other hooks. They extract reusable stateful logic from components.
<pre><code>function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() =&gt; {
    const handle = () =&gt; setIsOnline(navigator.onLine);
    window.addEventListener('online', handle);
    window.addEventListener('offline', handle);
    return () =&gt; {
      window.removeEventListener('online', handle);
      window.removeEventListener('offline', handle);
    };
  }, []);
  return isOnline;
}</code></pre>
Custom hooks share logic, not state. Each component calling the hook gets its own independent copy of the state.`
                },
                {
                    q: "How do you create a useToggle custom hook?",
                    a: `<code>useToggle</code> wraps a boolean state with a function that flips it, simplifying toggle patterns.
<pre><code>function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() =&gt; setValue(v =&gt; !v), []);
  return [value, toggle];
}

// Usage
function Modal() {
  const [isOpen, toggleOpen] = useToggle(false);
  return (
    &lt;&gt;
      &lt;button onClick={toggleOpen}&gt;{isOpen ? 'Close' : 'Open'}&lt;/button&gt;
      {isOpen &amp;&amp; &lt;div className="modal"&gt;Content&lt;/div&gt;}
    &lt;/&gt;
  );
}</code></pre>`
                },
                {
                    q: "How do you create a useFetch custom hook?",
                    a: `<code>useFetch</code> encapsulates data fetching with loading and error states into a reusable hook.
<pre><code>function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    let cancelled = false;
    setLoading(true);
    fetch(url)
      .then(res =&gt; res.json())
      .then(json =&gt; { if (!cancelled) setData(json); })
      .catch(err =&gt; { if (!cancelled) setError(err); })
      .finally(() =&gt; { if (!cancelled) setLoading(false); });
    return () =&gt; { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}</code></pre>
The cancelled flag prevents state updates on unmounted components when the URL changes rapidly.`
                },
                {
                    q: "How do you create a useLocalStorage custom hook?",
                    a: `<code>useLocalStorage</code> syncs state with <code>localStorage</code>, persisting values across page reloads.
<pre><code>function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() =&gt; {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initialValue;
  });

  useEffect(() =&gt; {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
const [theme, setTheme] = useLocalStorage('theme', 'light');</code></pre>
The lazy initializer in <code>useState</code> avoids reading localStorage on every render — it runs only on mount.`
                },
                {
                    q: "How do you create a useDebounce custom hook?",
                    a: `<code>useDebounce</code> delays updating a value until a specified time has passed since the last change.
<pre><code>function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() =&gt; {
    const timer = setTimeout(() =&gt; setDebounced(value), delay);
    return () =&gt; clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// Usage — search input
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() =&gt; {
    if (debouncedQuery) fetchResults(debouncedQuery);
  }, [debouncedQuery]);
}</code></pre>
This avoids firing API calls on every keystroke, improving performance and reducing server load.`
                },
                {
                    q: "What are the rules for creating custom hooks?",
                    a: `Custom hooks must follow the same rules as built-in hooks: start with <code>use</code>, call hooks at the top level, and only call them in React functions.
<pre><code>// ✅ Correct custom hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() =&gt; {
    const handle = () =&gt; setWidth(window.innerWidth);
    window.addEventListener('resize', handle);
    return () =&gt; window.removeEventListener('resize', handle);
  }, []);
  return width;
}

// ❌ Wrong — not prefixed with "use"
function getWindowWidth() { /* hooks inside won't work properly */ }

// ❌ Wrong — conditional hook call
function useData(flag) {
  if (flag) { useState(0); } // breaks hook order
}</code></pre>`
                },
                {
                    q: "How do custom hooks share logic between components?",
                    a: `Custom hooks extract and share stateful logic without sharing the state itself. Each consumer gets its own independent state.
<pre><code>function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () =&gt; setCount(c =&gt; c + 1);
  const decrement = () =&gt; setCount(c =&gt; c - 1);
  const reset = () =&gt; setCount(initial);
  return { count, increment, decrement, reset };
}

// Two independent counters
function App() {
  const counter1 = useCounter(0);
  const counter2 = useCounter(10);
  // counter1 and counter2 have completely separate state
}</code></pre>
This is the key distinction from context or global state — custom hooks reuse behavior, not data.`
                },
                {
                    q: "How do you test custom hooks?",
                    a: `Use <code>@testing-library/react</code>'s <code>renderHook</code> utility to test hooks outside of components.
<pre><code>import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('should increment counter', () =&gt; {
  const { result } = renderHook(() =&gt; useCounter(0));

  expect(result.current.count).toBe(0);

  act(() =&gt; {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});</code></pre>
Wrap state updates in <code>act()</code> to ensure React processes them. <code>renderHook</code> lets you test hooks in isolation without creating wrapper components.`
                },
                {
                    q: "How do you create a useWindowSize custom hook?",
                    a: `<code>useWindowSize</code> tracks the browser window dimensions and updates on resize.
<pre><code>function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() =&gt; {
    const handleResize = () =&gt; {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () =&gt; window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Usage
const { width, height } = useWindowSize();
return width &lt; 768 ? &lt;MobileNav /&gt; : &lt;DesktopNav /&gt;;</code></pre>`
                },
                {
                    q: "How do you create a useEventListener custom hook?",
                    a: `<code>useEventListener</code> attaches an event listener to a target element and cleans up automatically on unmount or dependency change.
<pre><code>function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() =&gt; {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() =&gt; {
    const listener = (event) =&gt; savedHandler.current(event);
    element.addEventListener(eventName, listener);
    return () =&gt; element.removeEventListener(eventName, listener);
  }, [eventName, element]);
}

// Usage
useEventListener('keydown', (e) =&gt; {
  if (e.key === 'Escape') closeModal();
});</code></pre>
The ref pattern ensures the latest handler is always called without needing to re-attach the listener when the handler changes.`
                }
            ]
        },
        {
            id: "higher-order-components",
            title: "Higher-Order Components",
            icon: "bi-layers",
            questions: [
                {
                    q: "What is a Higher-Order Component (HOC) in React?",
                    a: `An HOC is a function that takes a component and returns a new enhanced component with additional props or behavior.
<pre><code>function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    useEffect(() =&gt; {
      console.log('Component rendered:', WrappedComponent.name);
    });
    return &lt;WrappedComponent {...props} /&gt;;
  };
}

const LoggedButton = withLogger(Button);
&lt;LoggedButton label="Click" /&gt;</code></pre>
HOCs follow the pattern <code>const Enhanced = higherOrderComponent(Original)</code>. They are a composition pattern, not part of the React API.`
                },
                {
                    q: "How do you create a basic Higher-Order Component?",
                    a: `Define a function that accepts a component, creates a wrapper component with added logic, and passes through all original props.
<pre><code>function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...rest }) {
    if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
    return &lt;WrappedComponent {...rest} /&gt;;
  };
}

const UserListWithLoading = withLoading(UserList);

// Usage
&lt;UserListWithLoading isLoading={loading} users={users} /&gt;</code></pre>
The HOC intercepts the <code>isLoading</code> prop and either shows a spinner or delegates to the wrapped component with the remaining props.`
                },
                {
                    q: "How would you create a withAuth HOC for protected components?",
                    a: `A <code>withAuth</code> HOC checks authentication and either renders the component or redirects to login.
<pre><code>function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return &lt;Navigate to="/login" /&gt;;
    }

    return &lt;WrappedComponent {...props} /&gt;;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
const ProtectedSettings = withAuth(Settings);

// Usage
&lt;Route path="/dashboard" element={&lt;ProtectedDashboard /&gt;} /&gt;</code></pre>
This centralizes auth logic so each protected component doesn't need to check authentication individually.`
                },
                {
                    q: "What is the difference between HOCs and custom hooks?",
                    a: `HOCs wrap components and inject props. Custom hooks share logic within a component without wrapping. Hooks are the modern preferred approach.
<pre><code>// HOC approach — wraps the component
const EnhancedList = withData(List, '/api/items');
// List receives data as a prop injected by the HOC

// Hook approach — logic inside the component
function List() {
  const { data } = useFetch('/api/items');
  return data.map(item =&gt; &lt;div key={item.id}&gt;{item.name}&lt;/div&gt;);
}</code></pre>
Hooks are more transparent and compose better. HOCs can cause "wrapper hell" and make it harder to trace where props come from. Use hooks for new code.`
                },
                {
                    q: "How do you forward all props through an HOC correctly?",
                    a: `Use the spread operator to pass all props from the HOC wrapper down to the wrapped component. Destructure any HOC-specific props first.
<pre><code>function withTheme(WrappedComponent) {
  return function ThemedComponent(props) {
    const theme = useContext(ThemeContext);
    // Pass all original props plus the new theme prop
    return &lt;WrappedComponent {...props} theme={theme} /&gt;;
  };
}

// All props passed to ThemedButton reach Button
const ThemedButton = withTheme(Button);
&lt;ThemedButton size="lg" onClick={handleClick} /&gt;
// Button receives: { size, onClick, theme }</code></pre>
Always spread props to avoid accidentally swallowing props meant for the wrapped component.`
                },
                {
                    q: "Why should you set displayName on HOC-generated components?",
                    a: `Setting <code>displayName</code> helps identify wrapped components in React DevTools, which otherwise show as <code>Anonymous</code>.
<pre><code>function withData(WrappedComponent) {
  function WithDataComponent(props) {
    // ... data fetching logic
    return &lt;WrappedComponent {...props} /&gt;;
  }

  WithDataComponent.displayName =
    \`WithData(\${WrappedComponent.displayName || WrappedComponent.name || 'Component'})\`;

  return WithDataComponent;
}

// In DevTools: WithData(UserList) instead of Anonymous</code></pre>
This convention makes debugging much easier, especially when multiple HOCs are composed together.`
                },
                {
                    q: "What are common pitfalls when using HOCs?",
                    a: `Common issues include creating HOCs inside render (causing remounts), mutating the original component, and name collisions with injected props.
<pre><code>// ❌ Don't create HOCs inside render — remounts every time
function App() {
  const Enhanced = withLoading(List); // new component each render!
  return &lt;Enhanced /&gt;;
}

// ✅ Create HOCs outside the component
const Enhanced = withLoading(List);
function App() {
  return &lt;Enhanced /&gt;;
}

// ❌ Don't mutate the original component
// WrappedComponent.prototype.render = ... // never do this</code></pre>
Also, static methods are not automatically copied to the HOC wrapper. Use <code>hoist-non-react-statics</code> if needed.`
                },
                {
                    q: "How do you forward refs through an HOC?",
                    a: `Use <code>React.forwardRef</code> to pass refs through HOCs to the wrapped component's DOM element.
<pre><code>function withTooltip(WrappedComponent) {
  const WithTooltip = React.forwardRef((props, ref) =&gt; {
    return (
      &lt;div className="tooltip-wrapper"&gt;
        &lt;WrappedComponent {...props} ref={ref} /&gt;
      &lt;/div&gt;
    );
  });

  WithTooltip.displayName = \`WithTooltip(\${WrappedComponent.displayName || WrappedComponent.name})\`;
  return WithTooltip;
}

const FancyInput = withTooltip(React.forwardRef((props, ref) =&gt; (
  &lt;input ref={ref} {...props} /&gt;
)));</code></pre>
Without <code>forwardRef</code>, the ref would attach to the HOC wrapper rather than the underlying DOM element.`
                },
                {
                    q: "How do you compose multiple HOCs together?",
                    a: `Apply multiple HOCs by nesting calls or using a <code>compose</code> utility for better readability.
<pre><code>// Nested calls (read inside-out)
const Enhanced = withAuth(withLoading(withTheme(UserList)));

// Using a compose utility (read top-to-bottom)
const compose = (...fns) =&gt; (component) =&gt;
  fns.reduceRight((acc, fn) =&gt; fn(acc), component);

const Enhanced = compose(
  withAuth,
  withLoading,
  withTheme
)(UserList);</code></pre>
Each HOC wraps the result of the previous one. With many HOCs, the wrapper hierarchy can become deep — prefer hooks for new code to avoid this complexity.`
                },
                {
                    q: "What is the render props pattern and how does it relate to HOCs?",
                    a: `Render props pass a function as a prop (often <code>children</code> or <code>render</code>) that the component calls to determine what to render. It solves similar problems as HOCs.
<pre><code>// Render prop component
function MouseTracker({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() =&gt; {
    const handle = (e) =&gt; setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () =&gt; window.removeEventListener('mousemove', handle);
  }, []);
  return children(pos);
}

// Usage
&lt;MouseTracker&gt;
  {({ x, y }) =&gt; &lt;p&gt;Mouse: {x}, {y}&lt;/p&gt;}
&lt;/MouseTracker&gt;</code></pre>
Both render props and HOCs share stateful logic. Custom hooks have largely replaced both patterns in modern React code.`
                }
            ]
        }
    ,
        {
            id: "render-props", title: "Render Props & Patterns", icon: "bi-braces",
            questions: [
            { q: "What is the render props pattern?", a: "<p>Render props is a technique where a component receives a function as a prop and calls it to determine what to render, enabling code sharing between components.</p><pre><code>function MouseTracker({ render }) {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n  return (\n    &lt;div onMouseMove={e =&gt; setPos({ x: e.clientX, y: e.clientY })}&gt;\n      {render(pos)}\n    &lt;/div&gt;\n  );\n}\n\n&lt;MouseTracker render={({ x, y }) =&gt; &lt;p&gt;Mouse: {x}, {y}&lt;/p&gt;} /&gt;</code></pre>" },
            { q: "What is the children as a function pattern?", a: "<p>Instead of a named render prop, you can use <code>children</code> as a function:</p><pre><code>&lt;DataFetcher url=\"/api/users\"&gt;\n  {({ data, loading }) =&gt; loading ? &lt;Spinner /&gt; : &lt;UserList users={data} /&gt;}\n&lt;/DataFetcher&gt;</code></pre>" },
            { q: "What is the compound component pattern?", a: "<p>Compound components share implicit state through React Context, letting related components work together:</p><pre><code>function Tabs({ children }) {\n  const [active, setActive] = useState(0);\n  return (\n    &lt;TabsContext.Provider value={{ active, setActive }}&gt;\n      {children}\n    &lt;/TabsContext.Provider&gt;\n  );\n}\n\n&lt;Tabs&gt;\n  &lt;TabList&gt;&lt;Tab&gt;One&lt;/Tab&gt;&lt;Tab&gt;Two&lt;/Tab&gt;&lt;/TabList&gt;\n  &lt;TabPanels&gt;&lt;Panel&gt;Content 1&lt;/Panel&gt;&lt;Panel&gt;Content 2&lt;/Panel&gt;&lt;/TabPanels&gt;\n&lt;/Tabs&gt;</code></pre>" },
            { q: "What is the container/presentational pattern?", a: "<p>Separates business logic (containers) from UI rendering (presentational). Containers fetch data and handle state; presentational components just render UI from props.</p>" },
            { q: "What is the provider pattern?", a: "<p>Uses React Context to provide data to deeply nested components without prop drilling. Often combined with custom hooks for cleaner API.</p><pre><code>const ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  return (\n    &lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;\n      {children}\n    &lt;/ThemeContext.Provider&gt;\n  );\n}\n\nconst useTheme = () =&gt; useContext(ThemeContext);</code></pre>" },
            { q: "What are controlled vs uncontrolled components?", a: "<p><strong>Controlled:</strong> React state controls the value. <strong>Uncontrolled:</strong> DOM controls the value, accessed via refs. Controlled components give you more control over form behavior and validation.</p>" },
            { q: "What is the observer pattern in React?", a: "<p>Components subscribe to an external store and re-render when data changes. Libraries like MobX and Zustand use this. React state management tools implement publish-subscribe patterns.</p>" },
            { q: "What is composition over inheritance in React?", a: "<p>React favors composition (nesting components, passing props, using children) over class inheritance. Components should be composed together rather than extended.</p>" },
            { q: "What is the state reducer pattern?", a: "<p>Allow consumers to control how the internal state changes by accepting a custom reducer:</p><pre><code>function useToggle({ reducer = (state, action) =&gt; action } = {}) {\n  const [on, dispatch] = useReducer(reducer, false);\n  const toggle = () =&gt; dispatch({ type: 'toggle' });\n  return { on, toggle };\n}</code></pre>" },
            { q: "What is the layout component pattern?", a: "<p>Layout components handle common page structure (header, sidebar, footer) and render children in the main content area:</p><pre><code>function DashboardLayout({ children }) {\n  return (\n    &lt;div className=\"dashboard\"&gt;\n      &lt;Sidebar /&gt;\n      &lt;main&gt;{children}&lt;/main&gt;\n      &lt;Footer /&gt;\n    &lt;/div&gt;\n  );\n}</code></pre>" }
            ]
        },
        {
            id: "error-boundaries", title: "Error Boundaries", icon: "bi-exclamation-triangle",
            questions: [
            { q: "What is an error boundary?", a: "<p>Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.</p><pre><code>class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError(error) { return { hasError: true }; }\n  componentDidCatch(error, info) { logError(error, info); }\n  render() {\n    if (this.state.hasError) return &lt;h1&gt;Something went wrong.&lt;/h1&gt;;\n    return this.props.children;\n  }\n}</code></pre>" },
            { q: "Can you create error boundaries with hooks?", a: "<p>No, error boundaries can only be class components because there are no hook equivalents for <code>getDerivedStateFromError</code> and <code>componentDidCatch</code>. However, packages like <code>react-error-boundary</code> provide a convenient wrapper.</p>" },
            { q: "What errors do error boundaries NOT catch?", a: "<ul><li>Event handlers (use try/catch instead)</li><li>Asynchronous code (setTimeout, fetch callbacks)</li><li>Server-side rendering</li><li>Errors thrown in the error boundary itself</li></ul>" },
            { q: "How do you use react-error-boundary library?", a: "<pre><code>import { ErrorBoundary } from 'react-error-boundary';\n\nfunction Fallback({ error, resetErrorBoundary }) {\n  return (\n    &lt;div role=\"alert\"&gt;\n      &lt;p&gt;Error: {error.message}&lt;/p&gt;\n      &lt;button onClick={resetErrorBoundary}&gt;Retry&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}\n\n&lt;ErrorBoundary FallbackComponent={Fallback}&gt;\n  &lt;MyComponent /&gt;\n&lt;/ErrorBoundary&gt;</code></pre>" },
            { q: "What is getDerivedStateFromError?", a: "<p>A static lifecycle method called after a descendant throws an error. It receives the error and returns state updates to render a fallback UI.</p>" },
            { q: "What is componentDidCatch?", a: "<p>Called after an error has been thrown by a descendant. Receives the error and an info object with <code>componentStack</code>. Used for logging errors to a service.</p>" },
            { q: "Where should you place error boundaries?", a: "<p>Place them at strategic points: around the whole app (catch-all), around route components, around feature sections, or around any component likely to fail. Granular boundaries prevent the entire UI from breaking.</p>" },
            { q: "How do you recover from errors?", a: "<p>Use a reset mechanism (key change or reset function) to remount the failed component:</p><pre><code>&lt;ErrorBoundary key={resetKey} FallbackComponent={Fallback}&gt;\n  &lt;FailingComponent /&gt;\n&lt;/ErrorBoundary&gt;</code></pre>" },
            { q: "How do you handle errors in event handlers?", a: "<p>Error boundaries don't catch event handler errors. Use try-catch and state:</p><pre><code>function MyButton() {\n  const [error, setError] = useState(null);\n  const handleClick = () =&gt; {\n    try { riskyOperation(); }\n    catch (e) { setError(e); }\n  };\n  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;\n  return &lt;button onClick={handleClick}&gt;Click&lt;/button&gt;;\n}</code></pre>" },
            { q: "What is the difference between error boundaries and try-catch?", a: "<p>Error boundaries catch errors in the React render cycle (rendering, lifecycle methods, constructors). Try-catch catches errors in imperative code (event handlers, async functions, callbacks). Both are needed for complete error handling.</p>" }
            ]
        },
        {
            id: "refs-useref", title: "Refs & useRef", icon: "bi-cursor",
            questions: [
            { q: "What is useRef and when to use it?", a: "<p><code>useRef</code> returns a mutable ref object with a <code>.current</code> property that persists across re-renders without causing re-renders when changed.</p><pre><code>const inputRef = useRef(null);\nconst handleFocus = () =&gt; inputRef.current.focus();\nreturn &lt;input ref={inputRef} /&gt;;</code></pre>" },
            { q: "What is the difference between useRef and useState?", a: "<p><code>useState</code> triggers re-render when value changes. <code>useRef</code> does NOT trigger re-render. Use useRef for values that need to persist without affecting the UI (timers, previous values, DOM references).</p>" },
            { q: "How do you access a DOM element with refs?", a: "<pre><code>function TextInput() {\n  const inputRef = useRef(null);\n  return (\n    &lt;&gt;\n      &lt;input ref={inputRef} /&gt;\n      &lt;button onClick={() =&gt; inputRef.current.focus()}&gt;Focus&lt;/button&gt;\n    &lt;/&gt;\n  );\n}</code></pre>" },
            { q: "What is forwardRef?", a: "<p><code>forwardRef</code> passes a ref through a component to a child DOM element:</p><pre><code>const FancyInput = forwardRef((props, ref) =&gt; (\n  &lt;input ref={ref} className=\"fancy\" {...props} /&gt;\n));\n\n// Parent\nconst ref = useRef(null);\n&lt;FancyInput ref={ref} /&gt;</code></pre>" },
            { q: "What is useImperativeHandle?", a: "<p><code>useImperativeHandle</code> customizes what ref exposes to parent components:</p><pre><code>const FancyInput = forwardRef((props, ref) =&gt; {\n  const inputRef = useRef();\n  useImperativeHandle(ref, () =&gt; ({\n    focus: () =&gt; inputRef.current.focus(),\n    clear: () =&gt; { inputRef.current.value = ''; }\n  }));\n  return &lt;input ref={inputRef} /&gt;;\n});</code></pre>" },
            { q: "How do you store previous values with useRef?", a: "<pre><code>function usePrevious(value) {\n  const ref = useRef();\n  useEffect(() =&gt; { ref.current = value; });\n  return ref.current;\n}\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const prevCount = usePrevious(count);\n  return &lt;p&gt;Now: {count}, Before: {prevCount}&lt;/p&gt;;\n}</code></pre>" },
            { q: "What are callback refs?", a: "<p>Callback refs receive the DOM element directly as a function argument:</p><pre><code>function MeasureNode() {\n  const [height, setHeight] = useState(0);\n  const measuredRef = useCallback(node =&gt; {\n    if (node) setHeight(node.getBoundingClientRect().height);\n  }, []);\n  return &lt;div ref={measuredRef}&gt;Height: {height}&lt;/div&gt;;\n}</code></pre>" },
            { q: "Can you use multiple refs on one element?", a: "<p>Not directly, but you can use a callback ref that assigns to multiple refs:</p><pre><code>function mergeRefs(...refs) {\n  return (node) =&gt; {\n    refs.forEach(ref =&gt; {\n      if (typeof ref === 'function') ref(node);\n      else if (ref) ref.current = node;\n    });\n  };\n}</code></pre>" },
            { q: "How do you use refs with timers?", a: "<pre><code>function Timer() {\n  const intervalRef = useRef(null);\n  useEffect(() =&gt; {\n    intervalRef.current = setInterval(() =&gt; console.log('tick'), 1000);\n    return () =&gt; clearInterval(intervalRef.current);\n  }, []);\n  const stop = () =&gt; clearInterval(intervalRef.current);\n  return &lt;button onClick={stop}&gt;Stop&lt;/button&gt;;\n}</code></pre>" },
            { q: "When should you NOT use refs?", a: "<p>Avoid refs for things that can be done declaratively. Don't use refs to: conditionally render elements (use state), update text content (use state), manage form values in most cases (use controlled components). Refs are an escape hatch for imperative DOM manipulation.</p>" }
            ]
        },
        {
            id: "portals", title: "Portals", icon: "bi-door-open",
            questions: [
            { q: "What are React Portals?", a: "<p>Portals render children into a DOM node outside the parent component's DOM hierarchy, while keeping them inside the React component tree for events and context.</p><pre><code>import { createPortal } from 'react-dom';\n\nfunction Modal({ children }) {\n  return createPortal(\n    &lt;div className=\"modal\"&gt;{children}&lt;/div&gt;,\n    document.getElementById('modal-root')\n  );\n}</code></pre>" },
            { q: "When should you use portals?", a: "<ul><li>Modals and dialogs</li><li>Tooltips and popovers</li><li>Dropdown menus that need to overflow parents</li><li>Toast notifications</li><li>Any UI that should visually break out of its container</li></ul>" },
            { q: "Do events bubble through portals?", a: "<p>Yes! Even though a portal renders in a different DOM node, events still bubble up through the React tree (not the DOM tree). A click inside a portal will bubble to parent React components.</p>" },
            { q: "Does context work with portals?", a: "<p>Yes, portals are part of the React tree, so they have access to the same context as their parent component in the React hierarchy, regardless of where they render in the DOM.</p>" },
            { q: "How do you create a modal with a portal?", a: "<pre><code>function Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n  return createPortal(\n    &lt;div className=\"overlay\" onClick={onClose}&gt;\n      &lt;div className=\"modal\" onClick={e =&gt; e.stopPropagation()}&gt;\n        {children}\n        &lt;button onClick={onClose}&gt;Close&lt;/button&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;,\n    document.body\n  );\n}</code></pre>" },
            { q: "How do you handle keyboard events in portal modals?", a: "<p>Add an event listener for the Escape key and manage focus trapping:</p><pre><code>useEffect(() =&gt; {\n  const handleEsc = (e) =&gt; { if (e.key === 'Escape') onClose(); };\n  document.addEventListener('keydown', handleEsc);\n  return () =&gt; document.removeEventListener('keydown', handleEsc);\n}, [onClose]);</code></pre>" },
            { q: "What DOM node should portals render into?", a: "<p>Common choices: <code>document.body</code>, a dedicated <code>&lt;div id='portal-root'&gt;</code> in index.html, or dynamically created elements. Avoid rendering into the root app div to prevent layout issues.</p>" },
            { q: "Can you nest portals?", a: "<p>Yes, you can nest portals. Each portal renders independently at its target DOM node. Events still bubble through the React tree, not the DOM tree.</p>" },
            { q: "How do portals affect accessibility?", a: "<p>Portals can break tab order and screen reader flow. You must manage focus (focus trap in modals), add aria attributes (role='dialog', aria-modal, aria-label), and return focus when the portal closes.</p>" },
            { q: "Can you use portals in server-side rendering?", a: "<p>Portals require a DOM node, so they don't work during SSR. Use conditional rendering to only mount portals on the client side with <code>useEffect</code> or check <code>typeof window !== 'undefined'</code>.</p>" }
            ]
        },
        {
            id: "suspense-lazy-loading", title: "Suspense & Lazy Loading", icon: "bi-hourglass-split",
            questions: [
            { q: "What is React.lazy?", a: "<p><code>React.lazy</code> enables component-level code splitting. It takes a function that returns a dynamic import:</p><pre><code>const LazyProfile = React.lazy(() =&gt; import('./Profile'));\n\nfunction App() {\n  return (\n    &lt;Suspense fallback={&lt;Loading /&gt;}&gt;\n      &lt;LazyProfile /&gt;\n    &lt;/Suspense&gt;\n  );\n}</code></pre>" },
            { q: "What is Suspense?", a: "<p>Suspense lets you show a fallback UI while waiting for lazy components or asynchronous data to load. It catches a \"suspended\" state from its children.</p>" },
            { q: "How does code splitting improve performance?", a: "<p>Code splitting breaks the bundle into smaller chunks loaded on demand. Users download only the code they need, reducing initial load time. Each lazy-loaded route or component becomes a separate chunk.</p>" },
            { q: "Can Suspense handle data fetching?", a: "<p>Yes, with React 18+ and frameworks like Next.js or Relay. The component throws a promise during render, Suspense catches it, and shows the fallback until resolved.</p>" },
            { q: "How do you lazy load routes?", a: "<pre><code>const Home = React.lazy(() =&gt; import('./pages/Home'));\nconst About = React.lazy(() =&gt; import('./pages/About'));\n\nfunction App() {\n  return (\n    &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;\n      &lt;Routes&gt;\n        &lt;Route path=\"/\" element={&lt;Home /&gt;} /&gt;\n        &lt;Route path=\"/about\" element={&lt;About /&gt;} /&gt;\n      &lt;/Routes&gt;\n    &lt;/Suspense&gt;\n  );\n}</code></pre>" },
            { q: "What is the startTransition API?", a: "<p><code>startTransition</code> marks updates as non-urgent, letting React keep the UI responsive during expensive re-renders:</p><pre><code>import { startTransition } from 'react';\n\nstartTransition(() =&gt; {\n  setSearchResults(filteredData); // Non-urgent update\n});</code></pre>" },
            { q: "What is useTransition?", a: "<pre><code>const [isPending, startTransition] = useTransition();\n\nconst handleChange = (e) =&gt; {\n  setInput(e.target.value); // Urgent\n  startTransition(() =&gt; {\n    setFilteredList(filter(e.target.value)); // Non-urgent\n  });\n};\n\nreturn isPending ? &lt;Spinner /&gt; : &lt;List items={filteredList} /&gt;;</code></pre>" },
            { q: "Can you nest Suspense boundaries?", a: "<p>Yes! Each Suspense boundary catches suspensions independently. Inner Suspense shows its own fallback while the outer shows for other components:</p><pre><code>&lt;Suspense fallback={&lt;PageSkeleton /&gt;}&gt;\n  &lt;Header /&gt;\n  &lt;Suspense fallback={&lt;PostSkeleton /&gt;}&gt;\n    &lt;Posts /&gt;\n  &lt;/Suspense&gt;\n&lt;/Suspense&gt;</code></pre>" },
            { q: "What are loading and error states with Suspense?", a: "<p>Suspense handles loading states. For errors, wrap with an error boundary:</p><pre><code>&lt;ErrorBoundary fallback={&lt;Error /&gt;}&gt;\n  &lt;Suspense fallback={&lt;Loading /&gt;}&gt;\n    &lt;DataComponent /&gt;\n  &lt;/Suspense&gt;\n&lt;/ErrorBoundary&gt;</code></pre>" },
            { q: "Does React.lazy support named exports?", a: "<p>React.lazy only supports default exports. For named exports, create an intermediate module:</p><pre><code>// MathUtils.js exports { Calculator }\n\n// Calculator.js (wrapper)\nexport { Calculator as default } from './MathUtils';\n\nconst Calculator = React.lazy(() =&gt; import('./Calculator'));</code></pre>" }
            ]
        },
        {
            id: "virtual-dom", title: "Virtual DOM & Reconciliation", icon: "bi-tree",
            questions: [
            { q: "What is the Virtual DOM?", a: "<p>The Virtual DOM is a lightweight JavaScript representation of the real DOM. React creates a virtual tree, and when state changes, it creates a new virtual tree, diffs the two, and applies only the minimum necessary changes to the real DOM. This is faster than directly manipulating the DOM for complex UIs.</p>" },
            { q: "How does reconciliation work?", a: "<p>Reconciliation is React's algorithm for diffing two virtual DOM trees. It uses two heuristics: elements of different types produce different trees (full remount), and developers provide <code>key</code> props to identify stable elements across renders.</p>" },
            { q: "What is React Fiber?", a: "<p>Fiber is React's reconciliation engine (React 16+). It breaks rendering work into incremental units, allowing React to pause, resume, and prioritize updates. This enables features like Suspense, concurrent rendering, and time-slicing.</p>" },
            { q: "Why are keys important in lists?", a: "<p>Keys help React identify which items changed, were added, or removed. Without keys, React re-renders all items. With stable keys, it efficiently reorders, adds, or removes individual items:</p><pre><code>items.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)</code></pre><p>Never use array index as key if the list can reorder.</p>" },
            { q: "What happens when element types differ?", a: "<p>When React encounters different element types at the same position, it tears down the entire old subtree and builds a new one. For example, changing from <code>&lt;div&gt;</code> to <code>&lt;span&gt;</code> unmounts the div and all its children.</p>" },
            { q: "What is batching in React?", a: "<p>React 18 automatically batches all state updates, even inside promises, setTimeout, and event handlers. Multiple setState calls in one event are batched into a single re-render for performance.</p>" },
            { q: "What is concurrent rendering?", a: "<p>Concurrent rendering (React 18+) lets React prepare multiple versions of the UI simultaneously, interrupt rendering for higher-priority updates, and keep the UI responsive during expensive computations.</p>" },
            { q: "How does React handle component updates?", a: "<p>When a component re-renders, React: 1) Calls the component function to get new JSX, 2) Diffs new virtual DOM with previous, 3) Computes minimal DOM changes, 4) Commits changes to the real DOM. Child components re-render if parent re-renders (unless memoized).</p>" },
            { q: "What is the difference between virtual DOM and shadow DOM?", a: "<p><strong>Virtual DOM:</strong> React concept — a JS representation of the DOM for diffing. <strong>Shadow DOM:</strong> Browser API for scoped CSS and DOM encapsulation in Web Components. They are unrelated technologies solving different problems.</p>" },
            { q: "How does React optimize list rendering?", a: "<p>React uses the key prop to match old and new elements. With keys, it can: reorder elements efficiently, preserve component state during reorder, add/remove specific items without re-rendering the entire list. Always use unique, stable IDs as keys.</p>" }
            ]
        },
        {
            id: "event-handling", title: "Event Handling", icon: "bi-mouse",
            questions: [
            { q: "How does event handling work in React?", a: "<p>React uses synthetic events — cross-browser wrappers around native events. Events are named using camelCase and passed as functions:</p><pre><code>function Button() {\n  const handleClick = (e) =&gt; {\n    e.preventDefault();\n    console.log('Clicked!');\n  };\n  return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;\n}</code></pre>" },
            { q: "What are synthetic events?", a: "<p>Synthetic events are React's cross-browser wrapper objects that conform to the W3C spec. They have the same interface as native events (stopPropagation(), preventDefault()) but work identically across browsers. They are pooled for performance.</p>" },
            { q: "How do you pass arguments to event handlers?", a: "<pre><code>// Arrow function (creates new function each render)\n&lt;button onClick={() =&gt; handleDelete(item.id)}&gt;Delete&lt;/button&gt;\n\n// Using data attributes\n&lt;button data-id={item.id} onClick={handleDelete}&gt;Delete&lt;/button&gt;\nconst handleDelete = (e) =&gt; {\n  const id = e.currentTarget.dataset.id;\n};</code></pre>" },
            { q: "What is event delegation in React?", a: "<p>React uses event delegation by default — it attaches a single event listener to the root DOM container rather than to individual elements. When an event fires, React determines which component it belongs to using its internal mapping. This is more memory-efficient.</p>" },
            { q: "How do you prevent default behavior?", a: "<p>Call <code>e.preventDefault()</code> on the synthetic event:</p><pre><code>function Form() {\n  const handleSubmit = (e) =&gt; {\n    e.preventDefault();\n    // Handle form data\n  };\n  return &lt;form onSubmit={handleSubmit}&gt;...&lt;/form&gt;;\n}</code></pre>" },
            { q: "How do you handle keyboard events?", a: "<pre><code>function SearchInput() {\n  const handleKeyDown = (e) =&gt; {\n    if (e.key === 'Enter') {\n      performSearch();\n    }\n    if (e.key === 'Escape') {\n      clearInput();\n    }\n  };\n  return &lt;input onKeyDown={handleKeyDown} /&gt;;\n}</code></pre>" },
            { q: "What is the difference between onChange and onInput?", a: "<p>In React, <code>onChange</code> fires on every change (mimics the native <code>input</code> event). In native HTML, <code>onchange</code> only fires on blur. React's onChange is the preferred way to handle input changes.</p>" },
            { q: "How do you handle events in lists efficiently?", a: "<p>Instead of attaching handlers to each item, use event delegation on the parent:</p><pre><code>function List({ items, onDelete }) {\n  const handleClick = (e) =&gt; {\n    const id = e.target.closest('[data-id]')?.dataset.id;\n    if (id) onDelete(id);\n  };\n  return (\n    &lt;ul onClick={handleClick}&gt;\n      {items.map(item =&gt; (\n        &lt;li key={item.id} data-id={item.id}&gt;{item.name} &lt;button&gt;X&lt;/button&gt;&lt;/li&gt;\n      ))}\n    &lt;/ul&gt;\n  );\n}</code></pre>" },
            { q: "How do you handle window or document events?", a: "<pre><code>useEffect(() =&gt; {\n  const handleScroll = () =&gt; setScrollY(window.scrollY);\n  window.addEventListener('scroll', handleScroll);\n  return () =&gt; window.removeEventListener('scroll', handleScroll);\n}, []);</code></pre>" },
            { q: "What is stopPropagation in React?", a: "<p><code>e.stopPropagation()</code> prevents the event from bubbling up to parent elements in both the React tree and the DOM. Useful when nested clickable elements should not trigger parent handlers.</p>" }
            ]
        },
        {
            id: "performance-optimization", title: "Performance Optimization", icon: "bi-speedometer2",
            questions: [
            { q: "What is React.memo?", a: "<p><code>React.memo</code> is a higher-order component that memoizes the result. It only re-renders if props change (shallow comparison):</p><pre><code>const ExpensiveList = React.memo(function List({ items }) {\n  return items.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;);\n});</code></pre>" },
            { q: "What is useMemo?", a: "<p><code>useMemo</code> memoizes expensive computations:</p><pre><code>const sortedItems = useMemo(() =&gt; {\n  return items.sort((a, b) =&gt; a.name.localeCompare(b.name));\n}, [items]);</code></pre><p>Only recalculates when <code>items</code> changes.</p>" },
            { q: "What is useCallback?", a: "<p><code>useCallback</code> memoizes function references to prevent unnecessary re-renders of child components:</p><pre><code>const handleDelete = useCallback((id) =&gt; {\n  setItems(prev =&gt; prev.filter(item =&gt; item.id !== id));\n}, []);</code></pre>" },
            { q: "When should you NOT memoize?", a: "<ul><li>Simple, fast computations (memoization has overhead)</li><li>Values that change on every render anyway</li><li>Components that are cheap to render</li><li>When it makes code harder to read for minimal gain</li></ul><p>Profile first, optimize second.</p>" },
            { q: "How do you profile React performance?", a: "<p>Use React DevTools Profiler to record renders and identify slow components. Also use <code>React.Profiler</code> component in code:</p><pre><code>&lt;Profiler id=\"sidebar\" onRender={(id, phase, actualDuration) =&gt; {\n  console.log(id, phase, actualDuration);\n}}&gt;\n  &lt;Sidebar /&gt;\n&lt;/Profiler&gt;</code></pre>" },
            { q: "What causes unnecessary re-renders?", a: "<ul><li>Parent re-renders (all children re-render)</li><li>Creating new objects/arrays in render (breaks shallow comparison)</li><li>Inline function definitions as props</li><li>Context value changes (all consumers re-render)</li><li>State updates that don't change the value</li></ul>" },
            { q: "How do you optimize context to avoid re-renders?", a: "<p>Split context by update frequency, memoize the value object, or use state management libraries:</p><pre><code>const value = useMemo(() =&gt; ({\n  user, theme\n}), [user, theme]);\n\nreturn &lt;AppContext.Provider value={value}&gt;...&lt;/AppContext.Provider&gt;;</code></pre>" },
            { q: "What is windowing/virtualization?", a: "<p>Render only visible items in large lists using libraries like <code>react-window</code> or <code>react-virtuoso</code>:</p><pre><code>import { FixedSizeList } from 'react-window';\n\n&lt;FixedSizeList height={400} itemCount={10000} itemSize={35}&gt;\n  {({ index, style }) =&gt; (\n    &lt;div style={style}&gt;Row {index}&lt;/div&gt;\n  )}\n&lt;/FixedSizeList&gt;</code></pre>" },
            { q: "How do you optimize images in React?", a: "<p>Use lazy loading, responsive images, next-gen formats (WebP), and proper sizing:</p><pre><code>&lt;img\n  src=\"photo.webp\"\n  loading=\"lazy\"\n  width={400}\n  height={300}\n  alt=\"Description\"\n/&gt;</code></pre>" },
            { q: "What is code splitting best practices?", a: "<p>Split at: route level (most common), component level (heavy components), library level (import only what you need). Use dynamic <code>import()</code>, React.lazy, and analyze bundle with source-map-explorer.</p>" }
            ]
        },
        {
            id: "testing", title: "Testing", icon: "bi-bug",
            questions: [
            { q: "How do you test a React component?", a: "<pre><code>import { render, screen } from '@testing-library/react';\n\ntest('renders greeting', () =&gt; {\n  render(&lt;Hello name=\"World\" /&gt;);\n  expect(screen.getByText('Hello, World!')).toBeInTheDocument();\n});</code></pre>" },
            { q: "What is React Testing Library philosophy?", a: "<p>Test components the way users interact with them. Query by accessible roles, text, and labels — not by class names or implementation details. If it's not visible to users, don't test it.</p>" },
            { q: "How do you test user interactions?", a: "<pre><code>import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ntest('increments counter', async () =&gt; {\n  render(&lt;Counter /&gt;);\n  await userEvent.click(screen.getByRole('button', { name: /increment/i }));\n  expect(screen.getByText('Count: 1')).toBeInTheDocument();\n});</code></pre>" },
            { q: "How do you test async operations?", a: "<pre><code>test('loads user data', async () =&gt; {\n  render(&lt;UserProfile id=\"1\" /&gt;);\n  expect(screen.getByText('Loading...')).toBeInTheDocument();\n  await screen.findByText('John Doe'); // Waits for element\n  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();\n});</code></pre>" },
            { q: "How do you mock API calls in tests?", a: "<pre><code>import { rest } from 'msw';\nimport { setupServer } from 'msw/node';\n\nconst server = setupServer(\n  rest.get('/api/users', (req, res, ctx) =&gt; {\n    return res(ctx.json([{ id: 1, name: 'John' }]));\n  })\n);\n\nbeforeAll(() =&gt; server.listen());\nafterEach(() =&gt; server.resetHandlers());\nafterAll(() =&gt; server.close());</code></pre>" },
            { q: "How do you test custom hooks?", a: "<pre><code>import { renderHook, act } from '@testing-library/react';\n\ntest('useCounter hook', () =&gt; {\n  const { result } = renderHook(() =&gt; useCounter());\n  expect(result.current.count).toBe(0);\n  act(() =&gt; result.current.increment());\n  expect(result.current.count).toBe(1);\n});</code></pre>" },
            { q: "How do you test components with context?", a: "<pre><code>function renderWithProviders(ui) {\n  return render(\n    &lt;ThemeProvider&gt;\n      &lt;AuthProvider&gt;\n        {ui}\n      &lt;/AuthProvider&gt;\n    &lt;/ThemeProvider&gt;\n  );\n}\n\ntest('shows user name', () =&gt; {\n  renderWithProviders(&lt;UserInfo /&gt;);\n  expect(screen.getByText('John')).toBeInTheDocument();\n});</code></pre>" },
            { q: "What are common Testing Library queries?", a: "<ul><li><code>getByRole</code> — by ARIA role (preferred)</li><li><code>getByText</code> — by visible text</li><li><code>getByLabelText</code> — by form label</li><li><code>getByPlaceholderText</code> — by placeholder</li><li><code>getByTestId</code> — by data-testid (last resort)</li><li><code>queryBy*</code> — returns null if not found</li><li><code>findBy*</code> — async, waits for element</li></ul>" },
            { q: "How do you test form submission?", a: "<pre><code>test('submits form data', async () =&gt; {\n  const onSubmit = jest.fn();\n  render(&lt;LoginForm onSubmit={onSubmit} /&gt;);\n  await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');\n  await userEvent.type(screen.getByLabelText('Password'), 'secret');\n  await userEvent.click(screen.getByRole('button', { name: /submit/i }));\n  expect(onSubmit).toHaveBeenCalledWith({ email: 'test@example.com', password: 'secret' });\n});</code></pre>" },
            { q: "What is snapshot testing?", a: "<p>Snapshot testing captures rendered component output and compares it to a stored reference:</p><pre><code>test('matches snapshot', () =&gt; {\n  const { asFragment } = render(&lt;Button label=\"Click\" /&gt;);\n  expect(asFragment()).toMatchSnapshot();\n});</code></pre><p>Use sparingly — snapshots break easily and provide less insight than specific assertions.</p>" }
            ]
        },
        {
            id: "server-components-ssr", title: "Server Components & SSR", icon: "bi-server",
            questions: [
            { q: "What is Server-Side Rendering (SSR)?", a: "<p>SSR renders React components to HTML on the server and sends the fully rendered page to the browser. Benefits: faster first paint, better SEO, works without JavaScript. The browser then hydrates the HTML with React to make it interactive.</p>" },
            { q: "What are React Server Components (RSC)?", a: "<p>RSC (React 18+) are components that run exclusively on the server. They can directly access databases, file systems, and backend services. They send rendered HTML to the client — no JavaScript bundle for these components.</p>" },
            { q: "What is hydration?", a: "<p>Hydration is the process where React attaches event handlers and state to server-rendered HTML, making it interactive. React reuses the existing DOM rather than replacing it.</p>" },
            { q: "What is the difference between SSR and SSG?", a: "<p><strong>SSR (Server-Side Rendering):</strong> HTML generated on each request. Best for dynamic content. <strong>SSG (Static Site Generation):</strong> HTML generated at build time. Best for content that doesn't change frequently. SSG is faster since pages are pre-built.</p>" },
            { q: "What is streaming SSR?", a: "<p>Streaming SSR (React 18) sends HTML to the browser in chunks as components render, instead of waiting for the entire page. Combined with Suspense, fast parts appear immediately while slow parts load.</p>" },
            { q: "What is the 'use client' directive?", a: "<p>In React Server Components architecture, <code>'use client'</code> marks a component as a Client Component that runs in the browser:</p><pre><code>'use client';\n\nimport { useState } from 'react';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n  return &lt;button onClick={() =&gt; setCount(c + 1)}&gt;{count}&lt;/button&gt;;\n}</code></pre>" },
            { q: "What is the 'use server' directive?", a: "<p><code>'use server'</code> marks a function as a Server Action that can be called from the client:</p><pre><code>'use server';\n\nexport async function saveUser(formData) {\n  const name = formData.get('name');\n  await db.users.create({ name });\n}</code></pre>" },
            { q: "What is ISR (Incremental Static Regeneration)?", a: "<p>ISR (Next.js feature) regenerates static pages in the background after a specified time interval. Pages are served statically but updated periodically without full rebuild.</p>" },
            { q: "What can Server Components NOT do?", a: "<ul><li>Use hooks (useState, useEffect, etc.)</li><li>Add event handlers (onClick, onChange)</li><li>Use browser APIs (window, document)</li><li>Maintain client-side state</li></ul><p>For interactivity, use Client Components with 'use client'.</p>" },
            { q: "How does Next.js implement RSC?", a: "<p>In Next.js App Router, all components are Server Components by default. Add <code>'use client'</code> at the top of files that need interactivity. Server Components can import Client Components but not vice versa. Data fetching happens directly in Server Components with async/await.</p>" }
            ]
        }
]
};
