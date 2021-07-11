import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Api Data</h1>
      <div>
        <table border='5'>
          <thead>
            <tr>
              <th> User Id </th>
              <th> Id </th>
              <th> Title </th>
              <th> Completed </th>
            </tr>
          </thead>

          <tbody>
            {data.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed}</td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
