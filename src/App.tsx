import { useState } from "react";
import "./App.css";
import { DefaultTable } from "./components/UsersTable";
import UserDialog from "./components/UserForm";

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [updateId, setIdUpdate] = useState("");

  const handleOpenModal = (newValue: boolean) => {
    setOpenDialog(newValue);
  };

  const handleSetIdEdit = (id: string) => {
    handleOpenModal(id ? true : false);
    setIdUpdate(id);
  };

  return (
    <div className="m-12">
      <div className="pb-12 flex justify-between">
        <p className="text-xl font-bold">User List</p>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto"
          onClick={() => handleOpenModal(true)}
        >
          Add New User
        </button>
      </div>
      <DefaultTable handleSetIdEdit={handleSetIdEdit} />
      <UserDialog
        open={openDialog}
        handleOpenModal={handleOpenModal}
        updateId={updateId}
        handleSetIdEdit={handleSetIdEdit}
      />
    </div>
  );
}

export default App;
