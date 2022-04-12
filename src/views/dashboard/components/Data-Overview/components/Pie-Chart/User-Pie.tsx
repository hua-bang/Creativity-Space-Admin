import React, { useEffect, useState } from "react";
import PieChart from ".";
import { UserStatus } from "@/typings/user";
import { USER_STATUS_MAP } from "@/const/user";
import { getUserCountInfo } from "@/api/user";

const UserPieChart = () => {

  const [countInfo, setCountInfo] = useState({
    [UserStatus.FORBIDDEN]: 0,
    [UserStatus.NORMAL]: 0,
    [UserStatus.NO_COMPLETE]: 0
  });

  const data = Object.keys(countInfo).reduce((prev, curr) => {
    const currTarget = {
      name: USER_STATUS_MAP[curr as unknown as UserStatus].value,
      value: countInfo[curr as unknown as UserStatus],
    }
    return [...prev, currTarget];
  }, [] as Array<Record<string, any>>);

  useEffect(() => {
    getUserCountInfo().then(res => {
      setCountInfo(res.data);
    })
  }, []);

  return (
    <PieChart title="用户分布" data={data}/>
  );
};

export default UserPieChart;