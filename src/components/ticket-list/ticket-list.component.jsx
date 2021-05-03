import "./ticket-list.styles.scss";
import React, { Component } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getTickets } from "../../redux/tickets/tickets.actions";
import { selectTickets } from "../../redux/tickets/tickets.selectors";
import { selectFilterData } from "../../redux/filter/filter.selectors";
import Ticket from "../ticket/ticket.component";
class TicketList extends Component {
  componentDidMount() {
    const { getTickets } = this.props;
    getTickets();
  }

  render() {
    const { tickets, filter } = this.props;

    return (
      <div className="list">
        {tickets.length ? (
          tickets

            .filter((ticket) => {
              switch (filter) {
                case "one":
                  return (
                    ticket.segments[0].stops.length === 1 &&
                    ticket.segments[1].stops.length === 1
                  );
                case "two":
                  return (
                    ticket.segments[0].stops.length === 2 &&
                    ticket.segments[1].stops.length === 2
                  );
                case "three":
                  return (
                    ticket.segments[0].stops.length === 3 &&
                    ticket.segments[1].stops.length === 3
                  );
                case "none":
                  return (
                    ticket.segments[0].stops.length === 0 &&
                    ticket.segments[1].stops.length === 0
                  );
                default:
                  return (
                    ticket.segments[0].stops.length > 0 &&
                    ticket.segments[1].stops.length > 0
                  );
              }
            })
            .map((ticket, i) => <Ticket data={ticket} key={i + i * 3} />)
            .slice(0, 5)
        ) : (
          <Ticket isSkeleton={true} />
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  tickets: selectTickets,
  filter: selectFilterData,
});
const mapDispatchToProps = (dispatch) => ({
  getTickets: () => dispatch(getTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
