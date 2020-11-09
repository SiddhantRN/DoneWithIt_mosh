import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppFormPicker from "../components/AppFormPicker";
import listingsApi from "../api/listings";
import FormImagePicker from "../components/FormImagePicker";
import * as Location from "expo-location";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const categories = [
  {
    label: "furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Camera", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Cars", value: 4, backgroundColor: "#fd9644", icon: "car" },
  { label: "Games", value: 5, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Movies & Music",
    value: 6,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  { label: "Sports", value: 7, backgroundColor: "#45aaf2", icon: "basketball" },
];

function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("could not save the listing");
    }
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select atleast one image"),
  });

  return (
    <>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          placeholder={"Title"}
          name={"title"}
        />
        <AppFormField
          fieldwidth={"40%"}
          keyboardType={"number-pad"}
          placeholder={"Price"}
          name={"price"}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormPicker
          numberOfColumns={3}
          pickerItemComponent={true}
          pickerWidth={"50%"}
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          multiline
          numberofLines={3}
          placeholder={"Description"}
          secureTextEntry={true}
          name={"description"}
        />

        <SubmitButton title={"Register"} />
      </AppForm>
    </>
  );
}

export default ListingEditScreen;
