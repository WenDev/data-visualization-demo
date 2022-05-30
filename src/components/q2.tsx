import { Pie } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '没有兴趣',
      Num: 29,
    },
    {
      Selection: '没有时间',
      Num: 78,
    },
    {
      Selection: '参观名人故居没有实际意义',
      Num: 21,
    },
    {
      Selection: '其它',
      Num: 11,
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
    <Card title="2、您未去过名人故居的原因是什么？" hoverable>
      <Pie {...config} />
    </Card>
  )
}
