import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsAPI from "../api/listings";
import UploadScreen from "./UploadScreen";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Descripion"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { value: 1, label: "Furniture", icon: "floor-lamp", bg: "#fc5c65" },
  { value: 2, label: "Cars", icon: "car", bg: "#fd9644" },
  { value: 3, label: "Techology", icon: "camera", bg: "#fed330" },
  { value: 4, label: "Games", icon: "cards", bg: "#26de81" },
  { value: 5, label: "Clothing", icon: "shoe-heel", bg: "#2bcbba" },
  { value: 6, label: "Sports", icon: "basketball", bg: "#45aaf2" },
  { value: 7, label: "Moves & Music", icon: "headphones", bg: "#4b7bec" },
  { value: 8, label: "Books", icon: "book-open-variant", bg: "#a656db" },
  { value: 9, label: "Other", icon: "application", bg: "#8383a3" },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsAPI.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("could not save the listing.");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values, formikBag) => {
          handleSubmit(values, formikBag);
        }}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          name="price"
          placeholder="Price"
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
