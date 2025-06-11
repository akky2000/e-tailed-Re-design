
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const QuickStats = () => {
  return (
    <Card className="p-6 border-0 shadow-md bg-gradient-to-r from-blue-600 to-orange-500 text-white">
      <CardContent>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-semibold">Why Choose Us?</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Response Time</span>
            <span className="font-semibold">{"< 24 Hours"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Client Satisfaction</span>
            <span className="font-semibold">98%</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Projects Delivered</span>
            <span className="font-semibold">500+</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Years of Experience</span>
            <span className="font-semibold">5+</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStats;
