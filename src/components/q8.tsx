import { Bar } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '在网络媒体平台上增强宣传力度',
      Num: 139,
    },
    {
      Selection: '建立名人故居保护维修基金',
      Num: 151,
    },
    {
      Selection: '将名人故居与学校教育相结合',
      Num: 168,
    },
    {
      Selection: '开发特色旅游路线以及纪念品',
      Num: 152,
    },
    {
      Selection: '开发名人故居的线上参观平台',
      Num: 89,
    },
  ]
  const config = {
    data,
    xField: 'Num',
    yField: 'Selection',
    seriesField: 'Selection',
    label: {},
    legend: false,
  }
  return (
    <Card
      title="8、您认为哪些措施有利于青岛名人故居的开发利用？（可多选）"
      hoverable
    >
      <Bar {...config} />
    </Card>
  )
}
