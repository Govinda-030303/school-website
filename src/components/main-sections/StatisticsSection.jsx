import React from "react"

import { statisticIcons } from "../../assets/statisticImages.js" // adjust path as needed
import StatisticsCard from "../card-type/StatisticsCard"

const statisticsData = [
  { data: "23", description: "Years Legacy" },
  { data: "1800", description: "Satisfied Clients" },
  { data: "96%", description: "Client Retention", hasPlus: false },
  { data: "40", description: "Modules" },
  { data: "2500", description: "Verified Reviews" },
  { data: "25000", description: "Professionals Trained" },
  { data: "1.5", description: "Millions Student", hasPlus: false },
  { data: "200", description: "IT Professional" },
]

const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-4 py-8">
      {statisticsData.map((stat, index) => (
        <StatisticsCard
          key={index}
          image={statisticIcons[index]}
          data={stat.data}
          description={stat.description}
          hasPlus={stat.hasPlus !== false} // default true unless explicitly false
        />
      ))}
    </div>
  )
}

export default StatisticsSection
