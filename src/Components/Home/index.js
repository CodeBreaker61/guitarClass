import React, { Component } from "react";
import getImg from "../../Utils/getImg";
import "./Home.scss";
import f1 from "./../../assets/images/guitarBack.jpg";
import AddPost from "./AddPost";

const colorChart = {
  1: "#f26157",
  2: "#65b268",
  3: "#8590c9",
  4: "#f4e45b",
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addModal: false,
      template: { heading: "", data: "", files: [] },
    };
  }
  componentDidMount() {
    this.setState({
      data: [
        {
          id: "p0001",
          heading: "Lesson 1",
          user: "Jithin Kumar",
          date: "Sun May 02 2021 10:09:06 GMT+0530",
          data:
            "<p>Introduction to music</p><p>All music is made up of 12+1 notes.....</p>",
          files: [f1],
          comments: [
            {
              user: "sumukh",
              date: "Sun May 02 2021 10:10:06 GMT+0530",
              line: "Nice",
              group: 2,
            },
            {
              user: "pavan",
              date: "Sun May 02 2021 10:12:06 GMT+0530",
              line: "Oh",
              group: 1,
            },
            {
              user: "manish",
              date: "Sun May 02 2021 11:09:06 GMT+0530",
              line: "Why",
              group: 1,
            },
            {
              user: "akshay",
              date: "Sun May 02 2021 11:20:06 GMT+0530",
              line: "Sure",
              group: 4,
            },
            {
              user: "seghu",
              date: "Sun May 02 2021 12:09:06 GMT+0530",
              line: "Forget",
              group: 3,
            },
          ],
        },
      ],
    });
  }

  toggleAddModal = (val) => {
    this.setState({
      addModal: val,
    });
  };

  addPost = (head, body, attach) => {
    let f = JSON.stringify(body).split("\\n");
    let h;
    console.log(f);
    h = "<p>" + f.join("</p><p>").trim('"').slice(1, -1) + "</p>";
    let x = {
      id: "p0002",
      heading: head,
      user: "Jithin Kumar",
      date: new Date().toGMTString(),
      data: h,
      files: attach,
      comments: [
        {
          user: "Kesavan",
          date: "Sun May 02 2021 10:09:06 GMT+0530",
          line: "Nice",
          group: 1,
        },
      ],
    };
    let y = this.state.data;
    y.push(x);
    this.setState({
      data: y,
    });
    this.toggleAddModal(false);
  };

  toggleEditModal = (id) => {
    let x = this.state.template;
    let f = this.state.data.map((e) => {
      if (e.id == id) return e;
    });
    x.heading = f[0].heading;
    x.data = f[0].data;
    x.files.push(f[0].files);
    this.setState({
      template: x,
    });
    this.toggleAddModal(true);
  };

  render() {
    return (
      <div className="sa-home-w">
        {this.state.data.map((e, i) => {
          return (
            <div className="eachPost" key={i}>
              <div className="header">
                <div>
                  <div className="headerIcon">{e.user[0].toUpperCase()}</div>
                  <div className="nameAndDate">
                    <div className="namePost">{e.user}</div>
                    <div className="datePost">{e.date.split("GMT")[0]}</div>
                  </div>
                </div>
                {this.props.isLoggedIn == "admin" ? (
                  <div
                    className="editPost"
                    onClick={() => this.toggleEditModal(e.id)}
                  >
                    Edit
                  </div>
                ) : null}
              </div>
              <div className="body">
                <div className="mainBody">
                  <div className="postHead">{e.heading}</div>
                  <div
                    className="postBody"
                    dangerouslySetInnerHTML={{ __html: e.data }}
                  />
                  <div className="attachedFiles">
                    {e.files &&
                      e.files.map((f, ind) => {
                        return (
                          <img
                            className="eachFile"
                            src={
                              Object.keys(f).includes("0")
                                ? f
                                : URL.createObjectURL(f)
                            }
                            alt={f.name}
                            key={ind}
                            download
                          />
                        );
                      })}
                  </div>
                </div>
                <div className="comments">
                  <div className="commentsHeader">Comments</div>
                  <div className="commentsBody">
                    {e.comments &&
                      e.comments.map((c, ind) => {
                        return (
                          <div
                            className="eachComment"
                            key={ind}
                            style={{ backgroundColor: colorChart[c.group] }}
                          >
                            <div className="commentUser">{c.user}</div>
                            <div className="commentDate">
                              {c.date.split("GMT")[0]}
                            </div>
                            <div className="commentLine">{c.line}</div>
                          </div>
                        );
                      })}
                  </div>
                  <input
                    type="text"
                    className="commentsInput"
                    placeholder="Write a comment"
                  />
                </div>
              </div>
            </div>
          );
        })}

        {this.props.isLoggedIn == "admin" ? (
          <span class="sa-add-post">
            <img
              src={getImg("cross.svg")}
              alt="Add Post"
              onClick={() => this.toggleAddModal(true)}
            />
          </span>
        ) : null}
        {this.state.addModal ? (
          <AddPost
            addPost={this.addPost.bind(this)}
            template={this.state.template}
            toggleAddModal={this.toggleAddModal.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;