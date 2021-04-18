import ExpenseAdder from "./ExpenseAdder"
import ExpenseList from "./ExpenseList"
import BudgetEntry from "./BudgetEntry"
import { Container, Row, Col } from "react-bootstrap"
import { BudgetContext } from "../Contexts/BudgetContext"
import { useContext } from "react"
import { PieChart, Pie } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Budget() {

    const { budgetTotal, expenses } = useContext(BudgetContext)

    return (
        <div>
            <Container>
                <Row>
                    <Col> 
                    {   
                        (budgetTotal !== 0) 
                        ? <ExpenseAdder />
                        : <BudgetEntry />
                    }
                    </Col>
                    <Col>
                        {
                            (budgetTotal !== 0) &&
                            <h1>Budget: ${budgetTotal}</h1>
                        }
                        <ExpenseList />
                    </Col>
                </Row>
                <Row>
                    <PieChart width={400} height={400}>
                        <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={expenses}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        nameKey="name"
                        label={renderCustomizedLabel}
                        />
                    </PieChart>
                </Row>
            </Container>
        </div>
    );
}

export default Budget;