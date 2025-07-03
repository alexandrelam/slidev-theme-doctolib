# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Building and Running

- `npm run dev` - Start Slidev development server with hot reload using example.md
- `npm run build` - Build the presentation to static files (example.md)
- `npm run export` - Export presentation to PDF format
- `npm run screenshot` - Export presentation slides as PNG images

### Prerequisites

- Node.js >=14.0.0
- Slidev >=0.19.3

## Architecture Overview

This is a Slidev theme package called `slidev-theme-doctolib` that provides Doctolib-branded presentation layouts and components.

### Key Components

- **Layouts**: Custom Vue components for different slide types
  - `cover.vue` - Title slide with Doctolib branding and decorative elements
  - `default.vue` - Standard content layout with footer branding and pagination
- **Components**: Reusable Vue components
  - `ConfidentialityLevel.vue` - Displays confidentiality classification (C0-C3: Public, Internal, Restricted, Protected)
- **Setup**: Configuration files for Slidev
  - `shiki.ts` - Code syntax highlighting themes (Vitesse light/dark)
  - `windicss.ts` - Tailwind CSS configuration with custom shortcuts

### Theme Configuration

The theme uses these frontmatter options in slides:
- `confidentialityLevel` - Sets confidentiality classification (0-3)
- `author` - Presentation author
- `exportFilename` - Custom filename for exports

### Visual Design

- Primary color: Doctolib blue (#00264C)
- Font: Montserrat
- Includes decorative doodle graphics and logo positioning
- Responsive layout with absolute positioning for branding elements

### File Structure

- `layouts/` - Vue layout components
- `components/` - Reusable Vue components  
- `setup/` - Slidev configuration files
- `styles/` - CSS styling files
- `public/` - Static assets (logos, graphics)
- `example.md` - Example presentation demonstrating theme features

### Development Notes

- Theme is self-referential in package.json for local development
- Uses external CDN links for some assets in layouts
- Supports both light and dark syntax highlighting themes
- Built with Vue 3 composition API