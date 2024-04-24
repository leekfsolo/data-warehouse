import { TAlgorithm, TSensor } from "../types/type";

export const DUMMY_SENSORS: TSensor[] = [
  {
    sensor_id: "1",
    name: "Humidity Sensor",
  },
  {
    sensor_id: "2",
    name: "Thermal Sensor",
  },
  {
    sensor_id: "3",
    name: "Optical Sensor",
  },
  {
    sensor_id: "4",
    name: "Pressure Sensor",
  },
];

export const DUMMY_ALGORITHM: TAlgorithm[] = [
  {
    id: "1",
    sensor_id: "3",
    name: "Fast R-CNN",
  },
  {
    id: "2",
    sensor_id: "3",
    name: "Faster R-CNN",
  },
  {
    id: "3",
    sensor_id: "1",
    name: "Histogram of Oriented Gradients (HOG)",
  },
  {
    id: "4",
    sensor_id: "2",
    name: "Region-based Convolutional Neural Networks (R-CNN)",
  },
  {
    id: "5",
    sensor_id: "4",
    name: "Region-based Fully Convolutional Network (R-FCN)",
  },
  {
    id: "6",
    sensor_id: "1",
    name: "Single Shot Detector (SSD)",
  },
  {
    id: "7",
    sensor_id: "2",
    name: "Spatial Pyramid Pooling (SPP-net)",
  },
  {
    id: "8",
    sensor_id: "4",
    name: "YOLO (You Only Look Once)",
  },
];
