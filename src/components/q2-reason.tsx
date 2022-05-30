import { useState } from 'react'
import { WordCloud } from '@ant-design/charts'
import { Card } from 'antd'

export default () => {
  const [data, setData] = useState([
    {
      Selection: '不在青岛',
      Num: 1,
    },
    {
      Selection: '疫情',
      Num: 2,
    },
    {
      Selection: '对青岛不熟悉；疫情原因',
      Num: 1,
    },
    {
      Selection: '不在青岛，参观过别的名人故居',
      Num: 1,
    },
    {
      Selection: '太远了',
      Num: 1,
    },
  ])
  const config = {
    data,
    wordField: 'Selection',
    weightField: 'Num',
    colorField: 'Selection',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [32, 128],
      rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
  }

  return (
    <Card title="2、您未去过名人故居的原因是什么？-其它选项" hoverable>
      <WordCloud {...config} />
    </Card>
  )
}
