import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import Screen from "./Screen";
import CategoryPickerItem from "./CategoryPickerItem";

function AppPicker({
  iconName,
  items,
  onSelectItem,
  placeholder,
  pickerWidth,
  numberOfColumns = 1,
  pickerItemComponent,
  selected,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen(true)}>
        <View style={[styles.container, { width: pickerWidth }]}>
          {iconName && (
            <MaterialCommunityIcons name={iconName} color="#bdbdbd" size={25} />
          )}
          {selected ? (
            <Text style={styles.text}>{selected.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            color="#bdbdbd"
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={open}>
        <Screen>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setOpen(false)}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Close</Text>
          </TouchableOpacity>
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <CategoryPickerItem
                pickerItemComponent={pickerItemComponent}
                item={item}
                onSelectItem={onSelectItem}
                setOpen={setOpen}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",

    alignItems: "center",
  },
  text: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: "Roboto",
    flex: 1,
    color: "#bdbdbd",
  },
  placeholder: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: "Roboto",
    flex: 1,
    color: "#bdbdbd",
  },
  modalButton: {
    width: "100%",
    height: 40,
    borderRadius: 10,

    alignSelf: "center",
    justifyContent: "center",
    margin: 8,
    alignItems: "center",
  },
});

export default AppPicker;
