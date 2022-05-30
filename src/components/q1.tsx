import { Card } from 'antd'
import { Pie } from '@ant-design/plots'

export default () => {
  const data = [
    {
      Selection: '是',
      Num: 118,
    },
    {
      Selection: '否',
      Num: 139,
    },
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'Num',
    colorField: 'Selection',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{value}（{percentage}）',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  }
  return (
    <Card title="1、您是否参观过青岛市的名人故居？" hoverable>
      <Pie {...config} />
    </Card>
  )
}
