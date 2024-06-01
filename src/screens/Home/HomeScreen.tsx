import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import EventCard from "../../components/card/Card";

interface Event {
  eventName: string;
  eventDate: string;
  eventDescription: string;
}

const HomeScreen: React.FC = () => {
  const events: Event[] = [
    {
      eventName: "React Native Workshop",
      eventDate: "2024-06-01",
      eventDescription:
        "Learn the basics of React Native and build your first mobile app.",
    },
    {
      eventName: "JavaScript Conference",
      eventDate: "2024-07-15",
      eventDescription:
        "Join us for a day full of JavaScript talks and networking.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
    {
      eventName: "Mobile App Hackathon",
      eventDate: "2024-08-10",
      eventDescription:
        "Show off your skills and build amazing mobile apps in 24 hours.",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <TouchableHighlight style={{}} onPress={() => {}}
          underlayColor={'#FC1055'}>
            <EventCard
              eventName={item.eventName}
              eventDate={item.eventDate}
              eventDescription={item.eventDescription}
            />
          </TouchableHighlight>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
