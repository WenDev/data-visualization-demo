import { Pie } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '在网上查阅资料',
      Num: 167,
    },
    {
      Selection: '通过别人的介绍和推荐',
      Num: 141,
    },
    {
      Selection: '学习名人的作品',
      Num: 114,
    },
    {
      Selection: '实地参观名人故居',
      Num: 110,
    },
    {
      Selection: '其它方式（读书）',
      Num: 1,
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
    <Card title="5、您主要是通过什么方式来了解名人故居的（可多选）" hoverable>
      <Pie {...config} />
    </Card>
  )
}
