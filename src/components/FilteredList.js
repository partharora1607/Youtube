import { FilterList } from "../Utils/constants";

const FilteredList = () => {
  return (
    <div>
      <ul className="flex mx-10">
        {FilterList.map((item, idx) => (
          <li
            className="mx-2  my-5 text-base  border-2 px-4 py-1 rounded-lg transition-all bg-gray-200 font-medium hover:bg-gray-300  cursor-pointer"
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
