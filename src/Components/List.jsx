/* eslint-disable react/prop-types */
function List({ children }) {
  return (
    <ul className="pl-[3rem] flex flex-col gap-3 list-disc">{children}</ul>
  );
}

export default List;
