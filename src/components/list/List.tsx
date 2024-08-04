import "./list.scss";
import Card from "../card/Card";
import { listData } from "../../lib/dummydata";
import { AnnouncementDto } from "../../types/Announcement";

function List() {
  return (
    <div className="list">
      {listData.map((item: AnnouncementDto) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
