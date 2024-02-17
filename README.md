# Shopping Cart React TypeScript

## Overview

Shopping Cart React TypeScript is a React application with TypeScript on the frontend, focused on building a responsive shopping cart. This project utilizes technologies such as Vite, React, React Router, Redux Toolkit, and Tailwind CSS.

## Technologies Used

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Redux Toolkit

## Demo

[Explore Shopping Cart App](https://shoppingg-cart-react-ts.vercel.app/)

## Project Structure

- `src/`: Directory containing the source code.
  - `app/`
    - `store.ts`: Redux store configuration.
    - `features/`: Directory containing features of the application.
      - `cart/`: Directory containing files related to the shopping cart feature.
        - `cartSlice.ts`: Redux slice for managing the shopping cart state.
      - `products/`: Directory containing files related to the products feature.
        - `productsSlice.ts`: Redux slice for managing product-related state.
  - `components/`: Directory containing the application components.
    - `Navbar.tsx`: Navigation bar component.
    - `ProductCard.tsx`: Component for displaying individual product details.
    - `ui/`: Directory containing UI components.
      - `Button.tsx`: Custom button component with customizable styles.
    - `errors/`: Directory containing components related to error handling.
      - `ErrorHandler.tsx`: Component for handling errors.
  - `pages/`: React pages for different routes.
    - `index.tsx`: Main page component.
    - `Layout.tsx`: Layout component.
    - `Cart.tsx`: Shopping cart page component.
    - `PageNotFound.tsx`: Component for 404 errors.
    - `ProductPage.tsx`: Page for displaying individual product details.
  - `router/`: React Router configuration.
    - `index.tsx`: Router configuration.
  - `utils/`: Directory containing utility functions.
    - `functions.ts`: General utility functions used across the project.
  - `interfaces/`: Directory containing TypeScript interfaces.
    - `index.ts`: File exporting TypeScript interfaces used throughout the project.
  - `lib/`: Directory containing utility functions and libraries.
    - `functions.ts`: Utility functions used across the project.

## Usage

### Home Page

Explore the main page to browse a list of products. Each product is displayed with essential details.

### Product Page

Click on a product to view detailed information. You can also add the product to your shopping cart directly from this page.

### Shopping Cart

Visit the shopping cart page to manage your selected items. Here's what you can do:

- **View Items:** See a list of products added to your cart, along with their details.
- **Update Quantity:** Adjust the quantity of each item in the cart.
- **Remove Items:** Remove products from the cart.
- **Total Price:** The total price of your selected items is displayed at the bottom.
