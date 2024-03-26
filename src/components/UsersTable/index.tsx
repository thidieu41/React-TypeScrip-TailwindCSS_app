import axios from "axios";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["ID", "Name", "Email", "Action"];

export interface IUsers {
  name: string;
  email: string;
  id: number;
}

interface IProps {
  handleSetIdEdit: (id: string) => void;
}

export function DefaultTable({ handleSetIdEdit }: IProps) {
  const [UserList, setUserList] = useState([] as IUsers[]);

  const handleRemoveUser = (id: number) => {
    axios
      .delete(`http://localhost:8888/users/${id}`)
      .then((res) => {
        const data = UserList.filter((item) => item.id !== id);
        setUserList(data);
      })
      .catch((error) => console.log(error));
  };

  const handleGetUsers = () => {
    axios
      .get(`http://localhost:8888/users`)
      .then((res) => {
        const data = res.data;
        setUserList(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="h-full w-full overflow-scroll shadow-md shadow-gray-300 rounded-lg p-6">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <p className="font-normal leading-none opacity-70">{head}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {UserList.map(({ name, id, email }, index) => {
            const isLast = index === UserList.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={classes}>
                  <p color="blue-gray" className="font-normal">
                    {id}
                  </p>
                </td>
                <td className={classes}>
                  <p color="blue-gray" className="font-normal">
                    {name}
                  </p>
                </td>
                <td className={classes}>
                  <p color="blue-gray" className="font-normal">
                    {email}
                  </p>
                </td>
                <td className={classes}>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleSetIdEdit(id.toString())}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-50 sm:mt-0 sm:w-auto"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveUser(id)}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-50 sm:mt-0 sm:w-auto"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
