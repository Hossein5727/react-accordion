export const accordionList = [
  {
    id: 1,
    title: "Getting Started with React",
    content: (
      <div>
        <p>
          React is a powerful JavaScript library for building user interfaces.
          It was developed by Facebook and has become one of the most popular
          frontend frameworks.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Key concepts to understand:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Components:</strong> Reusable UI building blocks
          </li>
          <li>
            <strong>JSX:</strong> JavaScript syntax extension for writing
            HTML-like code
          </li>
          <li>
            <strong>State:</strong> Data that can change over time
          </li>
          <li>
            <strong>Props:</strong> Data passed from parent to child components
          </li>
          <li>
            <strong>Virtual DOM:</strong> Efficient rendering mechanism
          </li>
        </ul>

        <p className="mt-4">
          Getting started is simple - just create a new project using Create
          React App or Vite, and you'll be building interactive UIs in no time!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Advanced TypeScript Features",
    content: (
      <div>
        <p>
          TypeScript extends JavaScript with static typing, making your code
          more reliable and maintainable.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Advanced features include:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Generics:</strong> Reusable components that work with
            multiple types
          </li>
          <li>
            <strong>Union Types:</strong> Variables that can hold multiple types
          </li>
          <li>
            <strong>Intersection Types:</strong> Combining multiple types
          </li>
          <li>
            <strong>Decorators:</strong> Metadata programming
          </li>
          <li>
            <strong>Namespaces:</strong> Logical grouping of related code
          </li>
          <li>
            <strong>Module augmentation:</strong> Extending existing modules
          </li>
        </ul>

        <p className="mt-4">
          TypeScript's type system helps catch errors at compile time, reducing
          runtime bugs and improving developer experience. The compiler provides
          excellent IntelliSense support, making development faster and more
          enjoyable.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Modern CSS with Tailwind",
    content: (
      <div>
        <p>
          Tailwind CSS is a utility-first CSS framework that makes styling
          faster and more consistent.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Benefits of Tailwind:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Rapid development with utility classes</li>
          <li>Consistent design system</li>
          <li>Responsive design out of the box</li>
          <li>Dark mode support</li>
          <li>Customizable configuration</li>
          <li>Small bundle size with PurgeCSS</li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">Example usage:</h4>
        <div className="bg-gray-100 p-3 rounded-md my-3">
          <code className="text-sm">
            {`<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</div>`}
          </code>
        </div>

        <p>
          Tailwind's approach eliminates the need to write custom CSS for most
          use cases, while still allowing custom styles when needed.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "State Management Best Practices",
    content: (
      <div>
        <p>
          Effective state management is crucial for building scalable React
          applications.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Popular solutions:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>useState:</strong> For local component state
          </li>
          <li>
            <strong>useReducer:</strong> For complex state logic
          </li>
          <li>
            <strong>Context API:</strong> For sharing state across components
          </li>
          <li>
            <strong>Redux Toolkit:</strong> For global state management
          </li>
          <li>
            <strong>Zustand:</strong> Lightweight state management
          </li>
          <li>
            <strong>React Query:</strong> For server state management
          </li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">Best practices:</h4>
        <ol className="list-decimal list-inside space-y-1">
          <li>Keep state as local as possible</li>
          <li>Use appropriate state management for the use case</li>
          <li>
            Avoid prop drilling with Context or state management libraries
          </li>
          <li>Normalize complex state structures</li>
          <li>Use immutable updates to prevent bugs</li>
        </ol>

        <p className="mt-4">
          <strong>Remember:</strong> Start simple with useState, and only add
          complexity when needed!
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Performance Optimization Techniques",
    content: (
      <div>
        <p>
          Optimizing React applications is essential for providing a smooth user
          experience.
        </p>

        <h4 className="font-semibold mt-4 mb-2">
          Key optimization techniques:
        </h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>React.memo:</strong> Prevent unnecessary re-renders
          </li>
          <li>
            <strong>useMemo:</strong> Memoize expensive calculations
          </li>
          <li>
            <strong>useCallback:</strong> Memoize functions
          </li>
          <li>
            <strong>Code splitting</strong> with React.lazy
          </li>
          <li>
            <strong>Virtual scrolling</strong> for large lists
          </li>
          <li>
            <strong>Image optimization</strong> and lazy loading
          </li>
          <li>
            <strong>Bundle analysis</strong> and tree shaking
          </li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">Performance tips:</h4>
        <ol className="list-decimal list-inside space-y-1">
          <li>Use React DevTools Profiler to identify bottlenecks</li>
          <li>Implement proper key props in lists</li>
          <li>Avoid creating objects/functions in render</li>
          <li>Use production builds for testing performance</li>
          <li>Consider using Web Workers for heavy computations</li>
        </ol>

        <p className="mt-4">
          <strong>Remember:</strong> Measure first, optimize second!
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Testing Strategies for React Apps",
    content: (
      <div>
        <p>
          Comprehensive testing ensures your React application works correctly
          and maintains quality over time.
        </p>

        <h4 className="font-semibold mt-4 mb-2">Testing pyramid:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Unit tests:</strong> Test individual components and
            functions
          </li>
          <li>
            <strong>Integration tests:</strong> Test component interactions
          </li>
          <li>
            <strong>E2E tests:</strong> Test complete user workflows
          </li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">Popular testing tools:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Jest:</strong> Testing framework
          </li>
          <li>
            <strong>React Testing Library:</strong> Component testing utilities
          </li>
          <li>
            <strong>Cypress:</strong> End-to-end testing
          </li>
          <li>
            <strong>Playwright:</strong> Cross-browser testing
          </li>
          <li>
            <strong>MSW:</strong> API mocking
          </li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">Testing best practices:</h4>
        <ol className="list-decimal list-inside space-y-1">
          <li>Test user behavior, not implementation details</li>
          <li>Use meaningful test descriptions</li>
          <li>Keep tests simple and focused</li>
          <li>Mock external dependencies</li>
        </ol>
      </div>
    ),
  },
];
