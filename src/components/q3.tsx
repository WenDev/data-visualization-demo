import { Bar } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '康有为故居',
      Num: 58,
    },
    {
      Selection: '老舍故居',
      Num: 72,
    },
    {
      Selection: '沈从文故居',
      Num: 43,
    },
    {
      Selection: '闻一多故居',
      Num: 59,
    },
    {
      Selection: '其它',
      Num: 4,
    },
  ]
  const config = {
    data,
    xField: 'Num',
    yField: 'Selection',
    seriesField: 'Selection',
    label: {},
    legend: {
      position: 'top-left',
    },
  }
  return (
    <Card title="3、下列青岛的名人故居您去过哪些呢？（可多选）" hoverable>
      <Bar {...config} />
    </Card>
  )
}
