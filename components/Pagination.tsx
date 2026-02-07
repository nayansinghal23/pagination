import Button from "./Button";

interface IPagination {
  pages: number;
  page: number;
  onPageChange: (skip: number) => void;
}

const Pagination = ({ pages, page, onPageChange }: IPagination) => {
  return (
    <div className="flex items-center gap-1 flex-wrap justify-between">
      <Button
        text="<"
        isDisabled={page === 1}
        onClick={() => onPageChange(page - 2)}
      />
      {Array(pages)
        .fill(-1)
        .map((item, index) => (
          <Button
            text={`${index + 1}`}
            key={index}
            classes={`${page === index + 1 ? "bg-gray-200" : ""}`}
            onClick={() => onPageChange(index)}
          />
        ))}
      <Button
        text=">"
        isDisabled={page === pages}
        onClick={() => onPageChange(page)}
      />
    </div>
  );
};

export default Pagination;
