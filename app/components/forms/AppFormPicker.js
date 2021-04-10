import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import { ErrorMessage } from ".";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, values, setFieldValue, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        items={items}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
