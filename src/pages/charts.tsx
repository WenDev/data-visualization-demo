import Q1 from '@/components/q1'
import Q2 from '@/components/q2'
import Q2Reason from '@/components/q2-reason'
import Q3 from '@/components/q3'
import Q4 from '@/components/q4'
import Q5 from '@/components/q5'
import Q6 from '@/components/q6'
import Q7 from '@/components/q7'
import Q8 from '@/components/q8'
import Q9 from '@/components/q9'
import Q10 from '@/components/q10'
import { Row, Col } from 'antd'

export default () => {
  return (
    <div style={{ backgroundColor: '#ececec', padding: '32px' }}>
      <Row gutter={32}>
        <Col span={12}>
          <Q1 />
        </Col>
        <Col span={12}>
          <Q2 />
        </Col>
      </Row>
      <Row gutter={32} style={{ margin: '32px 0' }}>
        <Col span={12}>
          <Q2Reason />
        </Col>
        <Col span={12}>
          <Q3 />
        </Col>
      </Row>
      <Row gutter={32} style={{ margin: '32px 0' }}>
        <Col span={12}>
          <Q4 />
        </Col>
        <Col span={12}>
          <Q5 />
        </Col>
      </Row>
      <Row gutter={32} style={{ margin: '32px 0' }}>
        <Col span={12}>
          <Q6 />
        </Col>
        <Col span={12}>
          <Q7 />
        </Col>
      </Row>
      <Row gutter={32} style={{ margin: '32px 0' }}>
        <Col span={12}>
          <Q8 />
        </Col>
        <Col span={12}>
          <Q9 />
        </Col>
      </Row>
      <Row gutter={32} style={{ margin: '32px 0' }}>
        <Col span={24}>
          <Q10 />
        </Col>
      </Row>
    </div>
  )
}
