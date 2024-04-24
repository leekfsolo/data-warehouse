import { useState, useMemo } from "react";
import CSelect from "../../components/CSelect";
import { DUMMY_ALGORITHM, DUMMY_SENSORS } from "../../constants";
import { SelectChangeEvent } from "@mui/material";

interface Props {
  sensor_id: string;
}

const SensorSelection = (props: Props) => {
  const { sensor_id } = props;
  const [selectedSensorId, setSelectedSensorId] =
    useState<string>("defaultValue");
  const [selectedAlgorithmId, setSelectedAlgorithmId] =
    useState<string>("defaultValue");

  const isAlgorithmAvailable = selectedSensorId !== "defaultValue";

  const availableAlgorithms = useMemo(() => {
    return DUMMY_ALGORITHM.filter(
      (algorithm) => selectedSensorId === algorithm.sensor_id
    );
  }, [selectedSensorId]);

  const onChangeSensor = (event: SelectChangeEvent<unknown>) => {
    const {
      target: { value },
    } = event;
    setSelectedSensorId(value as string);
    setSelectedAlgorithmId("defaultValue");
  };

  const onChangeAlgorithm = (event: SelectChangeEvent<unknown>) => {
    setSelectedAlgorithmId(event.target.value as string);
  };

  const sensorOptions = DUMMY_SENSORS.map((sensor) => {
    return {
      id: sensor.sensor_id,
      value: sensor.name,
    };
  });

  const algorithmOptions = availableAlgorithms.map((algorithm) => {
    return {
      id: algorithm.id,
      value: algorithm.name,
    };
  });

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="sensor-selection">
        <CSelect
          options={sensorOptions}
          onChange={onChangeSensor}
          value={selectedSensorId}
          label="Sensor"
          placeholder="Select a sensor"
          name={`sensor ${sensor_id}`}
        />
      </div>

      <div className="algorithm-selection">
        <CSelect
          options={algorithmOptions}
          onChange={onChangeAlgorithm}
          value={selectedAlgorithmId}
          label="Algorithm"
          placeholder="Select an algorithm"
          disabled={!isAlgorithmAvailable}
          name={`algorithm ${sensor_id}`}
        />
      </div>
    </div>
  );
};

export default SensorSelection;
