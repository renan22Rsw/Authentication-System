import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <span className="flex items-center gap-2 text-sm text-red-600">
      <ExclamationTriangleIcon />
      {message}
    </span>
  );
};
