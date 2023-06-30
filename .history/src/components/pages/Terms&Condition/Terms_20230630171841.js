/** @format */

import React, { useState } from "react";
import { Button, Table, Modal, Form, FloatingLabel } from "react-bootstrap";
import HOC from "../../layout/HOC";
import { Dropdown, Menu } from "antd";
import img from "../../SVG/list.svg";

const Terms = () => {
  const [modalShow, setModalShow] = useState(false);
  const data = [
    "This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.",
    "This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name [www.flipkart.com] (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”)",
  ];

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Terms&Condition
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <FloatingLabel
              controlId="floatingTextarea"
              label="Terms&Condition"
              className="mb-3"
            >
              <Form.Control as="textarea" />
            </FloatingLabel>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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

      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            Terms&Condition
            <hr style={{ width: "70%" }} />
          </span>
        </div>

        <div>
          <Table>
            <thead>
              <tr>
                <th>Terms&Condition</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i} </td>
                  <td>
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item key="0">
                            <div className="two_Sec_Div">
                              <i className="fa-solid fa-trash"></i>
                              <p>Delete</p>
                            </div>
                          </Menu.Item>
                          <Menu.Item key="1">
                            <div
                              className="two_Sec_Div"
                              onClick={() => setModalShow(true)}
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                              <p>Edit</p>
                            </div>
                          </Menu.Item>
                        </Menu>
                      }
                      trigger={["click"]}
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Terms);
