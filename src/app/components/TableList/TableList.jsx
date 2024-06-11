'use client';
import React, { useState, useEffect } from 'react';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const TableList = () => {
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(7);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
      setFilteredData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      if (searchQuery.trim() === '') {
        setFilteredData(data);
      } else {
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
      }
    };
    filterData();
  }, [searchQuery, data]);

  const handlePageChange = (newPageIndex) => {
    setPageIndex(newPageIndex);
  };

  const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  return (
    <div className="relative shadow-md sm:rounded-lg mt-8 w-[90%] mx-auto md:w-[80%] md:mx-auto md:my-4 p-4 border-[#d0c2f8] border">
      <div className=" flex flex-col md:flex-row mb-4 items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name..."
          className="bg-gray-200 text-black w-[100%] md:w-auto mb-2 md:mb-0 px-4 py-2 rounded-md md:mr-4 border-none outline-none"
        />
        <span>{filteredData.length} results found</span>
      </div>
      {data.length === 0 ? (
        <div className="flex w-full h-[300px] items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      ) : filteredData.length === 0 ? (
        <div className="flex w-full h-[300px] items-center justify-center">
          <p className="text-2xl">No Workspaces Found</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 min-w-[500px]">
              <thead className="text-xs text-white uppercase bg-[#7f7df8]">
                <tr>
                  <th scope="col" className="px-6 py-3">ID</th>
                  <th scope="col" className="px-6 py-3">NAME</th>
                  <th scope="col" className="px-6 py-3">USERNAME</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">CITY</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((response) => (
                  <tr key={response.id} className="bg-[#f2f4ff] border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {response.id}
                    </th>
                    <td className="px-6 py-4">{response.name}</td>
                    <td className="px-6 py-4">{response.username}</td>
                    <td className="px-6 py-4">{response.email}</td>
                    <td className="px-6 py-4">{response.address.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange(pageIndex - 1)}
              disabled={pageIndex === 0}
              className="bg-[#7f7df8] text-white px-4 py-2 rounded-md"
            >
              Previous
            </button>
            <span className="mx-2">{pageIndex + 1} of {Math.ceil(filteredData.length / pageSize)}</span>
            <button
              onClick={() => handlePageChange(pageIndex + 1)}
              disabled={pageIndex >= Math.ceil(filteredData.length / pageSize) - 1}
              className="bg-[#7f7df8] text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TableList;
