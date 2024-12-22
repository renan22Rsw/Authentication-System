import React from "react";

interface HeaderLabelProps {
  label: string;
}

const HeaderLabel = ({ label }: HeaderLabelProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="py-1 text-3xl font-semibold">Login</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default HeaderLabel;
