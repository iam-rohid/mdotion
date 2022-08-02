import { MdNoteAdd } from "react-icons/md";

type Props = {
  title: string;
  onCreateNoteClick?: () => void;
  onTitleClick?: () => void;
};
const Header = (props: Props) => {
  const { title, onCreateNoteClick, onTitleClick } = props;
  return (
    <div className="header">
      <button onClick={onTitleClick}>
        <h3>{title}</h3>
      </button>
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
