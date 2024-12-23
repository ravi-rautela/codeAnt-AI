import React from "react";
import SaasListItem from "./SaasListItem";
import gitlab from "/gitlab.svg";
import key from "/key.svg";

const SelfItemList = () => {
  return (
    <div className="flex flex-col gap-3">
      <SaasListItem icon={gitlab} title={"Self Hosted GitLab "} />
      <SaasListItem icon={key} title={"Sign in with SSO "} />
    </div>
  );
};

export default SelfItemList;
