import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { colleges } from "@/data/colleges";
import { College } from '@/types/college';

const EligibilityChecker = () => {
  const [marks, setMarks] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('general');
  const [eligibleColleges, setEligibleColleges] = useState<College[]>([]);

  const handleMarksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMarks(isNaN(value) ? null : value);
  };

  const checkEligibility = () => {
    if (marks === null) {
      alert("Please enter your exam marks.");
      return;
    }

    const filteredColleges = colleges.filter(college => {
      if (category === 'general') {
        return marks >= college.cutoffMarks.general;
      } else if (category === 'obc') {
        return marks >= college.cutoffMarks.obc;
      } else if (category === 'sc') {
        return marks >= college.cutoffMarks.sc;
      } else if (category === 'st') {
        return marks >= college.cutoffMarks.st;
      }
      return false;
    });

    setEligibleColleges(filteredColleges);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">
        <Label htmlFor="marks" className="block text-neutral-700 text-sm font-bold mb-2">
          Exam Marks:
        </Label>
        <Input
          type="number"
          id="marks"
          placeholder="Enter your marks"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleMarksChange}
        />
      </div>
      
      <div className="mb-6">
        <Label className="block text-neutral-700 text-sm font-bold mb-2">
          Category:
        </Label>
        <RadioGroup defaultValue="general" className="flex gap-2" onValueChange={setCategory}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="general" id="r1" className="focus:ring-0 focus:ring-offset-0"/>
            <Label htmlFor="r1">General</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="obc" id="r2" className="focus:ring-0 focus:ring-offset-0"/>
            <Label htmlFor="r2">OBC</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sc" id="r3" className="focus:ring-0 focus:ring-offset-0"/>
            <Label htmlFor="r3">SC</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="st" id="r4" className="focus:ring-0 focus:ring-offset-0"/>
            <Label htmlFor="r4">ST</Label>
          </div>
        </RadioGroup>
      </div>
      
      <Button className="w-full bg-college-600 hover:bg-college-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={checkEligibility}>
        Check Eligibility
      </Button>

      {eligibleColleges.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-neutral-800 mb-4">Eligible Colleges:</h3>
          <ul>
            {eligibleColleges.map(college => (
              <li key={college.id} className="py-2 border-b border-neutral-200">
                {college.name} ({college.city}, {college.state})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { EligibilityChecker };
