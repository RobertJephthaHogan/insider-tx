

import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { ErrorBoundary } from "../components/ErrorBoundary";
import InsiderTX from "../pages/InsiderTX";



export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorBoundary />,
      children: [
        // {
        //     path: "/",
        //     element: <Homepage />,
        // },

        // Routing Straight to insider-tx instead of homepage for now
        
        {
          path: "/",
          element: <InsiderTX />,
        },
        {
          path: "/insider-tx",
          element: <InsiderTX />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        
      ],
    },
  ]);