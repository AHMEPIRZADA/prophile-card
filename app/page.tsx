import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-[380px] rounded-3xl p-6 bg-white shadow-sm border border-gray-100">
        {/* Header: User Profile & Heart Icon */}
        <CardHeader className="p-0 flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
              alt="Joseph Anderson"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-base leading-tight">
                Joseph Anderson
              </h3>
              <p className="text-xs text-gray-400">Posted 2h ago</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl w-10 h-10 border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <Heart className="w-5 h-5 fill-gray-900 text-gray-900" />
          </Button>
        </CardHeader>

        {/* Content: Title, Description & Badges */}
        <CardContent className="p-0 space-y-3">
          <h2 className="text-xl font-semibold text-gray-900 leading-snug">
            Looking for SM manager to create posts across various platforms
          </h2>
          <p className="text-sm text-gray-400 line-clamp-1">
            We're seeking a skilled Social Media Manager to...
          </p>

          {/* Badges / Tags */}
          <div className="flex flex-wrap gap-2 pt-1 pb-4">
            <Badge variant="secondary" className="bg-blue-50 text-gray-700 hover:bg-blue-100 font-normal px-3 py-1 rounded-lg">
              SMM
            </Badge>
            <Badge variant="secondary" className="bg-blue-50 text-gray-700 hover:bg-blue-100 font-normal px-3 py-1 rounded-lg">
              Growth Strategy
            </Badge>
            <Badge variant="secondary" className="bg-blue-50 text-gray-700 hover:bg-blue-100 font-normal px-3 py-1 rounded-lg">
              Startup
            </Badge>
            <Badge variant="secondary" className="bg-blue-50 text-gray-700 hover:bg-blue-100 font-normal px-3 py-1 rounded-lg">
              Brand
            </Badge>
          </div>

          {/* Dashed Separator Line */}
          <div className="border-t border-dashed border-gray-200 my-2" />

          {/* Price */}
          <div className="pt-2">
            <p className="text-3xl font-bold text-gray-900">$150 – $200<span className="text-xl font-normal">/h</span></p>
            <p className="text-xs text-gray-400 mt-1">Hourly rate • 100% Remote</p>
          </div>
        </CardContent>

        {/* Footer: Apply Button */}
        <CardFooter className="p-0 pt-6">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 rounded-2xl text-lg flex items-center justify-center gap-2 shadow-md shadow-blue-200">
            <Zap className="w-5 h-5 fill-white" />
            Apply
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}