import { useParams } from "@remix-run/react";

const Note = () => {
  const params = useParams();
  return (
    <div>
      <div className="h-12 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"></div>
    </div>
  );
};

export default Note;
