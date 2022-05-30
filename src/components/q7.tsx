import { Bar } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '对历史名人固有的情感',
      Num: 165,
    },
    {
      Selection: '互联网上其他人的推荐',
      Num: 85,
    },
    {
      Selection: '名人故居周围的风景',
      Num: 141,
    },
    {
      Selection: '名人故居丰富历史和故事',
      Num: 186,
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
    <Card
      title="7、您认为什么方式会吸引您去了解与参观一处名人故居？（可多选）"
      hoverable
    >
      <Bar {...config} />
    </Card>
  )
}
