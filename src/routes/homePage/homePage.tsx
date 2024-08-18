import Searchbar from "../../components/searchbar/Searchbar";
import { HomepageContent } from "../../constants/app-content";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">{HomepageContent.title}</h1>
          <p>{HomepageContent.subtitle}</p>
          <Searchbar />
          <div className="boxes">
            {HomepageContent.info.map((info, index) => (
              <div className="box" key={index}>
                <h1>{info.title}</h1>
                <h2>{info.content}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
