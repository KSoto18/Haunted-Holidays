import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ErrorPage from './pages/404Page'
import Profile from './pages/Profile'
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import About from './components/About';
import Contact from './components/Contact';
import MapContainer from './components/MapContainer';
import HauntedLocations from './components/HauntedLocations';
import "./Fonts/BLOODY.ttf"
import Forum from './pages/Forum';
import SingleReview from './pages/SingleReview'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


// Auth Middleware
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {

  return (

    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />

          <div>
            <Routes>
              <Route path="/"
                element={<Home />}
              />

              <Route path="/login"
                element={<Login />}

              />

              <Route path="/signup"
                element={<Signup />}
              />

              <Route path="/about"
                element={<About />}
              />

              <Route path="/contact"
                element={<Contact />}
              />

              <Route path="/profile"
                element={<Profile />}
              />

              <Route path="/forum"
                element={<Forum />}
              />

              <Route path="/reviews/:reviewId"
                element={<SingleReview />}
              />

              <Route path="/hauntedlocations"
                element={<HauntedLocations />} />

              <Route
                path="*"
                element={<ErrorPage />}
              />


            </Routes>
          </div>

          <Footer />
          <BackToTopBtn />
        </div>
      </Router>

    </ApolloProvider>

  );

}

export default App;
