"use client";
import React, { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const events = [
  {
    id: 1,
    title: "Grill Festival",
    date: "2025-04-05",
    type: "Festival",
    location: "Yerevan",
    description: "A fun outdoor event with BBQ and meat tastings.",
  },
  {
    id: 2,
    title: "New Product Launch",
    date: "2025-04-10",
    type: "Launch",
    location: "Gyumri",
    description: "Try our new elite sausages and meet our team!",
  },
  {
    id: 3,
    title: "Market Demo",
    date: "2025-04-12",
    type: "Demo",
    location: "Vanadzor",
    description: "Live cooking and free samples at the central market.",
  },
];

type EventType = {
  id: number;
  title: string;
  date: string;
  type: string;
  location: string;
  description: string;
};

const uniqueTypes = [...new Set(events.map((e) => e.type))];
const uniqueLocations = [...new Set(events.map((e) => e.location))];

export default function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [filters, setFilters] = useState({ type: "", location: "" });

  const filteredEvents = events.filter(
    (e) =>
      (!filters.type || e.type === filters.type) &&
      (!filters.location || e.location === filters.location)
  );

  return (
    <div>
      <Header />
      <main className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800">
        {/* Left Filters */}
        <aside className="w-full md:w-64 p-4 border-b md:border-b-0 md:border-r bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Event Type</label>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              value={filters.type}
            >
              <option value="">All</option>
              {uniqueTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Location</label>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
              value={filters.location}
            >
              <option value="">All</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>

          {/* Horizontal Scrolling Calendar */}
          <div className="overflow-x-auto whitespace-nowrap mb-6 pb-2">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="inline-block w-48 p-4 m-2 bg-red-100 rounded-2xl cursor-pointer hover:bg-red-200"
                onMouseEnter={() => setSelectedEvent(event)}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="text-lg font-semibold">{event.title}</div>
                <div className="text-sm">{event.date}</div>
              </div>
            ))}
          </div>

          {/* Event Info */}
          {selectedEvent && (
            <div className="p-4 md:p-6 border rounded-xl bg-gray-100">
              <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
              <p className="text-sm mb-1">Date: {selectedEvent.date}</p>
              <p className="text-sm mb-1">Type: {selectedEvent.type}</p>
              <p className="text-sm mb-1">Location: {selectedEvent.location}</p>
              <p className="mt-2">{selectedEvent.description}</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
