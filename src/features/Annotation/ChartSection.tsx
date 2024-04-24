import { useState, ChangeEvent } from "react";
import { IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { Line } from "react-chartjs-2";
import {
  ChartData,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  chartData: number[];
  labels: string[];
  color: string;
}

const ChartSection = (props: Props) => {
  const { chartData, labels, color } = props;
  const [comment, setComment] = useState<string>("");
  const [currentCommentList, setCurrentCommentList] = useState<string[]>([]);
  const [isOpenCommentBox, setIsOpenCommentBox] = useState<boolean>(false);

  const openCommentBox = () => setIsOpenCommentBox(true);
  const closeCommentBox = () => setIsOpenCommentBox(false);
  const toggleCommentBox = () => setIsOpenCommentBox(!isOpenCommentBox);

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSubmitComment = () => {
    setCurrentCommentList((prev) => [comment, ...prev]);

    setComment("");
  };

  const data: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: "My First Dataset",
        data: chartData,
        fill: false,
        borderColor: color,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart" onClick={toggleCommentBox}>
        <Line data={data} options={options} />
      </div>

      {isOpenCommentBox ? (
        <div className="chart-comment-box">
          <div className="box-header">
            <IconButton onClick={closeCommentBox}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="box-comment">
            {currentCommentList.map((comment, key) => (
              <p className="comment" key={key}>
                {comment}
              </p>
            ))}
          </div>
          <div className="box-input">
            <textarea
              value={comment}
              onChange={onChangeComment}
              placeholder="Enter a comment"
            />
            <IconButton onClick={onSubmitComment} disabled={!comment}>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <IconButton
          className="chart-container-control"
          onClick={openCommentBox}
        >
          <CommentIcon />
        </IconButton>
      )}
    </div>
  );
};

export default ChartSection;
