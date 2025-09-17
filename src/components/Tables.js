import React, { useState, useEffect } from "react";
import { Table, Button, Dropdown } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "./Table.css";
import { Buttons, Pagechange } from "./Buttons";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import API_DOMAIN from "../config/config";
import companyId from "../config/companyId";
import { formatDate } from "./Forms";
const Tables = (props) => {
  return (
    <Table responsive="md">
      <thead>
        <tr>
          {props.headers.map((data, index) => (
            <th key={index}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.body.length > 0 ? (
          props.body.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.values.map((rowValue, colIndex) => (
                <td key={colIndex}>{rowValue}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr className="text-center mx-auto">
            <td colSpan={props.headers.length}>No Record Found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const ProductTable = (props) => {
  const navigate = useNavigate();
  const handlesalesreturnprintClick = (rowData) => {
    navigate("/console/sales/return", {
      state: { type: "pdfview", rowData: rowData },
    });
  };

  return (
    <Table responsive="md">
      <thead>
        <tr>
          {props.headers.map((data) => (
            <th key={data}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.body != null ? (
          props.body.map((rowData) => (
            <tr key={rowData.id || rowData.receipt_no}>
              {rowData.values.map((rowValue, index) => (
                <td key={index}>{rowValue}</td>
              ))}
              <td className="">
                <Dropdown>
                  <Dropdown.Toggle>
                    <Button className="action">
                      <BiDotsVerticalRounded />
                    </Button>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handlesalesreturnprintClick(rowData)}
                    >
                      PDF
                    </Dropdown.Item>
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))
        ) : (
          <tr className="text-center mx-auto">
            <td colSpan={props.headers.length}>No Record Found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const TableUI = ({
  headers,
  body,
  style,
  type,
  rowData,
  planViewAction,
  onClick,
  onDelete,
  handleEditClick,
  pageview,
}) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = body ? body.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Slice the data to get the current page's items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = body ? body.slice(startIndex, endIndex) : [];

  // Function to check if the next page has data
  const hasDataOnPage = (page) => {
    const pageStartIndex = (page - 1) * itemsPerPage;
    const pageEndIndex = pageStartIndex + itemsPerPage;
    const itemsOnPage = body ? body.slice(pageStartIndex, pageEndIndex) : [];
    return itemsOnPage.length > 0;
  };

  // Handle Next Page
  const nextPage = () => {
    const nextPageNumber = currentPage + 1;
    if (nextPageNumber <= totalPages && hasDataOnPage(nextPageNumber)) {
      setCurrentPage(nextPageNumber);
    }
  };

  // Handle Previous Page
  const prevPage = () => {
    const prevPageNumber = currentPage - 1;
    if (prevPageNumber >= 1 && hasDataOnPage(prevPageNumber)) {
      setCurrentPage(prevPageNumber);
    }
  };

  // Ensure currentPage stays within valid bounds
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1 && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages, body]);

  const navigate = useNavigate();

  const handleRowClick = (rowData) => {
    onClick(rowData);
  };

  return (
    <>
      {pageview === "yes" && pageview !== undefined ? (
        <div className="text-end">
          <span className="mx-1">
            Page {currentPage} of {totalPages}
          </span>
          <span className="mx-1">
            <Pagechange
              label={<MdChevronLeft />}
              onClick={prevPage}
              disabled={currentPage === 1 || totalItems === 0}
            />
          </span>
          <span className="mx-1">
            <Pagechange
              label={<MdChevronRight />}
              onClick={nextPage}
              disabled={currentPage === totalPages || totalItems === 0}
            />
          </span>
        </div>
      ) : null}

      <Table responsive="md" style={style}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan={headers.length} className="text-center py-3">
                No record found
              </td>
            </tr>
          ) : (
            currentItems.map((rowData, rowIndex) => <tr key={rowIndex}></tr>)
          )}
        </tbody>
      </Table>

      {pageview === "yes" && pageview !== undefined ? (
        <div className="text-end">
          <span className="mx-1">
            Page {currentPage} of {totalPages}
          </span>
          <span className="mx-1">
            <Pagechange
              label={<MdChevronLeft />}
              onClick={prevPage}
              disabled={currentPage === 1 || totalItems === 0}
            />
          </span>
          <span className="mx-1">
            <Pagechange
              label={<MdChevronRight />}
              onClick={nextPage}
              disabled={currentPage === totalPages || totalItems === 0}
            />
          </span>
        </div>
      ) : null}
    </>
  );
};

export { Tables, ProductTable, TableUI };
