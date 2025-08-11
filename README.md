# circletone

A modern Angular 19+ UI component library with a comprehensive set of components, forms, and utilities. Built under principles of Atomic design with TailwindCSS.

**NOTE**: This is a release repository, the source-code for this library is not yet ready to be published in a formal way. Repo is needed for running [buzz-talk](https://github.com/SirKedon/buzz-talk) project though.

## Features

- Modern Angular 19+ support
- Comprehensive component library (buttons, cards, menus, accordions, etc.)
- Form controls with Angular Forms integration
- Custom directives and pipes
- Responsive design utilities
- Themeable with Tailwind CSS integration

## Getting Started

### Installation

```bash
npm install git+https://github.com/SirKeldon/circletone.git#v0.84.2
```

### Setup

1. Add the CircleTone styles to your `angular.json`:

```json
    "assets": [
        "<your_assets_folders_and_files>"
        {
        "glob": "**/*",
        "input": "node_modules/circletone/assets",
        "output": "assets/"
        }
    ],
    "styles": ["node_modules/circletone/lib/main.scss", "<your_styles>.css"],
```

2. Import components in your module or standalone components:

```typescript
import { ButtonComponent } from 'circletone';

@Component({
  // ...
  imports: [ButtonComponent]
})
```