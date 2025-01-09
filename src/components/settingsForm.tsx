"use client";

import { updateUser } from "@/actions/updateUser";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateUsername } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";

interface SettingsFormProps {
  defaultValues: Session["user"];
}

const SettingsForm = ({ defaultValues }: SettingsFormProps) => {
  const [msg, setMsg] = useState<string | null>();
  const [msgError, setMsgError] = useState<string | null>();

  const form = useForm<z.infer<typeof updateUsername>>({
    resolver: zodResolver(updateUsername),
    defaultValues: {
      username: defaultValues?.name ?? "",
    },
  });

  const onSubmit = async (data: z.infer<typeof updateUsername>) => {
    try {
      setMsgError("");
      setMsg("");
      await updateUser({ username: data.username });
      setMsg("You need to logout and login again to see the changes");
    } catch (err) {
      console.log(err);
      setMsgError("Error updating username");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex h-screen flex-col items-center justify-center space-y-10">
        <h1 className="text-2xl">Would you like to change youur username?</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="new username..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormSuccess message={msg as string} />
            <FormError message={msgError as string} />
            <Button type="submit">Update</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SettingsForm;
