/* eslint-disable indent */
import { Collapse } from "../../components/Collapse/Collapse";
import "../../styles/typography.scss";
import jsondata from "../../logements.json";
import { useParams } from "react-router-dom";
import { Tag } from "../../components/Tags/Tag";
import "./Accomodation.scss";
import "../../styles/typography.scss";
import ActiveStar from "../../Assets/icons/star-active.svg";
import InactiveStar from "../../Assets/icons/star-inactive.svg";
import { Carousel } from "../../components/Carrousel/Carousel";
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
      <div className="accomodation-container">
        <Carousel images={accomodation.pictures} />
        <div className="accomodation-info">
          <div className="general-info-container">
            <div className="location-info">
              <h2>{accomodation.title}</h2>
              <h4>{accomodation.location}</h4>
              <div className="tags-container">
                {accomodation.tags.map((tag) => (
                  <Tag key={tag} tagName={tag}></Tag>
                ))}
              </div>
            </div>
            <div className="host-container">
              <div className="host-info">
                <h4>{accomodation.host.name}</h4>
                <div className="avatar">
                  <img
                    src={accomodation.host.picture}
                    className="host-picture"
                    alt="host picture"
                  />
                </div>
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
          </div>
          <div className="spec-container">
            <Collapse
              className="collapse"
              title="Description"
              items={accomodation.description}
            />
            <Collapse
              className="collapse"
              title="Équipements"
              items={accomodation.equipments}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
