import { useState, useEffect } from "react";
import { getUsersFromLeaderboard } from "../firebase/controller";
import { User } from "../model/User";
import ClipLoader from "react-spinners/ClipLoader";

export function Leaderboard() {
  // leaderboard page for users to see how they compare to others
  // getUsersFromLeaderboard("group 1")
  const [users, updateUsers] = useState<User[] | null>();
  useEffect(() => {
    const getData = async () => {
      const userList = [new User("Ovik", "", 150), new User("James", "", 10)]; //await getUsersFromLeaderboard("group 1");
      updateUsers(userList);
    };
    getData();
  }, []);
  if (!users) {
    return (
      <div>
        <h1>Loading...</h1>
        <ClipLoader color={"#ffffff"} loading={!users} size={150} />
      </div>
    );
  }
  return (
    users && (
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl text-center text-slate-700 dark:text-slate-400 font-bold mt-10 mb-3">
            Leaderboard
          </h1>
          <h2 className="text-2xl text-center text-slate-700 dark:text-slate-400 font-bold mb-5">
            Group 1
          </h2>
        </div>
        <table className="table-auto m-auto text-lg border-none">
          <thead>
            <tr>
              <th className="px-4 py-2 text-slate-700">Rank</th>
              <th className="px-4 py-2 text-slate-700">Name</th>
              <th className="px-4 py-2 text-slate-700">Carbon Saved</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User, index: number) => {
              return (
                <tr className="border-b border-slate-400 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="bpx-4 py-2">{user.carbonSaved}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
}
