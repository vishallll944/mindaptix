"use client";

import { useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MONTHLY = [
  { month: "Oct", clicks: 8200, impressions: 180000 },
  { month: "Nov", clicks: 10400, impressions: 220000 },
  { month: "Dec", clicks: 12600, impressions: 265000 },
  { month: "Jan", clicks: 15800, impressions: 310000 },
  { month: "Feb", clicks: 19200, impressions: 380000 },
  { month: "Mar", clicks: 24100, impressions: 465000 },
];

const METRICS = [
  { label: "Clicks", value: "48.2K", delta: "+186%", down: false },
  { label: "Impressions", value: "1.42M", delta: "+142%", down: false },
  { label: "Avg. Position", value: "6.4", delta: "−12.3", down: true },
  { label: "CTR", value: "3.4%", delta: "+0.9pt", down: false },
];

export function SeoDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const chartData = useMemo(() => MONTHLY, []);

  return (
    <div ref={ref} className="perf-dashboard">
      <div className="perf-panel">
        <div className="perf-panel__header">
          <div>
            <p className="eyebrow">Performance</p>
            <h3 className="section-title" style={{ fontSize: "1.5rem", marginBottom: 0 }}>
              SEO analytics overview
            </h3>
          </div>
          <span className="perf-panel__period">Last 6 months</span>
        </div>

        <div className="perf-metrics">
          {METRICS.map((metric) => (
            <div key={metric.label} className="perf-metric">
              <p className="perf-metric__label">{metric.label}</p>
              <p className="perf-metric__value">{metric.value}</p>
              <p className={`perf-metric__delta${metric.down ? " is-down" : ""}`}>
                {metric.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="perf-chart-area">
          {inView ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="clicksFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8BE34A" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#8BE34A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(230,232,228,0.7)" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#8A8F87", fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#8A8F87", fontSize: 12 }}
                  width={40}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #E6E8E4",
                    boxShadow: "0 12px 30px rgba(11,13,12,0.08)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="#6BC42E"
                  strokeWidth={2.5}
                  fill="url(#clicksFill)"
                  animationDuration={1200}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : null}
        </div>

        <div className="perf-chart-area" style={{ marginTop: "1rem", minHeight: 180 }}>
          {inView ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="rgba(230,232,228,0.7)" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#8A8F87", fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#8A8F87", fontSize: 12 }}
                  width={48}
                  tickFormatter={(v) => `${Math.round(Number(v) / 1000)}k`}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #E6E8E4",
                    boxShadow: "0 12px 30px rgba(11,13,12,0.08)",
                  }}
                />
                <Bar
                  dataKey="impressions"
                  fill="#111111"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
        </div>

        <div className="perf-health">
          <div className="perf-health__item">
            <p className="perf-health__label">Site health</p>
            <p className="perf-health__value">98/100</p>
          </div>
          <div className="perf-health__item">
            <p className="perf-health__label">Pages indexed</p>
            <p className="perf-health__value">1,284</p>
          </div>
          <div className="perf-health__item">
            <p className="perf-health__label">Keyword visibility</p>
            <p className="perf-health__value">+312%</p>
          </div>
          <div className="perf-health__item">
            <p className="perf-health__label">Organic growth</p>
            <p className="perf-health__value">+186%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
