import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface EventCardProps {
  eventName: string;
  eventDate?: string;
  eventDescription?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  eventName,
  eventDate,
  eventDescription,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventDate}>{eventDate}</Text>
      <Text style={styles.eventDescription}>{eventDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  eventName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    color: "#333",
  },
});

export default EventCard;
