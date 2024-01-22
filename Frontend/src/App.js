import "./assets/scss/app.scss";
import "./assets/scss/icons.scss";
import configureFakeBackend from "./common/api/fake-backend";
import { AuthProvider } from "./common/context/useAuthContext";
import { ThemeProvider } from "./common/context/useThemeContext";
import AllRoutes from "./routes/Routes";

configureFakeBackend()
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
