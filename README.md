![Logo](./public/cb360-logo.svg)

# CB360 e-commerce website

A brief description of what this project does and who it's for

## Installation

System Requirements:

[Node.js 18.17](https://nodejs.org/) or later.

MacOS, Windows (including WSL), and Linux are supported.

## Automatic Installation

We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

```zsh
  npx create-next-app@latest

  npm run dev
```

## Run Locally

Clone the project from github

```zsh
  git clone https://github.com/johnbasx/cb360-ecommerce.git
```

Go to the project directory

```zsh
  cd my-project   or   cd cb360-ecommerce
```

Install dependencies

```zsh
  npm install
```

Start the server

```zsh
  npm run dev
```

## Project Structure

This page provides an overview of the file and folder structure of a Next.js project. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.

## Top-level folders

|                                                                          |                                |
| ------------------------------------------------------------------------ | ------------------------------ |
| [`app`](/docs/app/building-your-application/routing)                     | App Router _(optional)_        |
| [`pages`](/docs/pages/building-your-application/routing)                 | Pages Router                   |
| [`public`](/docs/app/building-your-application/optimizing/static-assets) | Static assets to be served     |
| [`src`](/docs/app/building-your-application/configuring/src-directory)   | Main application source folder |

## Top-level files

|                                                                                             |                                                                                                |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Next.js**                                                                                 |                                                                                                |
| [`next.config.js`](/docs/app/api-reference/next-config-js)                                  | Configuration file for Next.js                                                                 |
| [`package.json`](/docs/getting-started/installation#manual-installation)                    | Project dependencies and scripts                                                               |
| [`middleware.ts`](/docs/app/building-your-application/routing/middleware)                   | Next.js request middleware                                                                     |
| [`.env`](/docs/app/building-your-application/configuring/environment-variables)             | Environment variables                                                                          |
| [`.env.local`](/docs/app/building-your-application/configuring/environment-variables)       | Local environment variables                                                                    |
| [`.env.production`](/docs/app/building-your-application/configuring/environment-variables)  | Production environment variables                                                               |
| [`.env.development`](/docs/app/building-your-application/configuring/environment-variables) | Development environment variables                                                              |
| [`.eslintrc.json`](/docs/app/building-your-application/configuring/eslint)                  | Configuration file for ESLint                                                                  |
| `.gitignore`                                                                                | Git files and folders to ignore                                                                |
| `next-env.d.ts`                                                                             | TypeScript declaration file for Next.js                                                        |
| `tsconfig.json`                                                                             | Configuration file for TypeScript                                                              |
| `jsconfig.json`                                                                             | Configuration file for JavaScript                                                              |
| `lint-staged.config.json`                                                                   | Configuration file for linting & checking inconsistencies in codebase across different devices |

## Pages and Layouts

The Pages Router has a file-system based router built on the concept of pages.

When a file is added to the `pages` directory, it's automatically available as a route.

In Next.js, a **page** is a [React Component](https://react.dev/learn/your-first-component) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory. Each page is associated with a route based on its file name.

We recommend using Typescript to develop projects faster by catching all the unwanted bugs during development at compilation which gives an extra security due to the type safety and due to being a statically-typed JavaScript superset, boasts numerous advantages such as class definitions, interfaces, and type annotations, lending structure and reliability to codebases, and simplifying error detection..

**Example**: If you create `pages/products.tsx` that exports a React component like below, it will be accessible at `/products`.

```jsx
export default function ProductsPage() {
  return <div>Products Page</div>;
}
```

## Index routes

The router will automatically route files named `index` to the root of the directory.

- `pages/index.tsx` → `/`
- `pages/product-detail/index.tsx` → `/product-detail`

## Nested routes

The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.

- `pages/products/first-product.tsx` → `/products/first-product`
- `pages/user/profile/orders.tsx` → `/user/profile/orders`

## Pages with Dynamic Routes

Next.js supports pages with dynamic routes. For example, if you create a file called `pages/product-detail/[product_id].tsx`, then it will be accessible at `product-detail/1`, `product-detail/2`, etc.

> To learn more about dynamic routing, check the [Dynamic Routing documentation](/docs/pages/building-your-application/routing/dynamic-routes).

## Layout Pattern

The React model allows us to deconstruct a [page](/docs/pages/building-your-application/routing/pages-and-layouts) into a series of components. Many of these components are often reused between pages. For example, you might have the same navigation bar and footer on every page.

```tsx filename="components/layout/MainLayout.tsx"
import Navbar from './navbar';
import Footer from './footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

## Examples

### Single Shared Layout with Custom App

If you only have one layout for your entire application, you can create a [Custom App](/docs/pages/building-your-application/routing/custom-app) and wrap your application with the layout. Since the `<Layout />` component is re-used when changing pages, its component state will be preserved (e.g. input values).

```tsx filename="pages/_app.js"
import LogoLoading from '@/components/layout/LogoLoading';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const topGradient =
  'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color={topGradient}
        height={3}
        stopDelayMs={200}
        startPosition={0.3}
        showOnShallow={true}
      />
      <LogoLoading />
      <Component {...pageProps} />;
    </>
  );
}
```

## Color Reference

| Color   | Hex                                                              |
| ------- | ---------------------------------------------------------------- |
| brand   | ![#FF8400](https://via.placeholder.com/10/FF8400?text=+) #FF8400 |
| gallery | ![#EBEBEB](https://via.placeholder.com/10/ebebeb?text=+) #EBEBEB |
| grey    | ![#444444](https://via.placeholder.com/10/444444?text=+) #444444 |
| white   | ![#FFFFFF](https://via.placeholder.com/10/ffffff?text=+) #FFFFFF |

## Tech Stack

**Client:** React.js, Next.js, TailwindCSS

**Server:** Next.js in-built server

**Other libaries:** zutand, tailwind-merge, clsx, class-variance-authority, react-icons, react-hot-toast, lucide-react, @headlessui/react, @heroicons/react

## Demo

Vercel link will be provide here to see the working demo...

## Authors

- [@johnbasx](https://www.github.com/johnbasx)
- [@santosh21-ai](https://www.github.com/santosh21-ai)

## Feedback

If you have any feedback, please reach out to us at fox6eta@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
