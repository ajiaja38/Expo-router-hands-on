import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#2630A6",
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { paddingBottom: 6 },
        tabBarIconStyle: { marginBottom: -4 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="PresenceScreen"
        options={{
          title: "Presensi",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="camera" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="HistoryScreen"
        options={{
          title: "Riwayat",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="history" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
