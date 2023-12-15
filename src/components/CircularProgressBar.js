'use client'
const CircularProgressBar = ({ percent }) => {
  const strokeWidth = 8;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg className="w-20 h-20" viewBox="0 0 100 100">
        <circle
          className="stroke-current text-blue-500"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={50}
          cy={50}
        />
        <circle
          className="stroke-current text-green-500 transition-all ease-in-out duration-300"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={50}
          cy={50}
        />
        <text
          x="50%"
          y="50%"
          className="text-2xl font-bold text-center fill-current text-blue-500"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
