import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        String fileName = "C:\\Users\\pc\\IdeaProjects\\computer-science\\src\\DesignPatternConcepts\\ObserverPattern\\GoogleClassRoom.java"; // Replace with the actual file name

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName)) ) {
            StringBuilder code = new StringBuilder();
            String line;

            while ((line = reader.readLine()) != null) {
                code.append(line).append("\n");
            }

            String jsonRepresentation = "{\"JavaCode\":\"" + escapeJsonString(code.toString()) + "\"}";

            System.out.println(jsonRepresentation);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String escapeJsonString(String s) {
        return s
                .replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }
}