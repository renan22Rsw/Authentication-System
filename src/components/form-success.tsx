import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <span className="flex items-center gap-2 text-sm text-green-600">
      <CheckCircledIcon />
      {message}
    </span>
  );
};
