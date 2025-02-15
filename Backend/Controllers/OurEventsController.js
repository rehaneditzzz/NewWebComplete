const OurEvent = require("../Models/OurEvents");

const getAllOurEvents = async (req, res) => {
  try {
    const ourevents = await OurEvent.find();
    res.status(200).json(ourevents);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Failed to fetch events." });
  }
};

const createOurEvent = async (req, res) => {
  try {
    const { title, date, time, description, location, organizer } = req.body;
    let imageUrl = null;

    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const ourNewEvent = new OurEvent({
      title,
      date,
      time,
      description,
      location,
      organizer,
      imageUrl,
    });

    await ourNewEvent.save();

    res.status(201).json({ message: "Event created successfully!", ourNewEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Failed to create event.", error });
  }
};

module.exports = { getAllOurEvents, createOurEvent };
