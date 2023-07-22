/* eslint-disable indent */
import { CollapseMenu } from "../../components/Collapse/Collapse";
import "../../styles/typography.scss";
import jsondata from "../../logements.json";
import { useParams } from "react-router-dom";
import { Tag } from "../../components/Tags/Tag";
import "./Accomodation.scss";
import "../../styles/typography.scss";
import ActiveStar from "../../Assets/icons/star-active.svg";
import InactiveStar from "../../Assets/icons/star-inactive.svg";
import { Carousel } from "../../components/CardGallery/Carrousel/Carousel";
import { Layout } from "../../components/Layout/Layout";

export const Accomodation = () => {
  const data = jsondata;
  const accomodationId = useParams();
  const index = data.findIndex(
    (accomodation) => accomodation.id === accomodationId.id
  );
  const accomodation = data[index];
  console.log(accomodation.pictures);

  let totalStars = 5;
  let activeStars = parseInt(accomodation.rating);
  let inactiveStars = totalStars - activeStars;
  return (
    <Layout>
      <div className="description-container">
        <Carousel images={accomodation.pictures} />
        <div className="details-container">
          <div className="title-container">
            <h2>{accomodation.title}</h2>
            <h4>{accomodation.location}</h4>
          </div>
          <div className="host-info">
            <h4>{accomodation.host.name}</h4>
            <div className="avatar"></div>
          </div>
        </div>
        <div className="spec-container">
          <div className="tags-container">
            {accomodation.tags.map((tag) => (
              <Tag key={tag} tagName={tag}></Tag>
            ))}
          </div>
          <div className="rating-container">
            {[...Array(activeStars)].map((_star, index) => {
              return (
                <img
                  src={ActiveStar}
                  className="star-icon"
                  key={`active-star-${index}`}
                />
              );
            })}
            {[...Array(inactiveStars)].map((_star, index) => {
              return (
                <img
                  src={InactiveStar}
                  className="star-icon"
                  key={`inactive-star-${index}`}
                />
              );
            })}
          </div>
        </div>
        <div className="info-container">
          <CollapseMenu title="Description" items={accomodation.description} />
          <CollapseMenu title="Équipements" items={accomodation.equipments} />
        </div>
      </div>
    </Layout>
  );
};
