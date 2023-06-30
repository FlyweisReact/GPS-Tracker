/** @format */

import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, FloatingLabel } from "react-bootstrap";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";

const Terms = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const data = [
    "This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.",
    "This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name [www.flipkart.com] (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”)",
  ];

  function MyVerticallyCenteredModal(props) {
    const [terms, setTerms] = useState("");

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `https://mr-arsad-new-gps-backend.vercel.app/api/v1/terms/63c159790b2529d367266420`,
          {
            terms,
          }
        );
        console.log(data);
        toast.success("Edited");
        setModalShow(false);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg-down"
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
            onSubmit={putHandler}
          >
            <FloatingLabel
              controlId="floatingTextarea"
              label="Terms&Condition"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                onChange={(e) => setTerms(e.target.value)}
              />
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
                <th> Action </th>
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
