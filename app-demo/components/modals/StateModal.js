import { useRef, useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { Octicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { collection, doc, setDoc } from "firebase/firestore";

import Base from "./Base";
import FormItem from "../controls/FormItem";
import Colors from "../../constants/Colors";
import { db } from "../../firebase-config";
import Button from "../controls/Button";

const selectStatus = [
  { label: "Activo", value: true },
  { label: "Inactivo", value: false },
];

export default function StateModal({
  selected,
  setSelected,
  visible,
  onClose,
}) {
  const statusRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    statusRef?.current?.selectIndex(
      selectStatus.findIndex((item) => item.value === selected.status)
    );
  }, [statusRef, selected]);

  const saveState = async (values) => {
    try {
      setLoading(true);
      if (!selected?.key) {
        // Con la siguiente instrucción creamos un nuevo documento en la colección a la que hagamos referencia
        await setDoc(doc(collection(db, "states")), {
          name: selected.name,
          code: selected.code,
          status: selected.status,
        });
      } else {
        // Creamos primero la referencia al documento que vamos a editar
        const stateRef = doc(db, "states", selected.key);
        // Editamos nuestro documento
        await setDoc(
          stateRef,
          {
            name: selected.name,
            code: selected.code,
            status: selected.status,
          },
          {
            merge: true,
          }
        );
      }
      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <Base
      id="modal-state"
      visible={visible}
      title={selected?.key ? "Editar estado" : "Crear estado"}
      onClose={onClose}
    >
      <FormItem
        value={selected?.name || ""}
        label="Nombre"
        onChange={(value) => setSelected((prev) => ({ ...prev, name: value }))}
      />
      <FormItem
        value={selected?.code || ""}
        label="Código"
        onChange={(value) => setSelected((prev) => ({ ...prev, code: value }))}
      />
      <SelectDropdown
        ref={statusRef}
        data={selectStatus}
        dropdownIconPosition={"right"}
        defaultButtonText={"Selecciona el estatus"}
        buttonStyle={styles.select}
        onSelect={(selectedItem, _) => {
          setSelected((prev) => ({ ...prev, status: selectedItem.value }));
        }}
        buttonTextAfterSelection={(selectedItem, _) => {
          return selectedItem.label;
        }}
        rowTextForSelection={(item, _) => {
          return item.label;
        }}
        renderDropdownIcon={(isOpened) => {
          return (
            <Octicons
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={18}
            />
          );
        }}
      />
      <Button
        label={selected?.key ? "EDITAR" : "REGISTRAR"}
        onPress={saveState}
        isLoading={loading}
      />
    </Base>
  );
}

const styles = StyleSheet.create({
  select: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.cinnabar,
    marginBottom: 20,
    width: "100%",
  },
});
