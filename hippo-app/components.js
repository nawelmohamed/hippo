import React from 'react';
import { Alert } from 'react-native';


// ======================== Alerts ====================================

export const errorAlert = (title, message, buttonDefs) => {
  Alert.alert(title, message, buttonDefs);
};

export const infoAlert = (title, message, buttonDefs) => {
  Alert.alert(title, message, buttonDefs);
};

