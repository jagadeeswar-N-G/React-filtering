import React from "react";
const colors = ['All', 'red', 'blue', 'green', 'black'];

const Color = ({selectedColor,handleColorChange}) => {
  return (
    <div>
      <h3 class="mb-4 font-semibold text-gray-900 dark:text-white text-xl pt-4">
        Color
      </h3>
      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {colors.map((color) => (
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-license"
            type="radio"
            value={color}
            name="color"
            checked={selectedColor === color}
            onChange={() => handleColorChange(color)}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 accent-black"
          />
          <label
            for="horizontal-list-radio-license"
            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {color.toUpperCase()}
          </label>
        </div>
      </li>
      ))}
      </ul>
    </div>
  );
};

export default Color;
