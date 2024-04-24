import { useMemo } from "react";
import ChartSection from "./ChartSection";
import { faker } from "@faker-js/faker";
import "./chartAnnotation.scss";

interface Props {
  sensors: string[];
}

const ChartAnnotation = (props: Props) => {
  const { sensors } = props;
  const labels = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );
  const chartsData: number[][] = useMemo(
    () =>
      sensors.map(() =>
        labels.map(() => faker.number.float({ min: 0, max: 100 }))
      ),
    [sensors, labels]
  );
  return (
    <div className="chart-list container">
      {chartsData.map((chart, key) => (
        <ChartSection
          key={key}
          chartData={chart}
          labels={labels}
          color={faker.color.rgb()}
        />
      ))}
    </div>
  );
};

export default ChartAnnotation;
