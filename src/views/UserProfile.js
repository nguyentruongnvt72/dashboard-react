/*!

=========================================================
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col, CardTitle, Table,
} from "reactstrap";

function UserProfile() {
  return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Order</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                    <tr>
                      <th>IdApp</th>
                      <th>Name App</th>
                      <th>Revenue</th>
                      {/*<th></th>*/}
                      {/*<th className="text-center">Value</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>011</td>
                      <td>App1</td>
                      {/*<td>Gói 1</td>*/}
                      {/*<td>2021-03-22 00:05:00</td>*/}
                      <td >1,000,000 VND</td>
                    </tr>
                    <tr>
                      <td>012</td>
                      <td>App1</td>
                      {/*<td>Gói 2</td>*/}
                      {/*<td>2021-03-22 01:05:00</td>*/}
                      <td >6,000,000 VND</td>
                    </tr>
                    <tr>
                      <td>013</td>
                      <td>App2</td>
                      {/*<td>Gói 03</td>*/}
                      {/*<td>2021-03-22 02:09:00</td>*/}
                      <td >500,000 VND</td>
                    </tr>
                    <tr>
                      <td>014</td>
                      <td>App1</td>
                      {/*<td>Gói 04</td>*/}
                      {/*<td>2021-03-22 03:15:00</td>*/}
                      <td >1,000,000 VND</td>
                    </tr>
                    <tr>
                      <td>015</td>
                      <td>App3</td>
                      {/*<td>Gói 05</td>*/}
                      {/*<td>2021-03-22 03:25:00</td>*/}
                      <td >400,000 VND</td>
                    </tr>
                    <tr>
                      <td>016</td>
                      <td>App3</td>
                      <td>2,000,000 VND</td>
                    </tr>
                    <tr>
                      <td>017</td>
                      <td>App1</td>
                      <td>1,000,000 VND</td>
                    </tr>
                    </tbody>
                  </Table>x
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  );
}

export default UserProfile;
