"use client";

import React, { Suspense, useEffect, useState } from "react";
import Table from "@/components/Table";
import {
  AcceptedAppointmentsTableHeads,
  AppointmentsTableHeads,
  RejectedAppointmentsTableHeads,
} from "@/constants/userApp/experts";
import { useAppDispatch } from "@/redux/hooks";
import {
  editConsultation,
  getConsultationList,
} from "@/redux/features/consultation/reducer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Consultation, StatusEnum } from "@/shared/types/aijusrist";
import { format } from "@/shared/utils";
import CModal from "@/components/UI/Modal";
import { toastError, toastSuccess } from "@/components/Toasts/toastify";
import Input from "@/components/UI/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  acceptAppointmentSchema,
  loginSchema,
  TAcceptAppointment,
} from "@/shared/zod";
import { Box, Tab, Tabs } from "@mui/material";
import { TConsultationParams } from "@/shared/types/customTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header/page";

const Appointment = () => {
  const dispatch = useAppDispatch();
  const consultationList = useSelector(
    (state: RootState) => state.consultation.consultationList.consultationList,
  );
  const [activeTab, setActiveTab] = useState<number>(0);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [openRejectModal, setOpenRejectModal] = useState<boolean>(false);
  const [openAcceptModal, setOpenAcceptModal] = useState<boolean>(false);
  const [reason, setReason] = useState<string>("");
  const [currentId, setCurrentId] = useState<number>(0);
  const params = new URLSearchParams(searchParams);

  const { control, handleSubmit } = useForm<TAcceptAppointment>({
    resolver: zodResolver(acceptAppointmentSchema),
  });

  useEffect(() => {
    dispatch(getConsultationList(params as TConsultationParams));
  }, []);

  const toggleOpenAcceptModal = (id?: number) => {
    setOpenAcceptModal(!openAcceptModal);
    id && setCurrentId(id);
  };
  const toggleOpenRejectModal = (id?: number) => {
    setOpenRejectModal(!openRejectModal);
    id && setCurrentId(id);
  };

  const handleReject = () => {
    const data = {
      status: "Отклонено" as StatusEnum,
      reason,
    };
    reason.length &&
      dispatch(editConsultation({ id: currentId, data }))
        .unwrap()
        .then(() => {
          toastSuccess(`You successfully rejected the appointment!`);
          dispatch(getConsultationList(params as TConsultationParams));
          toggleOpenRejectModal();
        })
        .catch(() => {
          toastError("Something wrong!");
        });
  };

  const handleAccept = (values: TAcceptAppointment) => {
    const data = {
      status: "Принято",
      meeting_link: values.meeting_link,
      meeting_time: `${values.meeting_date}T${values.meeting_time}Z`,
    };
    console.log({ data });
    dispatch(editConsultation({ id: currentId, data }))
      .unwrap()
      .then(() => {
        toastSuccess(`You successfully accepted the appointment!`);
        dispatch(getConsultationList(params as TConsultationParams));
        toggleOpenAcceptModal();
      })
      .catch(() => {
        toastError("Something wrong!");
      });
  };

  const renderCell = (cellData: any, columnId: string, row: Consultation) => {
    if (columnId === "client") {
      return <p>{cellData.first_name}</p>;
    }
    if (columnId === "date_requested") {
      return cellData ? <p>{format(cellData, "YYYY-MM-DD HH-MM")}</p> : "---";
    }
    if (columnId === "meeting_time") {
      return cellData ? <p>{format(cellData, "YYYY-MM-DD HH-MM")}</p> : "---";
    }
    if (columnId === "accept") {
      return (
        <button
          onClick={() => toggleOpenAcceptModal(row.id)}
          className="p-2 rounded-xl bg-green-500 text-white"
        >
          Accept
        </button>
      );
    }
    if (columnId === "cancel") {
      return (
        <button
          onClick={() => toggleOpenRejectModal(row.id)}
          className="p-2 rounded-xl bg-red-600 text-white"
        >
          Reject
        </button>
      );
    }
    return cellData || "---";
  };

  const { replace } = useRouter();

  const filtersData = [
    { id: "На рассмотрении", title: "На рассмотрении" },
    { id: "Принято", title: "Принято" },
    { id: "Отклонено", title: "Отклонено" },
  ];
  const onChangeTab = (event: React.SyntheticEvent, tab: number) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    params.set("status", filtersData[activeTab].id);
    replace(`${pathname}?${params.toString()}`);
    dispatch(getConsultationList(params as TConsultationParams));
  }, [activeTab]);

  const tabContentHeads = [
    AppointmentsTableHeads,
    AcceptedAppointmentsTableHeads,
    RejectedAppointmentsTableHeads,
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-screen bg-black">
        <Header />
        <div className=" w-10/12 m-auto pt-10">
          <div>
            <Tabs onChange={onChangeTab}>
              {filtersData.map(({ id, title }) => (
                <Tab
                  sx={{ color: "white", marginRight: "10px" }}
                  className="text-white"
                  key={id}
                  label={title}
                />
              ))}
            </Tabs>
            <Box mt={2}>
              <div>
                <Table
                  renderCell={renderCell}
                  columns={tabContentHeads[activeTab]}
                  data={consultationList}
                />
              </div>
            </Box>
          </div>

          <CModal open={openAcceptModal} closeModal={toggleOpenAcceptModal}>
            <form
              onSubmit={handleSubmit(handleAccept)}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl text-center">Accept appointment</h2>
              <Input
                type="date"
                name="meeting_date"
                label="Meeting date"
                control={control}
                placeholder="Choose Meeting time"
              />
              <Input
                type="time"
                name="meeting_time"
                label="Meeting time"
                control={control}
                placeholder="Choose Meeting time"
              />
              <Input
                name="meeting_link"
                label="Meeting link"
                control={control}
                placeholder="Add Meeting link"
              />
              <button
                type="submit"
                className="border-gray-900 p-4 bg-gray-700 text-white rounded-xl"
              >
                SEND
              </button>
            </form>
          </CModal>
          <CModal open={openRejectModal} closeModal={toggleOpenRejectModal}>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-center">Accept appointment</h2>
              <textarea
                className="rounded-xl p-4"
                onChange={(e) => setReason(e.target.value)}
                rows={4}
              />
              <button
                disabled={!reason.length}
                onClick={handleReject}
                className="border-gray-900 p-4 bg-gray-700 text-white rounded-xl"
              >
                SEND
              </button>
            </div>
          </CModal>
        </div>
      </div>
    </Suspense>
  );
};

export default Appointment;
