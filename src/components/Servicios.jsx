import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Servicios() {
  return (
    <>
      <div className="container m-5">
        <h4>
          <strong> Algoritmos al servicio de tu negocio</strong>{" "}
        </h4>
        <p>Gracias a los últimos avances en tecnologías basadas en la nube en conjunto con IA & Machine Learning podemos almacenar y analizar prácticamente cantidades ilimitadas de datos.</p>
      </div>
      <Container className="align-items-md-center">
        <Row className="justify-content-md-center">
          <Col md={4}>
            <strong>Dashboard</strong>
          </Col>

          <Col md={8}>
            <p>Olvídate de esas presentaciones estáticas en power point. Analiza tus datos en tiempo real con gráficos interactivos que te permitan entender de mejor forma estos. </p>
            <hr></hr>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <strong>Forecasting</strong>
          </Col>
          <Col md={8}>
            <p>Pronostica tus ventas futuras, fuga de clientes,tendencias en los mercados. </p>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Servicios;
