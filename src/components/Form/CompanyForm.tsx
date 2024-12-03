import { useState } from "react";
import { CompanyFormProps } from "../../types/types";
import { ButtonGroup, FormWrapper, Input, Label } from "../Modals/Modal.styled";
import { DeleteButton } from "../Table/Table.styled";

const CompanyForm = ({
  initialName,
  initialAddress,
  onSubmit,
  onCancel,
  submitButtonLabel,
}: CompanyFormProps) => {
  const [companyName, setCompanyName] = useState(initialName);
  const [companyAddress, setCompanyAddress] = useState(initialAddress);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(companyName, companyAddress);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </Label>

      <Label>
        Location:
        <Input
          type="text"
          placeholder="Company Address"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
          required
        />
      </Label>

      <ButtonGroup>
        <button type="submit">{submitButtonLabel}</button>
        <DeleteButton type="button" onClick={onCancel}>
          Cancel
        </DeleteButton>
      </ButtonGroup>
    </FormWrapper>
  );
};

export default CompanyForm;
