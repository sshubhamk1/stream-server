import { Request, Response, RequestHandler } from "express";
import path from "path";
import fs from "fs";

export const getVideo: RequestHandler = async (req, res) => {
  try {
    let range = req.headers.range;
    if (!range) {
      range = "0";
    }
    const start = Number(range.replace(/\D/g, ""));
    const videoPath = path.join(
      __dirname + "../../../Engine/Videos/animato.mp4"
    );
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10 ** 5;
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const videoData = fs.createReadStream(videoPath, { start, end });
    const headers = {
      "Content-Range": `bytes ${start} - ${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-type": "video/mp4",
    };
    res.writeHead(206, headers);
    return videoData.pipe(res);
  } catch (e) {
    return res.status(500).json({ error: true, msg: String(e) });
  }
};
