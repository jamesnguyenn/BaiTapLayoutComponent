import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="card-lists">
        <div className="card">
          <div
            className="card__image"
            style={{
              width: "100%",
              height: "200px",
              flexShrink: "0",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1648454019718-e80ee0e9121e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="card-1"
            />
          </div>
          <div className="card__content">
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Card Title
            </h2>
            <p
              style={{
                fontSize: "13px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              esse quisquam iste in ipsa ad eum incidunt excepturi delectus ut
              suscipit eligendi sint eius quas, at est quos explicabo unde.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginTop: "auto",
              }}
            >
              Find Out More!
            </button>
          </div>
        </div>
        <div className="card">
          <div
            className="card__image"
            style={{
              width: "100%",
              height: "200px",
              flexShrink: "0",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1631028132434-281507087075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="card-2"
            />
          </div>
          <div className="card__content">
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Card Title
            </h2>
            <p
              style={{
                fontSize: "13px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              esse quisquam iste in ipsa ad eum incidunt excepturi delectus ut
              suscipit eligendi sint eius quas, at est quos explicabo unde.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginTop: "auto",
              }}
            >
              Find Out More!
            </button>
          </div>
        </div>
        <div className="card">
          <div
            className="card__image"
            style={{
              width: "100%",
              height: "200px",
              flexShrink: "0",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1547602543-671c6e89a25a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="card-3"
            />
          </div>
          <div className="card__content">
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Card Title
            </h2>
            <p
              style={{
                fontSize: "13px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              esse quisquam iste in ipsa ad eum incidunt excepturi delectus ut
              suscipit eligendi sint eius quas, at est quos explicabo unde.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginTop: "auto",
              }}
            >
              Find Out More!
            </button>
          </div>
        </div>
        <div className="card">
          <div
            className="card__image"
            style={{
              width: "100%",
              height: "200px",
              flexShrink: "0",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1606851182594-953bc03b61c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="card-4"
            />
          </div>
          <div className="card__content">
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Card Title
            </h2>
            <p
              style={{
                fontSize: "13px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              esse quisquam iste in ipsa ad eum incidunt excepturi delectus ut
              suscipit eligendi sint eius quas, at est quos explicabo unde.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginTop: "auto",
              }}
            >
              Find Out More!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
