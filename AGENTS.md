# AGENTS.md - Development Guidelines for PortfolioDEV

This file contains essential information for AI agents working on this Astro + React portfolio project.

## Build & Development Commands

### Core Commands
- `pnpm install` - Install all dependencies
- `pnpm run dev` - Start development server on localhost:4321
- `pnpm run build` - Build production bundle
- `pnpm run preview` - Preview production build locally
- `pnpm astro [command]` - Run any Astro CLI command

### Testing Commands
This project currently does not have a dedicated test setup. To add testing:
1. Install preferred testing framework (vitest, jest, etc.)
2. Add test scripts to package.json
3. Create test files following project conventions

## Project Architecture

### Tech Stack
- **Framework**: Astro 5.16.15 with React integration
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Motion library for React components
- **Icons**: Custom Astro components for SVG icons
- **Package Manager**: pnpm

### Directory Structure
```
src/
├── components/          # React (.tsx) and Astro (.astro) components
├── components/ui/       # Reusable UI components (shadcn/ui style)
├── components/animate-ui/ # Animated UI components
├── icons/              # SVG icon components (.astro)
├── layouts/            # Astro layout components
├── pages/              # Astro page components
├── lib/                # Utility functions (TypeScript)
└── styles/             # Global styles and Tailwind config
```

## Code Style Guidelines

### Import Patterns
- Use `@/*` path aliases for src imports (configured in tsconfig.json)
- Import React components with default exports: `import Component from '@/components/Component'`
- Import utilities: `import { cn } from '@/lib/utils'`
- Astro components: use relative imports within same directory
- Always group imports: external libs → internal modules → type imports

### File Naming
- Astro components: PascalCase with `.astro` extension
- React components: PascalCase with `.tsx` extension
- Utility files: camelCase with `.ts` extension
- Icon components: lowercase, descriptive names with `.astro`

### TypeScript Patterns
- Use strict mode configuration
- Type props interfaces for all components
- Export types when extending component functionality
- Use `React.ComponentProps<'div'> &` for extending HTML element props
- Use `type` instead of `interface` for simple type definitions

### Component Structure

#### Astro Components
```astro
---
import Component from '@/components/Component';
import '../styles/global.css';
---

<Layout>
  <Component />
</Layout>

<style>
  /* Component-specific styles */
</style>
```

#### React Components
```tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Component({
  className,
  children,
  ...props
}: ComponentProps) {
  return (
    <div className={cn('base-classes', className)} {...props}>
      {children}
    </div>
  );
}
```

### Styling Guidelines

#### Tailwind CSS Usage
- Use `cn()` utility for conditional classes and merging
- Follow the component prop pattern: `className?: string`
- Use design tokens defined in global.css for colors
- Leverage custom utility classes for complex animations

#### Custom CSS
- Scoped styles in Astro components using `<style>` blocks
- Use CSS custom properties for dynamic values
- Follow mobile-first responsive design
- Implement smooth animations with CSS transitions

### Animation Patterns
- Use Motion library for React component animations
- Implement hover states with CSS transitions for better performance
- Use keyframes for complex animations in Astro components
- Follow accessibility guidelines (respect `prefers-reduced-motion`)

### Error Handling
- Use TypeScript to catch type errors at compile time
- Implement proper error boundaries for React components
- Use optional chaining for safe property access
- Validate props in component interfaces

### Accessibility
- Use semantic HTML5 elements
- Implement proper ARIA labels where needed
- Ensure keyboard navigation support
- Maintain color contrast ratios
- Provide focus indicators

### Performance Optimizations
- Use Astro's island architecture for optimal hydration
- Implement lazy loading for heavy components
- Optimize images and assets
- Use `client:load`, `client:idle`, or `client:visible` directives appropriately
- Minimize bundle size through tree shaking

### Component Patterns

#### Icon Components
```astro
<svg viewBox="0 0 24 24" {...Astro.props}>
  <!-- SVG content -->
</svg>
```

#### Background/Animated Components
- Use `data-slot` attributes for better component targeting
- Implement proper cleanup for animations
- Use React hooks for state management
- Export types for component props

### Git Workflow
- Use descriptive commit messages
- Ensure code passes TypeScript compilation before commits
- Run build process to verify production readiness
- Keep PRs focused and reviewable

## Development Best Practices

### Before Making Changes
1. Run `pnpm run dev` to start development server
2. Check existing components for similar patterns
3. Follow the established naming conventions
4. Use TypeScript for all new components

### When Adding Components
1. Check if similar component exists in `src/components/`
2. Use consistent import patterns with `@/` aliases
3. Include proper TypeScript typing
4. Add responsive design considerations
5. Test on different screen sizes

### When Modifying Styles
1. Prefer Tailwind utilities over custom CSS
2. Use design tokens from `global.css`
3. Test in both light and dark themes
4. Ensure animations don't cause performance issues

## Notes for AI Agents

- This is a Spanish-language portfolio site (maintain language consistency)
- The project uses pnpm as the package manager
- No existing test framework - consider adding before implementing tests
- The site uses glassmorphism and modern web design patterns
- Icons are implemented as Astro components, not external libraries
- The build process is handled by Astro with Vite under the hood
- Custom animations use both CSS and Motion library depending on component type