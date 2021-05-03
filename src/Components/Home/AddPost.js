import React, { Component } from "react";
import getImg from "../../Utils/getImg";
import "./Home.scss";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
    };
  }

  handleSubmit() {
    if (this.props.toEdit !== null) {
      this.props.editPost(
        document.getElementById("postHead").value,
        document.getElementById("postData").value,
        this.state.file
      );
    } else {
      this.props.addPost(
        document.getElementById("postHead").value,
        document.getElementById("postData").value,
        this.state.file
      );
    }
  }

  handleUpload(item) {
    let x = this.state.file;
    x.push(item[0]);
    this.setState({
      file: x,
    });
  }

  removeFile(f) {
    let t = this.state.file;
    let l = t.length;
    let x = t.indexOf(f);
    t = t.splice(x, l - 1);
    this.setState({
      file: t,
    });
  }

  componentDidMount() {
    if (this.props.template.heading) {
      document.getElementById("postHead").value = this.props.template.heading;
      document.getElementById("postData").value = this.props.template.data;
      let x = [];
      x.push(this.props.template.files);
      this.setState({
        file: x,
      });
    }
  }

  render() {
    return (
      <div className="sa-modal-w">
        <div className="sa-modal-box">
          <img
            src={getImg("cross.svg")}
            style={{ position: "relative", right: "-50%", cursor: "pointer" }}
            className="close-btn"
            onClick={() => this.props.toggleAddModal(false)}
          />

          <div className="headingEntry">
            Heading
            <input id="postHead" />
          </div>
          <textarea id="postData" placeholder={"Add Data"} />
          <p>
            Attach Files{" "}
            <input
              type="file"
              onChange={(ev) => this.handleUpload(ev.target.files)}
            />
          </p>
          <React.Fragment>
            <div className="postFiles">
              {this.state.file &&
                this.state.file.map((f, ind) => {
                  return (
                    <div>
                      <img
                        src={getImg("cross.svg")}
                        style={{
                          position: "relative",
                          right: "-70px",
                          top: "-70px",
                          backgroundColor: "white",
                          cursor: "pointer",
                        }}
                        className="close-btn"
                        onClick={() => this.removeFile(f)}
                      />
                      <img
                        className="eachFile"
                        src={
                          f.type && !f.type.includes("image")
                            ? getImg("600px-Generic_File_OneDrive_icon.png")
                            : Object.keys(f).includes("0")
                            ? f
                            : URL.createObjectURL(f)
                        }
                        alt={f.name}
                        key={ind}
                      />
                    </div>
                  );
                })}
              {/* <div className="eachFile">
            <img id="eachFileAdd" src={getImg("cross.svg")} alt={"addFile"} />
          
          </div> */}
            </div>
          </React.Fragment>
          <button
            style={{ width: "50%" }}
            name="Add Post"
            className="sa-login-btn"
            onClick={() => this.handleSubmit()}
          >
            {this.props.toEdit !== null ? "Edit Post" : "Add Post"}
          </button>
        </div>
      </div>
    );
  }
}

export default AddPost;
