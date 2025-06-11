
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const WorkingHours = () => {
  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <Card className="p-6 border-0 shadow-md">
      <CardContent>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-gray-900">Working Hours</h3>
        </div>
        <div className="space-y-2">
          {workingHours.map((schedule, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-600">{schedule.day}</span>
              <span className="text-gray-900 font-medium">{schedule.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkingHours;
