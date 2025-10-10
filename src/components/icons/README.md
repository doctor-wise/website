# Icon System

This directory contains the icon system for the project, featuring a hybrid approach that combines the benefits of static components with dynamic loading.

## Features

- **1173+ Icons Available**: All icons from the SVG library are automatically generated
- **Type Safety**: Full TypeScript support with autocomplete for icon names
- **Lazy Loading**: Icons are loaded on-demand for optimal performance
- **Consistent API**: Simple, unified interface for all icons
- **Size Variants**: Predefined sizes (sm, md, lg, xl) with consistent scaling

## Usage

### Basic Usage

```tsx
import { Icon } from '@/components/icons';

// Use any available icon
<Icon name="home_01" size="md" />
<Icon name="search_md" size="lg" className="text-blue-500" />
<Icon name="settings_01" size="sm" aria-label="Settings" />
```

### Available Props

- `name`: Icon name (fully typed with autocomplete)
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `className`: Additional CSS classes
- `aria-label`: Accessibility label

### Size Reference

- `sm`: 16px
- `md`: 20px  
- `lg`: 24px
- `xl`: 32px

## Adding New Icons

1. Add your SVG file to `/public/Assets/SVG-Icon-lib/`
2. Run the generation script:
   ```bash
   npm run generate:icons
   ```
3. The new icon will be automatically available with full type safety

## File Structure

```
src/components/icons/
├── generated/           # Auto-generated components and types
│   ├── types.ts        # TypeScript definitions
│   ├── Icon.tsx        # Main Icon component
│   ├── index.ts        # Exports
│   └── [IconName].tsx  # Individual icon components
├── icons/              # Legacy individual components (deprecated)
└── index.ts            # Main exports
```

## Performance

- Icons are lazy-loaded using React.lazy()
- Only icons that are actually used are loaded
- Fallback loading states are provided
- Optimized SVG processing preserves original viewBox and attributes

## Migration from Legacy Icons

The old individual icon components are still available but deprecated:

```tsx
// Old way (deprecated)
import { HomeIcon } from '@/components/icons';

// New way (recommended)
import { Icon } from '@/components/icons';
<Icon name="home_01" />
```
