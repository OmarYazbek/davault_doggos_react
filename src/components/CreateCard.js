import React from "react";
import Card from "./Card";

function CreateCard(servicesInfo) {
  return (
    <Card
      key={servicesInfo.id}
      style={servicesInfo.style}
      title={servicesInfo.title}
      icon={servicesInfo.icon}
      description={servicesInfo.description}
    />
  );
}

export default CreateCard;
