import { MdNoteAdd } from "react-icons/md";

type Props = {
  title: string;
  onCreateNoteClick?: () => void;
};
const Header = (props: Props) => {
  const { title, onCreateNoteClick } = props;
  return (
    <div className="header">
      <h3>{title}</h3>
      <ul role="list" className="tools-list">
        <li>
          <button onClick={onCreateNoteClick}>
            <MdNoteAdd />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
