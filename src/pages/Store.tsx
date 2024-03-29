import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/Storeitem"

export function Store() {
    return (
    <>
     <h1>CARRINHO FÁCIL</h1> 
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                <StoreItem {...item} />
                </Col>
            ))}
        </Row>
    </>
    )
}