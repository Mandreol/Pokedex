import React from "react";
import "../../styles/pagination.css";

const Pagination = ({ page, pageLength, setPage }) => {
	const pagesPerBlock = 8;
	const currentBlock = Math.ceil(page / pagesPerBlock);
	const blockLength = Math.ceil(pageLength / pagesPerBlock);
	const arrPages = [];
	const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
	const limitPage =
		blockLength === currentBlock ? pageLength : currentBlock * pagesPerBlock;

	for (let i = initialPage; i <= limitPage; i++) {
		arrPages.push(i);
	}
	const handlePrev = () => {
		setPage(page - 1);
	};
	const handleNext = () => {
		setPage(page + 1);
	};
	const handlePage = (e) => {
		setPage(e);
	};
	return (
		<div className="pagination">
			{page > 1 && (
				<div onClick={handlePrev} className="pagination__prev pagination__active">
					&#60;
				</div>
			)}
			<ul className="pagination__container">
				{arrPages.map((e) => (
					<li
						onClick={() => handlePage(e)}
						key={e}
						className={`pagination__page ${page === e && "pagination__active"}`}>
						{e}
					</li>
				))}
			</ul>
			{page < pageLength && (
				<div onClick={handleNext} className="pagination__next pagination__active">
					&#62;
				</div>
			)}
		</div>
	);
};

export default Pagination;
