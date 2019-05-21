// Login.js
import React from "react";
import {
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Linking
} from "react-native";
import { Text, Container } from "native-base";
import { KeyboardAwareScrollView as ScrollView } from "react-native-keyboard-aware-scroll-view";
import User from "../user";
import styles from "../styles";
import PhoneEntry from "../_components/PhoneEntry";
import * as Headers from "../_components/Header";
import social from "../_helpers/socials";
import * as constants from "../constants";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      prefix: "+7",
      loading: false,
      waitingForInit: true
    };
  }

  async componentWillMount() {
    await User.awaitUser();
    if (!User.account) {
      this.setState({ waitingForInit: false });
    }
    await User.navigateIfUserIsLoggedIn(this.props.navigation);
  }

  action() {
    this.setState({ loading: true });
    if (this.validate()) {
      User.login(this.phoneNumber, this.state.password)
        .then(() => User.navigateIfUserIsLoggedIn(this.props.navigation))
        .catch(err => {
          this.setState({ loading: false });
          err && err.loginFailed
            ? Alert.alert("Can not Enter", err.message)
            : Alert.alert("Can not Enter", "Check Internet connection");
        });
    } else this.setState({ loading: false });
  }

  validate() {
    // TODO: get a decent validation lib
    if (!this.state.login) {
      Alert.alert("ERROR", "input tel.number");
    } else if (!this.state.password) {
      Alert.alert("ERROR", "input  password");
    } else return true;

    return false;
  }

  get phoneNumber() {
    return (this.state.prefix + this.state.login).replace(/[^\d]*/gi, "");
  }

  render() {
    return this.state.waitingForInit ? (
      <Container style={{ backgroundColor: "transparent" }}>
        <ActivityIndicator
          size="large"
          style={{ paddingTop: 45, paddingBottom: 15 }}
          color="#aaa"
        />
      </Container>
    ) : (
      <Container style={{ backgroundColor: "transparent" }}>
        {
          Headers.LogoOnly("Authorization")({
            navigation: this.props.navigation
          }).header
        }
        <ScrollView
          contentContainerStyle={{}}
          style={{ paddingLeft: 40, paddingRight: 40 }}
        >
          <Text
            color="#ffffff"
            style={{
              textAlign: "center",
              fontFamily: "HeliosCond",
              fontWeight: "800",
              lineHeight: 100,
              fontSize: 24,
              marginBottom: 15,
              marginTop: 15,
              color: "#fff"
              // textAlign: 'center',
              // fontFamily: 'HeliosCond',
              // fontWeight: '800',
              // fontSize: 24,
              // marginBottom: 15,
            }}
          >
            {"Authorization".toLocaleUpperCase()}
          </Text>

          <PhoneEntry
            loginChanged={login => this.setState({ login })}
            prefixChanged={prefix => this.setState({ prefix })}
            login={this.state.login}
            prefix={this.state.prefix}
            next={() => this.refs.PasswordInput.focus()}
          />

          <Text
            style={{
              ...styles.transparentInputSettingsLabel,
              marginTop: 10,
              textAlign: "center"
            }}
          >
            Password
          </Text>

          <TextInput
            editable={!this.state.loading}
            secureTextEntry
            onChangeText={password => {
              this.setState({ password });
            }}
            placeholder="* * * * * * * * * *"
            placeholderTextColor="#b4b4b4"
            style={{ ...styles.transparentInput, textAlign: "center" }}
            value={this.state.password}
            ref="PasswordInput"
            onSubmitEditing={() => this.action()}
            returnKeyType="next"
          />

          <TouchableOpacity onPress={() => Linking.openURL(constants.EULA)}>
            <Text
              style={{
                ...styles.transparentInputSettingsLabel,
                textAlign: "center",
                marginTop: 10
              }}
            >
              <Text
                style={{
                  ...styles.transparentInputSettingsLabel,
                  fontWeight: "800",
                  color: "#aaa"
                }}
              >
                Agenda
              </Text>
            </Text>
          </TouchableOpacity>

          {social.call(this, "Sign In")}

          <Text style={{ textAlign: "center", marginBottom: 35 }}>
            <Text
              style={{ color: "#999999" }}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              Registration /{" "}
            </Text>
            <Text
              style={{ color: "#999999" }}
              onPress={() => this.props.navigation.navigate("Forgot")}
            >
              Forgot password?
            </Text>
          </Text>
        </ScrollView>
      </Container>
    );
  }
}
