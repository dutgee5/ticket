import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import SignUp from "@/components/isSignup/isSignUp";

const UserScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  async function handleLogout() {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  }
  if (initializing) return null;


  
  if (!user) {
    return <SignUp />;
  } else {
    return (
      <View>
        <Text>Welcome {user.email}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

 
};
export default UserScreen;

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "#FC1055",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
