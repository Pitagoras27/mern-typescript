import { RequestHandler, Response } from "express";
import Video from "./Video";

export const createVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(303).json({ message: "the url already exists!" });

    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (err) {
    console.log("error---->", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);

  if (!videoFound) return res.status(204).json();

  return res.json(videoFound);
};

export const deleteVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);

  if (!videoFound) return res.status(204).json();

  return res.status(200).json();
};

export const updateVideo: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!videoUpdated) return res.status(204).json();
  return res.json(videoUpdated);
};
