import TaskForm from "@components/todo/taskForm";
import { Todo } from "@components/todo/todolist";
import { path } from "@constants/index";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import useHome from "src/talons/useHome";

export const HomePage = () => {
  const { session, status, router } = useHome();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(path.login);
    }
  }, [status]);

  return (
    <>
      {session ? (
        <>
          <TaskForm />
          <Todo />
        </>
      ) : (
        <CircularProgress
          color="inherit"
          sx={{ marginLeft: "50%", marginTop: "50px" }}
        />
      )}
    </>
  );
};

export default HomePage;
