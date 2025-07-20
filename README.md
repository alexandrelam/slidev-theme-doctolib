# slidev-theme-doctolib

[![NPM version](https://img.shields.io/npm/v/slidev-theme-doctolib?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-doctolib)

A professional healthcare-focused theme for [Slidev](https://github.com/slidevjs/slidev) with Doctolib branding and confidentiality classification system.

## 🏥 Features

- **🎨 Professional Doctolib Branding** - Official logos, colors (#00264C), and design elements
- **🔒 Confidentiality Classification** - Built-in C0-C3 security levels (Public, Internal, Restricted, Protected)
- **📱 Responsive Design** - Optimized for all screen sizes and devices
- **🎯 Healthcare-Focused** - Perfect for medical presentations, training, and compliance
- **💻 Developer-Friendly** - Vue 3 components, TypeScript support, Tailwind CSS
- **🎨 Professional Typography** - Montserrat font family for optimal readability
- **📊 Rich Layouts** - Multiple pre-built layouts including cover, two-column, and image positioning
- **🌙 Syntax Highlighting** - Vitesse theme with support for all major programming languages
- **📤 Export Options** - PDF, PNG, and static HTML generation

## 🚀 Installation

Add the following frontmatter to your `slides.md`. Slidev will automatically prompt you to install the theme:

```yaml
---
theme: doctolib
title: My Healthcare Presentation
author: Your Name
exportFilename: my-presentation
confidentialityLevel: 0
---
```

Or install manually:

```bash
npm install slidev-theme-doctolib
```

## 🎯 Usage

### Basic Presentation

```markdown
---
theme: doctolib
title: "Patient Care Guidelines"
author: "Dr. Smith"
confidentialityLevel: 1
---

# Welcome to Our Medical Training

Professional healthcare presentations made simple.

---

# Treatment Protocol

Standard procedures for patient care...
```

### Confidentiality Levels

Set the appropriate confidentiality level using the `confidentialityLevel` frontmatter:

- `0` - **C0 Public** - Information that can be shared openly
- `1` - **C1 Internal** - For internal company use only
- `2` - **C2 Restricted** - Limited access required
- `3` - **C3 Protected** - Highest security level

```markdown
---
confidentialityLevel: 2
---

# Restricted Medical Data

This slide shows C2 classification automatically.
```

### Available Layouts

The theme includes several specialized layouts:

#### Cover Layout (Default for first slide)
```markdown
---
layout: cover
---

# Presentation Title
*Subtitle and description*
```

#### Two-Column Layout
```markdown
---
layout: two-cols
---

# Left Column Content

Medical procedures and protocols...

::right::

# Right Column Content

Supporting diagrams and charts...
```

#### Image Positioning
```markdown
---
layout: image-right
image: '/path/to/medical-image.jpg'
---

# Content with Image

Your content appears on the left, image on the right.
```

### Components

#### Confidentiality Level Indicator
```vue
<ConfidentialityLevel :confidentialityLevel="2" />
```

## 🛠 Development

### Prerequisites

- Node.js ≥14.0.0
- Slidev ≥0.19.3

### Commands

```bash
# Start development server
npm run dev

# Build presentation
npm run build

# Export to PDF
npm run export

# Export slides as PNG images
npm run screenshot
```

### Customization

The theme uses Tailwind CSS and can be extended with custom styles:

```markdown
---
theme: doctolib
---

<div class="bg-blue-50 p-4 rounded-lg">
  <h2 class="text-blue-800">Custom Healthcare Card</h2>
  <p class="text-blue-600">Enhanced with Tailwind classes</p>
</div>
```

## 📋 Configuration Options

All configuration is done through frontmatter in your presentation:

```yaml
---
theme: doctolib
title: "Your Presentation Title"
author: "Your Name"
exportFilename: "custom-filename"
confidentialityLevel: 0  # 0-3
fonts:
  sans: "Montserrat"  # Default font
highlighter: "shiki"  # Code highlighting
---
```

## 🎨 Design System

### Colors
- **Primary**: #00264C (Doctolib Blue)
- **Background**: White/Light theme optimized
- **Text**: High contrast for accessibility

### Typography
- **Font Family**: Montserrat (professional, readable)
- **Hierarchy**: Consistent heading and body text scaling
- **Line Height**: Optimized for presentation readability

### Spacing
- **Grid System**: Tailwind CSS responsive grid
- **Consistent Margins**: Professional spacing throughout
- **Component Padding**: Balanced for visual hierarchy

## 📊 Perfect for Healthcare

This theme is specifically designed for medical and healthcare presentations:

- **Patient Care Guidelines** - Treatment protocols and procedures
- **Medical Training** - Onboarding and continuing education
- **Research Presentations** - Clinical findings and data
- **Compliance Training** - HIPAA, privacy, and regulatory content
- **Team Communications** - Internal updates and announcements
- **Technology Demos** - Health tech and medical device presentations

## 🔗 Links

- [Example Presentation](https://github.com/alexandrelam/slidev-theme-doctolib/blob/main/example.md)
- [Slidev Documentation](https://sli.dev/)
- [Theme Writing Guide](https://sli.dev/themes/write-a-theme.html)

## 📄 License

[MIT License](./LICENSE)

---

Built with ❤️ for healthcare professionals using [Slidev](https://github.com/slidevjs/slidev).
