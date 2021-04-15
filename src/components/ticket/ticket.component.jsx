import "./ticket.styles.scss";
import { getTime, convertMinToHHMM } from "./ticket.utils.js";
import Skeleton from "react-loading-skeleton";
function Ticket({ data, isSkeleton }) {
  if (isSkeleton) {
    return <Skeleton height={184} width={502} style={{ marginTop: 15 }} />;
  }

  let ticket = data;

  ticket = {
    ...ticket,
    price: new Intl.NumberFormat("fr-FR").format(ticket.price),
    segments: [
      {
        ...ticket.segments[0],
        duration: convertMinToHHMM(ticket.segments[0].duration),
        time: getTime(ticket.segments[0].date, ticket.segments[0].duration),
      },
      {
        ...ticket.segments[1],
        duration: convertMinToHHMM(ticket.segments[1].duration),
        time: getTime(ticket.segments[1].date, ticket.segments[1].duration),
      },
    ],
  };
  return (
    <div className="list__ticket">
      <div className="ticket__container">
        <div className="ticket__header">
          <div className="price">{ticket.price} Р</div>
          <div className="carrier">
            <img
              alt="carrier"
              src={`http://pics.avs.io/99/36/${ticket.carrier}.png`}
            ></img>
          </div>
        </div>
        <div className="ticket__footer">
          {ticket.segments.map((segment) => (
            <div className="ticket__info">
              <span className="info__time info ">
                <span class="info__text">
                  {segment.origin}-{segment.destination}
                </span>
                {segment.time}
              </span>
              <span className="info__duration info ">
                <span class="info__text">В пути</span>
                {segment.duration}
              </span>
              <span className="info__stops info ">
                <span class="info__text">
                  {segment.stops.length} пересад(ки/ка/ок)
                </span>
                {segment.stops.map((stop) => (
                  <span>{stop}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ticket;
