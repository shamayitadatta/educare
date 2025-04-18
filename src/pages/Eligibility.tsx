
import { Navbar } from "@/components/Navbar";
import { EligibilityChecker } from "@/components/EligibilityChecker";

const Eligibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-3">College Eligibility Checker</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Enter your exam marks and category to instantly check which colleges you are eligible for
          </p>
        </div>
        
        <EligibilityChecker />
      </div>
    </div>
  );
};

export default Eligibility;
