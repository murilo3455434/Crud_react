import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Estados from "./pages/Estados";
import Aluno from "./pages/Aluno";
import Curso from "./pages/Curso";

const Menu = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Menu.Screen name="Estados" component={Estados} />
        <Menu.Screen name="Aluno" component={Aluno} />
        <Menu.Screen name="Curso" component={Curso} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
