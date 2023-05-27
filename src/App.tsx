import "./App.scss";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { Post } from "./components/Post";
import { PostForm } from "./components/PostForm";
import { PostsList } from "./components/PostsList";
import { Register } from "./components/Register";
import { useApp } from "./hooks/useApp";

export type PostType = {
  id?: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions?: number;
};

function App() {
  const { posts } = useApp();
  const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <nav className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/posts">
          Posts
        </Link>
        <Link className="nav-link" to="/posts/1">
          1st post
        </Link>
        <Link className="nav-link" to="/posts/new">
          Create post
        </Link>
        <Link className="nav-link" to="/register">
          Register
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<PostsList list={posts} />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// ## Zadanie końcowe
// Link do API - https://dummyjson.com/docs/posts
// Link do repo - https://github.com/szu-szy/wyk-13.05

// # Konfiguracja projektu
// - Stwórz puste repozytorium na github
// - Sklonuj je lokalnie za pomoca git clone
// - Stwórz w pobranym repozytorium pusty projekt React
// - komenda: npx create-react-app my-app --template typescript
// - po zainstalowaniu dodaj paczki:
// - node-sass
// - firebase
// - react-router-dom

// # Konfiguracja Firebase
// - stwórz nowy projekt wraz z aplikacją
// - dodaj plik do folderu src > firebaseConfig.ts
// - w komponencie App zainicjuj aplikacje:
// - const app = initializeApp(firebaseConfig);

// # Stwórz routing aplikacji (kazda strona ma inny header)
// - homepage "/"
// - lista postów "/posts"
// - strona pojedynczego posta "/posts/:id"
// - strona do rejestracji użytkownika "/register"
// - strona do logowania "/login"
// - strona do formularza który tworzy nowy post "/posts/new"

// # Komponenty
// - App - zawiera liste postów i przekazuje ją nizej
// - Lista postów - wyswietla posty
// - Pojedyńczy post + formularz do edycji - wyswietla post i edytuje oraz usuwa
// - Formularz do stworzenia postu - tworzy nowy post
// - Formularz do logowania - loguje do firebase
// - Formularz do rejestracji - tworzy uzytkownika w firebase

// # Dodatkowe uwagi
// - logika wydziela w hookach
// - lekkie wystylowanie wszystkich komponentów
