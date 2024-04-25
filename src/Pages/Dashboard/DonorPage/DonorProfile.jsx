import React from "react";
import DashboardContainer from "../../../Components/DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import DonorStatsInfo from "../../../Components/Dashboard/DonorMenu/DonorStatsInfo";
import DonorStatusPieChart from "../../../Components/Dashboard/DonorMenu/DonorStatusPieChart";
import Loader from "../../../Components/Loader/Loader";
import DonorCategoryBarChart from "./DonorCategoryBarChart";

const DonorProfile = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { data: stats, isLoading } = useQuery({
    queryKey: ["donor-stats", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/donor-stats/${user?.email}`);
      return res.data;
    },
  });

  const pieData =
    stats &&
    stats?.statusData &&
    stats?.statusData?.map((data) => {
      return { name: data.status, value: data.count };
    });
  const barData =
    stats &&
    stats?.categoryData &&
    stats?.categoryData?.map((data) => {
      return { category: data.category, total: data.count };
    });
  console.log(stats);
  console.log(pieData);
  return (
    <DashboardContainer>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <DonorStatsInfo
            totalRecipient={stats?.totalRecipient}
            totalFood={stats?.totalFood}
            totalDelivered={stats?.delivered}
          ></DonorStatsInfo>
          <div className="grid grid-cols-5 gap-12">
            <div className="col-span-3">
              <DonorCategoryBarChart data={barData}></DonorCategoryBarChart>
            </div>
            <div className="col-span-2">
              <DonorStatusPieChart data={pieData}></DonorStatusPieChart>
            </div>
          </div>
        </div>
      )}
    </DashboardContainer>
  );
};

export default DonorProfile;