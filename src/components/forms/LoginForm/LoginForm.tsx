"use client";

import { Button, Input } from "@/components/ui";
import { userApi } from "@/lib/api/endpoints";
import { LoginFormData, loginSchema } from "@/lib/auth/validation";
import { useAuth } from "@/lib/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const { persistUser, redirectToDashboard } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { trigger, isMutating } = useSWRMutation(
    "/api/user",
    userApi.fetchRandomUser,
    {
      onSuccess: (userData) => {
        persistUser(userData);
        redirectToDashboard();
      },
    }
  );

  const onSubmit = async (_data: LoginFormData) => {
    await trigger();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("phoneNumber")}
        id="phoneNumber"
        label="Phone Number"
        type="tel"
        placeholder="09xxxxxxxxx"
        error={errors.phoneNumber?.message}
        autoComplete="tel"
      />

      <div className={styles.buttonContainer}>
        <Button type="submit" isLoading={isMutating}>
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
