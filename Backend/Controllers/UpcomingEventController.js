const Event = require("../Models/UpcomingEvent");

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Failed to fetch events." });
  }
};

const createEvent = async (req, res) => {
  try {
    const { eventName, date, time, description } = req.body;
    let imagePath = null;

    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const newEvent = new Event({
      eventName,
      date,
      time,
      description,
      image: imagePath,
    });

    await newEvent.save();

    res.status(201).json({ message: "Event created successfully!", newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Failed to create event." });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
};
