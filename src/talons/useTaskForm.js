import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "src/actions/taskAction";
import { taskSchema } from "src/services/validations";

const useTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskSchema),
  });
  const dispatch = useDispatch();

  const onsubmit = async (newdata) => {
    dispatch(addTask(newdata));
  };
  return { onsubmit, register, handleSubmit, errors };
};

export default useTaskForm;
