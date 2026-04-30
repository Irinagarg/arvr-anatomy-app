let downloadCount = 0;

export async function GET() {
  downloadCount++;
  return Response.json({ downloads: downloadCount });
}