// import React from 'react';

// const getData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   if(!response.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// };

// const SSRPage = async () => {
//   const data = await getData();


//   return <div>{JSON.stringify(data)}</div>;
// };

// export default SSRPage;

export const GetRequest = (url, token = null, signal = null) => {
  if (!url) throw 'end point not provided';

  return new Promise((resolve, reject) => {
      const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      };

      const options = { method: 'GET', headers, signal };

      fetch(url, options)
          .then((response) => {
              if (!response.ok) return response.json().then((error) => reject(error));
              if (response.ok && response.status === 204)
                  return Promise.resolve({ code: 204 }); /* return Promise.resolve('operation successful with status code 204'); */
              return response.json();
          })
          .then((res) => resolve(res))
          .catch((error) => reject(error));
  });
};