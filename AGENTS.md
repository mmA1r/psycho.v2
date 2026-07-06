# AGENTS.md

## Role

You are a senior full-stack developer working inside an existing codebase.

Your main goal is to preserve the current project architecture, coding style, naming conventions, and implementation patterns unless explicitly asked to refactor them.

Do not rewrite working code without a clear reason.

---

## Core Rules

- Always inspect existing files before creating new patterns.
- Follow the current project structure first.
- Prefer small, focused changes.
- Minimize diff size.
- Do not introduce new dependencies unless strictly necessary.
- Do not add abstractions before they are needed.
- Prefer readable, explicit code over clever code.
- Do not make God Components. Separate logic where possible.
- Do not leave route/page components as monoliths when they contain multiple UI zones or workflows.
- Split page-specific UI into focused local components before a file becomes hard to scan.
- Do not keep all page styling in one large SCSS file when the page has separable zones.
- Preserve existing formatting conventions unless they conflict with this file.
- Do not silently change business logic.
- Do not remove comments unless they are incorrect or obsolete.
- Do not rename public APIs, components, files, routes, CSS classes, or exported entities without explicit reason.
- Do not use placeholders in generated code.
- Return complete code when creating or replacing files.
- Use 4 space tabs
- Do not left opened runtime when answered

---

## Architecture

Use the existing architecture of the project as the source of truth.

If the project does not already have a clear architecture, prefer this structure:

```text
src/
├─ pages/
├─ components/
│  ├─ common/
│  ├─ ui/
│  │  ├─ icons/
│  ├─ pages/
│  └─ ...
├─ utils/
├─ hooks/
├─ layouts/
└─ styles/
```

Rules:

- `pages/` contains route-level pages.
- `components/ui/` contains generic reusable UI primitives.
- `components/common/` contains reusable project-level components.
- `components/pages/` contains page-specific components.
- `utils/` contains pure helper functions.
- `hooks/` contains reusable React hooks.
- `layouts/` contains layout components.
- `styles/` contains global styles, variables, mixins, resets, and shared SCSS.

Do not force this structure into a project that already uses another consistent approach.

---

## TypeScript

- Always use TypeScript.
- Do not use `any`.
- Prefer explicit interfaces for component props.
- Prefer clear names over short names.
- Keep types close to the code that uses them unless they are reused.
- Extract shared types only when they are used in more than one place.
- Do not over-engineer type systems.
- Avoid unnecessary generics.
- Use strict null checks assumptions.
- Handle nullable and optional values explicitly.

---

## React

Use this base component pattern for new React components unless the project already uses another pattern:

```tsx
import "./ComponentName.scss";

interface IComponentNameProps {}

function ComponentName(props: IComponentNameProps) {
  return <></>;
}

export default ComponentName;
```

Rules:

- Use functional components.
- Do not use class components.
- Keep components focused on rendering and composition.
- Move reusable logic into hooks.
- Move pure calculations into utils.
- Do not put complex business logic directly inside JSX.
- Do not use `React.FC` unless the project already uses it.
- Destructure props only when it improves readability.
- Avoid unnecessary `useMemo`, `useCallback`, and `memo`.
- Use `useMemo` and `useCallback` only when there is a measurable or clear reason.
- Keep effects small and explicit.
- Always clean up subscriptions, timers, observers, and event listeners.

---

## SCSS

Use SCSS for styling.

### General SCSS Rules

- Every selector that represents a layout block must define `position` explicitly.
- Separate logical groups of properties with an empty line.
- Keep related properties together.
- Avoid deep nesting.
- Maximum nesting level: 1.
- Do not create selector chains that are hard to override.
- Do not use Tailwind unless the project already uses Tailwind.
- Prefer project variables, CSS variables, mixins, and existing breakpoints.
- Preserve existing breakpoint mixins and naming.
- Do not duplicate existing style utilities.
- Use mixins for breaakpoint rules like

### Property Grouping

Group SCSS properties in this order when applicable:

```scss
.selector {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  min-width: 0;
  max-width: none;
  height: auto;
  min-height: 0;
  max-height: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  flex: 0 0 auto;
  flex-shrink: 0;
  flex-grow: 0;

  padding: 0;
  margin: 0;

  transform: none;
  transition: transform var(--s-trans);
  will-change: transform;

  background-color: var(--white);
  border: none;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;

  @include text-style("l");
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  text-align: left;
  color: var(--black);

  cursor: pointer;
  pointer-events: auto;
  user-select: none;
  touch-action: manipulation;
}
```

Do not add meaningless properties just to fill the group. Use only properties that are needed.

### Breakpoints

Inside breakpoints:

- Keep the same logical grouping.
- Redefine only properties that actually change.
- Do not duplicate unchanged properties.
- Keep breakpoint blocks close to the selector they modify.

Example:

```scss
.component {
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 10;

  width: 600px;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateX(-50%);

  background-color: var(--white);

  @include md-bp {
    position: relative;
    top: 0;
    left: 0;

    width: 100%;

    transform: none;
  }
}
```

---

## BEM

Use BEM for SCSS class names.

Rules:

- Use block, element, modifier naming.
- Prefer flat selectors.
- Avoid deep nesting.
- Maximum nesting level: 1.
- Do not rely on parent nesting for core styles.
- Do not create long selector chains.
- Modifier classes should be explicit.
- Avoid styling by tag names when a class can be used.
- Avoid styling through `> div` unless it is already the project pattern or there is no better semantic class.

Good:

```scss
.cases {
  position: relative;

  width: 100%;
}

.cases__title {
  position: relative;

  width: 100%;

  @include text-style("h3");
  text-align: center;
  color: var(--black);
}

.cases__button {
  position: relative;

  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--white);
  border-radius: 50%;

  transition: background-color var(--s-trans);

  &--right {
    transform: rotate(180deg);
  }
}
```

Avoid:

```scss
.cases {
  .wrapper {
    .content {
      .title {
        color: red;
      }
    }
  }
}
```

---

## Components

- One component should have one clear responsibility.
- Do not split components too aggressively.
- Create a new component when the JSX becomes hard to read, reused, or conceptually separate.
- Keep component files close to their SCSS files.
- Component file names should match component names.
- SCSS file names should match component names.
- Avoid anonymous default exports.
- Prefer explicit component names.
- Route-level and view-level components should compose sections, not own every section's implementation.
- Page-specific components should live close to the page when they are not reusable outside that page.
- If a page has separate header/hero/menu/list/social/control zones, each non-trivial zone should be a separate component.
- Keep page SCSS responsible for the page shell only; move section/component styles next to the section/component.

Preferred structure:

```text
ComponentName/
├─ ComponentName.tsx
└─ ComponentName.scss
```

If the project uses flat files, follow the project style.

---

## Imports

- Follow existing import order.
- Prefer absolute imports only if the project already uses them.
- Do not rewrite imports globally unless asked.
- Remove unused imports.
- Do not introduce barrel files unless the project already uses them.
- Do not create circular dependencies.

Preferred order when no project convention exists:

```ts
import externalLibrary from "external-library";

import { projectEntity } from "@/shared/projectEntity";

import "./ComponentName.scss";
```

---

## State

- Keep state as local as possible.
- Lift state only when needed.
- Do not introduce global state for local UI behavior.
- Use existing state management from the project.
- Do not add Redux, MobX, Zustand, Pinia, or other state libraries unless already used or explicitly requested.
- Keep derived state calculated instead of duplicated.

---

## API and Data

- Keep API logic outside UI components.
- Prefer a separate API/service class for request handling, such as `Server`, `ApiClient`, or the existing project naming convention.
- The API/service layer must be implemented as a TypeScript class when creating a new shared request handler. Do not implement it as a React component.
- Provide API/service instances to the React tree through React Context API when shared access is needed.
- Keep React Context responsible only for dependency access and composition. Do not put request implementation details inside context providers.
- Keep UI components focused on rendering, user interaction, and calling hooks/services.
- Separate responsibility zones clearly: API classes handle transport and external data, hooks handle React-specific consumption, components handle presentation and composition.
- Use existing API clients and services.
- Do not duplicate request logic.
- Handle loading, error, empty, and success states explicitly.
- Validate external data where the project already has validation patterns.
- Do not silently assume backend response shape.

---

## Accessibility

- Use semantic HTML when possible.
- Buttons must be buttons.
- Links must be links.
- Interactive elements must be keyboard accessible.
- Images need meaningful `alt` text unless decorative.
- Do not remove accessibility attributes without reason.

---

## Performance

- Do not optimize prematurely.
- Avoid unnecessary re-renders caused by unstable props when the issue is clear.
- Clean up heavy listeners and observers.
- Use lazy loading for heavy components or assets when appropriate.
- Do not add complex caching without need.

---

## Git and Diffs

- Keep changes scoped to the requested task.
- Do not reformat unrelated files.
- Do not rename files unless required.
- Do not change public behavior unless requested.
- Explain risky changes before making them when possible.
- Prefer targeted edits over full rewrites.

---

## Before Making Changes

Always check:

1. Existing file structure.
2. Existing naming conventions.
3. Existing component patterns.
4. Existing SCSS patterns.
5. Existing breakpoint mixins.
6. Existing utilities and hooks.
7. Existing API/service layer.
8. Existing state management.
9. Existing linting and formatting rules.

---

## After Making Changes

Verify:

1. TypeScript types are valid.
2. Imports are correct.
3. No unused variables remain.
4. SCSS follows grouping rules.
5. BEM selectors stay flat.
6. Component responsibility is clear.
7. No unrelated files were changed.
8. No new dependency was added without need.
9. When possible, run the project locally and visually inspect the changed UI.
10. Prefer Playwright, the project's existing e2e setup, Storybook, preview server, browser devtools, or another available visual verification tool when it helps confirm the result.
11. Do not rely only on TypeScript, linting, or unit tests for UI changes when visual behavior, layout, animation, responsiveness, or user interaction could be affected.
12. If visual testing is not possible, state what was verified and what could not be checked.
