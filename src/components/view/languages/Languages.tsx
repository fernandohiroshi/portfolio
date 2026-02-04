'use client'

import { useTranslations } from 'next-intl'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import { Card, CardContent } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

import Box from '../bento/Box'

export const description = 'A mixed bar chart'

const chartData = [
  { browser: 'br', visitors: 99, fill: 'var(--color-br)' },
  { browser: 'jp', visitors: 70, fill: 'var(--color-jp)' },
  { browser: 'en', visitors: 30, fill: 'var(--color-en)' },
  { browser: 'es', visitors: 20, fill: 'var(--color-es)' },
]

const Languages = () => {
  const t = useTranslations('Languages')

  const chartConfig = {
    visitors: {
      label: t('levelLabel'),
    },
    br: {
      label: t('labels.pt'),
      color: 'hsl(var(--chart-1))',
    },
    jp: {
      label: t('labels.ja'),
      color: 'hsl(var(--chart-2))',
    },
    en: {
      label: t('labels.en'),
      color: 'hsl(var(--chart-3))',
    },
    es: {
      label: t('labels.es'),
      color: 'hsl(var(--chart-4))',
    },
  } satisfies ChartConfig

  return (
    <Box className="col-span-12 border-none bg-transparent md:col-span-4">
      <Card>
        <h2 className="text-xl font-medium tracking-widest md:text-2xl">{t('title')}</h2>
        <CardContent>
          <ChartContainer id="languages" config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                left: 20,
              }}
            >
              <YAxis
                dataKey="browser"
                type="category"
                tickLine={false}
                tickMargin={4}
                axisLine={false}
                tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
              />
              <XAxis dataKey="visitors" type="number" className="font-serif" />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="visitors" layout="vertical" radius={5} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Languages
