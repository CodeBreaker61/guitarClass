import React, { Component } from "react";
import getImg from "../../Utils/getImg";
import "./Schedule.scss";

const colorChart = {
  0: "#fff",
  1: "#f26157",
  2: "#65b268",
  3: "#8590c9",
  4: "#f4e45b",
};

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeTable:
        this.props.isLoggedIn == "admin"
          ? [
              { day: "Monday", slots: [0, 0, 0] },
              { day: "Tuesday", slots: [0, 0, 0] },
              { day: "Wednesday", slots: [0, 0, 0] },
              { day: "Thursday", slots: [0, 0, 0] },
              { day: "Friday", slots: [0, 0, 0] },
            ]
          : [
              { day: "Monday", slots: [1, 4, 3] },
              { day: "Tuesday", slots: [0, 1, 4] },
              { day: "Wednesday", slots: [3, 2, 0] },
              { day: "Thursday", slots: [2, 1, 3] },
              { day: "Friday", slots: [0, 2, 4] },
            ],
      studentData: [
        { name: "Sumukh", group: 2 },
        { name: "Pavan", group: 1 },
        { name: "Manish", group: 1 },
        { name: "Akshay", group: 4 },
        { name: "Seghu", group: 3 },
      ],
    };
  }

  setSlot(day, slot) {
    if (this.props.isLoggedIn !== "admin") {
      return;
    }

    let x = this.state.timeTable;
    x[day].slots[slot] = (x[day].slots[slot] + 1) % 5;
    this.setState({
      timeTable: x,
    });
  }

  setGroup(s) {
    let x = this.state.studentData;
    x[s].group = (x[s].group + 1) % 5;
    this.setState({
      studentData: x,
    });
  }

  render() {
    return (
      <div className="sa-schedule-w">
        {this.props.isLoggedIn == "admin" ? (
          <div className="students">
            <div className="studentHead">Student Groups</div>
            <div className="studentGroup">
              {this.state.studentData.map((s, i) => {
                return (
                  <div
                    className="eachStudent"
                    onClick={() => this.setGroup(i)}
                    style={{ backgroundColor: colorChart[s.group] }}
                  >
                    {s.name}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        <div className="timeTable">
          <div className="timeTableHead">
            Time Table
            {this.props.isLoggedIn !== "admin" ? (
              <div>
                Your Group: <div className="groupPalette" />
              </div>
            ) : null}
          </div>
          <table>
            <tr>
              <th>Days/Slots</th>
              <th>
                Slot 1<br />
                6AM-7AM
              </th>
              <th>
                Slot 2<br />
                3PM-4PM
              </th>
              <th>
                Slot 3<br />
                7PM-8PM
              </th>
            </tr>

            {this.state.timeTable.map((day, ind) => {
              return (
                <tr>
                  <th>{day.day}</th>
                  {day.slots.map((slot, i) => (
                    <td
                      onClick={() => this.setSlot(ind, i)}
                      style={{ backgroundColor: colorChart[slot] }}
                    />
                  ))}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Schedule;
