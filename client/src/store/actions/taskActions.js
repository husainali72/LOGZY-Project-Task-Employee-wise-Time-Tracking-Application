import { DeleteFetch, GetFetch, PostFetch, UpdateFetch } from '../../utils/fetch-sevice';
import swal from 'sweetalert';

export const TASK_FETCHED_SUCCESSFULLY = 'TASK_FETCHED_SUCCESSFULLY';
export const TASK_LOADER = 'TASK_LOADER';
export const TASK_ACTION_FAIL = 'TASK_ACTION_FAIL';
export const TASK_UPDATED_SUCCESSFULLY = 'TASK_UPDATED_SUCCESSFULLY';
export const TASK_ADDED_SUCCESSFULLY = 'TASK_ADDED_SUCCESSFULLY';
export const EMPLOYEE_TASKS_FETCHED_SUCCESSFULLY = 'EMPLOYEE_TASKS_FETCHED_SUCCESSFULLY';


export const GetAllTasksAction = () => (dispatch) => {
  dispatch({
    type: TASK_LOADER,
  });

  GetFetch("getTasks")
    .then((response) => {
      var data = response.data;
      let { message } = response.data;
      if (response.status === 200) {
        dispatch({
          type: TASK_FETCHED_SUCCESSFULLY,
          payload: data || [],
        });
      } else {
        dispatch({
          type: TASK_ACTION_FAIL,
        });
        swal({
          title: message || "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: TASK_ACTION_FAIL,
        payload: "Something went wrong. Please try again later.",
      });
      swal({
        title: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        showConfirmButton: false,
      });
    });
};

export const EmployeeTasksAction = () => (dispatch) => {
  dispatch({
    type: TASK_LOADER,
  });

  GetFetch("employee/tasks")
    .then((response) => {
      var data = response.data;
      let { message } = response.data;
      if (response.status === 200) {
        dispatch({
          type: EMPLOYEE_TASKS_FETCHED_SUCCESSFULLY,
          payload: data || [],
        });
      } else {
        dispatch({
          type: TASK_ACTION_FAIL,
        });
        swal({
          title: message || "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: TASK_ACTION_FAIL,
        payload: "Something went wrong. Please try again later.",
      });
      swal({
        title: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        showConfirmButton: false,
      });
    });
};

export const AddTaskAction = (requestBody) => (dispatch) => {
  dispatch({
    type: TASK_LOADER,
  });

  PostFetch("addTask", requestBody)
    .then((response) => {
      let { message } = response.data;
      if (response.status === 200) {
        swal({
          title: message || "fsadfl; Added Successfully",
          icon: "success",
          showConfirmButton: false,
        });
        dispatch({
          type: TASK_ADDED_SUCCESSFULLY,
          payload: "",
        });
        dispatch(GetAllTasksAction());
      } else {
        dispatch({
          type: TASK_ACTION_FAIL,
        });
        swal({
          title: message || "Something went wrong. Please try again later.",
          icon: "error",
          showConfirmButton: false,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: TASK_ACTION_FAIL,
        payload: "Something went wrong. Please try again later.",
      });
      swal({
        title: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        showConfirmButton: false,
      });
    });
};

export const UpdateTaskAction = (id, requestBody) => (dispatch) => {
  dispatch({
    type: TASK_LOADER,
  });

  UpdateFetch(`updateTask/${id}`, requestBody)
    .then((response) => {
      let { message } = response.data;
      if (response.status === 200) {
        swal({
          title: message || "fsadfl; Added Successfully",
          icon: "success",
          showConfirmButton: false,
        });
        dispatch({
          type: TASK_UPDATED_SUCCESSFULLY,
          payload: "",
        });
        dispatch(GetAllTasksAction());
      } else {
        dispatch({
          type: TASK_ACTION_FAIL,
        });
        swal({
          title: message || "Something went wrong. Please try again later.",
          icon: "error",
          showConfirmButton: false,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: TASK_ACTION_FAIL,
        payload: "Something went wrong. Please try again later.",
      });
      swal({
        title: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        showConfirmButton: false,
      });
    });
};

export const DeleteTaskAction = (id) => (dispatch) => {
  dispatch({
    type: TASK_LOADER,
  });

  DeleteFetch(`deleteTask/${id}`)
    .then((response) => {
      let { message } = response.data;
      if (response.status === 200) {
        swal({
          title: message || "fsadfl; Added Successfully",
          icon: "success",
          showConfirmButton: false,
        });
        dispatch({
          type: TASK_UPDATED_SUCCESSFULLY,
          payload: "",
        });
        dispatch(GetAllTasksAction());
      } else {
        dispatch({
          type: TASK_ACTION_FAIL,
        });
        swal({
          title: message || "Something went wrong. Please try again later.",
          icon: "error",
          showConfirmButton: false,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: TASK_ACTION_FAIL,
        payload: "Something went wrong. Please try again later.",
      });
      swal({
        title: error.message || "Something went wrong. Please try again later.",
        icon: "error",
        showConfirmButton: false,
      });
    });
};