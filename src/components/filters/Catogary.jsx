import React from "react";


const index = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div>
      <h3 class="mb-4 font-semibold text-gray-900 dark:text-white pt-4 text-xl">
        Catogary
      </h3>
      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-license"
              type="radio"
              value="All"
              name="Catogary"
              checked={selectedCategory === 'All'}
              onChange={() => handleCategoryChange('All')}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-license"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value="sneakers"
              name="Catogary"
              checked={selectedCategory === "sneakers"}
            onChange={() => handleCategoryChange("sneakers")}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-id"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sneakers
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value="flats"
              name="Catogary"
              checked={selectedCategory === "flats"}
              onChange={() => handleCategoryChange("flats")}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-id"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Flats
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-millitary"
              type="radio"
              value="sandals"
              name="Catogary"
              checked={selectedCategory === "sandals"}
            onChange={() => handleCategoryChange("sandals")}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-millitary"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sandals
            </label>
          </div>
        </li>
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-passport"
              type="radio"
              value="heels"
              name="Catogary"
              checked={selectedCategory === "heels"}
            onChange={() => handleCategoryChange("heels")}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-passport"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Heels
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default index;
