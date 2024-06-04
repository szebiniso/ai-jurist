import { SpecializationEnum, UserTypeEnum } from "@/shared/types/aijusrist";

export type TAccount = {
  access: string;
  refresh: string;
  detail: string;
  user_id: string;
  user_role: string;
  status: string;
};

export type TUsersParams = {
  user_type?: UserTypeEnum;
  specialization?: SpecializationEnum;
};
