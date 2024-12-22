import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import HeaderLabel from "./header";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButton: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButton,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <HeaderLabel label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton href={backButtonHref} label={backButton} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
