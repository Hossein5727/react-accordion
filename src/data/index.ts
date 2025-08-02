export const accordionList = [
  {
    id: 1,
    title: "Getting Started with React",
    content: `React is a powerful JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular frontend frameworks.

Key concepts to understand:
• Components: Reusable UI building blocks
• JSX: JavaScript syntax extension for writing HTML-like code
• State: Data that can change over time
• Props: Data passed from parent to child components
• Virtual DOM: Efficient rendering mechanism

Getting started is simple - just create a new project using Create React App or Vite, and you'll be building interactive UIs in no time!`,
  },
  {
    id: 2,
    title: "Advanced TypeScript Features",
    content: `TypeScript extends JavaScript with static typing, making your code more reliable and maintainable.

Advanced features include:
• Generics: Reusable components that work with multiple types
• Union Types: Variables that can hold multiple types
• Intersection Types: Combining multiple types
• Decorators: Metadata programming
• Namespaces: Logical grouping of related code
• Module augmentation: Extending existing modules

TypeScript's type system helps catch errors at compile time, reducing runtime bugs and improving developer experience. The compiler provides excellent IntelliSense support, making development faster and more enjoyable.`,
  },
  {
    id: 3,
    title: "Modern CSS with Tailwind",
    content: `Tailwind CSS is a utility-first CSS framework that makes styling faster and more consistent.

Benefits of Tailwind:
• Rapid development with utility classes
• Consistent design system
• Responsive design out of the box
• Dark mode support
• Customizable configuration
• Small bundle size with PurgeCSS

Example usage:
<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</div>

Tailwind's approach eliminates the need to write custom CSS for most use cases, while still allowing custom styles when needed.`,
  },
  {
    id: 4,
    title: "State Management Best Practices",
    content: `Effective state management is crucial for building scalable React applications.

Popular solutions:
• useState: For local component state
• useReducer: For complex state logic
• Context API: For sharing state across components
• Redux Toolkit: For global state management
• Zustand: Lightweight state management
• React Query: For server state management

Best practices:
1. Keep state as local as possible
2. Use appropriate state management for the use case
3. Avoid prop drilling with Context or state management libraries
4. Normalize complex state structures
5. Use immutable updates to prevent bugs

Remember: Start simple with useState, and only add complexity when needed!`,
  },
  {
    id: 5,
    title: "Performance Optimization Techniques",
    content: `Optimizing React applications is essential for providing a smooth user experience.

Key optimization techniques:
• React.memo: Prevent unnecessary re-renders
• useMemo: Memoize expensive calculations
• useCallback: Memoize functions
• Code splitting with React.lazy
• Virtual scrolling for large lists
• Image optimization and lazy loading
• Bundle analysis and tree shaking

Performance tips:
1. Use React DevTools Profiler to identify bottlenecks
2. Implement proper key props in lists
3. Avoid creating objects/functions in render
4. Use production builds for testing performance
5. Consider using Web Workers for heavy computations

Remember: Measure first, optimize second!`,
  },
  {
    id: 6,
    title: "Testing Strategies for React Apps",
    content: `Comprehensive testing ensures your React application works correctly and maintains quality over time.

Testing pyramid:
• Unit tests: Test individual components and functions
• Integration tests: Test component interactions
• E2E tests: Test complete user workflows

Popular testing tools:
• Jest: Testing framework
• React Testing Library: Component testing utilities
• Cypress: End-to-end testing
• Playwright: Cross-browser testing
• MSW: API mocking

Testing best practices:
1. Test user behavior, not implementation details
2. Use meaningful test descriptions
3. Keep tests simple and focused
4. Mock external dependencies `,
  },
];
