import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.textoLogin}>Login</Text>
      </View>
      <View style={styles.body} behavior="height">
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username..."
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="off"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password..."
          autoCapitalize="none"
          autoComplete="off"
        />
        <View style={styles.labelForgotContainer}>
          <TouchableOpacity>
            <Text style={styles.label}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.itemsContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="google" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="instagram" size={35} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="facebook-square" size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginTop: 100,
  },
  body: {
    alignItems: "flex-start",
  },
  logo: {},
  textoLogin: {
    fontWeight: "bold",
    fontSize: 30,
  },
  label: {
    color: "#333",
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#ebf7ffff",
    borderRadius: 15,
    width: 200,
    height: 40,
    padding: 10,
    color: "#333",
  },
  labelForgotContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  footer: {
    borderTopColor: "#97ccf0ff",
    borderTopWidth: 1,
    marginTop: 20,
    width: "80%",
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 50,
    paddingTop: 20,
  },
  iconContainer: {
    borderRadius: 15,
    backgroundColor: "#97ccf0ff",
    padding: 4,
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97ccf0ff",
    width: "100%",
    height: 50,
    borderRadius: 50,
  },
  loginButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    fontWeight: 'bold' //219 527
  }
});
