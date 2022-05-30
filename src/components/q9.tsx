import { Pie } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '对名人故居建筑的保护不及时，致使建筑保存情况较差',
      Num: 146,
    },
    {
      Selection: '缺乏针对名人故居开发的专业指导',
      Num: 145,
    },
    {
      Selection: '宣传方式过于传统，没有新意',
      Num: 132,
    },
    {
      Selection: '宣传力度不足，市民缺乏了解',
      Num: 89,
    },
    {
      Selection: '缺少资金支持',
      Num: 122,
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
      content: '{value}（{percentage}）',
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
    <Card title="9、您认为青岛市名人故居发展现存的难题在于（可多选）" hoverable>
      <Pie {...config} />
    </Card>
  )
}
