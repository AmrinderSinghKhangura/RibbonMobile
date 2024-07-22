import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Ribbon = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-4xl font-pregular ">Ribbon</Text>
      <Link href={"/home"} className="text-3xl text-blue-800 font-extrabold">
        Go to profile
      </Link>
    </View>
  );
};

export default Ribbon;
