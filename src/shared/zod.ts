import z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const acceptAppointmentSchema = z.object({
  meeting_link: z.string(),
  meeting_date: z.string(),
  meeting_time: z.string(),
});

export type TAcceptAppointment = z.infer<typeof acceptAppointmentSchema>;
