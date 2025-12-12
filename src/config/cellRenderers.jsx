export const StatusCellRenderer = (props) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
        props.value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {props.value ? "Active" : "Inactive"}
    </span>
  );
};

export const RatingCellRenderer = (props) => {
  const rating = props.value;
  const percentage = (rating / 5) * 100;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center gap-2">
        <div className="bg-gray-200 rounded-full h-2 w-24">
          <div
            className={`h-2 rounded-full ${
              rating >= 4.5
                ? "bg-green-500"
                : rating >= 4.0
                ? "bg-blue-500"
                : rating >= 3.5
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm font-semibold">{rating}</span>
      </div>
    </div>
  );
};

export const SkillsCellRenderer = (props) => {
  return (
    <div className="flex items-center h-full">
      <div className="flex flex-wrap gap-1 py-1">
        {props.value.map((skill, idx) => (
          <span
            key={idx}
            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const SalaryCellRenderer = (props) => {
  return (
    <span className="font-semibold text-green-700">
      ${props.value.toLocaleString()}
    </span>
  );
};
