import { View, Text, StyleSheet } from "react-native";
import GameCard from "./GameCard";

export default function DiaCard({ dia }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{dia.title.split("-").reverse().join("/")}</Text>
      {dia.data.map((jogo) => (
        <GameCard key={jogo.id} game={jogo} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: "#0c1b2a",
    width: 320,
    borderRadius: 12,
    padding: 15,
  },
  title: {
    color: "#f2cc2f",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});