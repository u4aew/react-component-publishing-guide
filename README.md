# React Component Library

Modern React component library built with TypeScript, SCSS modules, and Storybook for documentation and development.

## 🚀 Features

- **React 19** with full TypeScript support
- **SCSS Modules** for scoped styling with automatic CSS injection
- **Storybook** for component development and documentation
- **Vite** for fast builds and development
- **ESLint** for code quality
- **Automated CI/CD** with GitHub Actions
- **NPM Publishing** workflow
- **GitHub Pages** deployment for Storybook
- **Bundle Size Analysis** with automatic reports
- **Usage Analytics** with integrations for Google Analytics, Amplitude, Mixpanel

## 📦 Installation

```bash
npm install @u4aew/react-component-publishing-guide
```

## 🎯 Usage

```tsx
import { Button } from '@u4aew/react-component-publishing-guide';

function App() {
  return (
    <Button 
      primary 
      size="medium" 
      label="Click me!" 
      onClick={() => console.log('Button clicked!')} 
    />
  );
}
```

## 🛠 Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/u4aew/react-component-publishing-guide.git
cd react-component-lib

# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for production |
| `npm run build` | Build library for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run analyze` | Analyze bundle size and open report |
| `npm run size-report` | Generate detailed size report |

## 📚 Components

### Button

Primary UI component for user interaction.

**Props:**
- `primary?: boolean` - Is this the principal call to action on the page?
- `backgroundColor?: string` - What background color to use
- `size?: 'small' | 'medium' | 'large'` - How large should the button be?
- `label: string` - Button contents
- `onClick?: () => void` - Optional click handler

**Example:**
```tsx
<Button primary size="large" label="Primary Button" />
```

## 🏗 Architecture

```
src/
├── components/
│   └── ComponentName/
│       ├── ComponentName.tsx     # Component implementation
│       ├── ComponentName.module.scss # Component styles
│       └── __stories__/          # Storybook stories
│           └── ComponentName.stories.ts
└── index.ts                      # Main export file
```

## 📊 Analytics & Monitoring

### Bundle Size Analysis
Automatic bundle size tracking with visual reports:
```bash
npm run analyze  # Opens detailed bundle analysis
npm run size-report  # Console and JSON report
```

### Usage Analytics
Integrates with popular analytics services automatically:
```tsx
import { useAnalytics } from '@u4aew/react-component-publishing-guide';

const { trackMount, trackClick } = useAnalytics('Button');
// Works with Google Analytics, Amplitude, Mixpanel
```

**Supported Services:**
- **Google Analytics** - `gtag('event', 'component_mount', ...)`
- **Amplitude** - `amplitude.logEvent('Component mount', ...)`  
- **Mixpanel** - `mixpanel.track('Component mount', ...)`
- **Custom endpoint** - via configuration

## 🔄 CI/CD

The project includes automated workflows:

- **CI**: Runs on every push/PR (linting, building, bundle analysis)
- **NPM Publishing**: Triggered by releases or manual dispatch
- **Storybook Deploy**: Automatically deploys to GitHub Pages
- **Bundle Reports**: Automatic PR comments with size changes

## 📖 Documentation

View the live Storybook documentation: [https://u4aew.github.io/react-component-publishing-guide](https://u4aew.github.io/react-component-publishing-guide)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**u4aew**
- GitHub: [@u4aew](https://github.com/u4aew)

## 🙏 Acknowledgments

- Built with [Storybook](https://storybook.js.org/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [SCSS](https://sass-lang.com/)