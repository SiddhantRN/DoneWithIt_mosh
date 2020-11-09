import React from "react";
import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

function AppFormPicker({
  items,
  name,
  placeholder,
  pickerWidth,
  pickerItemComponent,
  numberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        pickerItemComponent={pickerItemComponent}
        pickerWidth={pickerWidth}
        placeholder={placeholder}
        selected={values[name]}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}

export default AppFormPicker;
