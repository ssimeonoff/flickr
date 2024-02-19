import { PaginationContainer, PaginationButton, PageLabel } from "./styles";

interface Props {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  fetchPaginatedPhotos: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  page,
  pages,
  perpage,
  total,
  fetchPaginatedPhotos,
}) => {
  const pageLabel = `${perpage * (page - 1) + 1}-${
    perpage * page > total ? total : perpage * page
  }/${total}`;
  const pageLabelSinglePhoto = `${page}/${total}`;
  const isPreviousDisabled = page === 1;
  const isNextDisabled = page === pages;

  //different labels based on page size (gallery view uses perpage=1)
  const displayLabel = () => {
    if (total > 0 && perpage > 1) return pageLabel;
    if (total > 0 && perpage === 1) return pageLabelSinglePhoto;
    return "---/-";
  };

  return (
    <PaginationContainer>
      <PaginationButton
        type="button"
        disabled={isPreviousDisabled}
        onClick={() => fetchPaginatedPhotos(page - 1)}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </PaginationButton>
      <PageLabel>{displayLabel()}</PageLabel>
      <PaginationButton
        type="button"
        disabled={isNextDisabled}
        onClick={() => fetchPaginatedPhotos(page + 1)}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
