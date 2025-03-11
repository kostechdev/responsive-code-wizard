
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 p-4">
      <div className="text-center max-w-lg animate-fade-up">
        <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-100">
          <span className="text-5xl">🎧</span>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the podcast episode you're looking for.
        </p>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
