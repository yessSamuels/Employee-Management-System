import React from "react";

export default function DataTable(props) {
  const styles = {
      table: {
          margin: "0 auto",
      },

      title: {
          backgroundColor: "rgb(243, 242, 242,)",
          paddingLeft: "5vw",
          paddingRight: "5vw"
      },

      data: {
        marginLeft: "4vw",
        marginRight: "4vw",
        textAlign: "center"
      }

  };

  return (
    <div>
      <table style = {styles.table} className="table">
        <thead>
          <tr>
            <th scope="col" style = {styles.title}>Image</th>
            <th scope="col" style = {styles.title} onClick={props.sortName}>Name</th>
            <th scope="col" style = {styles.title}>Phone</th>
            <th scope="col" style = {styles.title}>Email</th>
            <th scope="col" style = {styles.title}>DOB</th></tr>
        </thead>
        <tbody>
          {props.data.map((row, i) => (
            <tr key={i}>
              <td style = {styles.data} scope="row">
                <img src={row.picture.thumbnail} /></td>
              <td style = {styles.data} >{`${row.name.first} ${row.name.last}`}</td>
              <td style = {styles.data}>{row.cell}</td>
              <td style = {styles.data}>{row.email}</td>
              <td style = {styles.data}>{new Date(row.dob.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}