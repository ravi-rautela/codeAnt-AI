import React from "react";
import SaasListItem from "./SaasListItem";
import github from "/github.svg";
import bitbucket from "/bitbucket.svg";
import azure from "/azure.svg";
import gitlab from "/gitlab.svg";

const SaasLIst = () => {
  return (
    <div className="flex flex-col gap-3">
      <SaasListItem icon={github} title={"Sign In with Github"} />
      <SaasListItem icon={bitbucket} title={"Sign In with Bitbucket"} />
      <SaasListItem icon={azure} title={"Sign In with Azure Devops"} />
      <SaasListItem icon={gitlab} title={"Sign In with GitLab"} />
    </div>
  );
};

export default SaasLIst;
