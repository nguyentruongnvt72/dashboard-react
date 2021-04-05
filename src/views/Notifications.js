/*!

=========================================================

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col, Table,
} from "reactstrap";

function Notifications() {

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
                      <th>App</th>
                      <th>IdOrder(GPA.)</th>
                      <th>Name</th>
                      <th>DateTime</th>
                      <th className="text-center">Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>App1</td>
                      <td>011</td>
                      <td>Gói 1</td>
                      <td>2021-03-22 00:05:00</td>
                      <td className="text-center">100,000 VND</td>
                    </tr>
                    <tr>
                      <td>App1</td>
                      <td>012</td>
                      <td>Gói 2</td>
                      <td>2021-03-22 01:05:00</td>
                      <td className="text-center">600,000 VND</td>
                    </tr>
                    <tr>
                      <td>App2</td>
                      <td>013</td>
                      <td>Gói 03</td>
                      <td>2021-03-22 02:09:00</td>
                      <td className="text-center">500,000 VND</td>
                    </tr>
                    <tr>
                      <td>App1</td>
                      <td>014</td>
                      <td>Gói 04</td>
                      <td>2021-03-22 03:15:00</td>
                      <td className="text-center">100,000 VND</td>
                    </tr>
                    <tr>
                      <td>App3</td>
                      <td>015</td>
                      <td>Gói 05</td>
                      <td>2021-03-22 03:25:00</td>
                      <td className="text-center">400,000 VND</td>
                    </tr>
                    <tr>
                      <td>App3</td>
                      <td>016</td>
                      <td>Gói 06</td>
                      <td>2021-03-22 04:05:00</td>
                      <td className="text-center">200,000 VND</td>
                    </tr>
                    <tr>
                      <td>App1</td>
                      <td>017</td>
                      <td>Gói 07</td>
                      <td>2021-03-22 05:09:00</td>
                      <td className="text-center">100,000 VND</td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  );
}

export default Notifications;
