/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import img from "../../SVG/list.svg";
import axios from "axios";
import { Dropdown } from 'antd'

const Customers = () => {
  const [query, setQuery] = useState("");

  const data = [
    {
      name : "Guest User" , 
      email : "Guest@gmail.com" ,
      phone : "7896541236" ,
      address : "Delhi"
    }
  ]




  const filterData = !query
    ? data
    : data?.filter(
        (i) =>
          i?.email?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.name?.toString()?.toLowerCase().includes(query?.toLowerCase())
      );




  return (
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "40px",
            height: "40px",
            marginTop: "5px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Customer List <br />
          <span style={{ fontSize: "14px" }}>All Customer List</span>
        </p>
      </div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
        className="response"
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Customers (Total : {data?.details?.length})
            <hr style={{ width: "70%" }} />
          </span>
        </div>

        <div>
          <div style={{ color: "black" }}>
            Search:{" "}
            <input
              type={"search"}
              style={{
                border: "1px solid #bfbfbf",
                width: "250px",
                color: "black",
                padding: "5px",
              }}
              placeholder="Search by Name , Phone number.."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflow: "auto", marginTop: "2%" }}>
          <Table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td> {i.name} </td>
                  <td> {i.email} </td>
                  <td> {i.phone} </td>
                  <td> {i.address} </td>
                  <td>
                  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      
    </a>
  </Dropdown>
                
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(Customers);
