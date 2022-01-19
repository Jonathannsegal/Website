import React from "react";
import { Img, Center } from "@chakra-ui/react";
import Image from "next/image";

export default function Logo(props) {
  return (
    <div {...props}>
      <Img
        className="logo"
        alt="Ladl logo"
        src={"/logo.png"}
        width={200}
        height={200}
      />
    </div>
  );
}
