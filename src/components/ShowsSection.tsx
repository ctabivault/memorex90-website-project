import { Calendar } from "lucide-react";

const shows = [
  { date: "March 04 (Wednesday)", venue: "Eli's Hamden", time: "7pm-9pm" },
  { date: "March 06 (Friday)", venue: "Mindset Winery and Lounge Southington CT", time: "7pm-10pm" },
  { date: "March 11 (Wednesday)", venue: "Eli's Branford", time: "7pm-9pm" },
  { date: "March 28 (Saturday)", venue: "Coach Grill Wayland MA", time: "11:30am-2:30pm" },
  { date: "April 02 (Thursday)", venue: "Eli's Branford", time: "7pm-9pm" },
  { date: "April 04 (Saturday)", venue: "Burlington Marriott, Burlington, Mass", time: "7pm-10pm" },
  { date: "April 09 (Thursday)", venue: "Eli's Hamden", time: "7pm-9pm" },
  { date: "April 29 (Wednesday)", venue: "Eli's Hamden", time: "7pm-9pm" },
  { date: "May 09 (Saturday)", venue: "Bikes and Beers Stamford CT", time: "11am-2pm" },
  { date: "May 16 (Saturday)", venue: "Westerly Yacht Club", time: "" },
  { date: "May 23 (Saturday)", venue: "Indian Field Campground", time: "1pm-4pm" },
  { date: "June 06 (Saturday)", venue: "Wedding Sterling, CT", time: "" },
  { date: "June 14 (Sunday)", venue: "Goshen Stampede", time: "1:30pm-2:30pm" },
  { date: "July 10 (Friday)", venue: "Sam's Star Yacht Club Montauk, NY", time: "5:30pm-8:30pm" },
  { date: "July 16 (Thursday)", venue: "Harry Chapin Tribute Eisenhower Park", time: "" },
  { date: "August 05 (Wednesday)", venue: "Old Saybrook Town Green", time: "" },
  { date: "August 08 (Saturday)", venue: "Bikes and Beers - Newburyport MA", time: "11am-2pm" },
  { date: "August 15 (Saturday)", venue: "Music on Main Collinsville", time: "6pm-9pm" },
  { date: "September 05 (Saturday)", venue: "Sam Star Yacht Club, Montauk, NY", time: "" },
];

const ShowsSection = () => {
  return (
    <section id="shows" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
          Upcoming Shows
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-4 md:p-8">
            {shows.map((show, index) => (
              <div key={index} className="show-item flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <div className="flex items-center gap-2 md:w-1/3">
                  <Calendar size={16} className="text-primary shrink-0" />
                  <span className="font-display text-sm text-primary font-semibold">
                    {show.date}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <span className="font-display text-foreground text-sm font-medium">
                    {show.venue}
                  </span>
                  {show.time && (
                    <span className="text-muted-foreground text-xs ml-2">
                      {show.time}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
