/**
 * CategorySection Component
 *
 * A component to display a section of product categories in an e-commerce application.
 * It allows users to navigate through different product categories.
 *
 * @component
 * @example
 * ```jsx
 * <CategorySection
 *   categories={[
 *     { id: 1, name: "Electronics" },
 *     { id: 2, name: "Clothing" },
 *     { id: 3, name: "Home & Kitchen" }
 *   ]}
 *   activeCategory={{ id: 2, name: "Clothing" }}
 *   onCategoryChange={handleCategoryChange}
 * />
 * ```
 *
 * @param {Object} props - The component props.
 * @param {Object[]} props.categories - An array of objects representing product categories.
 * @param {number} props.categories[].id - The unique identifier for the category.
 * @param {string} props.categories[].name - The name of the category.
 * @param {Object} props.activeCategory - The currently active (selected) category object.
 * @param {number} props.activeCategory.id - The unique identifier of the active category.
 * @param {string} props.activeCategory.name - The name of the active category.
 * @param {(category: { id: number, name: string }) => void} props.onCategoryChange - A callback function triggered when a category is selected.
 *
 * @returns {JSX.Element} - The rendered CategorySection component.
 */
declare module 'CategorySection';
