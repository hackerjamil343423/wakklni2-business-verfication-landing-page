'use client'

import { ComposedChart, Area, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { year: '2019', count: 73, value: '$116M' },
  { year: '2020', count: 92, value: '$154M' },
  { year: '2021', count: 152, value: '$589M' },
  { year: '2022', count: 157, value: '$1,040M' },
  { year: '2023', count: 125, value: '$1,383M' }
]

export default function InvestmentChart() {
  return (
    <div className="relative w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 30, left: 20, bottom: 40 }}
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#059669" stopOpacity={0.8} />
              <stop offset="50%" stopColor="#10b981" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#34d399" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            dy={10}
          />

          <YAxis hide />

          <Area
            type="monotone"
            dataKey="count"
            stroke="#059669"
            strokeWidth={3}
            fill="url(#areaGradient)"
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="count"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{ fill: '#ffffff', strokeWidth: 0, r: 4 }}
            activeDot={{ r: 6, fill: '#059669', strokeWidth: 2, stroke: '#ffffff' }}
          />

          {/* Custom value labels */}
          {data.map((entry, index) => (
            <g key={index}>
              <text
                x={`${(index / (data.length - 1)) * 100}%`}
                y={30}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="14"
                fontWeight="bold"
              >
                {entry.value}
              </text>
              <text
                x={`${(index / (data.length - 1)) * 100}%`}
                y={50}
                textAnchor="middle"
                fill="#059669"
                fontSize="16"
                fontWeight="bold"
              >
                {entry.count}
              </text>
            </g>
          ))}
        </ComposedChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="absolute top-4 right-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
          <span className="text-gray-300">قيمة الاستثمارات بالمليون ريال</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-white rounded-full"></div>
          <span className="text-gray-300">عدد الصفقات لأكثر من 100 مليون ريال</span>
        </div>
      </div>

      {/* Bottom note */}
      <div className="absolute bottom-2 right-4 text-xs text-gray-400">
        الاستثمارات الأجنبية في المملكة العربية السعودية لعام 2023
      </div>
    </div>
  )
}