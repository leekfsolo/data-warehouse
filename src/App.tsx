import { useState } from "react";
import "./App.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import ChartAnnotation from "./features/Annotation/ChartAnnotation";
import CloseIcon from "@mui/icons-material/Close";
import SensorSelection from "./features/Sensor/SensorSelection";

function App() {
  const [open, setOpen] = useState(false);
  const [sensorList, setSensorList] = useState<string[]>(["1"]);
  const [confirmedSensorList, setConfirmedSensorList] = useState<string[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSensorList(["1"]);
  };

  const handleConfirm = () => {
    setConfirmedSensorList(sensorList);
    handleClose();
  };

  const addSensor = () => {
    setSensorList((prev) => [...prev, (prev.length + 1).toString()]);
  };

  return (
    <div className="app">
      <ChartAnnotation sensors={confirmedSensorList} />
      <Button
        className="demo-button"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Open dialog
      </Button>
      <Dialog
        maxWidth="md"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          className="d-flex align-items-center justify-content-between"
          id="alert-dialog-title"
        >
          <span>Chart Generation</span>
          <IconButton className="p-0" disableRipple onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="sensor-list d-flex flex-column gap-4">
            {sensorList.map((sensor, idx) => (
              <SensorSelection key={idx} sensor_id={sensor} />
            ))}
          </div>
          <div className="add-button">
            <Button variant="outlined" onClick={addSensor}>
              Add sensor
            </Button>
          </div>
        </DialogContent>
        <DialogActions className="px-4">
          <Button variant="contained" onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
