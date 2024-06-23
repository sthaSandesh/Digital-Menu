import uniqid from "uniqid";
import fs from "fs";

export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    // upload the file
    const file = data.get("file");

    const ext = file.name.split(".").slice(-1)[0];
    const newFileName = uniqid() + "." + ext.toLowerCase();

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const bucket = "food-ordering";
    if (!fs.existsSync(`./public/buckets/${bucket}`)) {
      fs.mkdirSync(`./public/buckets/${bucket}`, { recursive: true });
    }
    fs.writeFileSync(`./public/buckets/${bucket}/${newFileName}`, buffer);
    const link = `http://localhost:3000/buckets/${bucket}/${newFileName}`;
    return Response.json(link);
  }
  return Response.json(true);
}

