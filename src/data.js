import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { CategoryScale } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

export const data = [
  {
    dataId: "trd355446",
    daysLeft: 10,
    text: "2 files are waiting to be Updated",
  },
  {
    dataId: "355446455",
    daysLeft: 10,
    text: "2 files are waiting to be Updated",
  },
  {
    dataId: "755655446",
    daysLeft: 10,
    text: "2 files are waiting to be Updated",
  },
  {
    dataId: "655355446",
    daysLeft: 10,
    text: "2 files are waiting to be Updated",
  },
];

export const frequentData = [
  {
    id: 1,
    title: "Contract Execution Upload",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia. adipisicing elit. Mollitia.",
  },
  {
    id: 2,
    title: "E-Sign Services",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia. adipisicing elit. Mollitia.",
  },
  {
    id: 3,
    title: "E-Stamp Services",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia. adipisicing elit. Mollitia.",
  },
];

export const orderData = [
  {
    id: 1,
    count: 18,
    icon: "bx bxl-dropbox",
    title: "Total Orders",
    progress: "bx bx-trending-up",
    loss: "",
  },
  {
    id: 2,
    count: 10,
    icon: "bx bx-time-five",
    title: "In progress",
    progress: "bx bx-trending-up",
    loss: "",
  },
  {
    id: 3,
    count: 5,
    icon: "bx bxs-package",
    title: "Completed Order",
    progress: "bx bx-trending-up",
    loss: "",
  },
  {
    id: 4,
    count: 3,
    icon: "bx bxs-package",
    title: "Cancelled Order",
    progress: "bx bx-trending-down",
    loss: "red",
  },
];

export const countData = [
  {
    id: 1,
    title: "E-sign Count",
  },
  {
    id: 2,
    title: "E-stamp Count",
  },
];

export const chartData = {
  labels: ["Signed", "Pending", "Expired", "Initiated"],
  datasets: [
    {
      data: [18, 20, 21, 55],
      backgroundColor: [
        "rgb(78, 22, 131)",
        "rgb(164, 109, 216)",
        "rgb(233, 210, 255)",
        "#e7e7e7",
      ],
      borderRadius: 10,
      borderWidth: 0,
      hoverOffset: 2,
      spacing: -19,
      offset: 0,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      enabled: true,
      backgroundColor: "rgb(36, 36, 77)",
      titleColor: "rgb(164, 164, 216)",
      bodyColor: "white",
      bodyFont: {
        size: 15,
        weight: "600",
      },
      titleFont: {
        size: 13,
        weight: "500",
      },
      callbacks: {
        // Custom tooltip title
        title: (tooltipItems) => {
          const index = tooltipItems[0].dataIndex;
          const label = chartData.labels[index];
          return `${label}`;
        },
        label: (tooltipItem) => {
          const value = tooltipItem.raw;
          return `${value} orders`;
        },
      },
      caretSize: 0,
      cornerRadius: 6,
      padding: 15,
      displayColors: false,
      mode: "index",
      intersect: false,
      position: "average",
    },
  },

  cutout: "80%",
};
