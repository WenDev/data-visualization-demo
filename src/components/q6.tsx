import { Bar } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '美化城市，增加城市建筑多样性',
      Num: 134,
    },
    {
      Selection: '用于学术研究，发挥文化价值',
      Num: 170,
    },
    {
      Selection: '展现城市深厚的历史文化底蕴',
      Num: 146,
    },
    {
      Selection: '拉动城市经济效益，推动旅游业发展',
      Num: 166,
    },
    {
      Selection: '其它',
      Num: 2,
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
    <Card title="6、您认为名人故居的存在意义在于（可多选）" hoverable>
      <Bar {...config} />
    </Card>
  )
}
