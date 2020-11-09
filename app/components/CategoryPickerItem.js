import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function CategoryPickerItem({
  onSelectItem,
  setOpen,
  item,
  pickerItemComponent = false,
}) {
  return (
    <>
      {pickerItemComponent === false ? (
        <TouchableOpacity
          onPress={() => {
            onSelectItem(item);
            setOpen(false);
          }}
          style={styles.modalButton}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.label}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={50}
              color={colors.white}
              onPress={() => {
                onSelectItem(item);
                setOpen(false);
              }}
            />
          </View>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
          >
            {item.label}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
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
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryPickerItem;
