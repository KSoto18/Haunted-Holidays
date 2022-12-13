import React  from 'react'
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
import SingleReview from './pages/SingleReview';
import Profile from './pages/Profile'
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import ThemeComponent from './components/ThemeComponent/ThemeComponent';
import ThemeProvider from './components/ThemeComponent/ThemeContext';



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
       <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
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

              <Route path="/dashboard" 
              element={<Dashboard />} 
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
              
              <Route
                path="/reviews/:reviewId"
                 element={<SingleReview />} 
                 />

            </Routes>

          </div>

          <Footer />
        </div>
      </Router>
      
    </ApolloProvider>
    
  );
  
}

export default App;
