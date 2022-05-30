import { Bar } from '@ant-design/plots'
import { Card } from 'antd'

export default () => {
  const data = [
    {
      Selection: '去旅游，顺道去参观',
      Num: 58,
    },
    {
      Selection: '对名人十分喜爱，特地去参观其故居',
      Num: 43,
    },
    {
      Selection: '认识到名人故居的价值，认为名人故居值得参观',
      Num: 77,
    },
    {
      Selection: '在网络上或得到亲朋好友的推荐后去打卡参观',
      Num: 66,
    },
    {
      Selection: '学校/单位组织去参观',
      Num: 13,
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
    <Card title="4、您选择去的理由是（可多选）" hoverable>
      <Bar {...config} />
    </Card>
  )
}
