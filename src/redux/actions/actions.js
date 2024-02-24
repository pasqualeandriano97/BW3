import { useSelector } from "react-redux";

export const ADD_USER_DATA = "ADD_USER_DATA";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const CURRENT_TOKEN = "CURRENT_TOKEN";
export const RESET_USER_DATA = "RESET_USER_DATA";
export const UPDATE_USER_POST = " UPDATE_USER_POST";
export const ADD_USER_POST = "ADD_USER_POST";
export const RESET_POST_DATA = "RESET_POST_DATA";
export const DELETE_USER_POST = "DELETE_USER_POST";
export const SAVE_HOME_POST = "SAVE_HOME_POST";
export const ADD_HOMEPAGE_POST = "ADD_HOMEPAGE_POST";
export const SAVE_ALL_JOBS = "SAVE_ALL_JOBS";
export const SAVE_CATEGORY_JOBS = "SAVE_CATEGORY_JOBS";
export const ADD_ALL_USERS_DATA = "ADD_ALL_USERS_DATA";
export const ADD_COMMENTS_POSTS = "ADD_COMMENTS_POSTS";
export const QUERY_SEARCH = "QUERY_SEARCH";
export const CURRENT_COMPANY = "CURRENT_COMPANY";
export const CURRENT_ID = "CURRENT_ID";

const userEndPoint = "https://striveschool-api.herokuapp.com/api/profile/me";

export const addUserData = (token) => {
  return async (dispatch) => {
    dispatch({ type: RESET_USER_DATA });
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(userEndPoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data._id);

        dispatch({ type: ADD_USER_DATA, payload: data });
        dispatch({ type: CURRENT_ID, payload: data._id });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
      dispatch({ type: CURRENT_TOKEN, payload: token });
    }
  };
};

export const addUserPost = (id, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(id, data);

        // dispatch({ type: RESET_POST_DATA });
        dispatch({ type: UPDATE_USER_POST, payload: data });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const newUserPost = (id, token, experience) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: ADD_USER_POST, payload: data });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const deleteUserPost = (id, token, experience) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experience}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: DELETE_USER_POST, payload: data });
        alert("Post eliminato con successo");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const saveHomePost = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const array = data.slice(-10);
        array.reverse();

        dispatch({ type: SAVE_HOME_POST, payload: array });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const editImage = (id, token, image) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: image,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("image", data);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const addHomePagePost = (token, text, image) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(editImage(data._id, token, image));
        alert("Post pubblicato con successo");

        console.log("data", data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const saveAllJobs = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        const array = data.filter((post, id) => id < 20);
        console.log("data", array);
        dispatch({ type: SAVE_ALL_JOBS, payload: array });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const saveCategoryJobs = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?category=dev&limit=4`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        const array = data.filter((post, id) => id < 50);
        console.log("data", array);
        dispatch({ type: SAVE_CATEGORY_JOBS, payload: data });
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const deletePost = (postId, userToken) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
      } else {
        console.log("Error");
        alert("Puoi eliminare solo i tuoi post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllUser = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const lastUsersData = data.slice(-40);
        dispatch({ type: ADD_ALL_USERS_DATA, payload: lastUsersData });
        console.log("tutti i profili", lastUsersData);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const fetchCommentPosts = (postID) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";
      const response = await fetch(myUrl, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NjYzNTc2YTY0YjAwMTllZjFiNDEiLCJpYXQiOjE3MDg2MTUyMjEsImV4cCI6MTcwOTgyNDgyMX0.ZI2EnEGZSWCBxFLoXHsuqVQ-n29GTPxdSPTfDX6Z_O4",
        },
      });
      if (response.ok) {
        const data = await response.json();
        const filteredComments = data.filter(
          (comment) => comment.elementId === postID
        );

        dispatch({ type: ADD_COMMENTS_POSTS, payload: filteredComments });
        console.log(" commenti", filteredComments);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const querySearch = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const myUrl =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" + query;
      const response = await fetch(myUrl, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTY4NDc2YTY0YjAwMTllZjE5ZDciLCJpYXQiOjE3MDg1OTQ4MjAsImV4cCI6MTcwOTgwNDQyMH0.dP8PfQiDUXJctVJmUd7eu4dnGxlD0O2fJvry3_qLXO4",
        },
      });
      if (response.ok) {
        const { data } = await response.json();

        const search = data.slice(0, 10);
        dispatch({ type: QUERY_SEARCH, payload: search });
        console.log("primi risultati", search);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const addComment = (comment, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";
      const response = await fetch(myUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("comment added", data);
        alert("comment added");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: TURN_OFF_SPINNER });
    }
  };
};

export const deleteComment = (commentID) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentID}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NjYzNTc2YTY0YjAwMTllZjFiNDEiLCJpYXQiOjE3MDg2MTUyMjEsImV4cCI6MTcwOTgyNDgyMX0.ZI2EnEGZSWCBxFLoXHsuqVQ-n29GTPxdSPTfDX6Z_O4",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert("Commento eliminato");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const modifyComment = (commentID, updatedCommentData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NjYzNTc2YTY0YjAwMTllZjFiNDEiLCJpYXQiOjE3MDg2MTUyMjEsImV4cCI6MTcwOTgyNDgyMX0.ZI2EnEGZSWCBxFLoXHsuqVQ-n29GTPxdSPTfDX6Z_O4",
          },
          body: JSON.stringify(updatedCommentData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert("Commento modificato");
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
};

export const updatePost = (postId, updatedPostData, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TURN_ON_SPINNER });
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(updatedPostData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert("Post modificato");
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      alert("Error:", error);
    }
  };
};
